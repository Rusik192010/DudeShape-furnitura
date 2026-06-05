const tabItem = document.querySelectorAll('.tabs-btn');
const tabContent = document.querySelectorAll('.tabs-content__item');

const Buter = document.querySelector('.h-buter');
const Menu = document.querySelector('.nav-buter');

tabItem.forEach(function (el) {
    el.addEventListener('click', open);
});

function open(evt) {
    const tapTarget = evt.currentTarget;
    const button= tapTarget.dataset.button;

    tabItem.forEach(function(item) {
        item.classList.remove('tabs-btn--active');
    });

    tapTarget.classList.add('tabs-btn--active');

    tabContent.forEach(function(item) {
        item.classList.remove('tabs-content__item--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs-content__item--active');
}

Buter.addEventListener('click', () => {
    Menu.classList.toggle('nav-buter__active');
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,
  speed: 600,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});