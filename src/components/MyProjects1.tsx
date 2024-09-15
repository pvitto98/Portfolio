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
    <div className={[styles.myprojects, className].join(" ")} id="projects">
      <b className={styles.myProjects}>PROJECTS</b>
      <div className={styles.projectcontainer}>
        <Project link="BAT" bAT="BAT" landingPage="React three.js" />
        <Project
        link="ATHING"
          bAT="ATHING"
          landingPage="Native Android Application"
        />
        <Project
          link="WORKSCHEDULE"
          bAT="WORK SCHEDULE"
          landingPage="Full Stack App"
        />
      </div>
    </div>
  );
};

export default MyProjects1;