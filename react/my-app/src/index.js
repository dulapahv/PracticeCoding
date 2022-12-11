import React from "react";
import ReactDOM from "react-dom/client";

import ArrowFunctions from "./topic/ES6/ArrowFunctions";
import Classes from "./topic/ES6/Classes";
import Variables from "./topic/ES6/Variables";
import ArrayMethods from "./topic/ES6/ArrayMethods";
import Destructuring from "./topic/ES6/Destructuring";
import SpreadOperator from "./topic/ES6/SpreadOperator";
import TernaryOperator from "./topic/ES6/TernaryOperator";

import Events from "./topic/Events";

import { Conditionals1, Conditionals2 } from "./topic/Conditionals";

import { Lists, Keys } from "./topic/Lists";

import { Forms, TextArea, Select } from "./topic/Forms";

import Styling from "./topic/CSSStyling";

import SassStyling from "./topic/SassStyling";

const App = () => {
    return (
        <div>
            <h1>ES6</h1>
            {ArrowFunctions()}
            {Classes()}
            {Variables()}
            {ArrayMethods()}
            {Destructuring()}
            {SpreadOperator()}
            {TernaryOperator()}
            <h1>React Events</h1>
            {Events()}
            <h1>React Conditional</h1>
            {Conditionals1({ isGoal: true })}
            {Conditionals2({ cars: ["Ford", "BMW", "Audi"] })}
            <h1>React Lists</h1>
            {Lists()}
            {Keys()}
            <h1>React Forms</h1>
            {Forms()}
            {TextArea()}
            {Select()}
            <h1>CSS Styling</h1>
            {Styling()}
            <h1>Sass Styling</h1>
            {SassStyling()}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
