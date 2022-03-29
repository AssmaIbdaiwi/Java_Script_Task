
    /*
    21
    Write a function called randomBetweenNumbers
    that takes 2 parameters
    and returns a random number between them
    ** hint: you can seacrh using MDN
    Ex: randomBetweenNumbers(1,8)
    => 7.5412
    Ex: randomBetweenNumbers(3,100)
    => 23
    */
    function randomBetweenNumbers(x,y){
        let u= Math.random()*(y-x)+x;
        return u
    }console.log(randomBetweenNumbers(3,100));