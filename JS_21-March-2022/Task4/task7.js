    /*
    7
    Write a function called cube that:
    accept 1 parameter and calculate the cube of this number
    Ex: cube(4)
    => 64
    */
   function cube(x){
var mult =x;
       for (var i=1; i<3; i++){
 mult*=x;
       }return mult
   }
   console.log(cube(5))