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
             I am currently pursuing a degree in Information technology with a focus on Information Systems Development, and have gained experience in different technology in addition to couple frameworks. My coursework has provided me with a solid foundation in computer science and technology, and I am now eager to apply my knowledge in a real-world setting.
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
