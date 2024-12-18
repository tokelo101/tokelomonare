import React from "react";
import './Hero.css';
import profilePhoto from "../images/profilePhoto.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        {/* Profile Image */}
        <div className="profile-image">
        <img src={profilePhoto} alt="Profile" />
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
