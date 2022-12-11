function Car(props) {
    return <li>I am a {props.brand}</li>;
}

function Lists() {
    const cars = ["Ford", "BMW", "Audi"];
    return (
        <>
            <p>Who lives in my garage?</p>
            <ul>
                {cars.map((car) => (
                    <Car brand={car} />
                ))}
            </ul>
        </>
    );
}

/*
Keys allow React to keep track of elements. This way, if an item is updated or
removed, only that item will be re-rendered instead of the entire list.

Keys need to be unique to each sibling. But they can be duplicated globally.

Generally, the key should be a unique ID assigned to each item. As a last
resort, you can use the array index as a key.
*/

function Keys() {
    const cars = [
        { id: 1, brand: "Ford" },
        { id: 2, brand: "BMW" },
        { id: 3, brand: "Audi" },
    ];
    return (
        <>
            <p>Who lives in my garage?</p>
            <ul>
                {cars.map((car) => (
                    <Car key={car.id} brand={car.brand} />
                ))}
            </ul>
        </>
    );
}

export { Lists, Keys };
