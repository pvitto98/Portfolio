// LoadingPage.tsx
import React, { useEffect } from 'react';
import styles from './LoadingPage.module.css'; // Create corresponding CSS module

interface LoadingPageProps {
  onLoaded: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoaded }) => {
  useEffect(() => {
    // Simulate loading process and call onLoaded when done
    const timer = setTimeout(() => {
      onLoaded();
    }, 3000); // Simulate a 3-second loading time

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={styles.loadingPage}>
      <div className={styles.logo}>PVITTO</div>
    </div>
  );
};

export default LoadingPage;
