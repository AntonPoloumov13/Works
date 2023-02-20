new Swiper('.chief__container-swiper', {
  slidesPerView: "auto",
  direction: 'horizontal',
  slidesPerView: 1,
  pagination: {
    el: '.chief__pagination',
    clickable: true,
  },

  allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 5000,
    autoplay: {
      delay: 3000
    },
});
