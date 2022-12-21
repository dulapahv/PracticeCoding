import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer section_padding">
            <div className="footer__links">
                <div className="footer__links__heading">
                    <h1>
                        <a href="https://dulapahv.github.io/">{">"} DulapahV</a>
                    </h1>
                </div>
                <div className="footer__links__div">
                    <h2>Links</h2>
                    <p>
                        <a href="#aboutme">About me</a>
                    </p>
                    <p>
                        <a href="#experiences">Experiences</a>
                    </p>
                    <p>
                        <a href="#projects">Projects</a>
                    </p>
                    <p>
                        <a href="#contact">Contact</a>
                    </p>
                </div>
                <div className="footer__links__div">
                    <h2>Discover More</h2>
                    <p>
                        <a
                            href="https://dulapahv.notion.site/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Notion
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://gist.github.com/dulapahv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gist
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://steamcommunity.com/id/n0miya/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Steam
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://steamcommunity.com/id/n0miya/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </p>
                </div>
                <div className="footer__links__div">
                    <h2>Get in Touch</h2>
                    <p>
                        <a href="tel:+66819085657">+66 81-908-5657</a>
                    </p>
                    <p>
                        <a href="mailto:dulapah6@gmail.com">
                            dulapah6@gmail.com
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/dulapahv/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            in/dulapahv
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://github.com/DulapahV"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github/dulapahv
                        </a>
                    </p>
                </div>
            </div>
            <div className="footer__copyright">
                <p>© 2022 Dulapah Vibulsanti</p>
            </div>
        </div>
    );
};

export default Footer;
