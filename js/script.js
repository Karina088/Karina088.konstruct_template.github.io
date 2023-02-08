'use strict';

document.querySelectorAll('.service-item')
  .forEach((el) =>
    el.addEventListener('click', (e) => {
      e.target.style.cssText = `color: #00A4E5;
        box-shadow: 0px 0px 37px 0px rgba(176, 176, 176, 0.3);`;
    }));


const serviceButEl = document.querySelector('.service__button');

serviceButEl.addEventListener('click', () => {
  serviceButEl.classList.toggle('animate_btn');
});

/*
serviceButEl.addEventListener('touchstart', () => {
  serviceButEl.classList.add('animate_btn');
});
serviceButEl.addEventListener('touchend', () => {
  serviceButEl.classList.remove('animate_btn');
});*/



