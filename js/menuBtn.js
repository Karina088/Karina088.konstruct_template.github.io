'use strict';

const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});

document.querySelectorAll('a')
    .forEach(el => el.addEventListener('click',
        (event) => event.preventDefault()));