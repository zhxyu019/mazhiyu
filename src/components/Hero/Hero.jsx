import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zhiyu</h1>
        <p className={styles.description}>
        Student at Anglo-Chinese School (Independent) <br></br>
        DSTA JC Scholar, Daisy Phay Foundation Scholar <br></br>
        SG Girls-in-Tech 2023 
        </p>

        {/* <a href="mailto:zhiyuma2006@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a> */}

        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:zhiyuma2006@gmail.com">
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/paperfishh">
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
            </a>
          </li>
        </ul>

      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
