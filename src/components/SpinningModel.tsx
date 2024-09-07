import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect, useRef, useState } from 'react';

interface SpinningModelProps {
  onLoaded: () => void; // Add onLoaded prop
}

const SpinningModel: React.FC<SpinningModelProps> = ({ onLoaded }) => {
  const [models, setModels] = useState<{ model: THREE.Group; speed: number; direction: THREE.Vector2; boundingVolume: THREE.Mesh }[]>([]);
  const modelRefs = useRef<THREE.Group[]>([]);

  const isMobile = window.innerWidth <= 768;
  const amplitude = 4;
  const frequency = isMobile ? 0.1 : 0.5;
  const bounds = isMobile ? { x: 3, y: 4 } : { x: 8, y: 5 };
  const collisionDistance = 5;

  useEffect(() => {
    const loader = new GLTFLoader();

    const loadModel = (path: string) => {
      return new Promise<THREE.Group>((resolve, reject) => {
        loader.load(
          path,
          (gltf) => {
            const loadedModel = gltf.scene;
            const scale = isMobile ? 3 : 6;
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

    const createBoundingVolume = (model: THREE.Group) => {
      const box = new THREE.Box3().setFromObject(model); // Calculate the bounding box of the model
      const boxSize = new THREE.Vector3();
      box.getSize(boxSize);

      // Create a bounding cylinder that wraps the model entirely
      const geometry = new THREE.CylinderGeometry(boxSize.x / 10, boxSize.x / 10, boxSize.y, 6);
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
      const cylinder = new THREE.Mesh(geometry, material);
      cylinder.visible = false;

      // Position the cylinder so that its base aligns with the bottom of the model
      cylinder.position.set(0, boxSize.y / 5, 0);

      return cylinder;
    };

    const initializeModels = async () => {
      try {
        const desktopPath = '/desktop.glb';
        const mobilePath = '/mobile.glb';

        const paths = [desktopPath, mobilePath];

        const modelInstances = await Promise.all(paths.map(loadModel));

        const modelsWithBoundingVolumes = modelInstances.map(model => {
          const boundingVolume = createBoundingVolume(model);
          model.add(boundingVolume); // Attach the bounding volume to the model

          return {
            model,
            speed: isMobile? Math.random()%5 : Math.random() * 2 + 1,
            direction: new THREE.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize(),
            boundingVolume
          };
        });

        setModels(modelsWithBoundingVolumes);
        onLoaded(); // Notify that the models are fully loaded

      } catch (error) {
        console.error('Error loading models:', error);
      }
    };

    initializeModels();
  }, [onLoaded]);

  useFrame((state, delta) => {
    modelRefs.current.forEach((modelRef, index) => {
      const modelData = models[index];
      if (modelRef && modelData) {
        const { model, speed, direction } = modelData;

        model.rotation.y += 0.01;

        const time = state.clock.getElapsedTime();
        const bounceY = amplitude * Math.sin(frequency * time + index);
        model.position.y = bounceY;

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

        // Updated collision detection using bounding volumes
        for (let i = 0; i < modelRefs.current.length; i++) {
          if (i !== index) {
            const otherModelData = models[i];
            const distance = model.position.distanceTo(otherModelData.model.position);

            // Use a simple bounding cylinder collision detection
            if (distance < collisionDistance) {
              direction.x = -direction.x;
              direction.y = -direction.y;
              otherModelData.direction.x = -otherModelData.direction.x;
              otherModelData.direction.y = -otherModelData.direction.y;
            }
          }
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
          position={[Math.random() * 2 * bounds.x - bounds.x, Math.random() * 2 * bounds.y - bounds.y, 0]}
        />
      ))}
    </>
  );
};

export default SpinningModel;
