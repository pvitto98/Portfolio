import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Cache for storing preloaded models
const modelCache: Record<string, any> = {};

// Preload models
function usePreloadModels(modelUrls: string[]) {
  useEffect(() => {
    modelUrls.forEach((url) => {
      if (!modelCache[url]) {
        useGLTF.preload(url); // Preload model
      }
    });
  }, [modelUrls]);
}

// Load the 3D model, fetching from cache if available
function Model({ url, visible, position }: { url: string; visible: boolean; position: [number, number, number] }) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (ref.current && visible) {
      ref.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    modelCache[url] = scene; // Store in cache
  }, [url, scene]);

  return visible ? (
    <primitive
      object={modelCache[url] || scene}
      position={position}
      ref={ref}
      castShadow
      receiveShadow
    />
  ) : null; // Return null if the model shouldn't be visible
}

const AboutMeModel: React.FC<{ highlightedWord: string }> = ({ highlightedWord }) => {
  const [currentModel, setCurrentModel] = useState<string>('/3DModels/rocket2.glb');
  const [modelsVisible, setModelsVisible] = useState({
    rocket: false,
    light: false
  });

  usePreloadModels(['/3DModels/rocket2.glb', '/3DModels/light.glb']); // Preload models

  useEffect(() => {
    const visibility = {
      rocket: highlightedWord === 'high-performing',
      light: highlightedWord === 'creative',
    };

    setModelsVisible(visibility);
  }, [highlightedWord]);

  const isMobile = window.innerWidth <= 1024;

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 10], fov: 50 }}
      style={{ height: isMobile ? '250px' : '450px', width: isMobile ? '200px' : '100%' }}
    >
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[5, 10, 10]} 
        angle={0.3} 
        penumbra={1} 
        castShadow 
      />
      <directionalLight 
        position={[-5, 5, 5]} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
        shadow-camera-far={20} 
        shadow-camera-left={-10} 
        shadow-camera-right={10} 
        shadow-camera-top={10} 
        shadow-camera-bottom={-10} 
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Model url="/3DModels/rocket2.glb" position={[0, 0, 0]} visible={modelsVisible.rocket} />
      <Model url="/3DModels/light.glb" position={[0, 0, 0]} visible={modelsVisible.light} />
    </Canvas>
  );
};

export default AboutMeModel;
