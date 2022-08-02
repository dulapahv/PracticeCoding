fn main() {
    for x in 0..5 {
        // 5 is not inclusive
        println!("inside for loop x value is {x}");
    }

    let mut x = 0;
    while x < 5 {
        println!("inside while loop x value is {x}");
        x += 1;
    }

    let mut x = 0;
    loop {
        // while true
        println!("inside loop x value is {x}");
        x += 1;
        if x == 5 {
            break;
        }
    }
}

/* There is also continue and break */
