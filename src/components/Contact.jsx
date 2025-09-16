import React from "react";
import "./tailwind.css";
function Contact() {
  return (
    <section
      className="contact container mx-auto px-4 py-20 flex flex-col items-center text-center"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      <h2
        className="section-title text-3xl font-semibold mb-6"
        style={{ color: "#BB86FC" }}
      >
        Contact
      </h2>
      <p className="section-text mb-6 text-lg" style={{ color: "#E0E0E0" }}>
        Neem gerust contact met mij op via e-mail.
      </p>
      <ul className="contact-list flex flex-col gap-2">
        <li>
          <a
            href="mailto:sluijtervik@gmail.com"
            className="hover:underline"
            style={{ color: "#03DAC6" }}
          >
            sluijtervik@gmail.com
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
