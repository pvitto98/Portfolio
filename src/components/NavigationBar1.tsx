import { FunctionComponent, useState, useEffect } from "react";
import Drawer from "./Drawer";
import styles from "./NavigationBar1.module.css";
import { HashLink } from 'react-router-hash-link';
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
        <div className={styles.logoText}>PVITTO</div>
      </Link>
      <div className={styles.navigation}>
        <div className={styles.links}>
          <HashLink smooth to="/#about" className={`nav-link-ltr ${styles.aboutMe}`}>
            About me
          </HashLink>
          <HashLink smooth to="/#projects" className={`nav-link-ltr ${styles.projects}`}>
            Projects
          </HashLink>
          <HashLink smooth to="/#skills" className={`nav-link-ltr ${styles.projects}`}>
            Skills
          </HashLink>
          <HashLink smooth to="/#contact" className={`nav-link-ltr ${styles.aboutMe}`}>
            Contact
          </HashLink>
        </div>
      </div>
      <button className={styles.icsharpMenu} onClick={toggleDrawer}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>

      {isDrawerOpen && <Drawer className={styles.drawer} onClose={toggleDrawer} />}
    </div>
  );
};

export default NavigationBar1;
