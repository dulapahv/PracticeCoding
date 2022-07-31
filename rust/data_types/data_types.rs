fn main() {
    /* DECLARE A VARIABLE */
    println!("DECLARE A VARIABLE");

    let company_string = "TutorialsPoint";
    let rating_float = 4.5;
    let is_growing_boolean = true;
    let icon_char = '♥';

    println!("company name is: {company_string}");
    println!("company rating on 5 is: {rating_float}");
    println!("company is growing : {is_growing_boolean}");
    println!("company icon is: {icon_char}");

    /* INTEGER */
    println!("\nINTEGER");

    /*
    Sr.No.	Size	Signed	Unsigned
    1		8 bit	i8		u8
    2		16 bit	i16		u16
    3		32 bit	i32		u32 (Default)
    4		64 bit	i64		u64
    5		128 bit	i128	u128
    6		Arch	isize	usize
    */

    let result = 10;
    let age: u32 = 20;
    let sum: i32 = 5 - 15;
    let mark: isize = 10;
    let count: usize = 30;

    println!("result value is {result}");
    println!("sum is {sum} and age is {age}");
    println!("mark is {mark} and count is {count}");

    /*
    	If overflow occurred, the number will start at 0 again.
    	Ex: max u8 = 255, so u8 = 256 will overflow to 0
    */

    /* FLOAT */
    println!("\nFLOAT");

    let result = 10.00; // f64 by default
    let interest: f32 = 8.35;
    let cost: f64 = 15000.600; // double precision

    println!("result value is {result}");
    println!("interest is {interest}");
    println!("cost is {cost}");

	/* Automatic type casting is not allowed! */

	/*
		For easy readability of large numbers, we can use a
		visual separator _ underscore to separate digits.
		That is 11000.555001 can be written as 11_000.555_001
	*/

	/* BOOLEAN */
	println!("\nBOOLEAN");

	let isfun:bool = true;
	println!("Is Rust Programming Fun? {isfun}");
}
