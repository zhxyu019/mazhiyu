import React from "react";

import styles from "./Skills.module.css";
import skillsL from "../../data/skills-languages.json";
import skillsD from "../../data/skills-design.json";
import skillsH from "../../data/skills-hardware.json";
import skillsS from "../../data/skills-software.json";
import { getImageUrl } from "../../utils";


export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <h3 className={styles.subtitle}>Languages</h3>
          {skillsL.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}

        </div>

        <div className={styles.skills}>
        <h3 className={styles.subtitle}>Design<br></br></h3>
          {skillsD.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}

        </div>

        <div className={styles.skills}>
          <h3 className={styles.subtitle}>Hardware</h3>
          {skillsH.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.skills}>
          <h3 className={styles.subtitle}>Software</h3>
          {skillsS.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
