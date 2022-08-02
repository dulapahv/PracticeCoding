fn main() {
    /* STRING LITERAL */
    println!("STRING LITERAL");

    /*
        By default, variables are immutable − read only in Rust. In other words,
        the variable's value cannot be changed once a value is bound to a
        variable name.

        String literal is immutable (cannot add 'mut')
    */

    let company: &str = "n0miya";
    let location: &str = "nuko";

    /*
        String literals are static by default. You can explicitly specify
        the variable as static:
        let company:&static str = "n0miya";
    */

    println!("company is: {company} location: {location}");

    /* STRING OBJECT */
    println!("\nSTRING OBJECT");

    /*
        The String object type is provided in Stdlib.
        The String object type can be used to represent string values that are
        provided at runtime. String object is allocated in the heap.

        String::new() creates an empty string
        String::from() creates a string with value passed as a parameter
    */

    let empty_string = String::new();
    println!("length is {}", empty_string.len());

    let content_string = String::from("n0miya");
    println!("length is {}", content_string.len());

    /* STRING CONCATENATION */
    println!("\nSTRING CONCATENATION");
    let n1 = "Hello".to_string();
    let n2 = " World".to_string();

    let n3 = n1 + &n2; // n2 reference is passed
    println!("{n3}");

    /* format! MACRO */
    println!("\nformat! MACRO");

    let n1 = "Hello";
    let n2 = "World";
    let n3 = format!("{n1}+ +{n2}");
    println!("{n3}");

    /*
        https://www.tutorialspoint.com/rust/rust_string.htm
        for common string methods
    */

    /* new() */
    println!("\nnew()");

    let mut z = String::new();
    z.push_str("hello");
    println!("{z}");

    /* to_string() */
    println!("\nto_string()");

    let name1 = "Hello World".to_string();
    println!("{name1}");

    /* replace() */
    println!("\nreplace()");

    let name1 = "Hello World".to_string();
    let name2 = name1.replace("Hello", "Hi");
    println!("{name2}"); // Hi World

    /* as_str() */
    /* not mandatory? */
    println!("\nas_str()");

    let example_string = String::from("example_string");
    print_literal(example_string.as_str()); // example_string

    /* push() */
    println!("\npush()");

    let mut company = "Tutorial".to_string();
    company.push('s');
    println!("{company}"); // Tutorials

    /* push_str() */
    println!("\npush_str()");

    let mut company = "Tutorials".to_string();
    company.push_str(" Nice");
    println!("{company}"); // Tutorials Nice

    /* len() */
    println!("\nlen()");

    let fullname = "Nuko";
    println!("length is {}", fullname.len()); // 4

    /* trim() - removes leading and trailing spaces */
    println!("\ntrim()");

    let fullname = "  n0miya \r\n";
    println!("Before trim length: {}", fullname.len()); // 11
    println!("After trim length: {}", fullname.trim().len()); // 6

    /* split_whitespace() - splits string into iterator */
    let msg = "Hello World".to_string();
    let mut i = 1;

    for token in msg.split_whitespace() {
        println!("token {i}: {token}");
        i += 1;
    }

    /* split() */
    println!("\nsplit()");
    let fullname = "red,green,blue";

    for token in fullname.split(",") {
        println!("token is {token}");
    }

    // store in a vector
    let tokens: Vec<&str> = fullname.split(",").collect();
    println!("first is {}", tokens[0]);
    println!("second is {}", tokens[1]);
    println!("third is {}", tokens[2]);

    /* chars() */
    println!("\nchars");

    let n1 = "Tutorials".to_string();

    for n in n1.chars() {
        println!("{n}");
    }
}

fn print_literal(data: &str) {
    println!("displaying string literal {data}");
}
