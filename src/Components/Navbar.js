import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

function Navbar() {

    // to access a DOM element directly
    const navRef = useRef();

    // hold a mutable value in its .current property
    // onClick add or remove "Navbar__Responsive" className
    const showNavbar = () => {
        navRef.current.classList.toggle("Navbar__Responsive");
    };

    const [navColor, setnavColor] = useState("transparent");
    const [color, setColor] = useState("#C5C6C7")
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#66fcf2cd") : setnavColor("transparent");
        window.scrollY > 10 ? setColor("#1F2833") : setColor("#C5C6C7");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div className="Header" id="Header"
            style={{
                backgroundColor: navColor,
                color: color
            }}>
            <div className='Navbar__Title' onClick={() => document.body.scrollTop = document.documentElement.scrollTop = 0}>
                {"<BharathiV />"}
            </div>
            <nav ref={navRef} className='Navbar__Items'>
                <div onClick={() => { showNavbar(); document.getElementById('About').scrollIntoView() }}
                    className="Navbar__Link1"><p className="Navbar__LinkText">ABOUT</p></div>
                <div onClick={() => { showNavbar(); document.getElementById('Project').scrollIntoView() }}
                    className="Navbar__Link2"><p className="Navbar__LinkText">PROJECTS</p></div>
                <div onClick={() => { showNavbar(); document.getElementById('Work').scrollIntoView() }}
                    className="Navbar__Link3"><p className="Navbar__LinkText">WORK</p></div>
                <div onClick={() => { showNavbar(); document.getElementById('Contact').scrollIntoView() }}
                    className="Navbar__Link4"><p className="Navbar__LinkText">CONTACT</p></div>
                <button
                    className="Navbar__Button Navbar__CloseButton"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="Navbar__Button"
                style={{
                    color: color
                }}
                onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    );
}

export default Navbar;