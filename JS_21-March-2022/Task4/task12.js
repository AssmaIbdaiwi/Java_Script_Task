    
    /*
    12
    Write a function called smallerNubmer
    that accept three numbers as arguments,
    and return the first smaller number
    Ex: smallerNubmer(8,6,7)
    => 6
    Ex: smallerNubmer(5,99,34)
    => 5
    Ex: smallerNubmer(5,99,3)
    => 3
    Ex: smallerNubmer(5,3,3)
    => 3
    */
    function smallerNubmer(x,y){
        let string=[x,y];
        if(string[0]<string[1]){
            console.log(x)
        }else {
            console.log(y) 
        }
           }console.log(smallerNubmer(5,8)) 
    