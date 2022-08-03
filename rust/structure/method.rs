/*
struct My_struct {}
    impl My_struct {
        set the method's context

    fn method_name() {
        define a method
        }
}
*/

struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        return self.width * self.height;
    }
}

struct Point {
    x: i32,
    y: i32,
}

impl Point {
    fn getInstance(x: i32, y: i32) -> Point {
        Point { x: x, y: y }
    }

	fn display(&self) {
		println!("x = {}, y = {}", self.x, self.y);
	}
}

fn main() {
    let small = Rectangle {
        width: 10,
        height: 20,
    };

    println!(
        "width is {}, height is {}, area is {}",
        small.width,
        small.height,
        small.area()
    );

	let p1 = Point::getInstance(10, 20);
	p1.display();
}

/*
Static Method in Structure
Static methods can be used as utility methods. These methods exist even before
the structure is instantiated. Static methods are invoked using the structure's
name and can be accessed without an instance. Unlike normal methods, a static
method will not take the &self parameter.

impl Structure_Name {
    static method that creates objects of the Point structure
    fn method_name(param1: datatype, param2: datatype) -> return_type {
        logic goes here
   }
}

structure_name::method_name(v1,v2)
*/
