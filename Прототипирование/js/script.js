$(document).ready(function() {
  console.log(1);
  $(".parallax").paroller({
    factor: 0.5,
    factorYs: 0.2,
    type: "foreground",
    direction: "vertical"
  });
  $(".work-area").scroll_padding = "1000";
  setTimeout(function() {
    let item = $(".body-wrapper")[0];
    item.style.opacity = "1";
  }, 5000);
  window.onscroll = function() {
    console.log(1);
    let padding = window.pageYOffset;
    console.log(padding);
    if (padding >= "300") {
      console.log(padding);
    }
    if (padding >= "1500") {
      if (!$(".spincrement")[0].classList.contains("play")) {
        numAnimate();
        $(".spincrement")[0].classList.add("play");
        console.log($(".spincrement").attr("data-num"));
      }
    }
    if (padding >= "1900") {
      console.log(padding);
      let item = $(".switch span")[0];
      item.style.right = "calc(100% - 67px)";
      function text() {
        let text_1 = $(".proto-word")[0];
        let text_2 = $(".proto-annotation")[0];
        text_1.style.opacity = "1";
        text_2.style.opacity = "1";
      }
      setTimeout(text, 500);
    }
  };

  function numAnimate() {
    let index = $(".spincrement");
    for (let i = 0; i < index.length; i++) {
      let number = 0;
      let stop = $(index[i]).attr("data-num");
      setInterval(function() {
        number++;
        if (number <= `${stop}`) {
          index[i].textContent = number;
        }
      }, 100);
    }
  }
  let mainBtn = $(".main-banner-button");

  $(mainBtn).mousedown(function() {
    this.style.border = "none";
  });
  $(mainBtn).mouseup(function() {
    this.style = "border-bottom:3px solid #c81d0e";
  });

  let customBtn = $(".custom-submit");
  for (let i = 0; i < customBtn.length; i++) {
    $(customBtn[i]).mousedown(function() {
      this.style.border = "none";
    });
    $(customBtn[i]).mouseup(function() {
      this.style = "border-bottom:3px solid #c81d0e";
    });
  }
  $("a.link").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(".contact-word").offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination
      },
      800
    );
    return false;
  });
  $(".main-banner-button").click(function() {
    var destination = $(".contact-word").offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination
      },
      800
    );
    return false;
  });

  $(".form-body").hide();
  let btn = $(".custom-submit");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
      let body = $(".form-body");

      if ($(body[i]).hasClass("clicked") === true) {
        //Расположение Ajax-запроса
        let input = $(body[i].parentElement)
          .find(".custom-submit")
          .find("input");
        $(input).click();
      } else {
        let parent = btn[i].parentElement;
        let item = parent.querySelector(".form-body");
        console.log(this);
        item.classList.add("clicked");
        item.style.display = "block";
      }
    });
  }
  ///s
 
});
