/*
The JavaScript spread operator (...) allows us to quickly copy all or part of an
existing array or object into another array or object.
*/

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

/*
const myVehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "red",
};

const updateMyVehicle = {
    type: "car",
    year: 2021,
    color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

Notice the properties that did not match were combined, but the property that
did match, color, was overwritten by the last object that was passed,
updateMyVehicle. The resulting color is now yellow.
*/

const SpreadOperator = () => {
    return (
        <div>
            <h2>Spread Operator</h2>
            <p>numbersCombined = {numbersCombined}</p>
            <p>one = {one}</p>
            <p>two = {two}</p>
            <p>rest = {rest}</p>
        </div>
    );
};

export default SpreadOperator;
