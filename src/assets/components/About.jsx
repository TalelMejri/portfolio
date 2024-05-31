import React from "react";
import profileImage from "../images/about.png";
// import anotherImage from '../assets/images/gwen.jpg'; // Add this line for the new image
import { Typewriter } from "react-simple-typewriter";
import "../styles/About.css";

const About = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="section-text">
          <h2>Hi There!</h2>
          <h1>I'm Mejri Talel</h1>
          <div className="typewriter-container">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Mobile Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
        </div>
        <div className="section-image-container">
          <img
            src={profileImage}
            alt="Mostafa Adel"
            className="section-image"
          />
        </div>
      </div>

      <div id="about" className="content-section">
        <div className="content-text">
          <h2>Let me introduce myself</h2>
          <p>
            As a versatile Software Engineer, Backend Engineer, Full Stack
            Engineer, and Competitive Programmer, I bring a wealth of expertise
            in crafting robust software solutions. With a solid foundation in
            computer science principles, I architect and implement backend
            systems, design intuitive user interfaces, and excel in
            problem-solving through competitive programming.
          </p>
          <a
            className="show-cv-button"
            href="https://drive.google.com/drive/folders/1jCZhFozVCMZVrHq68SO9IYhV3II23V2Z?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
