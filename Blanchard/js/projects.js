  new Swiper('.projects-container__slider', {
  slidesPerView: "auto",
  direction: 'horizontal',
  navigation: {
    nextEl: '.projects-svg-next',
    prevEl: '.projects-svg-prev',
    hideOnClick: false,
  },


  breakpoints:  {
    100:  {
      slidesPerView: 1,
      spaceBetween: 0,
  },

    700:  {
      slidesPerView: 2,
      spaceBetween: 34,
  },

    1000:  {
    slidesPerView: 2,
    spaceBetween: 50,
  },

    1277:  {
      slidesPerView: 3,
      spaceBetween: 30,
  },

    1350: {
      slidesPerView: 3,
      spaceBetween: 50,
  }


}




});


const projectTooltip = document.querySelectorAll(".projects__tooltip");

  tippy(projectTooltip, {
    placement: 'top',
    allowHTML: true,
    role: 'tooltip',
    trigger: 'mouseenter focus click',
    hideOnClick: true,
    theme: "colorToolp",
  });
