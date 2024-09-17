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
      <b className={styles.myProjects}><span>P</span>ROJECTS</b>
      <div className={styles.projectcontainer}>
        <Project 
          link="BAT" 
          bAT="BAT" 
          landingPage="React Three.js" 
          imageSrc="/BAT_Image_Preview-min.png"    // Pass imageSrc
          gifSrc="/BAT_Gif_Preview.gif"        // Pass gifSrc
        />
        <Project
          link="ATHING"
          bAT="ATHING"
          landingPage="Native Android Application"
          imageSrc="/AT_Image_Preview-min.png"
          gifSrc="/AT_Gif_Preview.gif"
        />
        <Project
          link="WORKSCHEDULE"
          bAT="WORK SCHEDULE"
          landingPage="Full Stack App"
          imageSrc="/WS_Image_Preview-min.png"
          gifSrc="/WS_Gif_Preview.gif"
        />
      </div>
    </div>
  );
};

export default MyProjects1;
