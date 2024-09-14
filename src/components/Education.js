import React from "react";
import './Education.css';

const Education = () => {
  return (
    <section className="education section">
      <div className="container">
        {/* Education Overview */}
        <div className="education-content">
          <div className="education-text">
            <h2>Education</h2>
            <p>
              I hold a Bachelor's Degree in Computer Science and Informatics from the University of Johannesburg. My academic journey has equipped me with a strong foundation in computer science, software engineering, and technology management.
            </p>
            <p>
              During my studies, I engaged in various projects, research, and extracurricular activities that honed my skills and prepared me for a career in technology.
            </p>
          </div>

          {/* Graduation Image */}
          <div className="education-image">
            <img src="path_to_your_graduation_image.jpg" alt="Graduation" />
          </div>
        </div>

        {/* Achievements & Projects */}
        <div className="achievements">
          <h3>Achievements & Projects</h3>
          <div className="achievements-grid">
            <div className="achievement-card">
              <h4>🎓 Degree Awarded</h4>
              <p>Graduated with Bachelor in 2024.</p>
            </div>
            <div className="achievement-card">
              <h4>💡 Notable Project</h4>
              <p>Led a team project on Informatics.</p>
            </div>
            <div className="achievement-card">
              <h4>🏆 Award</h4>
              <p>Received a Certificate for a short course in Artificial Inleligence in the 4IR.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
