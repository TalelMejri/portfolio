import React from "react";
import "../styles/Projects.css";
import profileImage from "../images/projects.png";


const projects = [
  {
    name: "Simulation Du Jeu Heroes Magic War En Graphique 2D",
    image: require("../images/projects/magic_war.png"),
    technologies: ["C", "SDL"],
    date: "2021",
    url: "https://github.com/TalelMejri/Heroes_Magic_War_Mode_Graphique-2D-",
    LinkYoutube: "https://www.youtube.com/watch?v=y4GEPDAkAJ0&t=409s",
  },
  {
    name: "Social Media App",
    image: require("../images/projects/social_media.png"),
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MYSQL"],
    date: "2022",
    url: "https://github.com/TalelMejri/Social-Media-project",
    LinkYoutube: "https://www.youtube.com/watch?v=jhM85mevtjs",
  },
  {
    name: "FoodBundle",
    image: require("../images/projects/food.png"),
    technologies: [
      "Laravel",
      "VueJs",
      "Vuetify",
      "JWT",
      "MYSQL",
    ],
    date: "jan 2023",
    url: "https://github.com/TalelMejri/FoodBundle",
    LinkYoutube: "https://www.youtube.com/watch?v=iHbIvqqrqns&t=199s",

  },
 
];

const Projects = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="section-text">
          <h1>Want to see my projects?</h1>
          <p>
            Here is a selection of my recent projects, each reflecting a distinct journey where I have applied my expertise and creativity to develop cutting-edge solutions. These projects demonstrate my ability to tackle diverse challenges and innovate across various domains. Feel free to explore and discover the wide array of work I have been involved in.
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
              {project.LinkYoutube && (
                <div>
                  <a href={project.LinkYoutube} target="_blank" id="content_youtube_btn" rel="noopener noreferrer">
                    <button className="project-button">Watch on Youtube</button>
                  </a>
                </div>
              )}
              <p className="project-date">{project.date}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
