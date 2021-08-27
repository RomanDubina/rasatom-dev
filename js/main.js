$(function(){

    let header = document.querySelector('.header');
    let scrollPrev = 0;
    window.onscroll = function(){
    let scrollPos = window.pageYOffset;
     if(scrollPos>scrollPrev){
       
        header.style.top = '-200px'
        header.style.backgroundColor = '#0F1435'
     } else if(scrollPos == 0) {
      header.style.backgroundColor = 'unset'
     } else {
        header.style.backgroundColor = '#0F1435'
        header.style.top = '0px'
     }
    
     scrollPrev = scrollPos;
    
       } 


});