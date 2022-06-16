function displayDgm1(){
    var imgs = document.querySelector('.chart_face').querySelectorAll('img');
    
    var w=document.getElementById('select2').value;
    console.log(imgs[w-1].src);
    document.getElementById('face').style.backgroundImage='url('+imgs[w-1].src+')';
    
}