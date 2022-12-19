import React from "react";
import "./timeline.css";

const Timeline = () => {
    return (
        <div className="timeline">
            <div className="container right-highlight">
                <div className="content highlight">
                    <h2 className="black">2021-Present</h2>
                    <p className="black">
                        <b>
                            King Mongkut Institute of Technology Ladkrabang
                            (KMITL)
                        </b>
                    </p>
                    <p className="black detail">
                        Bachelor Degree in Software Engineering
                    </p>
                    <p className="black">
                        <b>42 Bangkok</b>
                    </p>
                    <p className="black detail">Cadet & C Piscine level 8</p>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>2018-2021</h2>
                    <p>Suankularb Wittayalai School</p>
                    <p className="detail">Science-Mathematics</p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>2013-2018</h2>
                    <p>Kasintorn St. Peter School</p>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>2008-2013</h2>
                    <p>St. Francis Xavier School</p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
