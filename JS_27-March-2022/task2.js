function clickme(){
    sessionStorage.clear()
    document.getElementById('card1').style.backgroundColor='#ffc5c0' ;


    let x= document.getElementById('name').value;
    sessionStorage.setItem('name',x);
    document.getElementById('name1').innerHTML="Subject: "+ sessionStorage.getItem('name');

    let p= document.getElementById('description').value;
    sessionStorage.setItem('description',p) ;
    document.getElementById('desc').innerHTML="Description: "+sessionStorage.getItem('description');


    let q= document.getElementById('University').value;
    sessionStorage.setItem('University',q);
    document.getElementById('university1').innerHTML="User Types: "+sessionStorage.getItem('University');
    

    let im= document.getElementById('img').value;
    sessionStorage.setItem('img',im);
    document.getElementById('img1').innerHTML = `your image: ${sessionStorage.getItem('img')}`


    let yyy= document.getElementById('Bdescription').value;
    sessionStorage.setItem('Bdescription',yyy);
    document.getElementById('Bdescription1').innerHTML="Technology used: "+sessionStorage.getItem('Bdescription')
    
    
}