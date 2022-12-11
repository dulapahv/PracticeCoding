function ReactEvents() {
    // const shoot = (a) => {
    //     alert(a);
    // };

    // return <button onClick={() => shoot("Goal!")}>Take the shot!</button>;
    const shoot = (a, b) => {
        alert(b.type + " " + a);
        /*
            'b' represents the React event that triggered the function.
        In this case, the 'click' event
            */
    };

    return (
        <button onClick={(event) => shoot("Goal!", event)}>
            Take the shot!
        </button>
    );
}

export default ReactEvents;
