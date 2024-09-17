import { FunctionComponent } from "react";
import Skill from "./Skill";
import styles from "./MySkills1.module.css";

export type MySkills1Type = {
  className?: string;
};

const MySkills1: FunctionComponent<MySkills1Type> = ({ className = "" }) => {
  return (
    <div id="skills" className={[styles.myskills, className].join(" ")}>
      <b className={styles.mySkills}><span>S</span>KILLS</b>

      <div className={styles.content}>
        {/* Frontend Development Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Frontend Development</div>
          <div className={styles.skillset}>
            <Skill skillName="HTML" />
            <Skill skillName="CSS" />
            <Skill skillName="Javascript" />
            <Skill skillName="Typescript" />
            <Skill skillName="React" />
            <Skill skillName="Angular" />
            <Skill skillName="Three.js" />
          </div>
        </div>
        {/* Mobile Development Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Mobile Development</div>
          <div className={styles.skillset}>
            <Skill skillName="Kotlin" />
            <Skill skillName="React Native" />
          </div>
        </div>

        {/* Version Control & Other Tools Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Version Control & Other Tools</div>
          <div className={styles.skillset}>
            <Skill skillName="GIT" />
            <Skill skillName="GPT" />
            <Skill skillName="Midjourney" />
          </div>
        </div>

        {/* Design & UX/UI Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Design & UX/UI</div>
          <div className={styles.skillset}>
            <Skill skillName="UX/UI" />
            <Skill skillName="Figma" />
            <Skill skillName="Blender*" />
          </div>
        </div>


        <div className={styles.maybeIShould}>
          *Maybe I should practice that a little bit more...
        </div>

      </div>

    </div>
  );
};

export default MySkills1;
