"use strict"

window.onload = function () {

  const productSwiper = document.querySelector(".content__slide-product");
const thumbsSwiper = document.querySelector(".content__slide-tumbs");

if(productSwiper) {
  const thumbsSwiper = new Swiper('.content__slide-tumbs', {
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    spaceBetween: 12,
    slidesPerView: 4,
    slidesPerGroup: 1,
    //centeredSlides: true, //активный слайд будет в центре
    // autoHeight: true,
    direction: 'horizontal',
    // speed: 500, // Автовоспроизведение
    // autoplay: {
    // delay: 5000,
    // disableOnInteraction: false,
    // },
     //thumbs: { // Читаем ниже что даёт эта настройка
     //  swiper: thumbsSwiper,
     //},
    pagination: {
      clickable: true,
      },
    navigation: {
      //nextEl: '.rating-button-next',
      //prevEl: '.rating-button-prev',
      hideOnClick: false,
    },
  });

  const swiper = new Swiper('.content__slide-product', {
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    spaceBetween: 0,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    centeredSlides: true, //активный слайд будет в центре
    // autoHeight: true,
    direction: 'horizontal',
    // speed: 500, // Автовоспроизведение
    // autoplay: {
    // delay: 5000,
    // disableOnInteraction: false,
    // },
     thumbs: { // Читаем ниже что даёт эта настройка
       swiper: thumbsSwiper,
     },
    pagination: {
      clickable: true,
      },
      allowTouchMove: false,
      loop: true,
      effect: 'fade',
      speed: 1500,
      autoplay: {
        delay: 3000
      },
    navigation: {
     // nextEl: '.rating-button-next',
     // prevEl: '.rating-button-prev',
      hideOnClick: false,
    },
  });
}



// Обычная разметка слайдера

// <div class="swiper">
//   <div class="swiper-wrapper">
//     <div class="swiper-slide">Slide 1</div>
//     <div class="swiper-slide">Slide 2</div>
//     <div class="swiper-slide">Slide 3</div>
//   </div>
//   <div class="swiper-pagination"></div>

//   <div class="swiper-button-prev"></div>
//   <div class="swiper-button-next"></div>

//   <div class="swiper-scrollbar"></div>
// </div>

// Разметка слайдера с thumb. Этот слайдер выглядит как обычный слайдер в карточках товара в интернет магазине. Т.е один верхний слайдер с большой картинкой, и снизу под ним маленький слайдер с маленькими картинками. Так вот, каталог свайпер это основной, а thumbs свайпер второй слайдер. Инициализируем два слайдера, первому слайдеру пишем консту thumbsSwiper(можно и поменять) а второму слайдеру пишем в настройках thumb, другими словами связываем их. и все, всё работает

/* <div class="wrapper">
<div class="swiper catalog__swiper catalog-swiper">
  <div class="swiper-wrapper catalog-swiper__wrapper">
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/01.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/02.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/03.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/04.jpg" alt="">
    </div>

  </div>
</div>
<div class="swiper__thumbs swiper thumbs-swiper">
  <div class="swiper-wrapper thumbs-swiper__wrapper">
    <div class="swiper-slide thumbs-swiper__slide">
      <img src="./img/01.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/02.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/03.jpg" alt="">
    </div>
    <div class="swiper-slide catalog-swiper__slide">
      <img src="./img/04.jpg" alt="">
    </div>
  </div>
</div>
</div> */





}

const blockTimer = document.querySelector(".block-timer"); // родитель
const numDay = document.querySelector(".num-day"); // число дней
const numHours = document.querySelector(".num-hours"); // число дней
const numMinutes = document.querySelector(".num-minutes"); // число дней
const numSeconds = document.querySelector(".num-seconds"); // число дней

if (blockTimer) {

  function timerSeconds() {
    if (numSeconds.innerHTML != 0) {
      numSeconds.innerHTML = numSeconds.innerHTML - 1

    } else if (numSeconds.innerHTML == 0) {
      if (numMinutes.innerHTML != 0) {
        numMinutes.innerHTML = numMinutes.innerHTML - 1
        numSeconds.innerHTML = 60
      }

    }
    if (numMinutes.innerHTML == 0) {
      if (numHours.innerHTML != 0) {
        numHours.innerHTML = numHours.innerHTML - 1
        numMinutes.innerHTML = 60
        numSeconds.innerHTML = 60
      }
    }
    if (numHours.innerHTML == 0) {
      if (numDay.innerHTML != 0) {
        numDay.innerHTML = numDay.innerHTML - 1
        numHours.innerHTML = 24
        numMinutes.innerHTML = 60
        numSeconds.innerHTML = 60
      }
    }
  }

  setInterval(timerSeconds, 1000)
}


const element = document.querySelector('.content__select1');
const element2 = document.querySelector('.content__select2');
const choices = new Choices(element, {
  searchEnabled: false,
});
const choices2 = new Choices(element2, {
  searchEnabled: false,
});
