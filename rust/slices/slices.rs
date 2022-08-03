/*
let sliced_value = &data_structure[start_index..end_index]
including start, excluding end
*/

fn main() {
	let n1 = "Tutorials".to_string();
	println!("length of string is {}", n1.len());
	let c1 = &n1[4..9];
	println!("{c1}");

	let mut data = [10, 20, 30, 40, 50];
	use_slice(&mut data[1..4]);
	println!("{:?}", data);
}

fn use_slice(slice: &mut [i32]) {
	println!("length of slice is {:?}", slice.len());
	println!("{:?}", slice);
	slice[0] = 1010;
}