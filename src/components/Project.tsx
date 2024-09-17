import { FunctionComponent, useMemo, useState, CSSProperties, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";

export type ProjectType = {
  className?: string;
  link: string;
  bAT?: string;
  landingPage?: string;
  imageSrc: string;
  gifSrc: string;

  /** Style props */
  typeLeft?: CSSProperties["left"];
};

const Project: FunctionComponent<ProjectType> = ({
  className = "",
  link,
  bAT,
  landingPage,
  imageSrc,
  gifSrc,
  typeLeft,
}) => {
  const [style, setStyle] = useState({});
  const gifRef = useRef<HTMLImageElement | null>(null); // Create a ref for the GIF element
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const typeStyle: CSSProperties = useMemo(() => {
    return {
      left: typeLeft,
    };
  }, [typeLeft]);

  const handleMouseMove = (e: { nativeEvent: { offsetX: any; offsetY: any; target: any } }) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth: width, offsetHeight: height } = target;
    const moveX = (offsetX / width) * 30 - 15;
    const moveY = (offsetY / height) * 30 - 15;

    setStyle({
      transform: `scale(1.1) perspective(1000px) rotateY(${moveX}deg) rotateX(${moveY}deg)`,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
    });
  };

  const handleMouseEnter = () => {
    if (gifRef.current) {
      gifRef.current.src = ""; // Temporarily set the src to an empty string
      gifRef.current.src = gifSrc; // Reset the src to force the GIF to restart
    }
    setIsHovered(true); // Set hovered state to true
  };

  const handleMouseLeave = () => {
    setStyle({});
    setIsHovered(false); // Set hovered state to false
  };

  return (
    <Link to={link} className={styles.linkWrapper}>
      <div
        className={[styles.project, className].join(" ")}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter} // Add onMouseEnter to reset GIF
        onMouseLeave={handleMouseLeave} // Add onMouseEnter to reset GIF
              >
        <img
          ref={gifRef} // Attach the ref to the GIF image
          className={styles.hoverGif}
          src={gifSrc}
          alt="Hover GIF"
        />
        <img
          className={styles.image}
          src={imageSrc}
          alt="Project Image"
        />
        <div className={styles.titleholder}>
          <div className={styles.bat}>{bAT}</div>
        </div>
        {!isHovered && (
          <div className={styles.type} style={typeStyle}>
            <div className={styles.landingPage}>{landingPage}</div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Project;
