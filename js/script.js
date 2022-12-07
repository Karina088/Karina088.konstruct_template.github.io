'use strict';

document.querySelectorAll('.service-item')
  .forEach((el) =>
    el.addEventListener('click', (e) => {
      e.target.style.cssText = `color: #00A4E5;
        box-shadow: 0px 0px 37px 0px rgba(176, 176, 176, 0.3);`;
    }));


const serviceButEl = document.querySelector('.service__button');

// serviceButEl.addEventListener('click', event => {
//   return serviceButEl.classList.toggle('animate_btn');
// });

serviceButEl.addEventListener('touchmove', event => {
  if (event.target.tagName !== 'BUTTON') {
    return serviceButEl.classList.remove('animate_btn');
  } else {
    return serviceButEl.classList.add('animate_btn');
  }
});
  // if (event.target.tagName !== 'BUTTON') {
  //   return btnEl.style.visibility = 'hidden';
  // } else {
  //   return btnEl.style.visibility = 'visible';
  // }


// const serviceButEl = document.querySelector('.service__button');
// serviceButEl.addEventListener('mouseover', (e) => {
//   serviceButEl.classList.add('animate_btn');
//   serviceButEl.style.visibility = 'visible';
//   serviceButEl.addEventListener('touchstart', (e) => {
//     serviceButEl.classList.add('animate_btn');
//     serviceButEl.style.visibility = 'visible';
//   });
// });

// serviceButEl.addEventListener('mouseout', (e) => {
//   serviceButEl.classList.remove('animate_btn');
//   serviceButEl.style.visibility = '!visible';
//   serviceButEl.addEventListener('touchend', (e) => {
//     serviceButEl.classList.add('animate_btn');
//     serviceButEl.style.visibility = '!visible';
//   });
// });


