import React from "react";
import ReactDOM from "react-dom/client";

import ArrowFunctions from "./topic/ArrowFunctions";
import Classes from "./topic/Classes";
import Variables from "./topic/Variables";
import ArrayMethods from "./topic/ArrayMethods";
import Destructuring from "./topic/Destructuring";
import SpreadOperator from "./topic/SpreadOperator";
import TernaryOperator from "./topic/TernaryOperator";

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
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
