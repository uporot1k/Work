$('.header-slaider').slick({
    arrows: true,
    autoplay : false,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 1,
    pauseOnHover: false,
});
$('.tour-slaider').slick({
    arrows: true,
    rows: 2,
    dots: true,
    dotsClass: "my-dots",
    autoplay : false,
    autoplaySpeed: 2000,
    slidesToScroll: 4,
    slidesToShow: 4,
    pauseOnHover: false,
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
    console.log(1);
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


});