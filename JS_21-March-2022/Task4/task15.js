/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/

function isEven(x) {
    if (x % 2 == 0) {

        console.log("true");
    } else {
        console.log("false");
    }

}

console.log(isEven(3));
