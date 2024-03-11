import React from "react";
 
import styles from "./Publications.module.css";
import publications from "../../data/publications.json";

export const Publications = () => {
  return (
    <section className={styles.container} id="publications">
      <h2 className={styles.title}> Publications </h2>
      <p className={styles.subtitle}> none of these are actually published (yet) they're just cool tech research stuff i've lost brain cells over...</p>
      <div>
        <ul className={styles.history}>
            {publications.map((publications, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <div className={styles.historyItemDetails}>
                    <h3>{`${publications.title}`}</h3>
                    <p>{`${publications.organisation} •  ${publications.date}`}</p>
                    <a href = {publications.demo} target="_blank" rel = "noopener noreferrer">
                      Research Paper
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
    </section>
  );
};
