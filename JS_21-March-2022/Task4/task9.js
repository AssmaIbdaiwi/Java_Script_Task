    /*
    9
    Write a function called canIGetADrivingLicense that:
    accept 1 parameter represent the age
    and if the age greater than or equal to 20 return "yes you can"
    otherwise return "please come back after X years to get one"
    Ex: canIGetADrivingLicense(21)
    => "yes you can"
    Ex: canIGetADrivingLicense(17)
    => "please come back after 3 years to get one"
    Ex: canIGetADrivingLicense(20)
    => "yes you can"
    */
   function canIGetADrivingLicense(x){
      if(x>=20){
console.log("yes you can");
       }else{
           var sub=20-x;
        console.log("please come back after "+ sub +" years to get one")
       }
   }
   canIGetADrivingLicense(17)
