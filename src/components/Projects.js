import React from "react";
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Autoworx Barnyard Online",
      description: "A Web application and Mobile application-based workshop management system.",
      technologies: "React, Flutter, Django, Postgres, Docker, Git",
      link: "https://github.com/IFMTYP2024"
    },
    {
      title: "ResBarbers ",
      description: "Developed a dynamic and responsive platform to link barbers with potential clients. Integrated a user-friendly interface with backend functionalities to manage appointments and client profiles.",
      technologies: "Asp.Net, SQL Server, Git",
      link: "https://github.com/tokelo101/ResBarbers"
    },
    {
      title: "LocoBrands E-commerce Store",
      description: "An online e-commerce store with a shopping cart and payment gateway integration.",
      technologies: "ASP.Net, SQL Server",
      link: "https://github.com/your-ecommerce-store"
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">Tech Stack: {project.technologies}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;