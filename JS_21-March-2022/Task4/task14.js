/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string
Ex: longerString("air","school","car","github")
=> school
Ex: longerString("air","schoo","car","github")
=> github
try all the cases (change the order of the longestString)
*/
function longerString(s1, s2, s3, s4, s5) {
    let string = [s1, s2, s3, s4, s5];
    let first = string[0].length;
let result=string[0];
    for (i = 0; i < 4; i++) {
        if (string[i].length > first) {
            first = string[i].length;
            result = string[i]    ;      
        }
    }console.log(result)
} console.log(longerString("air","school","car","github"));
