 /* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
var number1 = window.prompt("Please enter first number");
var number2 = window.prompt("Please enter second number");
var number3 = window.prompt("Please enter third number");
if (number1>number2 && number1>number3)
{
        if (number2>number3)
        {
            alert(number1 + ", " + number2 + ", " +number3);
        }
        else
        {
            alert(number1 + ", " + number3 + ", " +number2);
        }
}
else if (number2>number1 && number2 >number3)
{
        if (number1>number3)
        {
             alert(number2 + ", " + number1+ ", " +number3);
        }
        else
        {
             alert(number2+ ", " + number3 + ", " +number1);
        }
}
else if (number3>number1 && number3>number2)
{
        if (number1>number2)
        {
            alert(number3 + ", " + number1 + ", " +number2);
        }
        else
        {
            alert(number3 + ", " + number2 + ", " +number1);
        }
}       

