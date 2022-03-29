    /*
    16
    Write a function called isOdd
    that accept 1 argument as a number,
    and return true if this number is Odd
    and false if this number is Even
    Ex: isOdd(4)
    => false
    Ex: isOdd(5)
    => true
    */
    function isOdd(x){

     if (x % 2 == 0) {

        console.log("false");
    } else {
        console.log("true");
    }

}

console.log(isOdd(6));