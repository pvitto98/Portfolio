import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect, useRef, useState, memo } from 'react';

interface HeroModelProps {
  onLoaded: () => void;
  viewMode: 'front-end' | 'mobile';
}

const HeroModel: React.FC<HeroModelProps> = memo(({ onLoaded, viewMode }) => {
  const [models, setModels] = useState<{ model: THREE.Group; speed: number; direction: THREE.Vector2; visible: boolean }[]>([]);
  const modelRefs = useRef<THREE.Group[]>([]);
  const [previousModelSide, setPreviousModelSide] = useState<'top' | 'right' | 'bottom' | 'left' | null>(null);

  const modelCache = useRef<{ desktop: THREE.Group | null; mobile: THREE.Group | null }>({ desktop: null, mobile: null });

  const getBounds = () => {
    const width = window.innerWidth;
    if (width < 450) return { x: 3, y: 3 };
    if (width < 760) return { x: 10, y: 6 };
    if (width < 1024) return { x: 7, y: 6 };
    return { x: 10, y: 7 };
  };

  const getScale = () => {
    const width = window.innerWidth;
    return width < 450 ? 1.2 : 2;
  };

  const getSpeed = () => {
    const width = window.innerWidth;
    if (width < 450) return Math.random() * 3 + 1; // Speed between 1 and 4
    if (width < 760) return Math.random() * 4 + 1; // Speed between 2 and 6
    return Math.random() * 5 + 3; // Speed between 3 and 8
  };

  const bounds = getBounds();
  const scale = getScale();
  const center = new THREE.Vector3(0, 0, 0);

  const loadModel = async (path: string): Promise<THREE.Group> => {
    return new Promise<THREE.Group>((resolve, reject) => {
      const loader = new GLTFLoader();
      loader.load(
        path,
        (gltf) => {
          const loadedModel = gltf.scene;
          loadedModel.scale.set(scale, scale, scale);
          resolve(loadedModel);
        },
        undefined,
        (error) => {
          reject(error);
        }
      );
    });
  };

  const initializeModels = async () => {
    try {
      const desktopPath = '/3DModels/desktop_hero.glb';
      const mobilePath = '/3DModels/mobile_hero.glb';

      if (!modelCache.current.desktop) {
        modelCache.current.desktop = await loadModel(desktopPath);
      }
      if (!modelCache.current.mobile) {
        modelCache.current.mobile = await loadModel(mobilePath);
      }

      const desktopModel = modelCache.current.desktop!;
      const mobileModel = modelCache.current.mobile!;

      const entrySide = getNextEntrySide();
      const initialPosition = new THREE.Vector3();
      const direction = new THREE.Vector2();

      switch (entrySide) {
        case 'top':
          initialPosition.set(0, bounds.y + 1, 0);
          direction.set(0, -1).normalize();
          break;
        case 'right':
          initialPosition.set(bounds.x + 1, 0, 0);
          direction.set(-1, 0).normalize();
          break;
        case 'bottom':
          initialPosition.set(0, -bounds.y - 1, 0);
          direction.set(0, 1).normalize();
          break;
        case 'left':
          initialPosition.set(-bounds.x - 1, 0, 0);
          direction.set(1, 0).normalize();
          break;
      }

      desktopModel.position.copy(initialPosition);
      desktopModel.userData = { direction, speed: getSpeed() };

      mobileModel.position.copy(initialPosition);
      mobileModel.userData = { direction, speed: getSpeed() };

      // Set visibility based on viewMode
      const desktopVisible = viewMode === 'front-end';
      const mobileVisible = viewMode === 'mobile';

      setModels([
        {
          model: desktopModel,
          speed: desktopModel.userData.speed,
          direction,
          visible: desktopVisible,
        },
        {
          model: mobileModel,
          speed: mobileModel.userData.speed,
          direction,
          visible: mobileVisible,
        },
      ]);

      setPreviousModelSide(entrySide);
      onLoaded();
    } catch (error) {
      console.error('Error loading models:', error);
    }
  };

  useEffect(() => {
    initializeModels();

    // Log visibility and position whenever viewMode changes
    // models.forEach((modelData, index) => {
    //   console.log(`Model ${index} - Visible: ${modelData.visible}, Position: ${modelData.model.position.toArray()}`);
    // });
  }, [viewMode, onLoaded]);

  const getNextEntrySide = () => {
    const sides = ['top', 'right', 'bottom', 'left'] as const;
    const currentIndex = previousModelSide ? sides.indexOf(previousModelSide) : -1;
    const nextIndex = (currentIndex + 1) % sides.length;
    return sides[nextIndex];
  };

  useEffect(() => {
    initializeModels();
  }, [viewMode, onLoaded]);

  useFrame((state, delta) => {
    modelRefs.current.forEach((modelRef, index) => {
      const modelData = models[index];
      if (modelRef && modelData && modelData.visible) {
        const { model, speed, direction } = modelData;

        model.rotation.y += 0.01;

        // Calculate distance to the center
        const distanceToCenter = model.position.distanceTo(center);
        const slowingFactor = Math.max(0.1, distanceToCenter / 5);

        model.position.x += direction.x * speed * delta * slowingFactor;
        model.position.y += direction.y * speed * delta * slowingFactor;

        if (distanceToCenter < 0.1) {
          model.position.lerp(center, 0.1);
          direction.set(0, 0); // Stop the model
        }

        // Boundary checks
        if (model.position.x > bounds.x || model.position.x < -bounds.x) {
          model.position.x = Math.max(-bounds.x, Math.min(bounds.x, model.position.x));
          direction.x = -direction.x;
        }

        if (model.position.y > bounds.y || model.position.y < -bounds.y) {
          model.position.y = Math.max(-bounds.y, Math.min(bounds.y, model.position.y));
          direction.y = -direction.y;
        }
      }
    });
  });

  return (
    <>
      {models.map((modelData, index) => (
        <primitive
          key={index}
          object={modelData.model}
          ref={(el: THREE.Group) => (modelRefs.current[index] = el)}
          position={modelData.model.position.toArray()}
          visible={modelData.visible} // Toggle visibility
        />
      ))}
    </>
  );
});

export default HeroModel;
