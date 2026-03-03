import React from 'react';
import "../Styles/About.css";
import HTML5 from "../Images/Logos/HTML5.png";
import CSS3 from "../Images/Logos/css3.png";
import Js from "../Images/Logos/js.png";
import reactjs from "../Images/Logos/reactjs.png";
import redux from "../Images/Logos/redux.png";
import mui from "../Images/Logos/material-ui.svg";
import bootstrap from "../Images/Logos/bootstrap.png";
import git from "../Images/Logos/git.png";
import tailwind from "../Images/Logos/Tailwind_CSS_Logo.svg.png";
import webpack from "../Images/Logos/webpack.png";
import moment from 'moment';

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

    // Round to nearest whole number
    const roundedYears = Math.round(totalYears);

    const techSkills = [
        {
            title: 'HTML5',
            srcImg: HTML5
        },
        {
            title: 'CSS3',
            srcImg: CSS3
        },
        {
            title: 'JavaScript',
            srcImg: Js
        },
        {
            title: 'ReactJS',
            srcImg: reactjs
        },
        {
            title: 'Redux Toolkit',
            srcImg: redux
        },
        {
            title: 'Bootstrap',
            srcImg: bootstrap
        },
        {
            title: 'Material UI',
            srcImg: mui
        },
        {
            title: 'Tailwind CSS',
            srcImg: tailwind
        },
        {
            title: 'Git',
            srcImg: git
        },
        {
            title: 'Webpack',
            srcImg: webpack
        }
    ];

    return (
        <div className='About' id='About'>
            <div className='About__Col1'>
                <h1 className='About__Title'>About</h1>
                <p>I'm a passionate <b>Front-End Developer</b> with <b>{roundedYears}+</b> years of experience. My expertise lies in harnessing the power of <b>ReactJS</b>, <b>JavaScript</b>, <b>Redux Toolkit</b>, and a spectrum of cutting-edge front-end technologies. With a proven ability to transform concepts into captivating user experiences, I thrive on collaborating with cross-functional teams to bring creative visions to life.</p>
            </div>
            <div className='About__Col2'>
                <h1 className='About__Title2'>Technical skills</h1>
                <div className='Logo__Images'>
                    {techSkills.map((skill) =>
                        <div className='L__Div' key={skill.title}>
                            <img className='Logo' src={skill.srcImg} alt='' title={skill.title} />
                            <p>{skill.title}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;