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

class Brand extends Model {
    constructor(name, mod, quantity) {
        super(name, mod);
        this.quantity = quantity;
    }
    display() {
        return this.show() + " with quantity " + this.quantity;
    }
}

const Classes = () => {
    const myCar = new Brand("Ford", "Mustang", 5);
    return (
        <div>
            <h2>Classes</h2>
            <p>{myCar.display()}</p>
        </div>
    );
};

export default Classes;
