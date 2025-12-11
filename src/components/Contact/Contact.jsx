import React, { useState } from "react";
import styles from "./Contact.module.css";
import inputStyles from "./UiverseInput.module.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_urmzl2x",
      "template_g9wxsfj",
      {
        from_name: form.name,
        reply_to: form.email,
        message: form.message
      },
      "bre_B2UuCr_jVs1uO"
    )
    .then(() => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      alert("Failed to send message.");
      console.error(err);
    });
  };

  return (
    <section id="contact" className="container fade-up">
      <h2>Contact</h2>

      <form onSubmit={sendEmail} style={{ marginTop: 20 }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={inputStyles.input}
          value={form.name}
          onChange={handleChange}
          required
        />

        <div style={{ height: 14 }} />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={inputStyles.input}
          value={form.email}
          onChange={handleChange}
          required
        />

        <div style={{ height: 14 }} />

        <textarea
          name="message"
          placeholder="Your Message"
          className={inputStyles.textarea}
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <div style={{ height: 14 }} />

        <button
          type="submit"
          className="btn"
          style={{ background: "#7ab9ff", color: "#02121a" }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
