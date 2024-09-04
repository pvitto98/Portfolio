import { FunctionComponent } from "react";
import Project from "./Project";
import styles from "./MyProjects1.module.css";

export type MyProjects1Type = {
  className?: string;
};

const MyProjects1: FunctionComponent<MyProjects1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.myprojects, className].join(" ")}>
      <b className={styles.myProjects}>MY PROJECTS</b>
      <div className={styles.projectcontainer}>
        <Project bAT="BAT" landingPage="Landing page" />
        <Project
          bAT="ATHING"
          landingPage="Native Android Application"
        />
        <Project
          bAT="WORK SCHEDULE"
          landingPage="Full Stack App"
        />
      </div>
    </div>
  );
};

export default MyProjects1;
