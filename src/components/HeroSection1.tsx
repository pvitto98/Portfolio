// HeroSection1.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion'; // Import framer-motion
import SpinningModel from './SpinningModel'; // Import your model component
import styles from './HeroSection1.module.css';

const HeroSection1 = ({ className = '' }) => {
  return (
    <div className={[styles.herosection, className].join(' ')} id="home">
      <Canvas style={{ position: 'absolute', height: '100svh', width: '100%' }}>
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.3} position={[0, 5, 5]} />
        <SpinningModel />
      </Canvas>
      <div
          className={styles.gradientLayer} // Use a CSS class for the gradient
        ></div>
      <motion.div className={styles.hero} style={{ zIndex: 2 }}>
        <motion.div
          className={styles.herocontent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }} // Delayed by 1s
        >
          <div className={styles.helloMyNames}>Hello, my name is</div>
        </motion.div>
        <motion.div
          className={styles.herocontent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }} // Delayed by 1.5s
        >
          <div className={styles.vittorioPellittieri}>
            <p className={styles.vittorio}>Vittorio</p>
            <p className={styles.vittorio}>Pellittieri</p>
          </div>
        </motion.div>
        <motion.div
          className={styles.herocontent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }} // Delayed by 2s
        >
          <div className={styles.andIAmContainer}>
            <span className={styles.andIAm}>{`and I am a `}</span>
            <span>{`Front-end `}</span>
            <span className={styles.and}>and</span>
            <span> Mobile Engineer</span>
          </div>
        </motion.div>
      </motion.div>
      {/* Animated Scroll Down Indicator */}
      <motion.div
        className={styles.scrolldown}
        style={{ zIndex: 2 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }} // Delayed by 2.5s
      >
{/* Animated Scroll Down Indicator */}
<motion.div
        className={styles.scrolldown}
        style={{ zIndex: 2 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }} // Delayed by 2.5s
      >
        <motion.div
          className={styles.autoLayoutVertical}
          animate={{ y: [0, 10, 0] }} // Move down and up
          transition={{
            duration: 1.5,
            repeat: Infinity, // Infinite loop
            repeatType: 'mirror', // Ping-pong between start and end
            ease: 'easeInOut',
          }}
        >
          <div className={styles.autoLayoutHorizontal}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
        </motion.div>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection1;