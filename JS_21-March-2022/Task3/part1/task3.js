/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(string,number) {
  if(string !== " "){
    var rep='';
    var i=0
    while ( i < number) {
      rep += string  ;
      i++;
    }
    return rep;}
    else{
      rep = "The string is empty";
      return rep;
  }
}
console.log ( repeatStr("to ",4));
