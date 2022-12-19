import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, title, description, url }) => {
    return (
        <div className="projects__container__article">
            <div className="projects__container__article__image">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={imgUrl} alt="blog" />
                </a>
            </div>
            <div className="projects__container__article__content">
                <p>{date}</p>
                <h3>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h3>
                <p>{description}</p>
                <p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        Go to project repository {">"}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Article;
