import React from "react";
import "./tailwind.css";
function Footer() {
  return (
    <footer
      className="footer py-6 mt-12"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      <div className="container mx-auto px-4 flex justify-center">
        <p className="footer-text text-sm" style={{ color: "#E0E0E0" }}>
          © {new Date().getFullYear()} Vik Sluijter. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
