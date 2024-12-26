import { FunctionComponent } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export type ProjectsType = {
  className?: string;
};

const Projects: FunctionComponent<ProjectsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.myprojects, className].join(" ")} id="projects">
      <div className={styles.projectContent}>
      <h1 className={styles.myProjects}><span>P</span>ROJECTS</h1>
      <div className={styles.projectcontainer}>
        <ProjectCard 
          link="BAT" 
          bAT="BAT" 
          landingPage="Landing Page" 
          imageSrc="/previews/BAT_Image_Preview-min.png"    // Pass imageSrc
          gifSrc="/previews/BAT_Gif_Preview.gif"        // Pass gifSrc
        />
        <ProjectCard
          link="AThing"
          bAT="ATHING"
          landingPage="Native Android Application"
          imageSrc="/previews/AT_Image_Preview-min.png"
          gifSrc="/previews/AT_Gif_Preview.gif"
        />
        <ProjectCard
          link="WorkSchedule"
          bAT="WORK SCHEDULE"
          landingPage="Full Stack App"
          imageSrc="/previews/WS_Image_Preview-min.png"
          gifSrc="/previews/WS_Gif_Preview.gif"
        />
          <ProjectCard
          link="ViciniATe"
          bAT="VICINI A TE"
          landingPage="Landing Page" 
          imageSrc="/previews/VAT_Image_Preview-min.png"
          gifSrc="/previews/VAT_Gif_Preview.gif"
        />
      </div>
      </div>
    </div>
  );
};

export default Projects;
