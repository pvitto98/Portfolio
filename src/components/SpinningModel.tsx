import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect, useRef, useState } from 'react';

const SpinningModel: React.FC = () => {
  const [models, setModels] = useState<{ model: THREE.Group; speed: number; direction: THREE.Vector2 }[]>([]);
  const modelRefs = useRef<THREE.Group[]>([]);

  // Movement parameters
  const amplitude = 4;  // Adjust the height of the bounce
  const frequency = 0.5;  // Adjust the speed of the bounce
  const bounds = { x: 8, y: 5 };  // Define the bounds for the display
  const collisionDistance = 3; // Threshold distance to detect collisions

  useEffect(() => {
    const loader = new GLTFLoader();

    // Load a model from the path and return a promise
    const loadModel = (path: string) => {
      return new Promise<THREE.Group>((resolve, reject) => {
        loader.load(
          path,
          (gltf) => {
            const loadedModel = gltf.scene;
            loadedModel.scale.set(6, 6, 6); // Adjust scale factor as needed
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
        // Paths for the models
        const desktopPath = '/desktop.glb';
        const mobilePath = '/mobile.glb';

        // Create an array to hold the paths
        const paths = [desktopPath, mobilePath];

        // Load models based on the paths
        const modelInstances = await Promise.all(paths.map(loadModel));

        // Assign random speeds and directions to each model
        const modelsWithSpeedAndDirection = modelInstances.map(model => ({
          model,
          speed: Math.random() * 2 + 1,  // Random speed between 1 and 3
          direction: new THREE.Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize()  // Random direction vector
        }));

        setModels(modelsWithSpeedAndDirection);
      } catch (error) {
        console.error('Error loading models:', error);
      }
    };

    initializeModels();
  }, []);

  useFrame((state, delta) => {
    modelRefs.current.forEach((modelRef, index) => {
      const modelData = models[index];
      if (modelRef && modelData) {
        const { model, speed, direction } = modelData;

        // Spin the model
        model.rotation.y += 0.01;  // Rotate the model on the y-axis

        // Bounce the model
        const time = state.clock.getElapsedTime();
        const bounceY = amplitude * Math.sin(frequency * time + index);  // Offset bounce for each model
        model.position.y = bounceY;

        // Move the model horizontally and vertically
        model.position.x += direction.x * speed * delta;
        model.position.y += direction.y * speed * delta;

        // Bounce off the horizontal walls
        if (model.position.x > bounds.x || model.position.x < -bounds.x) {
          model.position.x = Math.max(-bounds.x, Math.min(bounds.x, model.position.x)); // Clamp position
          direction.x = -direction.x;  // Reverse the horizontal direction for this model
        }

        // Bounce off the vertical walls
        if (model.position.y > bounds.y || model.position.y < -bounds.y) {
          model.position.y = Math.max(-bounds.y, Math.min(bounds.y, model.position.y)); // Clamp position
          direction.y = -direction.y;  // Reverse the vertical direction for this model
        }

        // Check for collisions with other models
        for (let i = 0; i < modelRefs.current.length; i++) {
          if (i !== index) {
            const otherModelRef = modelRefs.current[i];
            const distance = model.position.distanceTo(otherModelRef.position);
            if (distance < collisionDistance) {
              // Reverse direction of both models to simulate a bounce
              direction.x = -direction.x;
              direction.y = -direction.y;
              const otherModelData = models[i];
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
          position={[Math.random() * 2 * bounds.x - bounds.x, Math.random() * 2 * bounds.y - bounds.y, 0]} // Random initial positions
        />
      ))}
    </>
  );
};

export default SpinningModel;
