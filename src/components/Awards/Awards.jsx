import React from "react";
 
import styles from "./Awards.module.css";
import awards from "../../data/awards.json";

export const Awards = () => {
  return (
    <section className={styles.container} id="awards">
      <h2 className={styles.title}>Awards</h2>
      <div>
        <ul className={styles.history}>
            {awards.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.title}`}</h3>
                    <p>{`${historyItem.organisation}`}</p>
                    <p>{`${historyItem.description}`}</p>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
    </section>
  );
};
