$(document).ready(() => {
  let body = $("body")[0];
  console.log(body);

  let layerOne = document.querySelector("#scene");

  body.addEventListener("mousemove", function(e) {
    var pageX = e.clientX,
      pageY = e.clientY;

    layerOne.style.transform =
      "translateX(" + pageX / 1000 + "%) translateY(" + pageY / 1000 + "%)";
  });
  $(".anime").addClass("hidden");
  let anime = calcTopOffset("anime");
  window.addEventListener("scroll", function(e) {
    //do stuff
    scrollTab(anime);
  });

  $(".btn").mouseleave(e => {
    let target = e.target;
    if (target.classList.contains("btn")) {
      target.classList.remove("bs-fi");
      target.classList.add("button_fade-blue");
      /*setTimeout(function(){
                target.classList.remove('bs-fi');
            },400);*/
    } else {
      let parent = $(target).parent()[0];
      console.log(parent);
      parent.classList.remove("bs-fi");

      /*setTimeout(function(){
                target.classList.remove('bs-fo');
            },400);*/
    }
  });
 
  $(".btn").mousedown(e => {
    let target = e.target;
    if (target.classList.contains("btn")) {
      target.classList.remove("bs-fi");
      target.classList.add("bs-fo");
    } else {
      let parent = $(target).parent()[0];
      parent.classList.remove("bs-fi");
      parent.classList.add("bs-fo");
    }
  });
  $(".btn").mouseup(e => {
    let target = e.target;
 
    if (target.classList.contains("btn")) {
      target.classList.remove("bs-fo");
      target.classList.add("bs-fi");
      
    } else {
      let parent = $(target).parent()[0];
 
      parent.classList.remove("bs-fo");
      parent.classList.add("bs-fi");
      
    }
  });

  $('.modal__close img').click(()=>{

      $.fancybox.close(); 
  });
  $('.footer__btn').click(()=>{
    $.fancybox.close(); 
  });

  function scrollTab(mas) {
    mas.forEach(e => {
      let different = Math.abs(e.box.boxHeight - $(window).scrollTop());

      if (different < 800) {
        e.box.classList.remove("hidden");
        e.box.classList.add("visible");
      }
    });
  }
  function calcTopOffset(sel) {
    let selector = [];
    let box = $(`.${sel}`);

    for (let i = 0; i < box.length; i++) {
      let boxTmp = box[i];
      boxTmp.position = i;
      boxTmp.boxHeight = $(box[i]).offset().top;
      selector[i] = { box: boxTmp };
    }
    return selector;
  }

  //Уравнитель
  function GreatBalancer(block){
    var wrapWidth = $(block).parent().width(),  // 1
     blockWidth = $(block).width(),          // 2
     wrapDivide = Math.floor(wrapWidth / blockWidth),     // 3
     cellArr = $(block);
    for(var arg = 1;arg<=arguments.length;arg++) {           // 4.1
     for (var i = 0; i <= cellArr.length; i = i + wrapDivide) {
     var maxHeight = 0,
      heightArr = [];
     for (j = 0; j < wrapDivide; j++) {               // 4.2
     heightArr.push($(cellArr[i + j]).find(arguments[arg]));
      if (heightArr[j].outerHeight() > maxHeight) {
       maxHeight = heightArr[j].outerHeight();
      }
     }
     for (var counter = 0; counter < heightArr.length; counter++) {           // 4.3
      $(cellArr[i + counter]).find(arguments[arg]).outerHeight(maxHeight);
      }
     }
    }
  }
  GreatBalancer('.content__item','.content__item','.item__head','item__body')
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
