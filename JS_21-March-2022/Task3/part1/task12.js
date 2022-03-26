/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/
function repeatChar(x,y){
var lng=x.length;
var i=1;
var result=0;

while(i<lng){
    if (x[i] == y) {
    result++
    
}
i++;
}return result;
}

console.log(repeatChar("assma","s"))