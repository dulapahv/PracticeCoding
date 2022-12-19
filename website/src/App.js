import React from "react";

import {
    Header,
    Aboutme,
    Experiences,
    ExperiencesDetail,
    Projects,
    Contact,
    Footer,
} from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="App animate-bottom">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Aboutme />
            <Experiences />
            <ExperiencesDetail />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
