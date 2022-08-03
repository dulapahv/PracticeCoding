/*
Stack
A stack follows a last in first out order. Stack stores data values for which
the size is known at compile time. For example, a variable of fixed size i32 is
a candidate for stack allocation. Its size is known at compile time. All scalar
types can be stored in stack as the size is fixed.

Heap
The heap memory stores data values the size of which is unknown at compile time.
 It is used to store dynamic data. Simply put, a heap memory is allocated to
 data values that may change throughout the life cycle of the program. The heap
 is an area in the memory which is less organized when compared to stack.

*/

fn main(){
	let u1 = 10;
	let u2 = u1;  // u1 value copied(not moved) to u2
 
	println!("u1 = {}",u1);
 }