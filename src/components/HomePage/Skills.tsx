import { FunctionComponent } from "react";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.css";

export type MySkills1Type = {
  className?: string;
};

const Skills: FunctionComponent<MySkills1Type> = ({ className = "" }) => {
  return (
    <div id="skills" className={[styles.myskills, className].join(" ")}>
      <div className={styles.mySkillsContainer}>
      <h1 className={styles.mySkills}><span>S</span>KILLS</h1>

      <div className={styles.content}>
        {/* Frontend Development Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Web Development</div>
          <div className={styles.skillset}>
            <SkillCard skillName="React" imageUrl="icons/React.svg" />
            <SkillCard skillName="Angular" imageUrl="icons/Angular.svg" />
            <SkillCard skillName="Node.js" imageUrl="icons/NodeJS.svg" />
            <SkillCard skillName="Next.js" imageUrl="icons/NextJS.svg" />

            {/* <SkillCard skillName="Three.js" /> */}
            <SkillCard skillName="Javascript" imageUrl="icons/Javascript.svg" />
            {/* <SkillCard skillName="Typescript" /> */}
            <SkillCard skillName="HTML" imageUrl="icons/HTML.svg" />
            <SkillCard skillName="CSS" imageUrl="icons/CSS.svg" />
          </div>
        </div>
        {/* Mobile Development Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Mobile Development</div>
          <div className={styles.skillset}>
            <SkillCard skillName="Kotlin" imageUrl="icons/Kotlin.svg" />
            <SkillCard skillName="React Native" imageUrl="icons/ReactNative.svg" />
          </div>
        </div>

        {/* Version Control & Other Tools Section */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Version Control & Other Tools</div>
          <div className={styles.skillset}>

            <SkillCard skillName="GIT" imageUrl="icons/Git.svg" />
            <SkillCard skillName="Agile" imageUrl="icons/Agile.svg" />
            <SkillCard skillName="Generative AI" imageUrl="icons/AI.svg" />

          </div>
        </div>

        {/* DesignSection */}
        <div className={styles.category}>
          <div className={styles.categoryTitle}>Design</div>
          <div className={styles.skillset}>
            <SkillCard skillName="UX/UI" imageUrl="icons/UX.svg" />
            <SkillCard skillName="Figma" imageUrl="icons/Figma.svg" />

            <SkillCard skillName="Blender*" imageUrl="icons/Blender.svg" />

          </div>
        </div>


        <div className={styles.maybeIShould}>
          *Maybe I should practice that a little bit more...
        </div>

      </div>
      </div>
    </div>
  );
};

export default Skills;
