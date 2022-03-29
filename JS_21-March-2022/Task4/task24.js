  
    /*
    24
    Write a function called resetCounter
    that will reset the previuos function
    and return the number before reset and
    a string say that the counter reset
    Ex: counter()
    => 1
    Ex: counter()
    => 2
    Ex: counter()
    => 3
    Ex: resetCounter()
    => 3 and the counter reset now
    Ex: counter()
    => 1
    Ex: counter()
    => 2
    Ex: resetCounter()
    => 2 and the counter reset now
    Ex: counter()
    => 1
    */
    var num=0;
    function counter(){
 num++
 return num
    } console.log(counter());
    
    function resetCounter(){
        
        reset = num + ' and the counter rest now'
        num=0;
        return reset;
    }console.log(resetCounter())

