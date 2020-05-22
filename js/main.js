$(document).ready(() => {
  const modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close');
  scrollToTopBtn = $('.button__scroll-to-top');

  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
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

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);

  const nextStep = $('.steps__swiper-button-next'),
    prevStep = $('.steps__swiper-button-prev'),
    bulletsStep = $('.steps__swiper-pagination');

  nextStep.css('left', prevStep.width() + 10 + bulletsStep.width() + 10);
  bulletsStep.css('left', prevStep.width() + 10);

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
    wrapper: "div",

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
        minlength: "Имя не длинее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    }
  })

  // маска для телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {
    placeholder: "+7 (___) ___-__-__"
  });

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
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