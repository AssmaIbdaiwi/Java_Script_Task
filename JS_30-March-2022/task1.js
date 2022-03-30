Subscribe.onclick = function() {


let fname= document.getElementById('name').value;
let pattern = /\d/gi;
let res1= pattern.test(fname);
if (res1 == false ){
    document.getElementById('check1').innerHTML= '&#10003';
}else{
    document.getElementById('check1').innerHTML= '&#x2718';
    document.getElementById('check1').style.color= 'red'; 
}

let lname= document.getElementById('Lname').value;
let pattern1 = /\d/gi;
let res2= pattern1.test(lname);
if (res2 == false ){
    document.getElementById('check2').innerHTML= '&#10003'  ;
}else{
    document.getElementById('check2').innerHTML= '&#x2718';
    document.getElementById('check2').style.color= 'red'; 
}

let date= document.getElementById('date').value;
let pattern2 = /^[+-]?\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/gi;
let res3= pattern2.test(date);
if (res3 == true){
    document.getElementById('check3').innerHTML= '&#10003'  ;
}else{
    document.getElementById('check3').innerHTML= '&#x2718';
    document.getElementById('check3').style.color= 'red'; 
}

let email= document.getElementById('email').value;
let pattern3 = /\S+@\S+\.\S+/gi;
let res4= pattern3.test(email);
if (res4 == true){
    document.getElementById('check4').innerHTML= '&#10003'  ;
}else{
    document.getElementById('check4').innerHTML= '&#x2718';
    document.getElementById('check4').style.color= 'red'; 
}

let cemail= document.getElementById('email1').value;
let pattern4 = /\S+@\S+\.\S+/gi;
let res5= pattern4.test(cemail);
if (res5 == true && cemail==email ){
    document.getElementById('check5').innerHTML= '&#10003'  ;
}else{
    document.getElementById('check5').innerHTML= '&#x2718';
    document.getElementById('check5').style.color= 'red'; 
}

let password= document.getElementById('password').value;
let pattern5 =/[A-Z]{1,2}[a-zA-Z0-9]{6}[@#$%_-]/gi;
let res6= pattern5.test(password);
if (res6 == true ){
    document.getElementById('check6').innerHTML= '&#10003'  ;
}else{
    document.getElementById('check6').innerHTML= '&#x2718';
    document.getElementById('check6').style.color= 'red'; 
}

let password1= document.getElementById('password1').value;
let pattern6 =/[A-Z]{1,2}[a-zA-Z0-9]{6}[@#$%_-]/gi;
let res7= pattern6.test(password1);
if (res7 == true  && password==password1){
    document.getElementById('check7').innerHTML= '&#10003'  ;
}else{
    document.getElementById('check7').innerHTML= '&#x2718';
    document.getElementById('check7').style.color= 'red'; 
}
















}