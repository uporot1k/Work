$(document).ready(function (){
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

    scrollTab(anime);
  });

  $(".btn").mouseleave(e => {
    let target = e.target;
    if (target.classList.contains("btn")) {
      target.classList.remove("bs-fi");
      target.classList.add("button_fade-blue");

    } else {
      let parent = $(target).parent()[0];
      console.log(parent);
      parent.classList.remove("bs-fi");


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
      console.log(1);
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
  
  GreatBalancer('.content__item','.content__item','.item__head','item__body');
  
}); 
