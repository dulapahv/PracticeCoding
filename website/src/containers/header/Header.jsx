import React from "react";
import "./header.css";
import profile_pic from "../../assets/profile_pic.png";

const Header = () => {
    return (
        <div className="header section_padding">
            <div className="header-content ">
                <h1 className="gradient_text tracking-in-expand">
                    Greetings!
                    <br />
                    I'm Dulapah Vibulsanti
                </h1>
                <p className="flip-in-hor-bottom">
                    A year 2 student in Software Engineering @ KMITL, Bangkok
                    <br />
                    Cadet @ 42Bangkok
                </p>
            </div>
            <div className="header-image rotate-in-2-cw">
                <img src={profile_pic} alt="profile_pic" />
            </div>
        </div>
    );
};

export default Header;
