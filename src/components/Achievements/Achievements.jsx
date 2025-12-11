import React from "react";
import styles from "./Achievements.module.css";

export default function Achievements() {
  return (
    <section id="achievements" className="reveal">
      <div className="container">
        <h2 className={styles.title}>Achievements</h2>

        <div className={`${styles.card} glass`}>
          <h3 className={styles.cardTitle}>Infosys Virtual Internship 6.0</h3>

          <p className={styles.text}>
            During the <strong>Infosys Virtual Internship 6.0</strong>, I developed 
            <strong> TextMorph</strong>, an AI-driven platform that transforms complex
            text into clear and accessible content using intelligent summarization and
            paraphrasing techniques. The project integrates transformer-based NLP models,
            secure authentication, and a modern user interface designed for students,
            researchers, and professionals. This experience strengthened my technical
            foundation in AI, improved my problem-solving abilities, and gave me
            hands-on exposure to industry-grade tools.
          </p>

        </div>
      </div>
    </section>
  );
}
