let weather = $('.widget-weather')[0];
let span = this.querySelector('.topbar-info-city span');
let ul = document.querySelector('.topbar-info-city ul'); 
let box = this.querySelector('.weather-modal');
$(weather).mouseover(function(){
   
    box.style.display = 'block';
});
$(box).mouseleave(function(){
    this.style.display = 'none';
       
});
$(span).mouseover(function(){
          
           ul.style.display = 'block';
           $(ul).mouseleave (function(){
               this.style.display = 'none';
           });
        });