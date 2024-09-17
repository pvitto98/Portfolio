import React, { useState, useEffect } from 'react';
import styles from "./AboutMe.module.css";
import Carousel3D from "./3DModel"; // Import your 3D component

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
      <b className={styles.title}><span>A</span>BOUT ME</b>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Hey there! My name's Vittorio and I am a <span className={`${styles.highlightedWord} ${highlightedWord === 'creative' ? styles.active : ''}`}>creative</span> web and mobile developer.</p>
            <p>Even if I use the latest frameworks, I like to take advantage of the new generation of AI tools to bring my projects to the next level.
              This approach helps me build <span className={`${styles.highlightedWord} ${highlightedWord === 'high-performing' ? styles.active : ''}`}>high-performing</span> products that are not just functional—but look cool too.
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
