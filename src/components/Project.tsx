import { FunctionComponent, useMemo, useState, CSSProperties } from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";

export type ProjectType = {
  className?: string;
  link: string;
  bAT?: string;
  landingPage?: string;

  /** Style props */
  typeLeft?: CSSProperties["left"];
};

const Project: FunctionComponent<ProjectType> = ({
  className = "",
  link,
  bAT,
  landingPage,
  typeLeft,
}) => {
  const [style, setStyle] = useState({});
  const typeStyle: CSSProperties = useMemo(() => {
    return {
      left: typeLeft,
    };
  }, [typeLeft]);

  const handleMouseMove = (e: { nativeEvent: { offsetX: any; offsetY: any; target: any } }) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = target;
    const moveX = ((offsetX / width) * 30) - 15;
    const moveY = ((offsetY / height) * 30) - 15;

    setStyle({
      transform: `scale(1.1) perspective(1000px) rotateY(${moveX}deg) rotateX(${moveY}deg)`,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
    });
  };

  return (
    <Link to={link} className={styles.linkWrapper}>
      <div
        className={[styles.project, className].join(" ")}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setStyle({})}
      >
        <img
          className={styles.hoverGif}
          src="/WS_preview_LQ.gif"
          alt="Hover GIF"
        />
        <img
          className={styles.image}
          src="/screen1@2x.png"
          alt="Project Image"
        />
        <div className={styles.titleholder}>
          <div className={styles.bat}>{bAT}</div>
        </div>
        <div className={styles.type} style={typeStyle}>
          <div className={styles.landingPage}>{landingPage}</div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
