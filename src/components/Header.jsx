import React from "react";
import "./tailwind.css";
function Header() {
  return (
    <header
      className="main-header shadow"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      <div className="header-content container mx-auto px-4 flex justify-between items-center py-4">
        <span
          className="logo font-bold text-xl tracking-wide"
          style={{ color: "#BB86FC" }}
        >
          Vik Sluijter
        </span>
        <nav className="nav-links flex gap-8">
          <a
            className="nav-link transition-colors"
            href="#home"
            style={{ color: "#E0E0E0" }}
            onMouseOver={(e) => (e.target.style.color = "#03DAC6")}
            onMouseOut={(e) => (e.target.style.color = "#E0E0E0")}
          >
            Home
          </a>
          <a
            className="nav-link transition-colors"
            href="#about"
            style={{ color: "#E0E0E0" }}
            onMouseOver={(e) => (e.target.style.color = "#03DAC6")}
            onMouseOut={(e) => (e.target.style.color = "#E0E0E0")}
          >
            Over mij
          </a>
          <a
            className="nav-link transition-colors"
            href="#projects"
            style={{ color: "#E0E0E0" }}
            onMouseOver={(e) => (e.target.style.color = "#03DAC6")}
            onMouseOut={(e) => (e.target.style.color = "#E0E0E0")}
          >
            Projecten
          </a>
          <a
            className="nav-link transition-colors"
            href="#contact"
            style={{ color: "#E0E0E0" }}
            onMouseOver={(e) => (e.target.style.color = "#03DAC6")}
            onMouseOut={(e) => (e.target.style.color = "#E0E0E0")}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
