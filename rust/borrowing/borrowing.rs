/*
When a function transfers its control over a variable/value to another function
temporarily, for a while, it is called borrowing. This is achieved by passing a
reference to the variable (& var_name) rather than passing the variable/value
itself to the function. The ownership of the variable/ value is transferred to
the original owner of the variable after the function to which the control was
passed completes execution.
*/

fn main() {
    let v = vec![10, 20, 30];
    print_vector(&v);
    println!("Printing from the main() v[0] = {}", v[0]);

    let mut i = 3;
    add_one(&mut i);
    println!("{i}");

    let mut name: String = String::from("Hello");
    display(&mut name);
    println!("The value of name after modification is: {name}");
}

fn print_vector(x: &Vec<i32>) {
    println!("Inside print vector function: {:?}", x);
}

/* Mutating an integer reference */
fn add_one(e: &mut i32) {
    *e += 1;
}

/* Mutating a string reference */
fn display(param_name: &mut String) {
    println!("param_value is: {param_name}");
    param_name.push_str(" World");
}
