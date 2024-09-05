import { FunctionComponent } from "react";
import styles from "./Contact1.module.css";
import Marquee from "react-marquee-slider";

export type Contact1Type = {
  className?: string;
};

const Contact1: FunctionComponent<Contact1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.contact, className].join(" ")} id="contact">
      <div className={styles.headerContainer}>
        <div className={styles.divider}></div>
        <div className={styles.header}>
          <div className={styles.scrolling_text}>
          <Marquee velocity={250} direction="ltr" resetAfterTries={0}  scatterRandomly={false} // Adjust based on need
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
                </div>                {/* Repeated text */}
            </Marquee>
          </div>
        </div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.contactcontentwrapper}>
        <div className={styles.contactcontent}>
          <div className={styles.emailwrapper}>
            <div className={styles.whyDontYou}>Why don’t you write me at:</div>
            <div className={styles.email}>pellittierivittorio@gmail.com</div>
          </div>
          <div className={styles.socialwrapper}>
            <div className={styles.orCheckMe}>or check me out at:</div>
            <div className={styles.buttoncontainer}>
            <a href="https://www.linkedin.com/in/pvitto98" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                <img className={styles.imgIcon} alt="" src="/img@2x.png" />
                <div className={styles.text}>Linkedin</div>
              </a>
              <a href="https://github.com/pvitto98" target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
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
