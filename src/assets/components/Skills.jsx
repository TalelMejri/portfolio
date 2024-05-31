import React from "react";
import profileImage from "../images/skills.png";
import htmlIcon from "../images/html.png";
import cssIcon from "../images/css.png";
import jsIcon from "../images/javascript.png";
import androidStudioIcon from "../images/android-studio.png";
import androidIcon from "../images/android.png";
import cplusplusIcon from "../images/c++.png";
import firebaseIcon from "../images/firebase.png";
import reactIcon from "../images/react.png";
import javaIcon from "../images/java.png";
import kotlinIcon from "../images/kotlin.png";
import mongoDBIcon from "../images/mongo-db.png";
import nodeIcon from "../images/node.png";
import postmanIcon from "../images/postman.png";
import pythonIcon from "../images/python.png";
import vsCodeIcon from "../images/vs-code.png";
import gitIcon from "../images/git.png";
import githubIcon from "../images/github.png";
import "../styles/Skills.css";
import adobexd from "../images/adobe_xd.png"
import DotNet from "../images/dotnet.png"
import flutter from "../images/flutter.png"
import laravel from "../images/laravel.png";
import php from "../images/php.png";
import mysql from '../images/mysql.png';
import SpringBoot from '../images/springboot.png';
import VisualStudio from '../images/Visual_Studio.png';
import vue from '../images/vue.png';
import angular from '../images/angular.jpg';
import Typescript from '../images/Typescript.png';
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
        { name: "MongoDB", image: mongoDBIcon },
        { name: "Firebase", image: firebaseIcon },
        { name: "Android", image: androidIcon },
        { name: ".Net", image: DotNet },
        { name: "Flutter", image: flutter },
        { name: "Laravel", image: laravel },
        { name: "php", image: php },
        { name: "mysql", image: mysql },
        { name: "SpringBoot", image: SpringBoot },
        { name: "VueJS", image: vue },
        { name: "Angular", image: angular },
        { name: "Typescript", image: Typescript },
      ],
    },
    {
      category: "Tools I use",
      items: [
        { name: "VS Code", image: vsCodeIcon },
        { name: "Postman", image: postmanIcon },
        { name: "Git", image: gitIcon },
        { name: "Github", image: githubIcon },
        { name: "Android Studio", image: androidStudioIcon },
        { name: "Adobe XD", image: adobexd },
        { name: "Visual Studio", image: VisualStudio },
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
          As an ambitious IT student, I am eager to learn and grow in the field of technology. With a passion for problem-solving and a strong aptitude for learning new skills, I am determined to make a meaningful impact in the industry.
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
