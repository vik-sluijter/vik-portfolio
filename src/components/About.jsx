import React from "react";
import "./tailwind.css";

function About() {
  return (
    <section
      className="about container mx-auto px-4 py-20 flex flex-col items-center text-center"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      <h2
        className="section-title text-3xl font-semibold mb-6"
        style={{ color: "#BB86FC" }}
      >
        Over mij
      </h2>
      <p
        className="section-text max-w-2xl text-lg"
        style={{ color: "#E0E0E0" }}
      >
        Gemotiveerde student Interactive Media Development met ervaring in
        webtechnologieën, AR/VR en creatieve projecten. Sterk in zowel design
        als development en altijd leergierig om nieuwe technologieën te
        ontdekken en toe te passen.
      </p>
    </section>
  );
}

export default About;
