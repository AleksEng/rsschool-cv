function menu() {
  const menu = document.querySelector('.header__menu');
  const link = document.querySelectorAll('.nav__item');

  const span = document.querySelector('.menu__span')
  const burger = document.querySelector('.menu');

  burger.addEventListener('click', menuOpen)

  function menuOpen() {
    menu.classList.toggle('_active')
    burger.classList.toggle('_active')
    span.classList.toggle('_active')
  }

  link.forEach(el => {
    el.addEventListener('click', menuOpen)
  });

}

menu();