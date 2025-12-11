import React from "react";
import styles from "./Skills.module.css";

export default function Skills() {
  const skills = ["React", "AI/ML", "CSS Modules", "HTML", "Java", "DSA", "MERN"];
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.grid}>
        {skills.map((s) => <div key={s} className={styles.card}>{s}</div>)}
      </div>
    </section>
  );
}
