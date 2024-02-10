import React from "react";

import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div>
        <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    {historyItem.organisation !== "" ? (
                        <h3>{`${historyItem.role} • ${historyItem.organisation}`}</h3>
                      ) : (
                        <h3>{`${historyItem.role}`}</h3>
                      )
                    }
                    {historyItem.endDate !== "" ? (
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    ) : (
                      <p>{`${historyItem.startDate}`}</p>
                    )}
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
      </div>
    </section>
  );
};
