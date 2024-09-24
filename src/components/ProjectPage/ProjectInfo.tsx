import { FunctionComponent } from "react";
import styles from "./ProjectInfo.module.css";
import SkillCard from "../HomePage/SkillCard";

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
        {(link !== "" ? <a href={link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
          Visit Project
        </a> : <></>)}      </div>
      <div className={styles.informations}>
        <div className={styles.technologies}>
        <div className={styles.titleContainer}>

          <b className={styles.info1}>INFO</b>
          </div>

          <div className={styles.infodescription}>{info}</div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.technologies}>
          <div className={styles.titleContainer}>
          <b className={styles.info1}>TECHNOLOGIES</b>
          </div>
          <div className={styles.technologiesdescription}>
            {technologies.map((tech, index) => (
              <p key={index} className={styles.htmlCss}>
                <SkillCard skillName={tech}/>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.separator}></div>

        <div className={styles.technologies}>
          <b className={styles.info1}>CREDITS</b>
          <div className={styles.creditdescription}>
            {credits.map((credit, index) => (
              <div key={index} className={styles.credit}>
                {credit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
