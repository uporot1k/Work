$('.album-slider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed: 4000,
    slidesToScroll:6,
    slidesToShow: 6,
    rows:3,
    pauseOnHover: false,
    dots: true,
    dotsClass: "my-dots",
    responsive:[
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
            }
             
        }
    ]
});
$('.tourist-slider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed: 4000,
    slidesToScroll:2,
    slidesToShow: 6,
    rows:3,
    pauseOnHover: false,
    dots: true,
    dotsClass: "my-dots",
    responsive:[
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
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
    $('.album-slider-item a').fancybox({
       loop: true,
       infobar:false,
      });
    $('.tourist-slider-item a').fancybox({
    loop: true,
    infobar:false,
    });
/*
    $('.album-item').hover(function(e){
        let target = e.target;
        if (target.parentElement == this ||target.parentElement.parentElement == this ){
            let substrate = $(this).children('.album-substrate');
            $(substrate).css('display','none');
            let bg = $(this).children('.album-item-word');
            console.log(bg);
            $(bg).css('background-image','url("./img/bg.png")');
        }
    }, function(e){
        let substrate = $(this).children('.album-substrate');
        $(substrate).css('display','block');
        let bg = $(this).children('.album-item-word');
        console.log(bg);
        $(bg).css('background-image','none');
    });
    */
      


});