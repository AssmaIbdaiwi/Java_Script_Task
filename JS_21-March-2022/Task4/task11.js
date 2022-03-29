    /*
    11
    Write a function called largerNubmer
    that accept two numbers as arguments,
    and return the first larger numbers
    Ex: largerNubmer(5,6)
    => 6
    Ex: largerNubmer(5,3)
    => 5
    */
   function largerNubmer(x,y){
    let string=[x,y];
if(string[0]>string[1]){
    console.log(x)
}else {
    console.log(y) 
}
   }console.log(largerNubmer(5,8)) 