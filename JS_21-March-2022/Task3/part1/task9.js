/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown (x){
  var  i=0;
 var down= [];
    while (x>0){
down[i]=x;
i++;
x--;
    }
    down[i]='done';
    return down;
}
console.log( countDown (5 ))