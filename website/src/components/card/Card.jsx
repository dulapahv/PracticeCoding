import React from "react";
import "./card.css";

const Card = ({ icon, content, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="card">
                <div className="card__icon">{icon}</div>
                <div className="card__content">
                    <p>{content}</p>
                </div>
            </div>
        </a>
    );
};

export default Card;
