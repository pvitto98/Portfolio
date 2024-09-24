import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectPhotos.module.css";

export type ProjectPhotosProps = {
  content: string; // content is a string here
  prevLink: string;
  nextLink: string;
  className?: string;
};

// Function to parse the content string into an array of objects
const parseContent = (contentString: string) => {
  return contentString.split(';').map(item => {
    const [type, value] = item.split(':');
    if (type === 'image') {
      return { type: "image", src: value };
    } else if (type === 'image_small') {
      return { type: "image_small", src: value };
    } else {
      return { type: "text", content: value };
    }
  });
};

const ProjectPhotos: FunctionComponent<ProjectPhotosProps> = ({
  content,
  prevLink,
  nextLink,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Parse the content string into the required format
  const parsedContent = parseContent(content);


  return (
    <div className={[styles.projectphotos, className].join(" ")} ref={containerRef}>
      <div className={styles.photoContainer}>
        {parsedContent.map((item, index) => {
          if (item.type === 'image') {
            return (
              <img
                key={index}
                className={styles.screen1Icon}
                alt={`Screenshot ${index + 1}`}
                src={item.src}
              />
            );
          } else if (item.type === 'image_small') {
            return (
              <img
                key={index}
                className={styles.screen1Icon_small}
                alt={`Screenshot ${index + 1}`}
                src={item.src}
              />
            );
          } else if (item.type === 'text') {
            return (
              <div key={index} className={styles.textContent}>
                {item.content}
              </div>
            );
          }
          return null;
        })}

      </div>
      <div className={styles.navigation}>
        <Link to={prevLink} className={styles.previousbutton}>
          <img
            className={styles.autoLayoutHorizontal}
            alt=""
            src="/icons/auto-layout-horizontal@2x.png"
          />
          <div className={styles.prev}>PREV</div>
        </Link>
        <Link to={nextLink} className={styles.previousbutton}>
          <div className={styles.prev}>NEXT</div>
          <img
            className={styles.autoLayoutHorizontal}
            alt=""
            src="/icons/auto-layout-horizontal1@2x.png"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectPhotos;
