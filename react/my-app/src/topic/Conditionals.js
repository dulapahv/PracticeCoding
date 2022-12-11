function MissedGoal() {
    return <p>MISSED!</p>;
}

function MadeGoal() {
    return <p>Goal!</p>;
}

function Conditionals1(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
    /*
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
    */
}

function Conditionals2(props) {
    const cars = props.cars;
    return (
        <>
            <p>Garage</p>
            {cars.length > 0 && (
                <p>You have {cars.length} cars in your garage.</p>
            )}
        </>
    );
}

/*
If cars.length > 0 is equates to true, the expression after && will render.
*/

export { Conditionals1, Conditionals2 };
