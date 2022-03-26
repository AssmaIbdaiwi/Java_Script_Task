/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function muti2(fnum,snum){
  let x = fnum;
  let y = snum;

  if (x > snum) {
    x = snum;
    y = fnum;
  } 
    let mult = x;
    let i = x+1;
    while (i <= y) {
      mult *= i  ;
      i++;
    }
    return mult;
}
console.log(muti2(3,6))