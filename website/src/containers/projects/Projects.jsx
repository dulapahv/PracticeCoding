import React from "react";
import { Article } from "../../components";
import Projects_Img from "./imports";
import "./projects.css";

const Projects = () => {
    return (
        <div className="projects section_padding" id="projects">
            <div className="projects__heading">
                <h1 className="gradient_text">
                    Accomplishing the Impossible: Taking On Exciting Projects!
                </h1>
            </div>
            <div className="projects__container">
                <div className="projects__container__groupA">
                    <Article
                        imgUrl={Projects_Img.blog01}
                        date="2022"
                        title="MyStudyPlan"
                        description="MyStudyPlan is an app that enables you to track all your classes, tasks, assignments and exams - anywhere!"
                        url="https://github.com/dulapahv/MyStudyPlan"
                    />
                </div>
                <div className="projects__container__groupB">
                    <Article
                        imgUrl={Projects_Img.blog02}
                        date="2021"
                        title="Calclab"
                        description="All-in-one GUI application which includes: Scientific Calculator, Graph Plotter, Date Comparator, Currency Converter (real-time exchange rates), 12 More Converter Tools."
                        url="https://github.com/DulapahV/CalcLab"
                    />
                    <Article
                        imgUrl={Projects_Img.blog03}
                        date="2021"
                        title="Nekoparaiten"
                        description="An (April Fool's) online speed-clicking game written in Python. Click as fast as possible while also competing with other people around the world!"
                        url="https://github.com/DulapahV/Nekoparaiten"
                    />
                    <Article
                        imgUrl={Projects_Img.blog04}
                        date="2021"
                        title="Matrix-Arithmetic"
                        description="Feature-packed matrix computing program that runs in the terminal."
                        url="https://github.com/DulapahV/Matrix-Arithmetic"
                    />
                    <Article
                        imgUrl={Projects_Img.blog05}
                        date="2021"
                        title="AceMath"
                        description="An online speed mathematics game. Solve math problems as fast as you can while also competing with other people around the world!"
                        url="https://github.com/DulapahV/AceMath"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
