    /*
    22
    Write a function called scoreInUniversty
    that takes 1 parameters
    and returns the alpabet in the unevirsty
    A => 95-100
    B => 85-94
    C => 70-84
    D=> 50-69
    F=> 0-49
    Ex: scoreInUniversty(96)
    => "A"
    Ex: scoreInUniversty(3)
    => "F"
    Ex: scoreInUniversty(71)
    => "C"
    */
    function scoreInUniversty(x){
if(x>=95 && x<=100){
    console.log('A');
}else if(x>=85 && x<95){
    console.log('B');
}else if(x>=70 && x<85){
    console.log('C');
}else if(x>=50 && x<70){
    console.log('D');
}else if(x>=0 && x<50){
    console.log('F');
}
    }console.log(scoreInUniversty(100))