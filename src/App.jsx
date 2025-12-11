import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    /* ---------------------- REVEAL ON SCROLL ---------------------- */
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /* ---------------------- FLOATING PARTICLES ---------------------- */
    const container = document.getElementById("particles");

    for (let i = 0; i < 35; i++) {
      const particle = document.createElement("span");
      particle.classList.add("particle");

      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 6 + 4;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${duration}s`;

      container.appendChild(particle);
    }


    /* ---------------------- CUSTOM CURSOR ---------------------- */
    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-outline");

    const moveCursor = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      outline.animate(
        {
          left: e.clientX + "px",
          top: e.clientY + "px"
        },
        { duration: 160, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", moveCursor);

    // click shrink
    const shrink = () => dot.classList.add("click");
    const expand = () => dot.classList.remove("click");

    window.addEventListener("mousedown", shrink);
    window.addEventListener("mouseup", expand);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", shrink);
      window.removeEventListener("mouseup", expand);
    };
  }, []);

  return (
    <>
      {/* Floating Background Shapes */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>
      <div className="bg-shape shape3"></div>

      <div id="particles"></div>

      {/* Custom Cursor */}
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>

      {/* Main Website */}
      <div>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
