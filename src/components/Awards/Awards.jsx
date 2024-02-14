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
                    <a href = {historyItem.demo} target="_blank" rel = "noopener noreferrer">
                      {historyItem.honour !== "" ? (
                        <div>
                          <h3>{`${historyItem.title}`}</h3>
                          <h3 className={styles.historyItemHonours}>{`${historyItem.honour}`}</h3>
                        </div>
                      ) : (
                        <h3>{`${historyItem.title}`}</h3>
                      )}
                      <p>{`${historyItem.organisation} •  ${historyItem.date}`}</p>
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
