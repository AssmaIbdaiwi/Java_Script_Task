    
    /*
    8
    Write a function called multiply that:
    accept 2 parameters and calculate the multiply of these 2 numbers
    Ex: multiply(3,4)
    => 12
    Ex: multiply(5,4)
    => 20
    */
    function multiply(x,y){
  
        let mult=x;
        for(var i=1;i<y;i++){
            mult+=x;
        }return mult
    }console.log(multiply(6,8));