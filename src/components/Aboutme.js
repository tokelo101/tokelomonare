import React from "react";
import './Aboutme.css';
import techStack from '../images/tech_Setup.jpg';
import aboutMe from '../images/blue-code.png';

const AboutMe = () => {
  return (
    <section className="about-me section">
      <div className="container">
        {/* Profile Introduction */}
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
            I am a dedicated Computer Science and Informatics student at the University of 
            Johannesburg, with a strong passion for programming, problem-solving, and a robust 
            foundation in mathematics. My academic background includes Calculus I, Linear 
            Algebra, and Discrete Mathematics, which have strengthened my analytical and 
            computational thinking skills. With over three years of experience in software 
            engineering, I’ve developed a solid understanding of Object-Oriented Programming, 
            Data Structures and Algorithms, Design Patterns, and Advanced Database Design. 
            My expertise extends to Web Development using ASP.Net, and Data Communications. I 
            am proficient in Java, C#, SQL, and C++, with hands-on experience in API Development, 
            RESTful APIs, Mobile Development (Flutter), and building dynamic web applications 
            using ReactJS. 
            EDUCATION 
            </p>
            <p>
              When I'm not coding, you can find me on the road, I run a lot, and a bit of calisthenics.
            </p>
          </div>

          {/* Profile Image */}
          <div className="about-image">
            <img src={aboutMe} alt="Profile" />
          </div>
        </div>

        {/* Fun Facts & Interests */}

        <div className="container hero-content">
        <div className="fun-facts">
          <h3>Fun Facts</h3>
          <div className="facts-grid">
            <div className="fact-card">
              <h4>🎮 Gaming</h4>
              <p>I'm an avid gamer and love exploring new virtual worlds when I'm not coding.</p>
            </div>
            <div className="fact-card">
              <h4>💻 Favorite Language</h4>
              <p>My favorite programming language is Java. It's powerful yet simple!</p>
            </div>
            <div className="fact-card">
              <h4>☕ Coffee Addict</h4>
              <p>Can't start my day without a fresh cup of coffee. It's my fuel for coding marathons.</p>
            </div>
          </div>
        </div>
        </div>

        {/* Tech Setup Image Section */}
        <div className="tech-setup">
          <h3>My Tech Setup</h3>
          <div className="setup-images">
            <img src={techStack} alt="Tech Setup" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
