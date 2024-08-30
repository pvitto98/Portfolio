// HeroSection1.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion'; // Import framer-motion
import SpinningModel from './SpinningModel'; // Import your model component
import styles from './HeroSection1.module.css';
import NavigationBar1 from './NavigationBar1';

const HeroSection1 = ({ className = '' }) => {
  return (
    <div className={[styles.herosection, className].join(' ')}>
      <Canvas style={{ position: 'absolute', height: '100svh', width: '100%' }}>
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.3} position={[0, 5, 5]} />
        <SpinningModel />
      </Canvas>
      <div
        className="blurLayer"
        style={{
          position: 'absolute',
          height: '100svh',
          width: '100%',
          backdropFilter: 'blur(4px)', // Adjusted blur intensity
          zIndex: 0, // Ensure it's on top of the Canvas but behind other content
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 70%)', // Radial gradient for darker center
            zIndex: 1,
          }}
        ></div>
      </div>
      {/* Animated Navigation Bar */}
      {/* <motion.div
        className={styles.navigationbar}
        style={{ zIndex: 2 }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }} // Delayed by 0.5s
      >
        <div className={styles.pvitto98Wrapper}>
          <div className={styles.project}>PVITTO</div>
        </div>
        <div className={styles.links}>
          <div className={styles.project}>Projects</div>
          <div className={styles.project}>Skills</div>
          <div className={styles.project}>Experience</div>
          <b className={styles.project}>Contact</b>
        </div>
      </motion.div> */}
      {/* Animated Hero Content */}
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