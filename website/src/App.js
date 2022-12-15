import React from "react";

import {
    Header,
    Aboutme,
    Experiences,
    Projects,
    Contact,
    Footer,
} from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Aboutme />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
