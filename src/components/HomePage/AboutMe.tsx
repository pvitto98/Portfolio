import React, { useState, useEffect } from 'react';
import styles from "./AboutMe.module.css";
import AboutMeModel from "./AboutMeModel"; // Import your 3D component
import { motion } from 'framer-motion';

export type AboutMeType = {
  className?: string;
};

const AboutMe: React.FC<AboutMeType> = ({ className = "" }) => {
  const [highlightedWord, setHighlightedWord] = useState<string>('creative');

  useEffect(() => {
    const words = ['creative', 'high-performing'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setHighlightedWord(words[index]);
    }, 4000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={[styles.aboutMeSection, className].join(" ")} id="about">
      <div className={styles.aboutMecontainer}>

        <h1 className={styles.title}><span>A</span>BOUT ME</h1>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>Hey there! My name's Vittorio and I am a <span className={`${styles.highlightedWord} ${highlightedWord === 'creative' ? styles.active : ''}`}>creative</span> web and mobile developer.</p>
            <p>Despite using modern frameworks, I like to take advantage of the new generation of AI-based technologies to bring my projects to the next level.
              This approach helps me build <span className={`${styles.highlightedWord} ${highlightedWord === 'high-performing' ? styles.active : ''}`}>high-performing</span> products that are not just functional—but look cool too.
            </p>
          </div>
          <div className={styles.model}>
            {/* <AboutMeModel highlightedWord={highlightedWord} /> */}
            <div className={styles.servizioimage}>
        <motion.img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="previews/me.png"
          initial={{ scale: 1.1, z: -50 }}
          whileHover={{ scale: 1.1 * 1.1, z: 50 }}
          animate={{
            // scale: isHovered ? 1.1 * 1.05 : 1.1,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
      </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutMe;
