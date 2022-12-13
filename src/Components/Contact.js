import React from 'react';
import "../Styles/Contact.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import Mail from './Mail';

function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <div className='Contact__Intro'>
                <div className='Contact__Text'>
                    <p>Reach out to me!</p>
                    <h1 className='Contact__Name'>Hire me.</h1>
                    <h1 className='Contact__Role'>Front-End Web Developer.</h1>
                    <Mail email="bharathiviji1999@gmail.com" subject="Front-End Job - regarding">
                        Mail me!
                    </Mail>
                    <a href="tel:+918870947017">Call me!</a>
                </div>
                <div className='Contact__Icons'>
                    <BsGithub className='Contact__Icon' onClick={() => { window.location.assign("https://github.com/bharathi-v03") }} />
                    <ImLinkedin className='Contact__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/bharathi-vikas") }} />
                </div>
                <button className='Contact__Resume'
                    onClick={() => { window.location.assign("https://www.canva.com/design/DAEIgRNlSDw/3IgNnmsQ6StJb3Szm89OYA/view?utm_content=DAEIgRNlSDw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink") }}>
                    View Resume
                </button>
            </div>
        </div>
    );
}

export default Contact;