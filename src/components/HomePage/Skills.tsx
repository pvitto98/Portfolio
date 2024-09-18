import { FunctionComponent } from "react";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.css";

export type MySkills1Type = {
  className?: string;
};

const Skills: FunctionComponent<MySkills1Type> = ({ className = "" }) => {
  return (
    <div id="skills" className={[styles.myskills, className].join(" ")}>
      <b className={styles.mySkills}><span>S</span>KILLS</b>

      <div className={styles.content}>
        {/* Frontend Development Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Frontend Development</div>
          <div className={styles.skillset}>
            <SkillCard skillName="HTML" />
            <SkillCard skillName="CSS" />
            <SkillCard skillName="Javascript" />
            <SkillCard skillName="Typescript" />
            <SkillCard skillName="React" />
            <SkillCard skillName="Angular" />
            <SkillCard skillName="Three.js" />
          </div>
        </div>
        {/* Mobile Development Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Mobile Development</div>
          <div className={styles.skillset}>
            <SkillCard skillName="Kotlin" />
            <SkillCard skillName="React Native" />
          </div>
        </div>

        {/* Version Control & Other Tools Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Version Control & Other Tools</div>
          <div className={styles.skillset}>
            <SkillCard skillName="GIT" />
            <SkillCard skillName="Generative AI" />
          </div>
        </div>

        {/* Design & UX/UI Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Design & UX/UI</div>
          <div className={styles.skillset}>
            <SkillCard skillName="UX/UI" />
            <SkillCard skillName="Figma" />
            <SkillCard skillName="Blender*" />
          </div>
        </div>


        <div className={styles.maybeIShould}>
          *Maybe I should practice that a little bit more...
        </div>

      </div>

    </div>
  );
};

export default Skills;
