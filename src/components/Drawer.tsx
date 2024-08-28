import { FunctionComponent, useEffect } from "react";
import styles from "./Drawer.module.css";

export type DrawerType = {
  className?: string;
  onClose?: () => void;
};

const Drawer: FunctionComponent<DrawerType> = ({ className = "", onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={[styles.drawer, className].join(" ")}
      data-animate-on-scroll
    >
      <div className={styles.logo}>
        <div className={styles.pvitto}>PVITTO</div>
      </div>
      <div className={styles.links}>
        <div className={styles.pvitto}>About me</div>
        <div className={styles.projects}>Projects</div>
        <b className={styles.pvitto}>Contact</b>
      </div>
    </div>
  );
};

export default Drawer;
