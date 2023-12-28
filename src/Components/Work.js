import React from 'react';
import "../Styles/Work.css";
import AU from "../Images/Work/AU.png";
import Infy from "../Images/Work/Infy.png";
import Tcs from "../Images/Work/Tcs.png";

function Work() {
    return (
        <div className='Work' id='Work'>
            <div className='Work__Col1'>
                <h1 className='Edu__Title'>Education</h1>
                <h2 className='Edu__Clg'>
                    <img className='Edu__Logo' src={AU} alt='' /> College of Engineering, Guindy, Anna University
                </h2>
                <p>B.E. Agricultural & Irrigation Engineering</p>
                <p className='Year'>AUG 2017 - JUNE 2021</p>
                <p>Completed with First Class - 75%</p>
            </div>
            <div className='Work__Col2'>
                <h1 className='Work__Title'>Experience</h1>
                <div className='Exp__div'>
                    <h2 className='Work__Clg'>
                        <img className='Work__Logo' src={Tcs} alt='' /> Tata Consultancy Services
                    </h2>
                    <p className='Work__Role'>Systems Engineer</p>
                    <p className='Year2'>Jul 2023 - Present</p>
                </div>
                <div className='Exp__div'>
                    <h2 className='Work__Clg'>
                        <img className='Work__Logo' src={Infy} alt='' /> Infosys Limited
                    </h2>
                    <p className='Work__Role'>Systems Engineer</p>
                    <p className='Year2'>AUG 2021 - Apr 2023</p>
                </div>
            </div>
        </div>
    );
}

export default Work;