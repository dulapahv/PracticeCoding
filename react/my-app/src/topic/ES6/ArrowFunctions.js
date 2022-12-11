const hello1 = function () {
    return "Hello World!";
};

const hello2 = () => {
    return "Hello World!";
};

const hello3 = (val) => "Hello " + val;

const ArrowFunctions = () => {
    return (
        <div>
            <h2>Arrow Function</h2>
            <p>hello1 = {hello1()}</p>
            <p>hello2 = {hello2()}</p>
            <p>hello3 = {hello3("n0miya")}</p>
        </div>
    );
};

export default ArrowFunctions;
