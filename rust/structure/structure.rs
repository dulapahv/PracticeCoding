/*
struct Name_of_structure {
    field1: data_type,
    field2: data_type,
    field3: data_type
}
*/

struct Employee {
    name: String,
    company: String,
    age: u32,
}

fn main() {
    let mut emp1 = Employee {
        company: String::from("KMITL"),
        name: String::from("n0miya"),
        age: 50,
    };

	let emp2 = Employee {
        company: String::from("KMITL"),
        name: String::from("Anucha"),
        age: 60,
    };

    emp1.age = 25;

    // println!(
    //     "Name is {}, company is {}, age is {}",
    //     emp1.name, emp1.company, emp1.age
    // );

    // display(emp1);

	let elder = who_is_elder(emp1, emp2);
	println!("Elder is ");
	display(elder);
}

/* Passing a struct to a function */
fn display(emp: Employee) {
    println!(
        "Name is {}, company is {}, age is {}",
        emp.name, emp.company, emp.age
    );
}

/* Returning struct from a function */
fn who_is_elder(emp1: Employee, emp2: Employee) -> Employee {
    if emp1.age > emp2.age {
        return emp1;
    } else {
        return emp2;
    }
}
