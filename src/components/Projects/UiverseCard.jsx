import React from "react";
import styles from "./UiverseCard.module.css";

export default function UiverseCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{project.title}</span>
      </div>

      <p className={styles.desc}>{project.desc}</p>

      <ul className={styles.lists}>
        {project.tech.map((t) => (
          <li key={t} className={styles.list}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      {/* ONLY GitHub link as you requested */}
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.action}
      >
        GitHub →
      </a>
    </div>
  );
}
