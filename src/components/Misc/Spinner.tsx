// Spinner.tsx
import React, { useEffect } from 'react';
import styles from './Spinner.module.css'; // Create corresponding CSS module

interface LoadingPageProps {
  onLoaded: () => void;
}

const Spinner: React.FC<LoadingPageProps> = ({ onLoaded }) => {
  useEffect(() => {
    // Simulate loading process and call onLoaded when done
    const timer = setTimeout(() => {
      onLoaded();
    }, 3000); // Simulate a 3-second loading time

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={styles.loadingPage}>
      <img className={styles.logo} src='/icons/Logo.svg'/>
    </div>
  );
};

export default Spinner;
