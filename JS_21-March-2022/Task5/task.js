/*
 * Exercise 1:
 *
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case:
 *
 * console.log(doubleNumbers([2, 5, 100]));
 *
 * Result:
 * [4, 10, 200]
 */
function doubleNumbers(x){
for (let index = 0; index < x.length; index++) {

     x[index]=x[index]*2
    return x
}}
console.log(doubleNumbers([2, 5, 100]))