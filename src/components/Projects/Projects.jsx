import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import UiverseCard from "./UiverseCard";

export default function Projects() {

  /* ------------------ 3D Tilt Effect ------------------ */
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 12;
        const rotateY = -(x - rect.width / 2) / 12;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });

    return () => {
      cards.forEach((card) => {
        card.style.transform = "";
      });
    };
  }, []);

  return (
    <section id="projects" className="container fade-up">
      <h2>Projects</h2>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div className="tilt-card" key={p.title}>
            <UiverseCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
