/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e){e.fn.niceSelect=function(t){function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),n=t.find("option"),i=t.find("option:selected");s.find(".current").html(i.data("display")||i.text()),n.each(function(t){var n=e(this),i=n.data("display");s.find("ul").append(e("<li></li>").attr("data-value",n.val()).attr("data-display",i||null).addClass("option"+(n.is(":selected")?" selected":"")+(n.is(":disabled")?" disabled":"")).html(n.text()))})}if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),n=e(this).next(".nice-select"),i=n.hasClass("open");n.length&&(n.remove(),s(t),i&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||s(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var s=e(this),n=s.closest(".nice-select");n.find(".selected").removeClass("selected"),s.addClass("selected");var i=s.data("display")||s.text();n.find(".current").text(i),n.prev("select").val(s.data("value")).trigger("change")}),e(document).on("keydown.nice_select",".nice-select",function(t){var s=e(this),n=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?n.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var i=n.nextAll(".option:not(.disabled)").first();i.length>0&&(s.find(".focus").removeClass("focus"),i.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var l=n.prevAll(".option:not(.disabled)").first();l.length>0&&(s.find(".focus").removeClass("focus"),l.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1});var n=document.createElement("a").style;return n.cssText="pointer-events:auto","auto"!==n.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);

$(document).ready(function() {
  /********* On scroll heder Sticky *********/
  window.onscroll = function () {
    var header = document.querySelector("header");
    if (window.pageYOffset > 0) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  };
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header-sticky").style.top = "0";
    } else {
      document.getElementById("header-sticky").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  }
  /********* Mobile Menu ********/  
  $('.mobile-menu-button').on('click',function(e){
    e.preventDefault();
    setTimeout(function(){
        $('body').addClass('no-scroll active-menu');
        $(".mobile-menu-wrapper").toggleClass("active-menu");
        $('.overlay').addClass('menu-overlay');
    }, 50);
  }); 
  $('body').on('click','.overlay.menu-overlay, .menu-close-icon svg', function(e){
      e.preventDefault(); 
      $('body').removeClass('no-scroll active-menu');
      $(".mobile-menu-wrapper").removeClass("active-menu");
      $('.overlay').removeClass('menu-overlay');
  });
  /********* Mobile Filter Popup ********/
  $('.filter-title').on('click',function(e){
    e.preventDefault();
    setTimeout(function(){
        $('body').addClass('no-scroll filter-open');
        $('.overlay').addClass('active');
    }, 50);
  }); 
  $('body').on('click','.overlay.active, .close-filter', function(e){
    e.preventDefault(); 
    $('.overlay').removeClass('active');
    $('body').removeClass('no-scroll filter-open');
  });      
  /*********  Header Search Popup  ********/
  $(".search-header a").click(function () {
    $(".search-popup").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
  $(".close-search").click(function () {
    $(".search-popup").removeClass("active");
    $("body").removeClass("no-scroll");
  });
  /********* Cart Popup ********/
  $('.cart-header').on('click',function(e){
    e.preventDefault();
    setTimeout(function(){
        $('body').addClass('no-scroll cartOpen');
        $('.overlay').addClass('cart-overlay');
    }, 50);
  }); 
  $('body').on('click','.overlay.cart-overlay, .closecart', function(e){
    e.preventDefault(); 
    $('.overlay').removeClass('cart-overlay');
    $('body').removeClass('no-scroll cartOpen');
  });
  /*********  Size Popup  ********/ 
    $(".size-btn").click(function() { 
      $(".size-popup").toggleClass("active");   
      $("body").toggleClass("no-scroll");
  });
  $(".close-search").click(function() { 
      $(".size-popup").removeClass("active"); 
      $("body").removeClass("no-scroll");
  });
  $(".close-btn").click(function() { 
      $(".size-popup").removeClass("active"); 
      $("body").removeClass("no-scroll");
  });
  /******* Subscribe popup Js *******/
  $('.sub-close-btn').click(function () {
    $('.subscribe-popup').slideUp(); 
    $(".subscribe-overlay").removeClass("open");
  });   
  /********* qty spinner ********/
  var quantity = 0;
  $('.quantity-increment').click(function(){;
      var t = $(this).siblings('.quantity');
      var quantity = parseInt($(t).val());
      $(t).val(quantity + 1); 
  }); 
  $('.quantity-decrement').click(function(){
      var t = $(this).siblings('.quantity');
      var quantity = parseInt($(t).val());
      if(quantity > 1){
          $(t).val(quantity - 1);
      }
  });   
  /******  Nice Select  ******/ 
  $('select').niceSelect(); 
  /*********  Multi-level accordion nav  ********/ 
  $('.acnav-label').click(function () {
      var label = $(this);
      var parent = label.parent('.has-children');
      var list = label.siblings('.acnav-list');
      if (parent.hasClass('is-open')) {
          list.slideUp('fast');
          parent.removeClass('is-open');
      }
      else {
          list.slideDown('fast');
          parent.addClass('is-open');
      }
  });  
  /****  TAB Js ****/
  $("ul.tabs li").click(function () {
    var $this = $(this);
    var $theTab = $(this).attr("data-tab");
    if ($this.hasClass("active")) {
    } else {
      $this
        .closest(".tabs-wrapper")
        .find("ul.tabs li, .tabs-container .tab-content")
        .removeClass("active");
      $(
        '.tabs-container .tab-content[id="' +
          $theTab +
          '"], ul.tabs li[data-tab="' +
          $theTab +
          "]"
      ).addClass("active");
    }
    $(this).addClass("active");
    });
  });  

  /** discount slider **/
  let SwiperTop = new Swiper('.swiper--top', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true
  });
  /*** home banner slider **/
  var swiper = new Swiper(".home-banner-slider", {
    speed: 800,
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          return '0' + number;
      }
    },  
    navigation: {
      nextEl: ".home-arrow-next",
      prevEl: ".home-arrow-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  });
  /** bestseller slider **/
  var swiper = new Swiper(".bestseller-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      475: {
        slidesPerView: 2,
      },
    },
  });

   /** bestseller slider **/
   var swiper = new Swiper(".beauty-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      475: {
        slidesPerView: 2,
      },
    },
  });
  /** testimonials slider **/
  var swiper = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          return '0' + number;
      }
    },  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      475: {
        slidesPerView: 2,
      },
    },
  });
  /** blog slider **/
   var swiper = new Swiper(".blog-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
          return '0' + number;
      }
    },  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      475: {
        slidesPerView: 2,
      },
    },
  });
  /** partnert logo slider **/
  var swiper = new Swiper(".partner-logo-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 3,
      },
      475: {
        slidesPerView: 2,
      },
    },
  });
  /** view slider **/
  var swiper = new Swiper(".view-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      475: {
        slidesPerView: 2,
      },
    },
  });
  /** pdp-thumb-slider **/
  // var galleryThumbs = new Swiper(".gallery-thumbs", {
  //   centeredSlides: false,
  //   centeredSlidesBounds: true,
  //   slidesPerView: 4,
  //   spaceBetween: 10,
  //   watchOverflow: true,
  //   watchSlidesVisibility: true,
  //   watchSlidesProgress: true,
  //   direction: "vertical",  
  //   breakpoints: {
  //     992: {
  //       direction: 'vertical', 
  //     },
  //     768: {
  //       direction: 'horizontal', 
  //       slidesPerView: 3,
  //       spaceBetween: 15,
  //     },
  //     576: {
  //       direction: 'horizontal', 
  //       slidesPerView: 4,
  //     },
  //     320: {
  //       direction: 'horizontal', 
  //       slidesPerView: 3,
  //     },
  //   },
  // });
  // var galleryMain = new Swiper(".gallery-main", {
  //   watchOverflow: true,
  //   watchSlidesVisibility: true,
  //   watchSlidesProgress: true,
  //   preventInteractionOnTransition: true,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   effect: 'fade',
  //     fadeEffect: {
  //     crossFade: true
  //   },
  //   thumbs: {
  //     swiper: galleryThumbs
  //   }
  // });

  // galleryMain.on('slideChangeTransitionStart', function() {
  //   galleryThumbs.slideTo(galleryMain.activeIndex);
  // });

  // galleryThumbs.on('transitionStart', function(){
  //   galleryMain.slideTo(galleryThumbs.activeIndex);
  // });
   /** pdp-thumb-center-slider **/
   var galleryThumbs = new Swiper(".gallery-thumbs-center", {
    centeredSlides: false,
    centeredSlidesBounds: true,
    slidesPerView: 4,
    spaceBetween: 10,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: "horizontal",  
    breakpoints: {
      992: {
        direction: 'horizontal', 
      },
      768: {
        direction: 'horizontal', 
        slidesPerView: 3,
        spaceBetween: 15,
      },
      576: {
        direction: 'horizontal', 
        slidesPerView: 4,
      },
      320: {
        direction: 'horizontal', 
        slidesPerView: 3,
      },
    },
  });
  var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
      fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });

  galleryThumbs.on('transitionStart', function(){
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });
  /***product slider */
  var swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      475: {
        slidesPerView: 2,
      },
    },
  });
   /** our team slider **/
   var swiper = new Swiper(".our-team-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      475: {
        slidesPerView: 2,
      },
    },
  });

  /**  timer counter **/
  function updateTimer() {
    future = Date.parse("sept 2, 2023 11:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        innerHTML =
        '<div>' + d + '<span> : </span></div>' +
        '<div>' + h + '<span> : </span></div>' +
        '<div>' + m + '<span> : </span></div>' +
        '<div>' + s + '<span> </span></div>';
  }
  setInterval('updateTimer()', 1000);

  /** foter acnav **/
  $('.acnav-label1').click(function (event) {
    event.preventDefault();
    if(jQuery( window ).width() < 768) {
      var label = $(this);
      var parent = label.parent('.has-children1');
      var list = label.siblings('.acnav-list1');
      if (parent.hasClass('is-open')) {
          list.slideUp('fast');
          parent.removeClass('is-open');
      }
      else {
          list.slideDown('fast');
          parent.addClass('is-open');
      }
    }
  });
  /** counter js **/
  $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }

      });  
    });
  /********* back to top ********/    
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  /********* mobile stickybar ********/
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $(".mobile-stickybar").addClass('show');
    } else {
      $(".mobile-stickybar").removeClass('show');
    }
  });
  
  /********* Wrapper top space ********/
  $(window).on('load resize orientationchange', function() { 
    var header_hright = $('header').outerHeight();
    $('header').next('.wrapper').css('margin-top', header_hright + 'px');  
  }); 
  /********* color open ********/
  $('.color-select-wrp').on('click',function(e){
    e.preventDefault();
    setTimeout(function(){
        $('.clr-select-box').toggleClass('clr-box-open');
        $('.color-select-wrp').toggleClass('color-select-open');
    }, 50);
  }); 
  /********* color open ********/
  $(".green-color").click(function () {
  $('body').addClass('theme-v2');
  $('body').removeClass('theme-v3');
  });
  $(".orange-color").click(function () {
    $('body').addClass('theme-v3');
    $('body').removeClass('theme-v2');
  });
  $(".box-layout-btn").click(function () {
    $('body').addClass('box-layout');
  });
  $(".full-box-btn").click(function () {
    $('body').removeClass('box-layout');
});