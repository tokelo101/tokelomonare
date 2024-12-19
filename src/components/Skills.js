import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faDatabase, faTools, faUsers, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  return (

    <section className="skills section">
        <h2 className="section-title">Technical & Soft Skills</h2>
        
        <div className="container hero-content">
        <div className="skills-grid">
          {/* Programming Languages */}
          <div className="skill-card">
            <i className="devicon-java-plain colored"></i>
            <h3>Programming Languages</h3>
            <p>Java, C#, Python, JavaScript</p>
          </div>

          {/* Web Development */}
          <div className="skill-card">
            <i className="devicon-react-original colored"></i>
            <h3>Web Development</h3>
            <p>ASP.Net, ReactJS, HTML, CSS, Bootstrap</p>
          </div>

          {/* Mobile Development */}
          <div className="skill-card">
            <i className="devicon-flutter-plain colored"></i>
            <h3>Mobile Development</h3>
            <p>Flutter</p>
          </div>

          {/* Database Design */}
          <div className="skill-card">
            <i className="devicon-postgresql-plain colored"></i>
            <h3>Database Design</h3>
            <p>PostgreSQL, MySQL</p>
          </div>

          {/* API Development */}
          <div className="skill-card">
            <FontAwesomeIcon icon={faLaptopCode} />
            <h3>API Development</h3>
            <p>Django-Rest-Framework</p>
          </div>

          {/* Tools */}
          <div className="skill-card">
            <i className="devicon-git-plain colored"></i>
            <h3>Tools</h3>
            <p>Git, Visual Studio, Docker</p>
          </div>

          {/* Soft Skills */}
          <div className="skill-card">
            <FontAwesomeIcon icon={faUsers} />
            <h3>Soft Skills</h3>
            <p>Communication, Leadership, Teamwork, Time Management</p>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Skills;
