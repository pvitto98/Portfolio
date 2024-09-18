import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect, useRef, useState, memo } from 'react';

interface HeroModelProps {
  onLoaded: () => void;
  viewMode: 'front-end' | 'mobile';
}

const HeroModel: React.FC<HeroModelProps> = memo(({ onLoaded, viewMode }) => {
  const [models, setModels] = useState<{ model: THREE.Group; speed: number; direction: THREE.Vector2 }[]>([]);
  const modelRefs = useRef<THREE.Group[]>([]);
  const [previousModelSide, setPreviousModelSide] = useState<'top' | 'right' | 'bottom' | 'left' | null>(null);

  // Adjust bounds, scale, and speed based on screen size
  const getBounds = () => {
    const width = window.innerWidth;
    if (width < 450) {
      return { x: 3, y: 3 };
    } else if (width < 760) {
      return { x: 10, y: 6 };
    }     else if (width < 1024) {
      return { x: 7, y: 6 };

    }
    
    else {
      return { x: 10, y: 7 };

    }
  };

  const getScale = () => {
    const width = window.innerWidth;
    if (width < 450) {
      return 1.2;
    } else if (width < 769) {
      return 2;
    } else {
      return 2;
    }
  };

  const getSpeed = () => {
    const width = window.innerWidth;
    if (width < 450) {
      return Math.random() * 3 + 0.5; // Speed between 1 and 4
    } else if (width < 760) {
      return Math.random() * 4 + 1; // Speed between 2 and 6
    } else {
      return Math.random() * 5 + 3; // Speed between 3 and 8
    }
  };

  const bounds = getBounds();
  const scale = getScale();
  const speed = getSpeed();
  const center = new THREE.Vector3(0, 0, 0); // Center point of the scene

  const loadModel = (path: string) => {
    return new Promise<THREE.Group>((resolve, reject) => {
      const loader = new GLTFLoader();
      loader.load(
        path,
        (gltf) => {
          const loadedModel = gltf.scene;
          loadedModel.scale.set(scale, scale, scale); // Apply scale here
          resolve(loadedModel);
        },
        undefined,
        (error) => {
          reject(error);
        }
      );
    });
  };

  const getNextEntrySide = () => {
    const sides = ['top', 'right', 'bottom', 'left'] as const;
    const currentIndex = previousModelSide ? sides.indexOf(previousModelSide) : -1;
    const nextIndex = (currentIndex + 1) % sides.length;
    return sides[nextIndex];
  };

  const initializeModels = async () => {
    try {
      const desktopPath = '/3DModels/desktop_hero.glb';
      const mobilePath = '/3DModels/mobile_hero.glb';

      const path = viewMode === 'mobile' ? mobilePath : desktopPath;
      const modelInstance = await loadModel(path);

      const entrySide = getNextEntrySide();
      const initialPosition = new THREE.Vector3();
      const direction = new THREE.Vector2();

      // Initialize position and direction based on entry side
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

      modelInstance.position.copy(initialPosition);
      modelInstance.userData = { direction, speed };

      setModels([{
        model: modelInstance,
        speed,
        direction,
      }]);

      setPreviousModelSide(entrySide);

      onLoaded();
    } catch (error) {
      console.error('Error loading models:', error);
    }
  };

  useEffect(() => {
    initializeModels();
  }, [viewMode, onLoaded]);

  useFrame((state, delta) => {
    modelRefs.current.forEach((modelRef, index) => {
      const modelData = models[index];
      if (modelRef && modelData) {
        const { model, speed, direction } = modelData;


        model.rotation.y += 0.01;

        // Move the model towards the center
        model.position.x += direction.x * speed * delta;
        model.position.y += direction.y * speed * delta;

        // Stop the model when it reaches the center
        if (Math.abs(model.position.x - center.x) < 0.1 && Math.abs(model.position.y - center.y) < 0.1) {
          model.position.set(center.x, center.y, center.z);
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
          ref={(el: THREE.Group<THREE.Object3DEventMap>) => modelRefs.current[index] = el}
          position={modelData.model.position.toArray()}
        />
      ))}
    </>
  );
});

export default HeroModel;
