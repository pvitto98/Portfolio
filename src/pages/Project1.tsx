import { FunctionComponent } from "react";
import styles from "./Project1.module.css";
import ProjectHero from "../components/ProjectHero";
import ProjectInfo from "../components/ProjectInfo";
import ProjectPhotos from "../components/ProjectPhotos";

export type Project1Props = {
  videoSrc: string;
  title: string;
  link: string;
  info: string;
  technologies: string[];
  credits: string[];
  screenshots: string[];
};

const Project1: FunctionComponent<Project1Props> = (props) => {
  return (
    <div className={styles.project}>
      <ProjectHero videoSrc={props.videoSrc} />
      <ProjectInfo
        title={props.title}
        link={props.link}
        info={props.info}
        technologies={props.technologies}
        credits={props.credits}
      />
      <ProjectPhotos screenshots={props.screenshots} />
    </div>
  );
};

export default Project1;
