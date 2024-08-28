import { FunctionComponent } from "react";
import styles from "./HeroSection1.module.css";

export type HeroSection1Type = {
  className?: string;
};

const HeroSection1: FunctionComponent<HeroSection1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.herosection, className].join(" ")}>
      <div className={styles.navigationbar}>
        <div className={styles.pvitto98Wrapper}>
          <div className={styles.project}>PVITTO</div>
        </div>
        <div className={styles.links}>
          <div className={styles.project}>Projects</div>
          <div className={styles.project}>Skills</div>
          <div className={styles.project}>Experience</div>
          <b className={styles.project}>Contact</b>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.herocontent}>
          <div className={styles.helloMyNames}>Hello, my names is</div>
          <div className={styles.vittorioPellittieri}>
            <p className={styles.vittorio}>Vittorio</p>
            <p className={styles.vittorio}>Pellittieri</p>
          </div>
          <div className={styles.andIAmContainer}>
            <span className={styles.andIAm}>{`and I am a `}</span>
            <span>{`Front-end `}</span>
            <span className={styles.and}>and</span>
            <span> Mobile Engineer</span>
          </div>
        </div>
      </div>
      <div className={styles.scrolldown}>
        <div className={styles.autoLayoutVertical}>
          <div className={styles.autoLayoutHorizontal}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
