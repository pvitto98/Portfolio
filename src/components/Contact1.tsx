import { FunctionComponent, useState } from "react";
import styles from "./Contact1.module.css";
import Marquee from "react-marquee-slider";

export type Contact1Type = {
  className?: string;
};

const Contact1: FunctionComponent<Contact1Type> = ({ className = "" }) => {
  const [velocity, setVelocity] = useState(250);

  const handleMouseEnter = () => {
    setVelocity(0); // Stops the marquee
  };

  const handleMouseLeave = () => {
    setVelocity(250); // Resumes the marquee
  };

  const handleClick = () => {
    setVelocity(0); // Stops the marquee
    setTimeout(() => {
      setVelocity(250); // Resumes the marquee after 3 seconds
    }, 3000);
  };

  return (
    <div className={[styles.contact, className].join(" ")} id="contact">
      <div className={styles.headerContainer}>
        <div className={styles.divider}></div>
        <div className={styles.header}>
          <div className={styles.scrolling_text} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  onClick={handleClick}>
            <Marquee
              velocity={velocity}
              direction="rtl"
              resetAfterTries={0}
              scatterRandomly={false} // Adjust based on need
              onInit={() => console.log('Marquee Initialized')} // Optional callback
              onFinish={() => console.log('Marquee Finished')} // Optional callback
              >
              <div className={styles.letsGetIn}>
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
              </div>
              <div className={styles.letsGetIn}>
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
              </div>
              <div className={styles.letsGetIn}>
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
              </div>
            </Marquee>
          </div>
        </div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.contactcontentwrapper}>
        <div className={styles.contactcontent}>
          <div className={styles.emailwrapper}>
            <div className={styles.whyDontYou}>Why don’t you write me at:</div>
            <div className={styles.email}>
              <a
                href="mailto:pellittierivittorio@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                pellittierivittorio@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.socialwrapper}>
            <div className={styles.orCheckMe}>or check me out at:</div>
            <div className={styles.buttoncontainer}>
              <a
                href="https://www.linkedin.com/in/pvitto98"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin}
              >
                <img className={styles.imgIcon} alt="" src="/img@2x.png" />
                <div className={styles.text}>Linkedin</div>
              </a>
              <a
                href="https://github.com/pvitto98"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin}
              >
                <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
                <div className={styles.text}>Github</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
