import React from "react";
import "../Styles/Project.css";
import designo from "../Images/Projects/Designo.png";
import amazon from "../Images/Projects/Amazon.png";
import invoice from "../Images/Projects/Invoice.png";
import moviematrix from "../Images/Projects/movie-matrix.png";
import { AiFillGithub } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import contributions from "./Data/Contributions.json";

function Project() {
  const projects = [
    {
      title: "MOVIE MATRIX",
      caption: "Movie Discovery Platform",
      image: moviematrix,
      techs: ["NEXTJS", "REACTJS", "TMDB API", "TAILWIND CSS", "TYPESCRIPT"],
      website: "https://movie-matrix-next.netlify.app/",
      github: "https://github.com/bharathi-v03/movie-matrix",
    },
    {
      title: "INVOICE-CRUD",
      caption: "Invoice Generator with CRUD Operations",
      image: invoice,
      techs: [
        "REACTJS",
        "MATERIAL-UI",
        "MOCKAPI.IO",
        "FRAMER-MOTION",
        "BOOTSTRAP",
      ],
      website: "https://invoice-crud-operations.netlify.app/",
      github: "https://github.com/bharathi-v03/invoice-crud",
    },
    {
      title: "DESIGNO",
      caption: "UI-Focused React Application with Custom CSS Architecture",
      image: designo,
      techs: ["REACTJS", "FRAMER-MOTION", "REACT-ICONS", "LEAFLET"],
      website: "https://designo-website-building.netlify.app/",
      github: "https://github.com/bharathi-v03/designo",
    },
    {
      title: "AMAZON (CLONE)",
      caption: "E-commerce Website",
      image: amazon,
      techs: ["REACTJS", "REDUX", "BOOTSTRAP", "FIREBASE", "MATERIAL-UI"],
      website: "https://amazon-clonev2.netlify.app/",
      github: "https://github.com/bharathi-v03/amazon-clonev2",
    },
  ];
  return (
    <div className="Project" id="Project">
      <h1 className="Project__Title">Core Expertise</h1>
      <div className="Project__Cards__Div">
        {contributions.map((card, index) => {
          return (
            <div className="Project__Card" key={index}>
              <p className="Card__Content">
                <b>{card.title}</b>
              </p>
              <p className="Card__Content">{card.text}</p>
            </div>
          );
        })}
      </div>
      <h1 className="Project__Title">Personal Projects</h1>
      <div className="Project__Content">
        {projects.map((project) => (
          <div className="Project1" key={project.title}>
            <img
              className="Project__Img"
              src={project.image}
              alt={project.title}
            />

            <span className="blue-overlay"></span>

            <div className="Project__Info">
              <h2 className="Project__Info__Title">{project.title}</h2>

              <p className="Project__Caption">{project.caption}</p>

              <div className="Project__Techs">
                {project.techs.map((tech) => (
                  <div className="Techs" key={tech}>
                    {tech}
                  </div>
                ))}
              </div>

              <div className="Project__Buttons">
                <button
                  className="Project__Btn"
                  onClick={() => window.open(project.website, "_blank")}
                >
                  <FaArrowRight className="git" /> WEBSITE
                </button>

                <button
                  className="Project__Btn"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <AiFillGithub className="git" /> GITHUB
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
