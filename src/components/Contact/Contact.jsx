import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:zhiyuma2006@gmail.com"></a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/paperfishh/"></a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/zhxyu019"></a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/discordIcon.png")} alt="Discord icon" />
          <a href="discordapp.com/users/896248226745831434"></a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/tetrisIcon.png")} alt="Tetris icon" />
          <a href="https://ch.tetr.io/u/paperfishhh"></a>
        </li>
      </ul>
      <div className={styles.text}>
        <h2>Made by Ma Zhiyu.</h2>
      </div>
    </footer>
  );
};
