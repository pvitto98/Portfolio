import { FunctionComponent } from "react";
import styles from "./ProjectInfo.module.css";

export type ProjectInfoType = {
  className?: string;
};

const ProjectInfo: FunctionComponent<ProjectInfoType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.projectinfo, className].join(" ")}>
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
  );
};

export default ProjectInfo;
