import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect, useRef, useState, memo } from 'react';

interface SpinningModelProps {
  onLoaded: () => void;
  viewMode: 'front-end' | 'mobile';
}

const SpinningModel: React.FC<SpinningModelProps> = memo(({ onLoaded, viewMode }) => {
  const [models, setModels] = useState<{ model: THREE.Group; speed: number; direction: THREE.Vector2 }[]>([]);
  const modelRefs = useRef<THREE.Group[]>([]);
  const [previousModelState, setPreviousModelState] = useState<{ position: THREE.Vector3; direction: THREE.Vector2; speed: number } | null>(null);

  const bounds = viewMode === 'mobile' ? { x: 3, y: 4 } : { x: 8, y: 5 };

  useEffect(() => {
    const loader = new GLTFLoader();

    const loadModel = (path: string) => {
      return new Promise<THREE.Group>((resolve, reject) => {
        loader.load(
          path,
          (gltf) => {
            const loadedModel = gltf.scene;
            const scale = viewMode === 'mobile' ? 3 : 4; // Adjusted scale for desktop model
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
        const desktopPath = '/desktop_hero.glb';
        const mobilePath = '/mobile_hero.glb';

        const path = viewMode === 'mobile' ? mobilePath : desktopPath;
        const modelInstance = await loadModel(path);

        // Set initial state for new model
        const initialState = previousModelState || {
          position: modelInstance.position.clone(),
          direction: new THREE.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize(),
          speed: viewMode === 'mobile' ? Math.random() * 5 : Math.random() * 2 + 1,
        };

        modelInstance.position.copy(initialState.position);
        modelInstance.userData = { direction: initialState.direction, speed: initialState.speed };

        setModels([{
          model: modelInstance,
          speed: initialState.speed,
          direction: initialState.direction,
        }]);

        // Update previous model state
        setPreviousModelState({
          position: modelInstance.position.clone(),
          direction: initialState.direction.clone(),
          speed: initialState.speed,
        });

        onLoaded();
      } catch (error) {
        console.error('Error loading models:', error);
      }
    };

    initializeModels();
  }, [viewMode, onLoaded]);

  useFrame((state, delta) => {
    modelRefs.current.forEach((modelRef, index) => {
      const modelData = models[index];
      if (modelRef && modelData) {
        const { model, speed, direction } = modelData;

        model.rotation.y += 0.01;

        model.position.x += direction.x * speed * delta;
        model.position.y += direction.y * speed * delta;

        if (model.position.x > bounds.x || model.position.x < -bounds.x) {
          model.position.x = Math.max(-bounds.x, Math.min(bounds.x, model.position.x));
          direction.x = -direction.x;
        }

        if (model.position.y > bounds.y || model.position.y < -bounds.y) {
          model.position.y = Math.max(-bounds.y, Math.min(bounds.y, model.position.y));
          direction.y = -direction.y;
        }

        // Update previous model state
        setPreviousModelState({
          position: model.position.clone(),
          direction: direction.clone(),
          speed: speed,
        });
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

export default SpinningModel;
