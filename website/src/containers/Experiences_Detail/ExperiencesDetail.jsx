import React from "react";
import Work_Experiences from "../../assets/Work_Experiences";
import "./experiences_detail.css";

const ExperiencesDetail = () => {
    return (
        <>
            <div className="experiences-detail section_padding">
                <div className="experiences-detail__image img--left">
                    <img src={Work_Experiences.TA1} alt="Rust TA 1" />
                    <img src={Work_Experiences.TA2} alt="Rust TA 2" />
                </div>
                <div className="experiences-detail__content">
                    <h1 className="gradient_text">
                        Official Teaching Assistance of KMITL in Rust
                        programming language
                    </h1>
                    <p>
                        I am the official Teaching Assistance of KMITL in Rust
                        programming language for the KMITL freshmen.
                        <br />I also help created the Rust programming language
                        summary and it proved to be highly beneficial to the
                        students and result in more students understanding the
                        Rust programming language.
                    </p>
                    <h4>
                        <a
                            href="https://dulapahv.notion.site/Rust-Language-Summary-baeec62c57554c3b85e8602d6cab3100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View my Rust Programming language summary {">"}
                        </a>
                    </h4>
                </div>
            </div>
            <div className="experiences-detail section_padding">
                <div className="experiences-detail__content">
                    <h1 className="gradient_text">
                        Qualified and currently a cadet at 42 Bangkok
                    </h1>
                    <p>
                        I am qualified and currently a cadet at 42Bangkok, a
                        global computer science school from France. This
                        immensely improve by C programming language skills and
                        my algorithmic thinking skills.
                    </p>
                    <h4>
                        <a
                            href="https://github.com/dulapahv/ProblemSet/tree/main/42_Bangkok"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View my work on GitHub {">"}
                        </a>
                    </h4>
                </div>
                <div className="experiences-detail__image img--right">
                    <img src={Work_Experiences.Bangkok1} alt="Rust TA 1" />
                    <img src={Work_Experiences.Bangkok2} alt="Rust TA 2" />
                </div>
            </div>
            <div className="experiences-detail section_padding">
                <div className="experiences-detail__image img--left">
                    <img src={Work_Experiences.PreSession1} alt="Rust TA 1" />
                    <img src={Work_Experiences.PreSession2} alt="Rust TA 2" />
                </div>
                <div className="experiences-detail__content">
                    <h1 className="gradient_text">
                        Initiated and mentored KMITL freshmen in Python
                        programming language
                    </h1>
                    <p>
                        I initiated and mentored KMITL freshmen in Python and C
                        programming language in the SE14 Pre-Session activity.
                        This proves to be very helpful to students who are new
                        to programming.
                        <br />
                        The activity is held in a virtual reality, which really
                        demonstrates that I'm able to utilize new technologies
                        effectively and creatively.
                    </p>
                    <h4>
                        <a
                            href="https://drive.google.com/drive/folders/14BCfxJar_hCvvEk43tZPnUJRn_SHGY4Z?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View SE#14 Pre-Session Slides and Activities
                            documents {">"}
                        </a>
                    </h4>
                </div>
            </div>
            <div className="experiences-detail section_padding">
                <div className="experiences-detail__content">
                    <h1 className="gradient_text">
                        Assist in coding to friends in KMITL and other
                        universities
                    </h1>
                    <p>
                        I assist in coding to friends in KMITL and other
                        universities such as Chulalongkorn University, Thammasat
                        University, Mahidol University, Kasetsart University,
                        The Chinese University of Hong Kong, etc. They all found
                        themselves doing better in the university and performing
                        better in the exam.
                    </p>
                    <h4>
                        <a
                            href="https://github.com/dulapahv/ProblemSet/tree/main/Helping_Friend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View how I help my friend on Github {">"}
                        </a>
                    </h4>
                </div>
                <div className="experiences-detail__image--uni img--right">
                    <img src={Work_Experiences.KMITL} alt="KMITL" />
                    <img src={Work_Experiences.CU} alt="CU" />
                    <img src={Work_Experiences.TU} alt="TU" />
                    <img src={Work_Experiences.MU} alt="MU" />
                    <img src={Work_Experiences.KU} alt="KU" />
                    <img src={Work_Experiences.CUHK} alt="CUHK" />
                </div>
            </div>
        </>
    );
};

export default ExperiencesDetail;
