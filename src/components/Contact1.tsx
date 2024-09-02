import { FunctionComponent } from "react";
import styles from "./Contact1.module.css";
import Marquee from "react-fast-marquee";

export type Contact1Type = {
  className?: string;
};

const Contact1: FunctionComponent<Contact1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.contact, className].join(" ")}>
      <div className={styles.headerContainer}>
        <div className={styles.divider}></div>
        <div className={styles.header}>
          <div className={styles.scrolling_text}>
            <Marquee gradient={false} speed={300} direction="right" loop={0} >
              <div className={styles.letsGetIn}>
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCHu
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCHu
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCHu
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCHu
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCHu
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
                <span className={styles.redLetter}>L</span>ET’S GET IN TOUCH
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
            <div className={styles.email}>pellittierivittorio@gmail.com</div>
          </div>
          <div className={styles.socialwrapper}>
            <div className={styles.orCheckMe}>or check me out at:</div>
            <div className={styles.buttoncontainer}>
              <div className={styles.linkedin}>
                <img className={styles.imgIcon} alt="" src="/img@2x.png" />
                <div className={styles.text}>Linkedin</div>
              </div>
              <div className={styles.linkedin}>
                <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
                <div className={styles.text}>Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
