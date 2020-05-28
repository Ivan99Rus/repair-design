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
    draggable: false
  });
  $('.steps__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 0,
    asNavFor: '.steps__slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    draggable: false,
    //rows: 2,
    //slidesPerRow: 1
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