import React, { useEffect, useState } from 'react';
import ModelCanvas from './ModelCanvas'; // Ensure you have the correct path to ModelCanvas

interface ModelRotatorProps {
  highlightedWord: string;
}

const ModelRotator: React.FC<ModelRotatorProps> = ({ highlightedWord }) => {
  const [activeModel, setActiveModel] = useState<'smartphone' | 'display'>('smartphone');

  useEffect(() => {
    if (highlightedWord === 'mobile') {
      setActiveModel('smartphone');
    } else if (highlightedWord === 'front-end') {
      setActiveModel('display');
    }
  }, [highlightedWord]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '450px' }}>
      <ModelCanvas 
        key="smartphone" 
        url="/mobile_hero.glb" 
        isActive={activeModel === 'smartphone'} 
      />
      <ModelCanvas 
        key="display" 
        url="/desktop_hero.glb" 
        isActive={activeModel === 'display'} 
      />
    </div>
  );
};

export default ModelRotator;
