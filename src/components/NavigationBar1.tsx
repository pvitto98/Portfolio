import { FunctionComponent } from "react";
import styles from "./NavigationBar1.module.css";

export type NavigationBar1Type = {
  className?: string;
};

const NavigationBar1: FunctionComponent<NavigationBar1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.navigationbar, className].join(" ")}>
      <div className={styles.logo}>
        <div className={styles.aboutMe}>PVITTO</div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.links}>
          <div className={styles.aboutMe}>About me</div>
          <div className={styles.projects}>Projects</div>
          <b className={styles.aboutMe}>Contact</b>
        </div>
        <button className={styles.icsharpMenu}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar1;
