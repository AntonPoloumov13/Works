const element = document.querySelector('.gallery__select-art');
const popup = document.querySelectorAll(".popup")
const popupItem = document.querySelectorAll(".gallery-swiper__popup")
const popupExit = document.querySelectorAll(".popup__close")
const popupBtn = document.querySelectorAll(".popup__btn")
const body = document.querySelector("body")


  const swiper = new Swiper('.gallery__swiper', {
    slidesPerView: "auto",
    direction: 'horizontal',
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
      hideOnClick: false,
    },
    pagination: {
      el: '.gallery__pagination',
      clickable: true,
      type: 'fraction',
    },

    breakpoints:  {
      100:  {
        slidesPerView: 1,
        spaceBetween: 0,

    },

      400:  {
        slidesPerView: 2,
        spaceBetween: 38,
    },

    600:  {
      slidesPerView: 2,
      spaceBetween: 34,

    },

      1277:  {
        slidesPerView: 3,
        spaceBetween: 50,

    },
    }

  });



  const choices = new Choices(element, {
    searchEnabled: false,
  });

  document.querySelectorAll(".gallery-swiper__popup").forEach(function (popupBtn) {
    popupBtn.addEventListener("click", function (event) {
      const path3 = event.currentTarget.dataset.path3

      document.querySelectorAll(".content").forEach(function (popupContent) {
        popupContent.classList.remove("popup-active")
      })
      document.querySelector(`[data-target3="${path3}"]`).classList.add("popup-active")
    })
  })
  document.querySelectorAll(".gallery-swiper__popup").forEach(function (popupItems) {
    popupItems.addEventListener("click", function () {
      body.classList.add("hidden-body")
    })
  })

  popupExit.forEach(function (popupExit) {
    popupExit.addEventListener("click", function () {
      popup.forEach(function (popup) {
        popup.classList.remove("popup-active")
        body.classList.remove("hidden-body")
      })
    })
  })
  popupBtn.forEach(function (popupBtn) {
    popupBtn.addEventListener("click", function () {
      popup.forEach(function (popup) {
        popup.classList.remove("popup-active")
        body.classList.remove("hidden-body")
      })
    })
  })
