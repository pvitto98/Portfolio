import React, { useEffect, useState, memo, Profiler } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import HeroModel from './HeroModel';
import styles from './Hero.module.css';

interface HeroSection1Props {
  onLoaded: () => void;
}

const Hero: React.FC<HeroSection1Props> = memo(({ onLoaded }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentText, setCurrentText] = useState<'front-end' | 'mobile'>('front-end');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentText((prevText) => (prevText === 'front-end' ? 'mobile' : 'front-end'));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <Profiler id="Hero" onRender={(id, phase, actualDuration) => {
      console.log({ id, phase, actualDuration });
    }}>
    <div className={[styles.herosection].join(' ')} id="home">
      <Canvas style={{ position: 'absolute', height: '100svh', width: '100%' }}>
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.3} position={[0, 5, 5]} />
        <HeroModel onLoaded={onLoaded} viewMode={currentText} />
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
            <div className={styles.vittorio}>My name's </div>
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
            >
              <span onMouseEnter={() => setIsHovered(true)}   onMouseLeave={() => setIsHovered(false)} className={styles.redText}>{currentText}</span>
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
            <img className={styles.frameIcon} alt="" src="/icons/frame.svg" />
          </div>
        </motion.div>
      </motion.div>
    </div>
    </Profiler>

  );
});

export default Hero;
