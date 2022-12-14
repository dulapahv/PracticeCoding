/*
The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an
application.
*/

import React, { useState } from "react";

function ExampleHooks() {
    const [color, setColor] = useState("red");

    return (
        <>
            <p>My favorite color is {color}!</p>
            <button type="button" onClick={() => setColor("blue")}>
                Blue
            </button>
            <button type="button" onClick={() => setColor("red")}>
                Red
            </button>
            <button type="button" onClick={() => setColor("pink")}>
                Pink
            </button>
            <button type="button" onClick={() => setColor("green")}>
                Green
            </button>
        </>
    );
}

export default ExampleHooks;
