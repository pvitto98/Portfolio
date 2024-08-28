import { FunctionComponent } from "react";
import styles from "./Skill.module.css";

export type SkillType = {
  className?: string;
  skillName?: string;
};

const Skill: FunctionComponent<SkillType> = ({ className = "", skillName }) => {
  return (
    <div className={[styles.skill, className].join(" ")}>
      <div className={styles.skillname}>{skillName}</div>
    </div>
  );
};

export default Skill;
