import React from "react";
import "./header.css";
import profile_pic from "../../assets/profile_pic.png";

const Header = () => {
    return (
        <div className="header section_padding">
            <div className="header-content">
                <h1 className="gradient_text slide-in-blurred-left">
                    Greetings!
                    <br />
                    I'm Dulapah Vibulsanti
                </h1>
                <p className="flip-in-hor-bottom">
                    A year 2 student in Software Engineering @{" "}
                    <span className="header-content--kmitl">KMITL</span>,
                    Bangkok
                    <br />
                    Cadet @{" "}
                    <span className="header-content--42">42 Bangkok</span>
                </p>
                <a href="#aboutme">
                    <div className="header-content__btn heartbeat">
                        <button type="button">Discover me!</button>
                    </div>
                </a>
            </div>
            <div className="header-image rotate-in-2-cw">
                <img src={profile_pic} alt="profile_pic" />
            </div>
        </div>
    );
};

export default Header;
