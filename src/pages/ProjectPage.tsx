import { FunctionComponent } from "react";
import styles from "./ProjectPage.module.css";
import ProjectHero from "../components/ProjectPage/ProjectHero";
import ProjectInfo from "../components/ProjectPage/ProjectInfo";
import ProjectPhotos from "../components/ProjectPage/ProjectPhotos";

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

const ProjectPage: FunctionComponent<Project1Props> = ({
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

export default ProjectPage;
