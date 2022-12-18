import React from "react";
import Prog_Lang from "../../assets/Prog_Lang";
import Other_Tech from "../../assets/Other_Tech";
import OS_Hardware from "../../assets/OS_Hardware";
import Media_Design from "../../assets/Media_Design";
import VR_VChar from "../../assets/VR_VChar";
import "./experiences.css";

const Experiences = () => {
    return (
        <div className="experiences section_padding" id="experiences">
            <div className="experiences__heading">
                <div className="gradient_text">
                    <h1>Discovering Myself Through Experiences</h1>
                </div>
            </div>
            <div className="experiences__container">
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Programming Languages {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={Prog_Lang.py} alt="Python" />
                    <img src={Prog_Lang.c} alt="C" />
                    <img src={Prog_Lang.cpp} alt="C++" />
                    <img src={Prog_Lang.cs} alt="C#" />
                    <img src={Prog_Lang.java} alt="Java" />
                    <img src={Prog_Lang.rust} alt="Rust" />
                    <img src={Prog_Lang.html} alt="HTML" />
                    <img src={Prog_Lang.css} alt="CSS" />
                    <img src={Prog_Lang.js} alt="JavaScript" />
                    <img src={Prog_Lang.react} alt="React" />
                    <img src={Prog_Lang.arm} alt="ARM" />
                    <img src={Prog_Lang.swift} alt="Swift" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Other Technologies {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={Other_Tech.firebase} alt="Firebase" />
                    <img src={Other_Tech.git} alt="Git" />
                    <img src={Other_Tech.unity} alt="Unity" />
                    <img src={Other_Tech.unreal} alt="Unreal Engine" />
                    <img src={Other_Tech.tailwindcss} alt="Tailwind CSS" />
                    <img src={Other_Tech.vmware} alt="VMware" />
                    <img src={Other_Tech.mysql} alt="MySQL" />
                    <img src={Other_Tech.sass} alt="Sass" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} OS and Hardware {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={OS_Hardware.windows} alt="Windows" />
                    <img src={OS_Hardware.linux} alt="Linux" />
                    <img src={OS_Hardware.raspberry_pi} alt="Raspberry Pi" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Media and Design {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={Media_Design.ps} alt="Adobe Photoshop" />
                    <img src={Media_Design.ai} alt="Adobe Illustrator" />
                    <img src={Media_Design.pr} alt="Adobe Premiere" />
                    <img src={Media_Design.word} alt="Microsoft Word" />
                    <img src={Media_Design.ppt} alt="Microsoft PowerPoint" />
                    <img src={Media_Design.excel} alt="Microsoft Excel" />
                    <img src={Media_Design.visio} alt="Microsoft Visio" />
                    <img src={Media_Design.audacity} alt="Audacity" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Virtual Reality and Virtual Character {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={VR_VChar.oculus} alt="Oculus" />
                    <img src={VR_VChar.vroid} alt="VRoid Studio" />
                    <img src={VR_VChar.vcast} alt="VCast Studio" />
                    <img src={VR_VChar.vtube} alt="VTube Studio" />
                    <img src={VR_VChar.vmagic} alt="VMagicMirror" />
                </div>
            </div>
        </div>
    );
};

export default Experiences;
