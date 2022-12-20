import React from "react";
import { Card } from "../../components";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
    return (
        <div className="contact section_padding" id="contact">
            <div className="contact__heading">
                <h1 className="gradient_text">
                    What are you waiting for?
                    <br />
                    Get in touch!
                </h1>
            </div>
            <div className="contact__card">
                <Card
                    icon={<FaPhoneAlt color="#fff" size={38} />}
                    content="+66 81-908-5657"
                    url="tel:+66819085657"
                />
                <Card
                    icon={<MdAlternateEmail color="#fff" size={38} />}
                    content="dulapah6@gmail.com"
                    url="mailto:dulapah6@gmail.com"
                />
                <Card
                    icon={<FaLinkedin color="#fff" size={38} />}
                    content="dulapahv"
                    url="https://www.linkedin.com/in/dulapahv/"
                />
                <Card
                    icon={<FaGithub color="#fff" size={38} />}
                    content="dulapahv"
                    url="https://github.com/DulapahV"
                />
            </div>
        </div>
    );
};

export default Contact;
