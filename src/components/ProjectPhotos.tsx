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
    return type === 'image'
      ? { type: "image", src: value }
      : { type: "text", content: value };
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className={[styles.projectphotos, className].join(" ")} ref={containerRef}>
      {parsedContent.map((item, index) => {
        if (item.type === 'image') {
          return (
            <img
              key={index}
              className={styles.screen1Icon}
              alt={`Screenshot ${index + 1}`}
              src={item.src}
              // style={{
              //   transform: `scale(${1 + scrollY * 0.001}) translateY(${scrollY * 0.05}px)`
              // }}
            />
          );
        } else if (item.type === 'text') {
          return (
            <div
              key={index}
              className={styles.textContent}
            >
              {item.content}
            </div>
          );
        }
        return null;
      })}
      <div className={styles.navigation}>
        <Link to={prevLink} className={styles.previousbutton}>
          <img
            className={styles.autoLayoutHorizontal}
            alt=""
            src="/auto-layout-horizontal@2x.png"
          />
          <div className={styles.prev}>PREV</div>
        </Link>
        <Link to={nextLink} className={styles.nextbutton}>
          <div className={styles.next}>NEXT</div>
          <img
            className={styles.autoLayoutHorizontal}
            alt=""
            src="/auto-layout-horizontal1@2x.png"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectPhotos;
