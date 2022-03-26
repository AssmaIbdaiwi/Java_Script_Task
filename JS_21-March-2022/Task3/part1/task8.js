/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [x!==y-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
// */
function numberBetweenUs(fnum,snum){
    let x = fnum;
    let y = snum;
  
    if (x > snum) {
      x = snum;
      y = fnum;
    } 
var  result=[];
var i=0;
 var  add=x+1;
while(add<y){
result[i]=add;
i++;
add++;
}return result;
}
console.log(numberBetweenUs(2,8))

