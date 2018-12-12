$(document).ready(function() {
  let subBtn = $(".subform");
  $(".icon-right-open-mini").on("click", function() {
    $(".sub-form").submit();
  });

  $("nav li").onmouseover = function(e) {
    console.log(this);
  };
  let navList = document.querySelectorAll("nav li");
  console.log(navList);
  for (let i = 0; i < navList.length; i++) {
    navList[i].onmouseover = function() {
      let sub = navList[i].querySelector(".submenu");
      if (sub) {
        sub.style.visibility = "visible";
      }
    };
    navList[i].onmouseout = function() {
      let sub = navList[i].querySelector(".submenu");
      if (sub) {
        sub.style.visibility = "hidden";
      }
    };
  }
  window.addEventListener("scroll", function(e) {
    //do stuff

    let list = this.document.querySelectorAll(".submenu");
    for (let i = 0; i < list.length; i++) {
      $(".submenu")[i].style.visibility = "hidden";
    }
  });

  $(".audio-item-box").accordion({
    header: ".item-header",
    heightStyle: "content",
    collapsible: true,
    activate: function( event, ui ) {
      if($(ui.oldHeader[0]).find('.item-header-arrow')[0]){
        if($(ui.oldHeader[0]).find('.item-header-arrow')[0].classList.contains('rotate')){
          $(ui.oldHeader[0]).find('.item-header-arrow')[0].classList.remove('rotate')
       }
      }
    },
  });
  let accItem = $(".item-header");
  for (let i = 0; i < accItem.length; i++) {
    let accAr = $(".item-header-arrow");
    accItem[i].addEventListener("click", function() {
      for (let b = 0; b < accAr.length; b++) {
        accAr[b].classList.remove("rotate");
      }
      accAr[i].classList.add("rotate");
    });
  }
  let tabLink = $(".tabLink");
  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].addEventListener("click", function(e) {
      console.log(this);
      e.preventDefault();
      let destination = $(tabLink[i]).attr("href");
      let top = $(destination).offset().top;

      console.log(destination);
      $("html, body").animate(
        {
          scrollTop: top
        },
        800
      );
      return false;
    });
  }
});
