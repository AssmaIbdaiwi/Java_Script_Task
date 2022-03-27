 /*
    3
    Write a function named calculateSupply that:
    takes 2 arguments: age, amount per day.
    calculates the amount consumed for rest of the life (based on a constant max age 100).
    outputs the result to the screen like so:
    "You will need NN to last you until the ripe old age of X"
    Ex: calculateSupply(30, 3);
    => 'You will need 76650 cups of tea to last you until the ripe old age of 100;
    */
  function  calculateSupply(age,amount){

var result= (100-age) *amount*365
console.log('You will need ' +result+ ' cups of tea to last you until the ripe old age of 100')
  }
  calculateSupply(30,3)