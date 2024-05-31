import React from "react";
import "../styles/Projects.css";
import profileImage from "../images/projects.png";


const projects = [
  {
    name: "Library Management System",
    image: require("../images/projects/library.png"),
    technologies: ["JavaScript", "Express.js", "Node.js", "PostgreSQL"],
    date: "Mar 2024",
    url: "https://github.com/mostafadelgouda/Library-Management-System",
  },
  {
    name: "Blogs",
    image: require("../images/projects/blogs.jpeg"),
    technologies: ["JavaScript", "Express.js", "Node.js", "MongoDB", "JWT"],
    date: "Feb 2024",
    url: "https://github.com/mostafadelgouda/Blog",
  },
  {
    name: "Product Calculator",
    image: require("../images/projects/product-calculator.png"),
    technologies: [
      "Kotlin",
      "Android",
      "Jetpack Compose",
      "SQLite",
      "Material Design",
    ],
    date: "Jan 2024",
    url: "https://github.com/mostafadelgouda/ProductCalculator",
  },
  {
    name: "Albums",
    image: require("../images/projects/albums.png"),
    technologies: ["Kotlin", "Android", "Jetpack Compose", "API"],
    date: "Dec 2024",
    url: "https://github.com/mostafadelgouda/Albums",
  },
  {
    name: "Sign Language Conversation",
    image: require("../images/projects/sign-language-conversation.jpg"),
    technologies: [
      "Python",
      "Tkinter",
      "Deep Learning",
      "Neural Networks",
      "VGG16",
      "PyAudio",
      "Blender",
    ],
    date: "May 2022",
    url: "https://drive.google.com/drive/folders/12fMyBN_a5_MdeSQUdC_TNQrScZWPGVPI?usp=sharing",
  },
  {
    name: "Maze Game",
    image: require("../images/projects/maze.png"),
    technologies: ["C++", "OpenGL", "3-d Design"],
    date: "Jan 2022",
    url: "https://github.com/mostafadelgouda/Maze-Game",
  },
];

const Projects = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="section-text">
          <h1>Want to see my projects?</h1>
          <p>
            Below, you'll find a showcase of some of my recent projects. Each
            project represents a unique journey where I've applied my skills and
            creativity to develop innovative solutions. Take a look around and
            explore the diverse range of projects I've worked on.
          </p>
        </div>
        <div className="section-image-container">
          <img
            src={profileImage}
            alt="Mostafa Adel"
            className="section-image"
          />
        </div>
      </div>

      <div id="projects" className="content-section">
        <h3 className="projects-title">Open Source Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.url}
              className="project-card"
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <h3>{project.name}</h3>
              <ul>
                {project.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <p className="project-date">{project.date}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
