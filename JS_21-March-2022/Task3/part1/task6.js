/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
function multiOf(x,y,z){
 var   i=1;
 var mult=y;
while (i<z){
mult*=y;
i++;
result=mult*x;
}

return result;
}
console.log(multiOf(6,2,3))