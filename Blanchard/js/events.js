  new Swiper('.events-container__swiper', {
  slidesPerView: "auto",
  direction: 'horizontal',
  slidesPerGroup: 2,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: '.events-container__button-next',
    prevEl: '.events-container__button-prev',
    hideOnClick: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints:  {
    100:  {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
  },

    601:  {
      slidesPerView: 2,
      spaceBetween: 34,
  },
    1000:  {
      slidesPerView: 3,
      spaceBetween: 27,
  },
    1277: {
      spaceBetween: 50,
    }
}




});

