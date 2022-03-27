function clickme(){
    localStorage.clear()
    document.getElementById('card1').style.backgroundColor='#ffc5c0' ;
    document.getElementById('card2').style.backgroundColor='#ffc5c0';
    document.getElementById('card3').style.backgroundColor='#ffc5c0';
    document.getElementById('card4').style.backgroundColor='#ffc5c0';

    let x= document.getElementById('name').value;
    localStorage.setItem('name',x);
    document.getElementById('name1').innerHTML="Name: "+ localStorage.getItem('name');

    let y= document.getElementById('age').value;
    localStorage.setItem('age',y) ;
    document.getElementById('age1').innerHTML="Age: "+localStorage.getItem('age');

    var z= document.getElementById('male').checked;
    localStorage.setItem('male',z) ;
    var f= document.getElementById('female').checked;
    localStorage.setItem('female',f) ;

  
    if(z !== true){
    document.getElementById('gender1').innerHTML="Gender: female";
   }
    else{ document.getElementById('gender1').innerHTML="Gender: male";
    }


    let p= document.getElementById('description').value;
    localStorage.setItem('description',p) ;
    document.getElementById('desc').innerHTML="Description: "+localStorage.getItem('description');

    let bb= document.getElementById('date').value;
    localStorage.setItem('date',bb) ;
    document.getElementById('date1').innerHTML="Bith of date: "+localStorage.getItem('date');

    let q= document.getElementById('University').value;
    localStorage.setItem('University',q);
    document.getElementById('university1').innerHTML="Education: "+localStorage.getItem('University');
    
    let h= document.getElementById('html').checked;
    localStorage.setItem('html',h);
    if( h == true){
    document.getElementById('ht2').innerHTML='HTML';
    }

    let c= document.getElementById('css').checked;
    localStorage.setItem('css',c);
    if( c == true){
    document.getElementById('cs2').innerHTML='CSS';
    }
    let j= document.getElementById('js').checked;
    localStorage.setItem('js',j);
    if( j == true){
    document.getElementById('js2').innerHTML='Java Script';
    }

    let im= document.getElementById('img').value;
    localStorage.setItem('img',im);
    document.getElementById('img1').innerHTML = `your image: ${localStorage.getItem('img')}`


    let s= document.getElementById('sibling').value;
    localStorage.setItem('sibling',s);
    document.getElementById('sibling1').innerHTML="Sibling number: "+localStorage.getItem('sibling')

    let yyy= document.getElementById('Bdescription').value;
    localStorage.setItem('Bdescription',yyy);
    document.getElementById('Bdescription1').innerHTML="Sibling description: "+localStorage.getItem('Bdescription')
    
    
}