$(document).ready(()=>{
    
    let body = $('body')[0];
    console.log(body)


    let layerOne = document.querySelector('#scene');
 

    body.addEventListener('mousemove',function(e){
    var pageX = e.clientX,
    pageY = e.clientY;
 
   
    layerOne.style.transform = 'translateX(' + pageX/1000+ '%) translateY(' + pageY/1000 + '%)';
   
    });
    $('.anime').addClass('hidden');
    let anime = calcTopOffset('anime');
    window.addEventListener('scroll',function(e) {
        //do stuff
        scrollTab(anime);
        
    });
    
    
    $('.btn').mousedown((e)=>{
        let target = e.target;
        if(target.classList.contains('btn')){
            target.classList.remove('bs-fi');
            target.classList.add('bs-fo');
        }else{
            let parent = $(target).parent()[0];
            parent.classList.remove('bs-fi');
            parent.classList.add('bs-fo');
        }

    });
    $('.btn').mouseup((e)=>{
        let target = e.target;
        console.log(e.target);
        if(target.classList.contains('btn')){

            target.classList.remove('bs-fo');
            target.classList.add('bs-fi');
        }else{
            let parent = $(target).parent()[0];
            console.log(parent);
            parent.classList.remove('bs-fo');
            parent.classList.add('bs-fi');
        }
        
    });
        
 
    function scrollTab(mas){
        mas.forEach((e)=>{
            let different = Math.abs(e.box.boxHeight -$(window).scrollTop());
            
            if (different < 800){
            
                e.box.classList.remove('hidden');
                e.box.classList.add('visible');
                
            }
        });
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
    /*for (let k = 0; k < headerNav.length; k++) {

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
   */
});