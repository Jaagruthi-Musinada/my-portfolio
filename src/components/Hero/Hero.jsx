import React from "react";
import styles from "./Hero.module.css";
import profile from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="container fade-up">
      <div className={`${styles.grid} hero-grid`}>

        {/* LEFT SIDE */}
        <div className={styles.left}>
          <div className={styles.pretitle}>
            Portfolio • Learning MERN • Exploring AI/ML • Building Projects
          </div>

          <h1 className={styles.title}>
            Hi, I’m <span>Jaagruthi Musinada</span>
          </h1>

          <p className="small-muted" style={{ marginTop: 12 }}>
            I’m a Computer Science student currently learning full-stack development with the MERN stack and improving my skills in Python, Java, and DSA.
            I enjoy building small projects, experimenting with new technologies, and understanding how AI/ML models work in real-world scenarios. 
            Right now, I’m exploring climate-focused machine learning ideas and slowly developing my portfolio through hands-on learning.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" className="btn" style={{ background: "#7ab9ff", color: "#02121a" }}>
              View Projects
            </a>
            <a
              href="#contact"
              className="btn"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#dfefff",
              }}
            >
              Contact
            </a>
          </div>

          <div className={styles.badges}>
            <span>DSA</span>
            <span>Java</span>
            <span>MERN</span>
            <span>AI/ML</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={`${styles.photoCard} glass`}>

            {/* Animated Ring Wrapper */}
            <div className={styles.ringWrapper}>
              <img
                src={profile}
                alt="profile"
                className={styles.profilePhoto}
              />
            </div>

            {/* Name + CGPA */}
            <div style={{ marginTop: 12, textAlign: "center" }}>
              <div style={{ fontWeight: 700 }}>Jaagruthi Musinada</div>
              <div className="small-muted" style={{ fontSize: 13 }}>
                B.Tech CSE · VIT-AP · CGPA: 9.51
              </div>
            </div>

            {/* Social Icons */}
            <div className={styles.socialRow}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jaagruthimusinada/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Jaagruthi-Musinada"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fa-brands fa-github"></i>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/Jaagruthi_Musinada/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <i className="fa-solid fa-code"></i>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
