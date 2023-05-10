const swiper = new Swiper('.gallery-slider', {
 slidesPerView: 1,
 spaceBetween: 30,
 autoWidth: false,
 breakpoints: {
  768: {
   slidesPerView: 'auto',
  }
 },
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
});