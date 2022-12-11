/* Destructuring */
/*
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;

If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;
*/

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

function myVehicle({ model, registration: { state } }) {
    return "My " + model + " is registered in " + state + ".";
}

const vehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
    registration: {
        city: "Houston",
        state: "Texas",
        country: "USA",
    },
};

let message = myVehicle(vehicleOne);

const Destructuring = () => {
    return (
        <div>
            <h2>Destructuring</h2>
            <h3>Destructuring Arrays</h3>
            <p>add = {add}</p>
            <p>subtract = {subtract}</p>
            <p>multiply = {multiply}</p>
            <p>divide = {divide}</p>
            <h3>Destructuring Objects</h3>
            <p>{message}</p>
        </div>
    );
};

export default Destructuring;
