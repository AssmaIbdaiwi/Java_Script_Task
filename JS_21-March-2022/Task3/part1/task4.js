/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sum2(x,y) {
    let sum = x;
    let i = x+1;
    while (i <= y) {
      sum += i  ;
      i++;
    }
    return sum;
}
console.log ( sum2(3,6));