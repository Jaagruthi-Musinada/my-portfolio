import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const nav = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
  ];

  return (
    <header className={`${styles.header} glass`}>
      <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div className={styles.brand}>
          <span className={styles.logoIcon}>JM</span>
          <div>
            <div className={styles.name}>Jaagruthi Musinada</div>
            <div className="small-muted" style={{fontSize:12}}>CSE · AI/ML · MERN</div>
          </div>
        </div>

        <nav className={styles.navLinks}>
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={styles.link}>
              {n.label}
            </a>
          ))}
          <a className={`${styles.cta} btn`} href="#contact">Let's talk</a>
        </nav>
      </div>
    </header>
  );
}
