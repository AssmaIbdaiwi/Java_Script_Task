/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
var number1 = window.prompt("Please enter first number");
var number2 = window.prompt("Please enter second number");
var number3 = window.prompt("Please enter third number");
var number4 = window.prompt("Please enter forth number");
var number5 = window.prompt("Please enter fifth number");
if (number1>number2 && number1>number3 && number1>number4 && number1>number5)
{
            alert(number1);
        }
        else if(number2>number3 && number2>number4 && number2>number5 ){
            alert(number2)
        }
        else if(number3>number4 && number3>number5 ){
            alert(number3)
        }
        else if(  number4>number5 ){
            alert(number4)
        }
        else{
            alert(number5)
        }
        


 /******* End Your Code ********* */