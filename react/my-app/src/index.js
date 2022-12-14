import React from "react";
import ReactDOM from "react-dom/client";

import ArrowFunctions from "./basics/ES6/ArrowFunctions";
import Classes from "./basics/ES6/Classes";
import Variables from "./basics/ES6/Variables";
import ArrayMethods from "./basics/ES6/ArrayMethods";
import Destructuring from "./basics/ES6/Destructuring";
import SpreadOperator from "./basics/ES6/SpreadOperator";
import TernaryOperator from "./basics/ES6/TernaryOperator";

import Events from "./basics/Events";

import { Conditionals1, Conditionals2 } from "./basics/Conditionals";

import { Lists, Keys } from "./basics/Lists";

import { Forms, TextArea, Select } from "./basics/Forms";

import Styling from "./basics/CSSStyling";

import SassStyling from "./basics/SassStyling";

import ExampleHooks from "./hooks/Example";

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
            <h1>React Hooks</h1>
            {ExampleHooks()}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
