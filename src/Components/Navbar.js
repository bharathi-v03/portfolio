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

    const Scroll = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    const scrollToAbout = () => {
        document.body.scrollTop = document.documentElement.scrollTop = window.innerHeight
    }

    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("rgb(105 25 255)");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("rgba(120, 0, 176, 0.782)") : setnavColor("rgb(105 25 255)");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div className="Header"
            style={{
                backgroundColor: navColor,
                height: navSize,
                transition: "all 1s"
            }}>
            <div className='Navbar__Title' onClick={() => Scroll()}>
                {"<BharathiV />"}
            </div>
            <nav ref={navRef} className='Navbar__Items'>
                <div onClick={() => { showNavbar(); scrollToAbout(); }}
                    className="Navbar__Link1"><p className="Navbar__LinkText">ABOUT</p></div>
                <div onClick={() => { showNavbar() }}
                    className="Navbar__Link2"><p className="Navbar__LinkText">PROJECTS</p></div>
                <div onClick={() => { showNavbar() }}
                    className="Navbar__Link3"><p className="Navbar__LinkText">EXPERIENCE</p></div>
                <div onClick={() => { showNavbar() }}
                    className="Navbar__Link4"><p className="Navbar__LinkText">CONTACT</p></div>
                <button
                    className="Navbar__Button Navbar__CloseButton"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="Navbar__Button" onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    );
}

export default Navbar;