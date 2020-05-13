document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape')
    modal.classList.remove('modal--visible');
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('modal--visible'))
      switchModal();
  });
});