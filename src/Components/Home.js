import React from 'react';
import "../Styles/Home.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import logo from '../Images/logo.svg';

function Home() {
    return (
        <div className='Home' id='Home'>
            <div className='Home__Intro'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='Home__Text'>
                    <p>Welcome to my world!</p>
                    <h1 className='Home__Name'>Hi, I'm Bharathi.</h1>
                    <h1 className='Home__Role'>Front-End Web Developer.</h1>
                </div>
                <div className='Home__Icons'>
                    <BsGithub className='Home__Icon' onClick={() => { window.location.assign("https://github.com/bharathi-v03") }} />
                    <ImLinkedin className='Home__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/bharathi-vikas") }} />
                </div>
                <button className='Resume'
                    onClick={() => { window.location.assign("https://www.canva.com/design/DAEIgRNlSDw/3IgNnmsQ6StJb3Szm89OYA/view?utm_content=DAEIgRNlSDw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink") }}>
                    View Resume
                </button>
            </div>
        </div>
    );
}

export default Home;