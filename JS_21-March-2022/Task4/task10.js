    
    /*
    10
    Write a function called sameLength
    that accepts two strings as arguments,
    and returns true if those strings have the same length, and false otherwise.
    **hint: how we can know string length   Ex: : "tree".length   => 4
    Ex: sameLength("tree","clue")
    => true
    Ex: sameLength("tree","car")
    => false
    */
   function sameLength(string1,string2){
       let string=[string1,string2];
       for(var i=0;i<2;i++){
       if (string[0].length == string[1].length){
           console.log('true')
       }else{
        console.log('false')
       }}
}console.log(sameLength("tree","car"))