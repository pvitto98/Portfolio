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

  useEffect(() => {
    if (highlightedWord === 'creative') {
      setCurrentModel('/light.glb');
    } else if (highlightedWord === 'high-performance' || highlightedWord === 'user-friendly') {
      setCurrentModel('/rocket.glb');
    }
  }, [highlightedWord]);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 10], fov: 50 }}
      style={{ height: '450px', width: '100%' }}
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
      <OrbitControls />

      {/* Plane */}
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#808080" />
      </mesh> */}

      <Model url={currentModel} position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Carousel3D;
