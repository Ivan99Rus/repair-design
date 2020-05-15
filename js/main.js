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

   
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $(scrollToTopBtn).fadeIn('slow');
    } else { 
      $(scrollToTopBtn).fadeOut('slow'); 
    }
    });

    $(scrollToTopBtn).click(() => {
      $('html, body').animate({scrollTop : 0}, 'slow');
    });
});