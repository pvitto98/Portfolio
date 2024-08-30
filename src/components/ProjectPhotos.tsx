import { FunctionComponent } from "react";
import styles from "./ProjectPhotos.module.css";

export type ProjectPhotosType = {
  className?: string;
};

const ProjectPhotos: FunctionComponent<ProjectPhotosType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.projectphotos, className].join(" ")}>
      <img className={styles.screen1Icon} alt="" src="/screen1@2x.png" />
      <img className={styles.screen1Icon} alt="" src="/screen2@2x.png" />
      <img className={styles.screen3Icon} alt="" src="/screen2@2x.png" />
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
