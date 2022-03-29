   /*
    17
    Write a function called positive
    that accept 1 argument as a number,
    and return the positive version of the number passed
    Ex: positive(4)
    => 4
    Ex: positive(-5)
    => 5
    */
    function positive(x){

        if (x > 0) {
   
           console.log(x);
       } else {
           let pos=x*-1
           console.log(pos);
       }
   
   }
   
   console.log(positive(-6));