import { FunctionComponent } from "react";
import styles from "./ProjectPhotos.module.css";

export type ProjectPhotosProps = {
  screenshots: string[];
  className?: string;
};

const ProjectPhotos: FunctionComponent<ProjectPhotosProps> = ({
  screenshots,
  className = "",
}) => {
  return (
    <div className={[styles.projectphotos, className].join(" ")}>
      {screenshots.map((src, index) => (
        <img key={index} className={styles.screen1Icon} alt="" src={src} />
      ))}
      <div className={styles.navigation}>
        <div className={styles.previousbutton}>
          <img
            className={styles.autoLayoutHorizontal}
            alt=""
            src="/auto-layout-horizontal@2x.png"
          />
          <div className={styles.prev}>PREV</div>
        </div>
        <div className={styles.previousbutton}>
          <div className={styles.prev}>NEXT</div>
          <img
            className={styles.autoLayoutHorizontal}
            alt=""
            src="/auto-layout-horizontal1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPhotos;
