import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model'; // Ensure you have the correct path to Model

interface ModelCanvasProps {
  url: string;
  isActive: boolean;
}

const ModelCanvas: React.FC<ModelCanvasProps> = ({ url, isActive }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 10], fov: 50 }}
      style={{ height: '100%', width: '100%', margin: '0 auto' }} // Center canvas
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
      <Model url={url} isActive={isActive} />
    </Canvas>
  );
};

export default ModelCanvas;
