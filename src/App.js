import React from "react";
import './App.css';
import './components/Skills'
import Skills from "./components/Skills";
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import AboutMe from "./components/Aboutme";
import Education from "./components/Education";

const App = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero></Hero>

      {/* About Section */}
        <AboutMe></AboutMe>
      
      {/* Skills Section */}
          <Skills></Skills>

        <Education></Education>
      {/* Projects Section */}
          <Projects></Projects>
    </div>
  );
};

export default App;
