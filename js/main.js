$(document).ready(() => {
  const modal = $('.modal'),
    modalSuccess = $('.modal-success'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close'),
    closeBtnSuccess = $('.modal-success__close');
  scrollToTopBtn = $('.button__scroll-to-top');

  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  closeBtnSuccess.on('click', () => {
    modalSuccess.toggleClass('modal-success--visible');
  });

  closeBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  $(document).on('keydown', (event) => {
    if (event.key === 'Escape')
      modal.removeClass('modal--visible');
  });

  $(document).on('click', (event) => {
    let target = event.target;

    if ($(target).hasClass('modal--visible'))
      modal.toggleClass('modal--visible');
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(scrollToTopBtn).fadeIn('slow');
    } else {
      $(scrollToTopBtn).fadeOut('slow');
    }
  });

  $(scrollToTopBtn).click(() => {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });

  // slider
  const mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const mySwiper1 = new Swiper('.swiper-container1', {
    loop: true,
    pagination: {
      el: '.swiper-pagination1',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });

  const next = $('.swiper-button-next'),
    prev = $('.swiper-button-prev'),
    bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 27 + bullets.width() + 20);
  bullets.css('left', prev.width() + 27);

  //slick
  $('.steps__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.steps__slider-nav',
    draggable: false,
  });
  $('.steps__slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 0,
    asNavFor: '.steps__slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    draggable: false,
    //rows: 2,
    //slidesPerRow: 3
  });

  $("#slider").slick({
    dots: true,
    customPaging: function(slider, i) { 
        return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
    },
    arrows: false,
    //centerPadding: '40px',
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 2
});





  var stepsSlider = new Swiper('.steps__swiper-container', {
    loop: true,
    pagination: {
      el: '.steps__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.steps__button-next',
      prevEl: '.steps__button-prev',
    },

  });
  var nextsteps = $('.steps__button-next');
  var prevsteps = $('.steps__button-prev');
  var bulletssteps = $('.steps__pagination');

  nextsteps.css('left', prevsteps.width() + 30 + bulletssteps.width() + 11);
  bulletssteps.css('left', prevsteps.width() + 20);

  //-click block__item in steps
  var block = $('.steps-block__item');
  block.on('click', function (evt) {
    block.removeClass('steps-block__item--active');
    $(this).toggleClass('steps-block__item--active');
  });

  //-click-to-slide
  var stepsBlock = $('.steps-block');

  $('.steps-block__item').on('click', function () {
    var index = $(this).data('index');
    stepsSlider[0].slideTo(index);
    stepsSlider[1].slideTo(index);
  });

  stepsSlider[0].on('slideChange', function () {
    var index = stepsSlider[0].realIndex;
    block.removeClass('steps-block__item--active');
    block.eq(index).addClass('steps-block__item--active');
  });



    //------fantasy slide 
    var fantasySwiper = new Swiper('.swiper-fantasy', {
      loop: true,
      navigation: {
        nextEl: '.swiper-fantasy-next',
        prevEl: '.swiper-fantasy-prev'
      },
    });





    //----ТАБЫ 
    $('.fantasy-list__item').click(function () {
      var id = $(this).attr('data-tab'),
        content = $('.fantasy__col-60[data-tab="' + id + '"]');
      $('.fantasy-list__item.fantasy-list__item--active').removeClass('fantasy-list__item--active');
      $(this).addClass('fantasy-list__item--active');
  
      $('.fantasy__col-60.fantasy__col-60--active').removeClass('fantasy__col-60--active');
      content.addClass('fantasy__col-60--active');
    });











  //scroll
  $(".menu__nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - $('.header').height();
    
      $('body,html').animate({scrollTop: top}, 1500);
  });
  
  $(".hero").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - $('.header').height();
    
      $('body,html').animate({scrollTop: top}, 1500);
  });

  new WOW().init();

  //animation
  $(window).scroll(function () {
    if ($(this).scrollTop() > $('.footer__button').offset().top - 500) {
      $('.footer__button').addClass('animationBounce');
    }
    if ($(this).scrollTop() > $('.footer__map').offset().top - 500) {
      $('.footer__map').addClass('animationShow');
    }
  });


  // валидация
  $('.modal__form').validate({
    errorElement: "div",

    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          console.log(modalSuccess);
          modalSuccess.toggleClass('modal-success--visible');
        }
      });
    }
  })
  $('.control__form').validate({
    errorElement: "div",

    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          modalSuccess.toggleClass('modal-success--visible');
        }
      });
    }
  })
  $('.leave-request__form').validate({
    errorElement: "div",

    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          modalSuccess.toggleClass('modal-success--visible');
        }
      });
    }
  })
  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          modalSuccess.toggleClass('modal-success--visible');
        }
      });
    }
  })

  // маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {
    placeholder: "+7 (___) ___-__-__"
  });

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [47.232107, 39.6106245],
        zoom: 9
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Вход со двора'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/location.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, -32]
      });



    myMap.geoObjects
      .add(myPlacemark);
  });
});