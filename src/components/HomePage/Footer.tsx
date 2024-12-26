import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
}) => {


  return (
    <div className={[styles.contattacicompact, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.viciniinfoParent}>
          <img
            className={styles.viciniinfoIcon}
            alt="VP Logo"
            src="/icons/Logo.svg"
          />
          <div className={styles.info}>
            <div className={styles.viciniateParent}>
              <div className={styles.viciniate}>
                Vittorio Pellittieri
              </div>
              <div className={styles.ragionesociale}>
                Web and Mobile Developer
              </div>
            </div>
            {/* <div className={styles.viciniateParent}>
                            <div className={styles.via}>
                                Via Schiavonesca Nuova 159, Volpago Del Montello (TV)
                            </div>
                        </div> */}
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.contatti}>
            <div className={styles.formFields}>
              <a href="mailto:pellittierivittorio@gmail.com" className={styles.emailline}>
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
                >
                  <img className={styles.imgIcon} alt="" src="/icons/img@2x.png" />
                  <div className={styles.text}>Linkedin</div>
                </a>
              </motion.div>
              <div className={styles.buttoncontainer}>
                <a
                  href="https://github.com/pvitto98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedin}
                >
                  <img className={styles.imgIcon} alt="" src="/icons/img1@2x.png" />
                  <div className={styles.text}>Github</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
