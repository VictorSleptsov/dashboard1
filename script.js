"use strict"

const sideToggle = document.querySelector('.js-side-toggle');
const side = document.querySelector('.js-side');

sideToggle.addEventListener('click', () => {
    side.classList.toggle('open');
})
