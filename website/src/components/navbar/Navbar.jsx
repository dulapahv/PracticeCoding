import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Menu = () => (
    <>
        <p>
            <a href="#aboutme">About Me</a>
        </p>
        <p>
            <a href="#experiences">Experiences</a>
        </p>
        <p>
            <a href="#projects">Projects</a>
        </p>
        <p>
            <a href="#features">Contact</a>
        </p>
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar scale-up-bottom">
            <div className="navbar__links--left">
                <p>
                    <a href="https://dulapahv.github.io/">{">"} DulapahV</a>
                </p>
            </div>
            <div className="navbar__links--middle">
                <Menu />
            </div>
            <div className="navbar__links--right">
                <p>
                    <a
                        href="https://github.com/dulapahv"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Github
                    </a>
                </p>
            </div>
            <div className="navbar__menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    ></RiCloseLine>
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    ></RiMenu3Line>
                )}
                {toggleMenu && (
                    <div className="navbar__menu__container scale-up-tr">
                        <Menu />
                        <p>My Github</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
