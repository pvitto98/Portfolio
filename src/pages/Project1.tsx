import { FunctionComponent } from "react";
import styles from "./Project1.module.css";

const Project1: FunctionComponent = () => {
  return (
    <div className={styles.project}>
      <div className={styles.projecthero}>
        <img className={styles.videoIcon} alt="" src="/video@2x.png" />
      </div>
      <div className={styles.projectinfo}>
        <div className={styles.header}>
          <div className={styles.title}>BAT</div>
          <div className={styles.link}>
            https://brasseria-augusta-taurinorum.it
          </div>
        </div>
        <div className={styles.informations}>
          <div className={styles.info}>
            <b className={styles.info1}>INFO</b>
            <div
              className={styles.infodescription}
            >{`Lipton Teas & Infusions, anciennement Ekaterra, un site présentant les différentes marques de thé, ainsi que l'histoire et les enjeux de la marque. J'ai travaillé en tant que développeur front-end. Mon rôle principal a été de réaliser l'intégration du site, en mettant en place les éléments visuels et interactifs, et j'ai également été chargé de créer la plupart des animations. Le projet est un site statique, dont les données sont récupérées via Contentful grâce à Eleventy.`}</div>
          </div>
          <div className={styles.technologies}>
            <b className={styles.info1}>TECHNOLOGIES</b>
            <div className={styles.technologiesdescription}>
              <p className={styles.htmlCss}>HTML / CSS / JS /</p>
              <p className={styles.htmlCss}>Eleventy / Contentful</p>
            </div>
          </div>
          <div className={styles.technologies}>
            <b className={styles.info1}>CREDITS</b>
            <div className={styles.technologiesdescription}>
              <p className={styles.htmlCss}>{`Lipton Teas & Infusions`}</p>
              <p className={styles.htmlCss}>Design : Alter Bureau</p>
              <p className={styles.htmlCss}>Développement : Troa</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.projectphotos}>
        <img className={styles.screen1Icon} alt="" src="/screen1@2x.png" />
        <img className={styles.screen1Icon} alt="" src="/screen2@2x.png" />
        <img className={styles.screen3Icon} alt="" src="/screen2@2x.png" />
        <div className={styles.navigation}>
          <div className={styles.previousbutton}>
            <img
              className={styles.autoLayoutHorizontal}
              alt=""
              src="/auto-layout-horizontal@2x.png"
            />
            <div className={styles.prev}>PREV</div>
          </div>
          <div className={styles.previousbutton}>
            <div className={styles.prev}>NEXT</div>
            <img
              className={styles.autoLayoutHorizontal}
              alt=""
              src="/auto-layout-horizontal1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
