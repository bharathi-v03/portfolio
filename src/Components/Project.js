import React from 'react';
import "../Styles/Project.css";
import designo from "../Images/Projects/Designo.png";
import amazon from "../Images/Projects/Amazon.png";
import { AiFillGithub } from "react-icons/ai";

function Project() {
    return (
        <div className='Project' id='Project'>
            <h1 className='Project__Title'>Projects</h1>
            <div className='Project__Content'>
                <div className='Project1'>
                    <img className='Project__Img' src={designo} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>DESIGNO</h2>
                        <p className='Project__Caption'>Website building</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>REACT</div>
                            <div className='Techs'>FRAMER-MOTION</div>
                            <div className='Techs'>REACT-ICONS</div>
                            <div className='Techs'>LEAFLET</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://designo-website-building.netlify.app/") }}>
                                🡪 VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/bharathi-v03/designo") }}>
                                <AiFillGithub className='git' /> FRONTEND
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Project1'>
                    <img className='Project__Img' src={amazon} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>Amazon(Clone)</h2>
                        <p className='Project__Caption'>E-commerce</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>REACT</div>
                            <div className='Techs'>REDUX</div>
                            <div className='Techs'>BOOTSTRAP</div>
                            <div className='Techs'>FIREBASE</div>
                            <div className='Techs'>MATERIAL-UI</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://amazon-clonev2.netlify.app/") }}>
                                🡪 VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/bharathi-v03/amazon-clonev2") }}>
                                <AiFillGithub className='git' /> FRONTEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;