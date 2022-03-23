console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
arr1 = [1.7, 9, 45,]

arr2 = ["Str", "alex", "moh"]

arr3 = ['the', 'fox', 'over', 'lazy', 'dog', ' ']


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits = ["Tomato", "Banana", "Watermelon"]
var index = fruits.indexOf('Tomato');
console.log(index); // 0
var index2 = fruits.indexOf('Banana');
console.log(index2); //1
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var favFood = ['pizza', 'mansaf', 'fish', 'shawarma', 'burger'];
var favSport = ['swimming', 'running', 'tennis'];
var favFood = [' harry potter', 'twilight', 'cindrella', 'the beauty and the beast'];
//or
var favs=['','','','swimming',' harry potter','pizza',]
/*
4 
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(x) {
    let char = x[0];
    return char;

}
let arr = [1, 4 , 5];
console.log(firstOfArray(arr));

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

function lastOfArray(arrl){  
    console.log(arrl.at(-1));
}
lastOfArray([1,4,5])


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var arrayc = [0,5,7,9];
arrayc.push(10);
arrayc.unshift(3);
arrayc.unshift(1);
arrayc[2]=4;
arrayc[3]=6;
arrayc[4]=8;
console.log(arrayc);


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5]
array2.push(10) 
array2.unshift(10)
array2.shift() 
array2.pop()
console.log(array2)
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arrm){
if (arrm.length%2==0 ){
    // arrm2=["t","u","g","x"];
    var length2=arrm.length;
   var middle2= parseInt(length2/2);
    console.log(arrm[middle2-1 ],arrm[middle2]);
}
else{
//  arrm= [1,4,5];
var length=arrm.length;
var middle= parseInt(length/2);
 console.log(arrm[middle]);
}
}
middleOfArray([1,4,5])
middleOfArray(["t","u","g","x"])
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals[0]='zebra';
animals[1   ]='elephant';

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(num , index){
    return indexOfArray(num , index);
}


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9];

function arrayExceptLast(array) {
    var arr = [];
    for (var i = 0; i < array.length - 1; i++) {
        arr[i] = array[i]
    }
    return arr;
}
console.log(arrayExceptLast(nums));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(numss , value){
    numss.push(value);
    return numss;
}
let arraytr = [1,2,3,8,9]
console.log(addToEnd(arraytr,55))

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var numsum= [1,2,3,8,9] 
var totalSum = 0;

for (var i = 0; i < numsum.length; i++) {
totalSum += numsum[i] }
console.log(totalSum) ;
////
var numsum2= [1,2,3,8,9] 
var len=0
var totalsum2 = 0;
while (len < numsum2.length){
    totalsum2 += numsum2[len];
    len++;
}
console.log(totalsum2);
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var numin= [1,2,3,8,9];
var compare=numin[0];
for (var ii = 1 ; ii < numin.length; ii++){
if(compare > numin[ii]){
    compare=numin[ii] ;  
}
console.log(compare); 
}
//////
var numin2= [1,2,3,8,9];
var compare2=numin[0];
var iii = 1
while (  iii < numin2.length){
if(compare2 > numin2[ii]){
    compare2=numin2[ii] ;  
}
iii++
console.log(compare2); 
}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(num0 , value0){

    indexx = num0.indexOf(value0);
    num0.splice(indexx , 1);
    return num0;
}

var num0= [1,2,3,8,9];

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var numo= [1,2,3,8,9];

for (var m = 0 ; m < numo.length; m++){
if (numo[m]%2==0 ){
  numo.splice(m,1)
}

}
console.log(numo)
///////////////

var numo2= [1,2,3,8,9];
var mm = 0;
while ( mm < numo2.length ){
if (numo2[mm]%2==0 ){
  numo2.splice(mm,1);
}
mm++

}
console.log(numo2);


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var numavg= [1,2,3,8,9] 
var Sumavg = 0;

for (var k = 0; k < numavg.length; k++) {
Sumavg += numavg[k] }
var avg=(Sumavg)/(numavg.length)
console.log(avg) ;
///////
var numavg2= [1,2,3,8,9] 
var Sumavg2 = 0;
var kk = 0;
while ( kk < numavg2.length) {
Sumavg2 += numavg2[kk] 
kk++}
var avg2=(Sumavg2)/(numavg2.length)
console.log(avg2) ;

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var mystrings= ["alex","mercer","madrasa","rashed2","emad","hala"];
var comparestring = mystrings[0].length;
for(j=1 ; j < mystrings.length; j++){
 var  thelength= mystrings[j].length ;
 if(thelength<comparestring){
  var minstring= mystrings[j];
 }
 else{
    var minstring= mystrings[0]
 }
 console.log( minstring );
}
//////////////

var mystrings2= ["alex","mercer","madrasa","rashed2","emad","hala"];
var comparestring2 = mystrings[0].length;
var j2=1 ;
while( j2 < mystrings.length){
 var  thelength2= mystrings2[j2].length ;
 if(thelength2<comparestring2){
  var minstring2= mystrings2[j2];
 }
 else{
    var minstring2= mystrings2[0]
 }
 j2++;
 console.log( minstring2 );
}
    

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function repeatChar(string , char){
    count = 0;
    for(let i = 0; i < string.length ; i++){
        if(string[i] == char)
            count++;

        
    }

    return count;
}
var string= "alex mercer madrasa rashed2 emad hala"

console.log(repeatChar(string,"a"));
/////////////////
function repeatChar(str, char) {
    var count = 0;
    var i = 0;
   while(i < str.length) {
        if (char == str[i]) {
            count++;
        }
       i++;
    }
    return count;
}
console.log(repeatChar(string, 'a'));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(string){
    var newArr = [];
    var index = 0;

    for(let i = 0; i < string.length ; i++){   
        if(string[i].length % 2 != 0 && i % 2 == 0){
            newArr[index] = string[i];
            index++;
        }
    }

    return newArr;
}
let evenIndexOddLengthTest = ["alex","mercer","madrasa","rashedd2","emad","hala"]
console.log(evenIndexOddLength(evenIndexOddLengthTest))
/*


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(number){
    var newArr = [];
    for(let i = 0 ; i < number.length;i++){
        newArr[i] = Math.pow(number[i] , i);
    }
    return newArr;
}
let powerElementIndexTest = [44, 5, 4, 3, 2, 10]
console.log(powerElementIndex(powerElementIndexTest))
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(string){
    let newArr = [];
    let increment = 0;

    for(let i = 0; i < string.length ; i++){   
        if(string[i] % 2 == 0 && i % 2 == 0){
            newArr[increment] = string[i];
            increment++;
        }
    }

    return newArr;
}
let evenNumberEvenIndexTest = [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(evenNumberEvenIndexTest) )