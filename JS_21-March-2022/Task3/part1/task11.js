/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/
function mod2(x,y){

var result=x;

while(result-y>=0){
result -=y;
}return result
}

console.log(mod2(5,4))
