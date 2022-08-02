/*
Syntax1
let variable_name = [value1,value2,value3];

Syntax2
let variable_name:[dataType;size] = [value1,value2,value3];

Syntax3
let variable_name:[dataType;size] = [default_value_for_elements,size];
*/

fn main() {
    /* Simple array */
    let arr: [i32; 4] = [10, 20, 30, 40];
    println!("array is {:?}", arr);
    println!("array size is : {}", arr.len());
    /*
    array is [10, 20, 30, 40]
    array size is : 4
    */

    /* Array without data type */
    let arr = [10, 20, 30, 40];
    println!("array is {:?}", arr);
    println!("array size is : {}", arr.len());
    /*
    array is [10, 20, 30, 40]
    array size is : 4
    */

    /* Default values */
    let arr: [i32; 4] = [-1; 4];
    println!("array is {:?}", arr);
    println!("array size is :{}", arr.len());
    /*
    array is [-1, -1, -1, -1]
    array size is :4
    */

    /* Array with for loop */
    let arr: [i32; 4] = [10, 20, 30, 40];
    println!("array is {:?}", arr);
    println!("array size is :{}", arr.len());

    for index in 0..4 {
        println!("index is: {} & value is : {}", index, arr[index]);
    }
    /*
    array is [10, 20, 30, 40]
    array size is :4
    */

    /* Using the iter() function */
    let arr: [i32; 4] = [10, 20, 30, 40];
    println!("array is {:?}", arr);
    println!("array size is :{}", arr.len());

    for val in arr.iter() {
        println!("value is :{}", val);
    }
    /*
    value is :10
    value is :20
    value is :30
    value is :40
    */

    /* Mutable array */
    let mut arr: [i32; 4] = [10, 20, 30, 40];
    arr[1] = 0;
    println!("{:?}", arr);
    /* [10, 0, 30, 40] */

    /* Passing Arrays as Parameters to Functions */
    let arr = [10, 20, 30];
    update(arr);

    print!("Inside main {:?}", arr);
    /*
    Inside update [0, 0, 0]
    Inside main [10, 20, 30]
    */

    /* Pass by reference */
    let mut arr = [10, 20, 30];
    update2(&mut arr);
    print!("Inside main {:?}", arr);
    /*
    Inside update [0, 0, 0]
    Inside main [0, 0, 0]
    */
}

fn update(mut arr: [i32; 3]) {
    for i in 0..3 {
        arr[i] = 0;
    }
    println!("Inside update {:?}", arr);
}

fn update2(arr: &mut [i32; 3]) {
    for i in 0..3 {
        arr[i] = 0;
    }
    println!("Inside update {:?}", arr);
}
