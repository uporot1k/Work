$(document).ready(function() {
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

 
  $('.pick').datepicker($.datepicker.regional["ru"]);
  $('#drop').dropzone({ url: "/file/post" });
  $('#tel').inputmask({"mask": " 7 (999) 999-9999"});
  $('#form-submit').click(()=>{
    $('#offer').submit();
  });
  
  $('.btn-addit').click(()=>{
    let box = $('.tourist-item')[0].cloneNode(true);
    let count = $('.tourist-item').length;
    $(box).find('input').val('');
    let calendar = $(box).find('.pick');
    $(calendar).removeClass().addClass('pick');
    $(calendar).removeAttr('id') 
    $(calendar).datepicker($.datepicker.regional["ru"]);  
    $(box).insertAfter($('.tourist-item')[count-1]);
  });
  $('#file').on('change', function() {
    var arrayFiles = this.files, // массив с выбранными фалами
        formItem = this.parentNode, // родительский элемент, для того чтобы вставить список с файлами
        listFiles = document.createElement('span'); // список с файлами
         // файлы
    
    // Если список с файлами уже вставлен в ДОМ, то удаляем его
    if (formItem.querySelector('.list-files')) {
      formItem.querySelector('.list-files').remove();
    }
    
    listFiles.className = 'list-files'; // добавим класс, чтобы было удобнее стилять
    if (arrayFiles != '') {
      listFiles.innerHTML = arrayFiles[0].name; 
    } else {
      listFiles.innerHTML = 'Прикрепить фаил  (PDF,JPG)';
    }
    
    console.log(listFiles);

    //listFiles.innerHTML = li;
    
    formItem.appendChild(listFiles);  
  });
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
