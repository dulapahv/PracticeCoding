fn main() {
	/* IMMUTABLE */
	/*
		Rust variables are immutable (read only).
		Add 'mut' keyword to make it mutable.
	*/
	let mut fees:i32 = 25_000;
	println!("fees is {fees}");

	fees = 35_000;
	println!("fees is {fees}");

	/*
	However, you can declare variables with the same name to
	overrides the previous variable.
	*/
}