import React from "react";
import vik from "../../public/vik.jpg";
import "./tailwind.css";
function Hero() {
  return (
    <section
      className="hero container mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-center"
      style={{ backgroundColor: "#121212" }}
    >
      {/* Foto placeholder */}
      <div
        className="hero-image w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 mb-8 md:mb-0 md:mr-10 flex items-center justify-center"
        style={{ backgroundColor: "#BB86FC" }}
      >
        <img
          className="w-full h-full object-cover rounded-full"
          src={vik}
          alt="Foto van Vik Sluijter"
        />
      </div>
      {/* Tekst kaart */}
      <div
        className="hero-content p-8 rounded-lg flex flex-col items-start max-w-md w-full"
        style={{ backgroundColor: "#1E1E1E", color: "#E0E0E0" }}
      >
        <h1 className="hero-title text-2xl md:text-3xl font-bold mb-2">
          Hey, ik ben Vik 👋
        </h1>
        <p className="hero-subtitle mb-4" style={{ color: "#BB86FC" }}>
          Student Interactive Media Development & maker van creatieve digitale
          ervaringen.
        </p>
        <a
          href="#projects"
          className="cta-btn px-6 py-3 rounded-full font-medium transition"
          style={{
            backgroundColor: "#03DAC6",
            color: "#121212",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#BB86FC";
            e.target.style.color = "#1E1E1E";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#03DAC6";
            e.target.style.color = "#121212";
          }}
        >
          Bekijk mijn werk
        </a>
      </div>
    </section>
  );
}

export default Hero;
