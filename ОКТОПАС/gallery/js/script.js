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
       afterShow : function(){
           
        let box = $('.fancybox-toolbar');
        
        
        /*
           let box = $('.fancybox-slide--complete');
           let current = $(box).find('.fancybox-content');
           let arLeft = $('.fancybox-button--arrow_left');
           let arRight = $('.fancybox-button--arrow_right');
           let leftPos = $(current)[0].getBoundingClientRect().left;
           let rightPos = $(current)[0].getBoundingClientRect().right;
           $(arLeft).css("left", `${leftPos - 139 - 50}px`);
           console.log(box);
          
            let arLeft = $('.fancybox-button--arrow_left');
            let arRight = $('.fancybox-button--arrow_right');
            let leftPos = box.getBoundingClientRect().left;
            let rightPos = box.getBoundingClientRect().right;
            console.log(arLeft);
            $(arLeft).css("left", `${leftPos - 139 - 50}px`);
            */   
           
          
       },
      });
    $('.tourist-slider-item a').fancybox({
    loop: true,
    infobar:false,
    });
    
      


});