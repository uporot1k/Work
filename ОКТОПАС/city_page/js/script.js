$('.header-slaider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 1,
    pauseOnHover: false,
});
$('.tour-slaider').slick({
    arrows: true,
    autoplay : true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    slidesToShow: 2,
    pauseOnHover: false,
    
    
});
$( document ).ready(function(){
    let subBtn = $('.subform');
$('.icon-right-open').on('click', function(){
    $('.sub-form').submit();
});

$(".page-body-container").hide();
$(".page-body-container").addClass('close');
$('.opener').click(function(){
    if($(".page-body-container").hasClass('close')){
        $(".page-body-container").removeClass('close')
        $(".page-body-container").slideDown();
        $('.opener').addClass('rotate'); 
    }else{
        $(".page-body-container").addClass('close');
        $(".page-body-container").slideUp();
        $('.opener').removeClass('rotate');
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

});