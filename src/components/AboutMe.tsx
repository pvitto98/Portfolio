import React, { useState, useEffect } from 'react';
import styles from "./AboutMe.module.css";
import Carousel3D from "./3DModel"; // Import your 3D component

export type AboutMeType = {
  className?: string;
};

const AboutMe: React.FC<AboutMeType> = ({ className = "" }) => {
  const [highlightedWord, setHighlightedWord] = useState<string>('creative');

  useEffect(() => {
    const words = ['creative', 'high-performance'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setHighlightedWord(words[index]);
    }, 4000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={[styles.aboutMeSection, className].join(" ")} id="about">
      <b className={styles.title}>ABOUT ME</b>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Hey there! I’m Vittorio, a <span className={`${styles.highlightedWord} ${highlightedWord === 'creative' ? styles.active : ''}`}>creative</span> web and mobile developer based in Turin.</p>
          {/* <p>
            I’m all about putting people first when building intuitive, <span className={`${styles.highlightedWord} ${highlightedWord === 'user-friendly' ? styles.active : ''}`}>user-friendly</span> apps. 
            </p> */}
            <p>My approach integrates modern frameworks and leverages the latest emerging
            tools to create <span className={`${styles.highlightedWord} ${highlightedWord === 'high-performance' ? styles.active : ''}`}>high-performance</span> products that don’t just work well—but look
            stunning too.
          </p>
        </div>
        <div className={styles.model}>
          <Carousel3D highlightedWord={highlightedWord} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
