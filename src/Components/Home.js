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
                    <p>Welcome to my corner of the digital realm!</p>
                    <h1 className='Home__Name'>Hi, I'm Bharathi.</h1>
                    <h1 className='Home__Role'>Front-End Web Developer.</h1>
                </div>
                <div className='Home__Icons'>
                    <BsGithub className='Home__Icon' onClick={() => { window.open("https://github.com/bharathi-v03") }} />
                    <ImLinkedin className='Home__Icon' onClick={() => { window.open("https://www.linkedin.com/in/bharathi-vikas") }} />
                </div>
                <button
                    className="Resume"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/files/PortfolioResume.pdf";
                        link.download = "Bharathi-Resume.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                >
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default Home;