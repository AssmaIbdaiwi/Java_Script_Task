/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
function repeatStr2(x,y){
    if(x !== " " ){  
    lng=y.length;
    var rep='';
    var i=1;
  while (i<=lng){
    rep += x  ;
      i++
  } 
  return rep;} else{
    rep = "The string is empty";
    return rep;
}
}
  console.log(repeatStr2("ro ","fffff"));