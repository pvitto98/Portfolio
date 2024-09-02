import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Project.module.css";

export type ProjectType = {
  className?: string;
  bAT?: string;
  landingPage?: string;

  /** Style props */
  typeLeft?: CSSProperties["left"];
};

const Project: FunctionComponent<ProjectType> = ({
  className = "",
  bAT,
  landingPage,
  typeLeft,
}) => {
  const typeStyle: CSSProperties = useMemo(() => {
    return {
      left: typeLeft,
    };
  }, [typeLeft]);

  return (
    <div className={[styles.project, className].join(" ")}>
      <img className={styles.previewIcon} alt="" src="/preview@2x.png" />
      <div className={styles.titleholder}>
        <div className={styles.bat}>{bAT}</div>
      </div>
      <div className={styles.type} style={typeStyle}>
        <div className={styles.landingPage}>{landingPage}</div>
      </div>
    </div>
  );
};

export default Project;
