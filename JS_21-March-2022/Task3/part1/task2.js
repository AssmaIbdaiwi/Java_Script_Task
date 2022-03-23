2
/*Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function factorial(n){
    let fact = n;
    let i = n- 1;
    while (i > 0) {
      fact = fact * i;
      i--;
    }
    return fact;
}
console.log(factorial(4));