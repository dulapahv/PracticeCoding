import React from "react";
import { Feature, Timeline } from "../../components";
import "./aboutme.css";

const Aboutme = () => {
    return (
        <div className="aboutme section_margin" id="aboutme">
            <div className="aboutme__heading">
                <h1 className="gradient_text">
                    Who I Am?
                    <br />
                    What Makes Me Unique?
                </h1>
            </div>
            <div className="aboutme__container">
                <Feature
                    title="Personality"
                    text="A multi-talented individual, a quick learner, and a fast-adapting person."
                />
                <Feature
                    title="Knowledge Base"
                    text="Experienced in the backend and can also do the frontend. I am also responsible, and able to cooperate with other team members."
                />
                <Feature
                    title="Future Goals"
                    text="Looking to improve my skills and abilities so that I can grow professionally. I will be an active and valued member in the organization, being resourceful, innovative, and flexible."
                />
            </div>
            <div className="timeline__container">
                <h1 className="gradient_text">My Path to Achieving a Better Education</h1>
                <div className="timeline__container--content">
                    <Timeline />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
