/*
If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.

If you use var inside of a block, i.e. a for loop, the variable is still
available outside of that block.

var has a function scope, not a block scope.
*/

var var_x = 5.6;

/*
let is the block scoped version of var, and is limited to the block
(or expression) where it is defined.

If you use let inside of a block, i.e. a for loop, the variable is only
available inside of that loop.

let has a block scope.
*/

let let_x = 5.6;

/*
const is a variable that once it has been created, its value can never change.

const has a block scope.

The keyword const is a bit misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:
Reassign a constant value
Reassign a constant array
Reassign a constant object

But you CAN:
Change the elements of constant array
Change the properties of constant object
*/

const const_x = 5.6;

const Variables = () => {
    return (
        <div>
            <h2>Variables</h2>
            <p>var_x = {var_x}</p>
            <p>let_x = {let_x}</p>
            <p>const_x = {const_x}</p>
        </div>
    )
}

export default Variables;
