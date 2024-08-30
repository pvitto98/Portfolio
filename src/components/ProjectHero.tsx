import { FunctionComponent } from "react";
import styles from "./ProjectHero.module.css";

export type ProjectHeroType = {
  className?: string;
};

const ProjectHero: FunctionComponent<ProjectHeroType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.projecthero, className].join(" ")}>
      <img className={styles.videoIcon} alt="" src="/video@2x.png" />
    </div>
  );
};

export default ProjectHero;
