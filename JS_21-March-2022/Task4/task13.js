/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
Ex: shorterString("air","school","car","by","github")
=> by
Ex: shorterString("air","tr","car","by","github")
=> tr
Ex: shorterString("by","tr","car","air","github")
=> by
Ex: shorterString("air","by","car","school","github")
=> by
Ex: shorterString("air","tr","by","car","github")
=> by
Ex: shorterString("air","tr","car","github","by")
=> by
*/
function shorterString(s1, s2, s3, s4, s5) {
    let string = [s1, s2, s3, s4, s5];
    let first = string[0].length;
let result=string[0];
    for (i = 1; i < 5; i++) {
        if (string[i].length < first) {
             first = string[i].length
            result = string[i]    ;      
        }
    }console.log(result)
} console.log(shorterString("air","tr","car","by","github"));
