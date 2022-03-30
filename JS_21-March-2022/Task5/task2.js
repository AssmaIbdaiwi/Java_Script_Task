
  /*
   * Exercise 2 :
   *
   * Take an array of numbers and make them strings
   *
   * Test Case:
   *
   * console.log(stringItUp([2, 5, 100]));
   *
   * Result:
   * ["2", "5", "100"]
   */ 
  function stringItUp(x){
for (i=0; i<stringItUp.length ; i++){

    x[i]=x[i].toString();

return x;
  }}
  console.log(stringItUp([2, 5, 100]));