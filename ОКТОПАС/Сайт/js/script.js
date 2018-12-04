$('.header-slaider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 1,
    pauseOnHover: false,
});
$('.travel-slaider').slick({
    arrows : true,
    autoplay :true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 3,
    pauseOnHover: false,
});
$('.news-slaider').slick({
    arrows : true,
    autoplay :true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 4,
    pauseOnHover: false,
});
$('.adv-slaider').slick({
    arrows :false,
    autoplay :true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    slidesToShow: 1,
    pauseOnHover: false,
    useCss:'height : 800px',
});
$( document ).ready(function(){
    ( function( factory ) {
        if ( typeof define === "function" && define.amd ) {
    
            // AMD. Register as an anonymous module.
            define( [ "../widgets/datepicker" ], factory );
        } else {
    
            // Browser globals
            factory( jQuery.datepicker );
        }
    }( function( datepicker ) {
    
    datepicker.regional.ru = {
        closeText: "Закрыть",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Сегодня",
        monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
        "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
        monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
        "Июл","Авг","Сен","Окт","Ноя","Дек" ],
        dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
        dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
        dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "" };
    datepicker.setDefaults( datepicker.regional.ru );
    
    return datepicker.regional.ru;
    
    } ) );

$('#filter-date').datepicker($.datepicker.regional["ru"]);
let subBtn = $('.subform');
$('.icon-right-open-mini').on('click', function(){
    $('.sub-form').submit();
});


$('#select').click(function(){
    console.log(this.parentElement);
    let parent = this.parentElement.parentElement;
    let select = parent.querySelector('#filter-city');
    console.log(select);
    select.click();
});
$('#input').click(function(){
    console.log(this.parentElement);
    let parent = this.parentElement.parentElement;
    let select = parent.querySelector('#filter-date');
    console.log(select);
    select.focus();
});


let arrayList = document.querySelectorAll('.my-custom-checkbox');
let labelList = $('.settings-item label');
for(let i = 0;i < arrayList.length; i++){
    arrayList[i].addEventListener('click', function(){
        let custom = this;
        let parent = this.parentElement;
        let input = parent.getElementsByTagName('input')[0];
        if(input.hasAttribute('checked')){
            input.removeAttribute('checked');
            let box = custom.getElementsByTagName('div')[0];
            box.remove();
        }else{
            input.setAttribute('checked','ckecked');
            let box = document.createElement('div');
            box.classList.add('checked');
            custom.appendChild(box);

        }
        
    });
}


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

$("a.news-link").fancybox({
    'transitionIn'	:	'elastic',
    'transitionOut'	:	'elastic',
    'speedIn'		:	600, 
    'speedOut'		:	200, 
    'overlayShow'	:	false,
    'smallBtn'      :   false
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
            let index = window.pageYOffset ;
            console.log(index);
            let nav = Math.abs(index - 85);
            console.log(nav);
            sub.style.top = `${nav}px`;
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
    console.log(1);
    let list = this.document.querySelectorAll('.submenu');
    for (let i = 0; i < list.length; i++) { 
    $('.submenu')[i].style.visibility = 'hidden';  
    }

});



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
            
            
         
    
  

/* $('.submenu').hover(function(){
     $('header').style.position = 'fixed';
    $('header').style.top = '0';
}, function(){
    $('header').style.position = 'absolute'; 
});
$('.submenu-container').hover(function(){
    $('header').style.position = 'fixed';
    $('header').style.top = '0';
}, function(){
    $('header').style.position = 'absolute'; 
});
let newsLink = document.querySelectorAll('.news-link');
console.log(newsLink);
for (let i = 0; i < newsLink.length; i++) {
    newsLink[i].addEventListener('click', function(e){
        e.preventDefault();
        let body = document.querySelector('body');
        body.style.overflow = 'hidden';
        let popup = document.querySelector('.overlay');
        popup.style.display = 'block';
        popup.addEventListener('click',function(){
            let popup = document.querySelector('.overlay');
            popup.style.display = 'none'; 
            body.style.overflow = 'auto';
        });
    });
    
}
*/
});