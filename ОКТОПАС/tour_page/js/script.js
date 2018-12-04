$('.header-slaider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 1,
    pauseOnHover: false,
});
$('.main-slider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 2,
    pauseOnHover: false,
});
$('.reviews-slider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed: 4000,
    dots: true,
    dotsClass: "my-dots",
    autoplay : false,
    slidesToScroll: 1,
    slidesToShow: 2,
    pauseOnHover: false,
    responsive:[
        {
            breakpoint: 1600,
            settings: {
              slidesToShow: 1,
            }
             
        }
    ]
});
$( document ).ready(function(){
    let subBtn = $('.subform');
    $('.icon-right-open-mini').on('click', function(){
        $('.sub-form').submit();
    });
    
    $('nav li').onmouseover = function(e){
        console.log( this);
    }
    let navList = document.querySelectorAll('nav li');
    console.log(navList); 
    for (let i = 0; i < navList.length; i++) {
        navList[i].onmouseover = function(){
            let sub = navList[i].querySelector('.submenu');
            if (sub) {
               sub.style.visibility = 'visible'; 
            } 
        } 
        navList[i].onmouseout = function(){
            let sub = navList[i].querySelector('.submenu');
            if (sub) {
                sub.style.visibility = 'hidden';
            }
        }
    }
    window.addEventListener('scroll',function(e) {
        //do stuff
        
        let list = this.document.querySelectorAll('.submenu');
        for (let i = 0; i < list.length; i++) { 
        $('.submenu')[i].style.visibility = 'hidden';  
        }
        
    
    });
    

    let preBtn = document.querySelectorAll('.slaider-arrow-left');

    for (let i = 0; i < preBtn.length; i++) {
        preBtn[i].addEventListener('click',function(){
            let parent = this.parentElement;
            let arrow = parent.getElementsByClassName('slick-prev')[0];
            arrow.click();
        });   
    }


    let nextBtn = document.querySelectorAll('.slaider-arrow-right');

    for (let i = 0; i < nextBtn.length; i++) {
        nextBtn[i].addEventListener('click',function(){
            let parent = this.parentElement;
            let arrow = parent.getElementsByClassName('slick-next')[0];
            arrow.click();
        });   
    }

    //Карта
  
        let map = $('#map');
        console.log(map.children()[0]);
       map.children()[0].style.height ='971px';



    //Аккардеон
    let header =$('.accordeon-item-word');
    $('#accordeon').accordion({
        header: '.accordeon-item-word',
        active: 0,

    });
   
   
    let accItem = $('.accordeon-item-word');
    for (let i = 0; i < accItem.length; i++) {
        let accAr = $('.slide-show');
        accItem[i].addEventListener('click', function(){
            for (let b = 0; b < accAr.length; b++) {
                accAr[b].classList.remove('rotate');
            }
            accAr[i].classList.add('rotate');
        }); 
    }

    //звезды


    //Плеер
    $('#audio-player').mediaelementplayer({
        alwaysShowControls: true,
        features: ['playpause','volume','progress'],
        audioVolume: 'horizontal',
        audioWidth: 590,
        audioHeight: 54,
        duration: 100,
        });


    $('#rate').rateit({
        resetable: false
    });
    $('.bigstars').rateit({
        resetable: false
    });
   
    /*let word = $('.accordeon-item-word');
            for (let i = 0; i < word.length; i++) {
              word[i].addEventListener('click',function(){
                
                let box = document.querySelectorAll('.slide-show');
                for (let i = 0; i < box.length; i++) {
                    box[i].classList.remove('rotate');
                    
                }
                this.classList.add('rotate');
            });
            }
            

           
 
/*

  */
    //Функционал карточки

    
    

    



});