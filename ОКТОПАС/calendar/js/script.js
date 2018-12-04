$(".album-slider").slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToScroll: 6,
  slidesToShow: 6,
  rows: 3,
  pauseOnHover: false,
  dots: true,
  dotsClass: "my-dots",

  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});
$(".tourist-slider").slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToScroll: 6,
  slidesToShow: 6,
  rows: 3,
  pauseOnHover: false,
  dots: true,
  dotsClass: "my-dots",
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});
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

  $("a.news-link").fancybox({
    transitionIn: "elastic",
    transitionOut: "elastic",
    speedIn: 600,
    speedOut: 200,
    overlayShow: false,
    smallBtn: false,
    toolbar: false
  });

  /* Блок логики календарей*/

  //curCalendar

  let curMthCon = $(".calendar-event-content")[0];
  var curMthList = curMthCon.querySelectorAll(".event-item");
  console.log(curMthCon);

  for (let i = 0; i < curMthList.length; i++) {
    let box = $(curMthList[i])
      .find(".item-date-number")
      .children()[0];
    let fWord = box.textContent.split("-")[0];
    let sWord = box.textContent.split("-")[1];
    let span = $(curMthList[i]).find(".item-body")[0];

    $(span).attr("data-start", fWord);
    if (sWord) {
      $(span).attr("data-end", sWord);
    }
  }

  //Собираем все ячейки таблицы, textContent, которых равен числу и непустой строке
  let curCal = $("table")[0];

  var cell = curCal.querySelectorAll("td");

  for (let i = 0; i < cell.length; i++) {
    if (!isNaN(cell[i].textContent) && cell[i].textContent != "") {
      cell[i].addEventListener("click", function() {
        for (let k = 0; k < cell.length; k++) {
          cell[k].classList.remove("active");
        }
        this.classList.add("active");
        let num = this.textContent;

        for (let i = 0; i < curMthList.length; i++) {
          let box = $(curMthList[i]).find(".item-body")[0];
          box.classList.remove("active");
          if (
            (parseInt(num) >= parseInt($(box).attr("data-start")) &&
              parseInt(num) <= parseInt($(box).attr("data-end"))) ||
            parseInt(num) == parseInt($(box).attr("data-start"))
          ) {
            box.classList.add("active");
          } else {
          }
        }
      });
    }
  }
    //Клик на статью в списке и выделение числа в календаре
  for (let i = 0; i < curMthList.length; i++) {
    let box = $(curMthList[i]).find(".item-body")[0];
    
    box.addEventListener("click", function() {
        for (let index = 0; index < curMthList.length; index++) {
            let box = $(curMthList[index]).find(".item-body")[0];
            box.classList.remove("active");
            console.log('box', box);
        }
        box.classList.add("active");
      for (let k = 0; k < cell.length; k++) {
        cell[k].classList.remove("active");

        if (
          (!isNaN(cell[k].textContent) &&
            cell[k].textContent !== "" &&
            parseInt($(box).attr("data-start")) <=
            parseInt(cell[k].textContent) &&
            parseInt($(box).attr("data-end")) >=
            parseInt(cell[k].textContent)) ||
            parseInt(cell[k].textContent) == parseInt($(box).attr("data-start"))
        ) {
          cell[k].classList.add("active");
        } 
      }
    });
   
  }

  //nextCalendar
  let nextMthCon = $(".calendar-event-content")[1];
  var nextMthList = nextMthCon.querySelectorAll(".event-item");


  for (let i = 0; i < nextMthList.length; i++) {
    let box = $(nextMthList[i])
      .find(".item-date-number")
      .children()[0];
    let fWord = box.textContent.split("-")[0];
    let sWord = box.textContent.split("-")[1];
    let span = $(nextMthList[i]).find(".item-body")[0];
    console.log(span);
    console.log(box);
    $(span).attr("data-start", fWord);
    if (sWord) {
      $(span).attr("data-end", sWord);
    }
  }

  //Собираем все ячейки таблицы, textContent, которых равен числу и непустой строке
  let nextCal = $("table")[1];

  let nCell = nextCal.querySelectorAll("td");

  for (let i = 0; i < nCell.length; i++) {
    if (!isNaN(nCell[i].textContent) && nCell[i].textContent != "") {
      nCell[i].addEventListener("click", function() {
        console.log("cell", nCell);
        for (let k = 0; k < nCell.length; k++) {
          nCell[k].classList.remove("active");
        }
        this.classList.add("active");
        let num = this.textContent;

        for (let i = 0; i < nextMthList.length; i++) {
          let box = $(nextMthList[i]).find(".item-body")[0];
          box.classList.remove("active");
          if (
            (parseInt(num) >= parseInt($(box).attr("data-start")) &&
              parseInt(num) <= parseInt($(box).attr("data-end"))) ||
            parseInt(num) == parseInt($(box).attr("data-start"))
          ) {
            box.classList.add("active");
          } else {
          }
        }
      });
    }
  }

  for (let i = 0; i < nextMthList.length; i++) {
    let box = $(nextMthList[i]).find(".item-body")[0];
    
    box.addEventListener("click", function() {
        for (let index = 0; index < nextMthList.length; index++) {
            let box = $(nextMthList[index]).find(".item-body")[0];
            box.classList.remove("active");
            console.log('box', box);
        }
        box.classList.add("active");
      for (let k = 0; k < nCell.length; k++) {
        nCell[k].classList.remove("active");

        if (
          (!isNaN(nCell[k].textContent) &&
          nCell[k].textContent !== "" &&
            parseInt($(box).attr("data-start")) <=
            parseInt(nCell[k].textContent) &&
            parseInt($(box).attr("data-end")) >=
            parseInt(nCell[k].textContent)) ||
            parseInt(nCell[k].textContent) == parseInt($(box).attr("data-start"))
        ) {
            nCell[k].classList.add("active");
        } 
      }
    });
   
  }
  /* Конец блока логики календарей*/
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
});
