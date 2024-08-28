import { FunctionComponent } from "react";
import Skill from "./Skill";
import styles from "./MySkills1.module.css";

export type MySkills1Type = {
  className?: string;
};

const MySkills1: FunctionComponent<MySkills1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.myskills, className].join(" ")}>
      <b className={styles.mySkills}>MY SKILLS</b>
      <div className={styles.myskillscontent}>
        <div className={styles.skillset}>
          <Skill skillName="HTML" />
          <Skill skillName="CSS" />
          <Skill skillName="Javascript" />
          <Skill skillName="Typescript" />
          <Skill skillName="React" />
          <Skill skillName="React Native" />
          <Skill skillName="Three.js" />
          <Skill skillName="Angular" />
          <Skill skillName="Kotlin" />
          <Skill skillName="GIT" />
          <Skill skillName="UX/UI" />
          <Skill skillName="Figma" />
          <Skill skillName="Blender*" />
          <Skill skillName="GPT" />
        </div>
      </div>
      <div className={styles.maybeIShould}>
        *Maybe I should practise it a little bit more...
      </div>
    </div>
  );
};

export default MySkills1;
