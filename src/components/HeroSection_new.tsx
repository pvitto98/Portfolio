import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import ModelRotator from './ModelRotator';
import styles from './HeroSection_new.module.css';

interface HeroSection1Props {
  onLoaded: () => void; // Define the type for the onLoaded prop
}

const HeroSection1: React.FC<HeroSection1Props> = ({ onLoaded }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentText, setCurrentText] = useState('front-end');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentText((prevText) => (prevText === 'front-end' ? 'mobile' : 'front-end'));
      }, 3000); // Switch every 3 seconds
      return () => clearInterval(interval); // Clean up on unmount
    }
  }, [isHovered]);

  return (
    <div className={styles.herosection} id="home">
            <ModelRotator highlightedWord={currentText} />

      <motion.div className={styles.hero} style={{ zIndex: 2 }}>

        <motion.div
          className={styles.herocontent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }} // Delayed by 1s
        >
          <div className={styles.helloMyNames}></div>
        </motion.div>
        <motion.div
          className={styles.herocontent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }} // Delayed by 1.5s
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
              onMouseEnter={() => setIsHovered(true)}  // Stop alternation on hover
              onMouseLeave={() => setIsHovered(false)} // Resume alternation on hover leave
            >
              <span className={styles.redText}>{currentText}</span>
              <span className={styles.whiteText}> developer</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.herocontent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }} // Delayed by 2s
        >
          {/* Your other content */}
        </motion.div>
      </motion.div>

      {/* Model Rotator Component */}
      {/* Animated Scroll Down Indicator */}
      <motion.div
        className={styles.scrolldown}
        style={{ zIndex: 2 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }} // Delayed by 2.5s
      >
        {/* Animated Scroll Down Indicator */}
      </motion.div>
    </div>
  );
};

export default HeroSection1;
