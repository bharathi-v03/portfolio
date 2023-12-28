import React from 'react';
import "../Styles/About.css";
import HTML5 from "../Images/Logos/HTML5.png";
import CSS3 from "../Images/Logos/css3.png";
import Js from "../Images/Logos/js.png";
import reactjs from "../Images/Logos/reactjs.png";
import redux from "../Images/Logos/redux.png";
import mui from "../Images/Logos/material-ui.svg";
import bootstrap from "../Images/Logos/bootstrap.png";
import git from "../Images/Logos/git.png"

function About() {
    return (
        <div className='About' id='About'>
            <div className='About__Col1'>
                <h1 className='About__Title'>About</h1>
                <p>I'm a passionate <b>Front-End Developer</b> with a knack for unlocking the full potential of web interfaces. My expertise lies in harnessing the power of <b>ReactJS</b>, <b>JavaScript</b>, and a spectrum of cutting-edge front-end technologies. With a proven ability to transform concepts into captivating user experiences, I thrive on collaborating with cross-functional teams to bring creative visions to life.</p>
            </div>
            <div className='About__Col2'>
                <h1 className='About__Title2'>Technical skills</h1>
                <div className='Logo__Images'>
                    <div className='L__Div'>
                        <img className='Logo' src={HTML5} alt='html' title='HTML5' />
                        <p>HTML5</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={CSS3} alt='html' title='CSS3' />
                        <p>CSS3</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={Js} alt='' title='JavaScript' />
                        <p>JavaScript</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={reactjs} alt='' title='ReactJS' />
                        <p>ReactJS</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={redux} alt='' title='Redux' />
                        <p>Redux</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={bootstrap} alt='' title='Bootstrap' />
                        <p>Bootstrap</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={mui} alt='' title='Material UI' />
                        <p>Material UI</p>
                    </div>
                    <div className='L__Div'>
                        <img className='Logo' src={git} alt='' title='Git' />
                        <p>Git</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;