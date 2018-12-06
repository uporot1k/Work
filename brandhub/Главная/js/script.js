$(document).ready(()=>{
    
        $('.alg-slaider').slick({
             dots:true,
             arrows:false,
             
            slidesToShow: 1,
            slidesToScroll: 1,
            
        });

        $('.portfolio-slaider').slick({
            dots:true,
            arrows:false,
            centerMode: true,
            centerPadding: '450px',
            adaptiveHeight: true,
           slidesToShow: 1,
           slidesToScroll: 1,

           responsive: [
            {
              breakpoint:1500,
              settings: {

                centerMode: true,

                slidesToShow: 1
              }
            }]
       });

       let play = $('.pause').children()[0];
       let video = $('#bgvideo')[0];
       console.log(play);
       console.log(video);
       $(play).click(()=>{
           if(video.paused){
            video.play();
            play.classList.remove('fa-play-circle');
            play.classList.add('fa-pause-circle');
           }else{
            video.pause();
            play.classList.remove('fa-pause-circle');
            play.classList.add('fa-play-circle');
           
           }
           
       });
       
     let dots = $('.slaider-number');
     let slickDots = $('.slick-dots').find('li');
  
     $('.alg-slaider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
         dots[currentSlide].classList.remove('active');
         dots[nextSlide].classList.add('active');
        /*for (let k = 0; index < dots.length; k++) {
            dots[k].classList.remove('active');
            
        }*/
      });
     for (let i = 0; i < dots.length; i++) {
        $(dots[i]).click(()=>{
            $(slickDots[i]).click();
        });
     }

     let anchor = $('.anchor');
     let headerNav = $('.header-nav li');

     

    for (let k = 0; k < headerNav.length; k++) {

        $(headerNav[k]).click((event)=>{
            event.preventDefault();
            deleteClass('header-nav', 'current');
            addClass('header-nav', 'current', k )
            goTab(k, 1);
        });
        
    }   
    let heightMas = calcTopOffset('anchor');
    goTab('start');
    window.addEventListener('scroll',function(e) {
        //do stuff
        scrollTab(heightMas);
        
    });
    function scrollTab(mas){
        mas.forEach((e)=>{
            let different = Math.abs(e.box.boxHeight -$(window).scrollTop());

            if (different < 100){
                deleteClass('header-nav', 'current');
                addClass('header-nav', 'current', e.box.position);
            }
        });
    }
    function anim() {
        if(!animation) return false;
    
    }
    
    function anim_stop() {
    animation = false;
    }
    var animation = true;


    function goTab(position, scroll){
        if(position == 'start'){
            addClass('header-nav', 'current', 0)
            $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: 0,
            });
        }else{
        let box = $('.anchor')[position];
        let boxOffset = $(box).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: boxOffset-80,
        }
        );
    }
    }


    function calcTopOffset(sel){
        let selector = [];
        let box = $(`.${sel}`);

        for (let i = 0; i < box.length; i++) {
           let boxTmp = box[i];
           boxTmp.position = i;  
           boxTmp.boxHeight = $(box[i]).offset().top;           
           selector[i] = {box : boxTmp};           
       }
        return selector;
    }

    function deleteClass(selector,сlass){
       if(selector =='false'){return false}
            let box = $(`.${selector}`)[0];
        let child = box.querySelectorAll('li');
        for (let i = 0; i < child.length; i++) {
             child[i].classList.remove(`${сlass}`); 
             
        
        }
       
    };
    function addClass(selector, сlass, flag,access){
        if(selector =='false'){return false}
       let box = $(`.${selector} li`)[flag];
       box.classList.add(сlass);
   };
   
});