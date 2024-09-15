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
  content: string; // content is a string here
  prev: string;
  next: string;
};

const Project1: FunctionComponent<Project1Props> = ({
  videoSrc,
  title,
  link,
  info,
  technologies,
  credits,
  content,
  prev,
  next,
}) => {
  return (
    <div className={styles.project}>
      <ProjectHero videoSrc={videoSrc} />
      <ProjectInfo
        title={title}
        link={link}
        info={info}
        technologies={technologies}
        credits={credits}
      />
      <ProjectPhotos
        content={content}
        prevLink={prev}
        nextLink={next}
      />
    </div>
  );
};

export default Project1;
