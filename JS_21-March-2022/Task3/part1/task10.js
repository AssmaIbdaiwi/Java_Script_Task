/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(fnum, snum) {
    let x = fnum;
    let y = snum;

    if (x > snum) {
        x = snum;
        y = fnum;
    }

    var i = 1;
    var mult = x;
    while (i < y) {
        mult += x;
        i++;
       ;

    } return mult;
}
console.log(multiplication2(7,6 ));