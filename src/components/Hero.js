import React from "react";
import './Hero.css';
<<<<<<< HEAD
import profilePhoto from "../images/profilePhoto.jpg";
=======
>>>>>>> e7d35daf4a1e953906dc8940dbc3998502fcc8c9

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        {/* Profile Image */}
        <div className="profile-image">
<<<<<<< HEAD
        <img src={profilePhoto} alt="Profile" />
=======
        <img src='/images/tokelo3.jpg' alt="Profile" />
>>>>>>> e7d35daf4a1e953906dc8940dbc3998502fcc8c9
        </div>

        {/* Hero Text */}
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Tokelo Monare</span></h1>
          <p className="subheading">Backend Developer | API Developer | Tech Enthusiast | Problem Solver</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
