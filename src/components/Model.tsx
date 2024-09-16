import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  url: string;
  isActive: boolean; // Determines if the model should be active or turned off
}

function Model({ url, isActive }: ModelProps) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (ref.current && isActive) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      castShadow
      receiveShadow
      scale={[3, 3, 3]} // Adjust scale if needed
      material={isActive ? undefined : new THREE.MeshStandardMaterial({ color: 'gray' })}
    />
  );
}

export default Model;
