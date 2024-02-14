import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span>Zhiyu </span></h1>
        <p className={styles.description}>
        Student at ACS (Independent) <br></br>
        DSTA JC Scholar, Daisy Phay Foundation Scholar <br></br>
        SG Girls-in-Tech 2023 
        </p>

        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:zhiyuma2006@gmail.com">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/paperfishh/">
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.github.com/zhxyu019">
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
              />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.content2}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
              I'm an IB J2 student from Singapore studying PCMBm
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <p>
                I tell people I dabble around tech in my free time but ended up pretty involved in it... so I built this dev portfolio to look back on everything i've done in this journey :')
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <p>
                I'm currently exploring React and finishing my academic research computing papers
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
