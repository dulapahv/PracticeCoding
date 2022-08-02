fn main() {
    fn_hello();
    println!("pi value is {}", get_pi());

    /* Pass by value */
    let no: i32 = 10;
    println!("original is {no}, changed to {}", multiply_by_2(no));

    /* Pass by reference */
    let mut no: i32 = 10;
    multiply_by_3(&mut no);
    println!("original is {no}, changed to {}", no);

    let name: String = String::from("Hello World");
    display(name);
}

fn fn_hello() {
    println!("Hello World");
}

fn get_pi() -> f64 {
    return 22.0 / 7.0;
    /*
    you can write return value by just writing data without semicolon
    i.e. 22.0/7.0
    */
}

/* Pass by value */
fn multiply_by_2(num: i32) -> i32 {
    return num * 2;
}

/* Pass by reference */
fn multiply_by_3(num: &mut i32) {
    *num *= 3;
}

fn display(param_name: String) {
    println!("param_name is {param_name}");
}
