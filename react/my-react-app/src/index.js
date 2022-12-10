import React from "react";
import ReactDOM from "react-dom/client";

/** ES6 **/
/* Classes */
class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return "I have a " + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}

/* Arrow Functions */
/*
hello = function() {
  return "Hello World!";
}

hello = () => {
  return "Hello World!";
}

hello = val => "Hello " + val;
*/

/* Variables */
/*
var x = 5.6;
const x = 5.6;
*/

/* Array Methods */
/*
The .map() method allows you to run a function on each item in the array, returning a new array as the result.
In React, map() can be used to generate lists.

const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)
*/

/* Destructuring */
/*
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;

If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}
*/

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const App = () => {
    const mycar = new Model("Ford", "Mustang");
    const myArray = ["apple", "banana", "orange"];
    const myList = myArray.map((item) => <p>{item}</p>);
    const [add, subtract, multiply, divide] = calculate(4, 7);
    return (
        <div>
            <h1>{mycar.show()}</h1>
            <ul>{myList}</ul>
            <ul>{add}|{subtract}|{multiply}|{divide}</ul>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
