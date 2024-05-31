import React from "react";
import profileImage from "../images/skills.png";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import jsIcon from "../images/javascript.png";
import androidStudioIcon from "../images/android-studio.png";
import androidIcon from "../images/android.png";
import cplusplusIcon from "../images/c++.png";
import firebaseIcon from "../images/firebase.png";
import googleCloudPlatformIcon from "../images/google-cloud-platform.png";
import reactIcon from "../images/react.png";
import javaIcon from "../images/java.png";
import kotlinIcon from "../images/kotlin.png";
import mongoDBIcon from "../images/mongo-db.png";
import nodeIcon from "../images/node.png";
import postgreSQLIcon from "../images/postgresql.png";
import postmanIcon from "../images/postman.png";
import pythonIcon from "../images/python.png";
import vsCodeIcon from "../images/vs-code.png";
import gitIcon from "../images/git.png";
import githubIcon from "../images/github.png";
import "../styles/Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Professional Skillset",
      items: [
        { name: "JavaScript", image: jsIcon },
        { name: "C/C++", image: cplusplusIcon },
        { name: "Kotlin", image: kotlinIcon },
        { name: "Python", image: pythonIcon },
        { name: "Java", image: javaIcon },
        { name: "Node.js", image: nodeIcon },
        { name: "React", image: reactIcon },
        { name: "HTML", image: htmlIcon },
        { name: "CSS", image: cssIcon },
        { name: "PostgreSQL", image: postgreSQLIcon },
        { name: "MongoDB", image: mongoDBIcon },
        { name: "Firebase", image: firebaseIcon },
        { name: "Android", image: androidIcon },
      ],
    },
    {
      category: "Tools I use",
      items: [
        { name: "VS Code", image: vsCodeIcon },
        { name: "Postman", image: postmanIcon },
        { name: "Google Cloud Platform", image: googleCloudPlatformIcon },
        { name: "Git", image: gitIcon },
        { name: "Github", image: githubIcon },
        { name: "Android Studio", image: androidStudioIcon },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="section-image-container">
          <img
            src={profileImage}
            alt="Mostafa Adel"
            className="section-image"
          />
        </div>
        <div className="section-text">
          <h1>Let me say something!</h1>
          <p>
            Developing apps is my passion. I've explored various fields, but
            backend and frontend development are my true calling. These areas
            let me create innovative applications and enhance user experiences
            across devices. Scroll down to see my technical skills and tools.
          </p>
        </div>
      </div>
      <div id="skills" className="content-section">
        <div className="content-text">
          <div className="skills-grid">
            {skills.map((skillCategory, index) => (
              <div className="skills-box" key={index}>
                <h2>{skillCategory.category}</h2>
                <ul>
                  {skillCategory.items.map((skill, idx) => (
                    <li key={idx}>
                      <div className="skill-item">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="skill-icon"
                        />
                        <span>{skill.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
