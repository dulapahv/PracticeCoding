import { useState } from "react";

/*
You can control the values of more than one input field by adding a name
attribute to each element.

To access the fields in the event handler use the event.target.name and
event.target.value syntax.

To update the state, use square brackets [bracket notation] around the
property name.
*/

function Forms() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello ${inputs.username}! You are ${inputs.age} years old.`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    );
}

function TextArea() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value);
    };

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    );
}

function Select() {
    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value);
    };

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    );
}

export { Forms, TextArea, Select };
