import React, { useEffect, useState, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import SpinningModel from './SpinningModel';
import styles from './HeroSection1.module.css';

interface HeroSection1Props {
  onLoaded: () => void;
}

const HeroSection1: React.FC<HeroSection1Props> = memo(({ onLoaded }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentText, setCurrentText] = useState<'front-end' | 'mobile'>('front-end');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentText((prevText) => (prevText === 'front-end' ? 'mobile' : 'front-end'));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className={[styles.herosection].join(' ')} id="home">
      <Canvas style={{ position: 'absolute', height: '100svh', width: '100%' }}>
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.3} position={[0, 5, 5]} />
        <SpinningModel onLoaded={onLoaded} viewMode={currentText} />
      </Canvas>
      <div className={styles.gradientLayer}></div>
      <motion.div className={styles.hero} style={{ zIndex: 2 }}>
        <motion.div
          className={styles.herocontent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className={styles.vittorioPellittieri}>
            <div className={styles.vittorio}>Hello, my name's </div>
            <div
              className={`${styles.vittorio2} ${isCollapsed ? styles.collapsed : styles.expanded}`}
              onMouseEnter={() => setIsCollapsed(false)}
              onMouseLeave={() => setIsCollapsed(true)}
            >
              <span className={styles.redV}></span>
              <span className={styles.whiteP}></span>
            </div>

            <div className={styles.vittorio}>and I'm a</div>
            <div
              className={styles.frontEndMobileWrapper}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className={styles.redText}>{currentText}</span>
              <span className={styles.whiteText}> developer</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.scrolldown}
        style={{ zIndex: 2 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
      >
        <motion.div
          className={styles.autoLayoutVertical}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          <div className={styles.autoLayoutHorizontal}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default HeroSection1;
