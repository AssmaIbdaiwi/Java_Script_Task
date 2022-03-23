/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
var number1 = window.prompt("Please enter first number");
var number2 = window.prompt("Please enter second number");
var number3 = window.prompt("Please enter third number");
var mult= number1*number2*number3;
if(mult>0){
    console.log( 'The sign is +');
}
else{
    console.log('The sign is -');
}

 /******* End Your Code ********* */