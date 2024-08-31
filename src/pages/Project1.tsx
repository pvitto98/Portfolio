import { FunctionComponent } from "react";
import styles from "./Project1.module.css";
import ProjectHero from "../components/ProjectHero";
import ProjectInfo from "../components/ProjectInfo";
import ProjectPhotos from "../components/ProjectPhotos";

const Project1: FunctionComponent = () => {
  return (
    <div className={styles.project}>
      <ProjectHero/>
      <ProjectInfo/>
      <ProjectPhotos/>
    </div>
  );
};

export default Project1;
