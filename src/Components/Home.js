import React from 'react';
import "../Styles/Home.css";

function Home() {
    return (
        <div className='Home'>
            <div className='Home__Intro'>
                <div className='Home__Text'>
                    <p>Welcome to my world!</p>
                    <h1 className='Home__Name'>Hi, I'm Bharathi</h1>
                    <h1 className='Home__Role'>Front-End Web Developer.</h1>
                </div>
                <button className='Resume'>View Resume</button>
            </div>
        </div>
    );
}

export default Home;