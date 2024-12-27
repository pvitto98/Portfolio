import { FunctionComponent, useState } from "react";
import styles from "./Contact.module.css";
// import Marquee from "react-marquee-slider";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";



export type Contact1Type = {
  className?: string;
};

const Contact: FunctionComponent<Contact1Type> = ({ className = "" }) => {
  // const [velocity, setVelocity] = useState(250);

  // const handleMouseEnter = () => {
  //   setVelocity(0); // Stops the marquee
  // };

  // const handleMouseLeave = () => {
  //   setVelocity(250); // Resumes the marquee
  // };

  // const handleClick = () => {
  //   setVelocity(0); // Stops the marquee
  //   setTimeout(() => {
  //     setVelocity(250); // Resumes the marquee after 3 seconds
  //   }, 3000);
  // };

  const handleClick = (linkName: string, url: string) => {
    ReactGA.event({
      category: "Contact Links",
      action: `Clicked ${linkName}`,
      label: url, // Log the URL being clicked
    });

    // console.log(`User clicked ${linkName}: ${url}`);
  };

  return (
    <div className={[styles.contact, className].join(" ")} id="contact">
      <div className={styles.contactcontentwrapper}>

        <h1 className={styles.mySkills}><span>C</span>ONTACTS</h1>

        <motion.div
          className={styles.contatticard2}
          initial={{ opacity: 1, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <b className={styles.scriviciSu}>Why don’t you write me at:</b>
          <div className={styles.formFields}>
            <a href="mailto:pellittierivittorio@gmail.com" className={styles.emailline}          onClick={() =>
                handleClick("Email", "mailto:pellittierivittorio@gmail.com")
              }>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.linkedin}>
                  <img
                    className={styles.emailicon}
                    alt="Icona Email"
                    src="/icons/emailicon.svg"
                  />
                  <b className={styles.email}>pellittierivittorio@gmail.com</b>
                </div>
              </motion.div>
            </a>
            <motion.div
              className={styles.emailline}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://www.linkedin.com/in/pvitto98"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin}
                onClick={() =>
                  handleClick("LinkedIn", "https://www.linkedin.com/in/pvitto98")
                }
              >
                <img className={styles.imgIcon} alt="" src="/icons/img@2x.png" />
                <div className={styles.text}>Linkedin</div>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className={styles.secondRow}>

          <motion.div
            className={styles.contatticard}
            initial={{ opacity: 1, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <b className={styles.scriviciSu}>Checkout my resume:</b>
            <div className={styles.formFields}>
              <a
                href="/resume.pdf" // Update this with the actual path to your resume
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick("Resume", "/resume.pdf")}
              // className={styles.resume}
              >
                <div className={styles.linkedin}>

                  <img
                    className={styles.emailicon}
                    alt="Icon Resume"
                    src="/icons/resume.svg"
                  />
                  <div className={styles.text2}>My resume</div>
                </div>
              </a>

            </div>
          </motion.div>
          <motion.div
            className={styles.contatticard}
            initial={{ opacity: 1, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <b className={styles.scriviciSu}>Want to see how I work?</b>
            <div className={styles.formFields}>
              <div className={styles.buttoncontainer}>
                <a
                  href="https://github.com/pvitto98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedin}
                  onClick={() =>
                    handleClick("GitHub", "https://github.com/pvitto98")
                  }
                >
                  <img className={styles.imgIcon} alt="" src="/icons/img1@2x.png" />
                  <div className={styles.text}>Github</div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
