

////////////////////////////////

function family(){
    var result= document.getElementById('familystyle').value;
     if (result == 'Ariel'){
         document.getElementById('par1').style.fontFamily='arial';
    }
     else if (result == 'Courier_New'){
           document.getElementById('par1').style.fontFamily='Courier New';
     }
     else{
          document.getElementById('par1').style.fontFamily='Lucida Sans';
     }
 }
 function fsize(){
        var result= document.getElementById('ffsize').value;
         if (result == '12'){
                document.getElementById('par1').style.fontSize= '12px';
        }
         else if (result == '20'){
               document.getElementById('par1').style.fontSize='20px';
         }
         else{
               document.getElementById('par1').style.fontSize='25px';
         }
  }
function Italic() {
    var text = document.getElementById("par1");
    var it = document.getElementById("italic1").checked;
    text.style.fontStyle = (it ? "italic" : "normal");
}

function Bold() {
    var text = document.getElementById("par1");
    var bl = document.getElementById("bold1").checked;
    text.style.fontWeight = (bl ? "bold" : "normal");
}

function Under() {
    var text = document.getElementById("par1");
    var und = document.getElementById("underline").checked;
    text.style.textDecoration = (und ? "underline" : "none");
}

