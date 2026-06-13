import React from "react";
import "../Styles/About.css";
import javaScript from "../Images/Logos/js.png";
import reactjs from "../Images/Logos/reactjs.png";
import redux from "../Images/Logos/redux.png";
import mui from "../Images/Logos/material-ui.svg";
import git from "../Images/Logos/git.png";
import tailwind from "../Images/Logos/Tailwind_CSS_Logo.svg.png";
import webpack from "../Images/Logos/webpack.png";
import nextjs from "../Images/Logos/nextjs.webp";
import typescript from "../Images/Logos/typescript.svg.png";
import node from "../Images/Logos/Node.js_logo.svg";
import gcp from "../Images/Logos/GCP.png";
import jenkins from "../Images/Logos/jenkins.png";
import sass from "../Images/Logos/sass.png";
import moment from "moment";

function About() {
  const calculateYears = (start, end) => {
    const startDate = moment(start);
    const endDate = moment(end);
    return endDate.diff(startDate, "years", true); // true → gives decimal years
  };

  // Period 1: Aug 09, 2021 → Apr 26, 2023
  const period1 = calculateYears("2021-08-09", "2023-04-26");

  // Period 2: Jul 19, 2023 → Today
  const period2 = calculateYears("2023-07-19", moment());

  const totalYears = period1 + period2;

  // Round to lowest whole number
  const roundedYears = Math.floor(totalYears);

  const techSkills = [
    {
      title: "ReactJS",
      srcImg: reactjs,
    },
    {
      title: "NextJS",
      srcImg: nextjs,
    },
    {
      title: "JavaScript",
      srcImg: javaScript,
    },
    {
      title: "TypeScript",
      srcImg: typescript,
    },
    {
      title: "Redux",
      srcImg: redux,
    },
    {
      title: "NodeJS",
      srcImg: node,
    },
    {
      title: "SASS",
      srcImg: sass,
    },
    {
      title: "Tailwind",
      srcImg: tailwind,
    },
    {
      title: "MUI",
      srcImg: mui,
    },
    {
      title: "Webpack",
      srcImg: webpack,
    },
    {
      title: "Git",
      srcImg: git,
    },
    {
      title: "GCP",
      srcImg: gcp,
    },
    {
      title: "Jenkins",
      srcImg: jenkins,
    },
  ];

  return (
    <div className="About" id="About">
      <div className="About__Col1">
        <h1 className="About__Title">About me</h1>
        <p>
          <strong>Frontend Engineer</strong> with{" "}
          <strong>{roundedYears}+ years of experience</strong> building
          enterprise-scale web applications using <strong>React</strong>,{" "}
          <strong>Next.js</strong>, and modern frontend technologies.
          Experienced in <strong>performance optimization</strong>,{" "}
          <strong>application modernization</strong>,{" "}
          <strong>state management</strong>, and{" "}
          <strong>API integration</strong>. Passionate about creating{" "}
          <strong>scalable</strong>, <strong>accessible</strong>, and{" "}
          <strong>user-centric experiences</strong> that drive business impact.
        </p>
      </div>
      <div className="About__Col2">
        <h1 className="About__Title2">Tech Stack</h1>
        <div className="Logo__Images">
          {techSkills.map((skill) => (
            <div className="L__Div" key={skill.title}>
              <img
                className="Logo"
                src={skill.srcImg}
                alt=""
                title={skill.title}
              />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
