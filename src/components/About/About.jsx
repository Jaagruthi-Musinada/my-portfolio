import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="container fade-up">
      <h2>About Me</h2>

      <p className="small-muted" style={{ maxWidth: 880, marginTop: 12 }}>
        I’m a CSE student who enjoys learning new technologies and building projects that help me grow as a developer. 
        Currently, I’m learning the MERN stack and strengthening my fundamentals in Data Structures, Java, and Python.

        I’m also exploring AI and Machine Learning, especially how they can be used for climate-related research. 
        I like working on small, practical projects that help me understand concepts better.

        I’m still learning, but I’m always curious, consistent, and excited to gain real experience through projects, teamwork, and internships.

      </p>
    </section>
  );
}
