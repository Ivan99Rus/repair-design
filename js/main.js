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
});