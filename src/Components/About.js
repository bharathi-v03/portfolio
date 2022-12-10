import React from 'react';
import "../Styles/About.css";
import AboutImage from "../Images/about.png";
import HTML5 from "../Images/Logos/HTML5.png";
import CSS3 from "../Images/Logos/css3.png";
import Js from "../Images/Logos/js.png";
import reactjs from "../Images/Logos/reactjs.png";
import redux from "../Images/Logos/redux.png";
import bootstrap from "../Images/Logos/bootstrap.png";

function About() {
    return (
        <div className='About'>
            <div className='About__Col1'>
                <img className='About__Img' src={AboutImage} alt='' />
            </div>
            <div className='About__Col2'>
                <h1 className='About__Title'>About</h1>
                <p>I'm Bharathi and my interests are in <b>Front End Development</b>. This includes <b>JavaScript</b>, building responsive Single-Page-Apps (SPA) in <b>React.js</b> and good front-end coding skills.</p>
                <div className='Logo__Images'>
                    <img className='Logo' src={HTML5} alt='html' title='HTML5' />
                    <img className='Logo' src={CSS3} alt='css' title='CSS3' />
                    <img className='Logo' src={Js} alt='' title='JavaScript' />
                    <img className='Logo' src={reactjs} alt='' title='ReactJS' />
                    <img className='Logo' src={redux} alt='' title='Redux' />
                    <img className='Logo' src={bootstrap} alt='' title='Bootstrap' />
                </div>
            </div>
        </div>
    );
}

export default About;