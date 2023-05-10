let burger = document.querySelector('.burger');
let closeBtn = document.querySelector('.close-btn');
let menu = document.querySelector('.menu');
let html = document.querySelector('.html');

burger.addEventListener('click', () => {
  menu.classList.add('active');
  html.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', () => {
 menu.classList.remove('active');
  html.style.overflow = 'auto'
})