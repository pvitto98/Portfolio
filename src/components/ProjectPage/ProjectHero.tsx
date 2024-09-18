import { FunctionComponent } from "react";
import styles from "./ProjectHero.module.css";

export type ProjectHeroProps = {
  videoSrc: string;
  className?: string;
};

const ProjectHero: FunctionComponent<ProjectHeroProps> = ({
  videoSrc,
  className = "",
}) => {
  return (
    <div className={[styles.projecthero, className].join(" ")}>
      <div className={styles.videoContainer}>
        <video
          className={styles.videoIcon}
          src={videoSrc}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default ProjectHero;
