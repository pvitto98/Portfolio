import { FunctionComponent, useState, useEffect } from "react";
import Drawer from "./Drawer"; // Ensure the import path is correct
import styles from "./NavigationBar1.module.css";
import { Link } from "react-router-dom";

export type NavigationBar1Type = {
  className?: string;
};

const NavigationBar1: FunctionComponent<NavigationBar1Type> = ({
  className = "",
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset after animation
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isDrawerOpen]);

  return (
    <div className={[styles.navigationbar, className].join(" ")}>
      <Link
        to="/"
        className={`${styles.logo} ${isClicked ? styles.clicked : ""}`}
        onClick={handleClick}
      >
        <div className={styles.aboutMe}>PVITTO</div>
      </Link>
      <div className={styles.navigation}>
        <div className={styles.links}>
          <div className={styles.aboutMe}>About me</div>
          <div className={styles.projects}>Projects</div>
          <b className={styles.aboutMe}>Contact</b>
        </div>
        <button className={styles.icsharpMenu} onClick={toggleDrawer}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
      </div>
      {isDrawerOpen && <Drawer className={styles.drawer} onClose={toggleDrawer} />}
    </div>
  );
};

export default NavigationBar1;
