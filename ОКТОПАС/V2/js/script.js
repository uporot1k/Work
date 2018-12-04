$(document).ready(function(){
    $(".parallax").paroller({ factor: 0.5, factorYs: 0.2, type: 'foreground', direction: 'vertical' });
    $('.work-area').scroll_padding = '1000';
    
    window.onscroll = function(){
        let padding = window.pageYOffset;
        if(padding >= '300'){
            console.log(padding);  
            let item = $('.body-wrapper')[0];
            item.style.opacity = '1';
        }
        if(padding >= '1900'){
            console.log(padding);  
            let item = $('.switch span')[0];
            item.style.right = 'calc(100% - 67px)';
            function text(){
                let text_1 = $('.proto-word')[0];
                let text_2 = $('.proto-annotation')[0];
                text_1.style.opacity = '1';
                text_2.style.opacity = '1';
            }
            setTimeout(text, 1500);
        }
        
    }

    $("a").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $('.contact-word').offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });
      $(".main-banner-button").click(function() {
        
        var destination = $('.contact-word').offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
      });

    $('.form-body').hide();
    let btn = $('.custom-submit');
    for (let i = 0; i < btn.length; i++) {
          
        btn[i].addEventListener('click', function(){
            let body = $('.form-body');

            if($(body[i]).hasClass('clicked') === true){
                //Расположение Ajax-запроса
                console.log(1);
            }
            else{
                let parent = btn[i].parentElement;
                let item = parent.querySelector('.form-body');
                console.log(this);
                item.classList.add('clicked');
                item.style.display = 'block';
        }
    });
    }
});