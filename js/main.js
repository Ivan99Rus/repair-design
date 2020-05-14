$(document).ready(() => {
  const modal = $('.modal'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close');
    scrollToTopBtn = $('.btn__scroll-to-top');

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

  scrollToTopBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});