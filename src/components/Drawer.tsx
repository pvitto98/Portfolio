import { FunctionComponent } from "react";
import { HashLink } from 'react-router-hash-link';
import styles from "./Drawer.module.css";

export type DrawerType = {
  className?: string;
  onClose?: () => void;
};

const Drawer: FunctionComponent<DrawerType> = ({ className = "", onClose }) => {
  return (
    <div
      className={[styles.drawer, className].join(" ")}
      data-animate-on-scroll
    >
      <div className={styles.logo}>
        <div className={styles.pvitto}>PVITTO</div>
      </div>
      <div className={styles.links}>
        <HashLink smooth to="/#home" className={styles.pvitto} onClick={onClose}>
          HOME
        </HashLink>
        <HashLink smooth to="/#about" className={styles.projects} onClick={onClose}>
          ABOUT ME
        </HashLink>
        <HashLink smooth to="/#projects" className={styles.projects} onClick={onClose}>
          PROJECTS
        </HashLink>
        <HashLink smooth to="/#skills" className={styles.projects} onClick={onClose}>
            SKILLS
          </HashLink>
        <HashLink smooth to="/#contact" className={styles.pvitto} onClick={onClose}>
          CONTACT
        </HashLink>
      </div>
      {onClose && (
        <button onClick={onClose} className={styles.closeButton}>
          <img src="/ic_baseline-close.svg" alt="Close" />
        </button>
      )}
    </div>
  );
};

export default Drawer;
