    /*
    2
    Write a function named calculateDogAge that:
    takes 1 argument: your puppy's age.
    calculates your dog's age based on the conversion
    rate of 1 human year to 7 dog years.
    outputs the result to the screen like so:
    "Your doggie is NN years old in dog years!"
    Ex: calculateDogAge(1);
    => "Your doggie is 7 years old in dog years!"
    */
  
    function calculateDogAge(x){
        var age=x*6;
console.log('Your doggie is '+ age+ ' years old in dog years!')
    }
    calculateDogAge(6)