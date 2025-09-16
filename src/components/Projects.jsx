import React from "react";
import "./tailwind.css";
function Projects() {
  const projects = [
    {
      title: "G.U.M. - Heightmatch",
      description:
        "Een IOT-Project waarbij gebruikers sprongen op een platform om zo te zien welk dier even hoog springt.",
      image: "/Heightmatch.png",
    },
    {
      title: "Arteveldehogeschool - GolfnGo",
      description:
        "Een golfsimulatiespel ontwikkeld in Unreal Engine, waarbij spelers de bal door obstakels moesten navigeren om de hole te bereiken.",
      image: "/GolfnGo.png",
    },
    {
      title: "Wintercircus - Tembo",
      description:
        "Interactieve webapplicatie waarbij we een tekening omvormen naar een 3D object.",
      image: "/Tembo.png",
    },
  ];

  return (
    <section
      className="projects container mx-auto px-4 py-20 flex flex-col items-center text-center"
      style={{ backgroundColor: "#121212" }}
    >
      <h2
        className="section-title text-3xl font-semibold mb-8"
        style={{ color: "#BB86FC" }}
      >
        Projecten
      </h2>
      <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card relative rounded-xl flex flex-col items-center justify-center shadow-lg overflow-hidden bg-blue-50 text-blue-900 m-2 min-h-[320px]"
            style={{
              minHeight: "320px",
              backgroundColor: "#1E1E1E",
              color: "#E0E0E0",
              margin: "0.5rem",
            }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image})`,
                zIndex: 1,
              }}
            ></div>
            {/* Overlay */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background: "rgba(18,18,18,0.75)",
                zIndex: 2,
              }}
            ></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 text-center min-h-[320px]">
              <h3
                className="project-title text-xl font-bold mb-3"
                style={{ color: "#03DAC6" }}
              >
                {project.title}
              </h3>
              <p
                className="project-description mb-6"
                style={{ color: "#E0E0E0" }}
              >
                {project.description}
              </p>
              <div className="w-full flex justify-center"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
