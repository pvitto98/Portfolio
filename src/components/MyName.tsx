import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const MyName: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!); // Use non-null assertion to indicate that it will not be null
  const [hovered, setHovered] = useState(false);

  // Load the GLTF model
  const { scene } = useLoader(GLTFLoader, '/myname3d.glb');

  useFrame(({ mouse }) => {
    if (groupRef.current) {
      // Apply tilt effect based on mouse position
      const { x, y } = mouse;
      groupRef.current.rotation.y = x * Math.PI; // Rotate around Y-axis
      groupRef.current.rotation.x = -y * Math.PI; // Rotate around X-axis
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1} // Slightly scale up when hovered
      position={[0, 0, 0]} // Center the model
    >
      <primitive object={scene} />
    </group>
  );
};

export default MyName;
