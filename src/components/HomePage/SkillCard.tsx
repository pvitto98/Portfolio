import { FunctionComponent, useState } from "react";
import styles from "./SkillCard.module.css";

export type SkillType = {
  className?: string;
  skillName?: string;
};

const SkillCard: FunctionComponent<SkillType> = ({ className = "", skillName }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: { nativeEvent: { offsetX: any; offsetY: any; target: any; }; }) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = target;
    const moveX = ((offsetX / width) * 20) - 10;
    const moveY = ((offsetY / height) * 20) - 10;

    setStyle({
      transform: `rotateY(${moveX}deg) rotateX(${moveY}deg) translateZ(20px) scale(1.2)`,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)",
    });
  };

  return (
    <div
      className={[styles.skill, className].join(" ")}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setStyle({})}
    >
      <div className={styles.skillname}>{skillName}</div>
    </div>
  );
};

export default SkillCard;
