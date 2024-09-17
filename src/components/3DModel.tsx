import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Load the 3D model
function Model({ url, position }: { url: string; position: [number, number, number] }) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      object={scene}
      position={position}
      ref={ref}
      castShadow
      receiveShadow
    />
  );
}

const Carousel3D: React.FC<{ highlightedWord: string }> = ({ highlightedWord }) => {
  const [currentModel, setCurrentModel] = useState<string>('/rocket.glb');
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    let newModel = '/rocket.glb'; // Default model

    if (highlightedWord === 'creative') {
      newModel = '/light.glb';
    } else if (highlightedWord === 'high-performing') {
      newModel = '/rocket2.glb';
    }

    setCurrentModel(newModel);
    setKey((prevKey) => prevKey + 1); // Force a re-render with a new key

  }, [highlightedWord]);

  const isMobile = window.innerWidth <= 1024;

  return (
    <Canvas
      key={key} // This forces the Canvas to re-render
      shadows
      camera={{ position: [0, 2, 10], fov: 50 }}
      style={{ height: isMobile? '250px': '450px', width: '100%' }}
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
        enableZoom={false} // Disable zoom
        enablePan={false} // Disable panning
        maxPolarAngle={Math.PI / 2} // Optional: Limit vertical rotation to horizontal plane
        minPolarAngle={Math.PI / 2} // Optional: Limit vertical rotation to horizontal plane
      />
      <Model url={currentModel} position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Carousel3D;
