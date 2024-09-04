import { FunctionComponent } from "react";
import styles from "./ProjectInfo.module.css";

export type ProjectInfoProps = {
  title: string;
  link: string;
  info: string;
  technologies: string[];
  credits: string[];
  className?: string;
};

const ProjectInfo: FunctionComponent<ProjectInfoProps> = ({
  title,
  link,
  info,
  technologies,
  credits,
  className = "",
}) => {
  return (
    <div className={[styles.projectinfo, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.link}>{link}</div>
      </div>
      <div className={styles.informations}>
        <div className={styles.info}>
          <b className={styles.info1}>INFO</b>
          <div className={styles.infodescription}>{info}</div>
        </div>
        <div className={styles.technologies}>
          <b className={styles.info1}>TECHNOLOGIES</b>
          <div className={styles.technologiesdescription}>
            {technologies.map((tech, index) => (
              <p key={index} className={styles.htmlCss}>
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.technologies}>
          <b className={styles.info1}>CREDITS</b>
          <div className={styles.technologiesdescription}>
            {credits.map((credit, index) => (
              <p key={index} className={styles.htmlCss}>
                {credit}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
