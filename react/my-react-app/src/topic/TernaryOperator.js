/*
condition ? <expression if true> : <expression if false>
*/

const TernaryOperator = () => {
    let x = 2;
    let msg;
    x > 0 ? (msg = "x > 0") : (msg = "x <= 0");
    return (
        <div>
            <h2>Ternary Operator</h2>
            <p>{msg}</p>
        </div>
    );
};

export default TernaryOperator;
