const resSwiper = document.querySelector(".result__swiper");


if(resSwiper)  {
  const swiper = new Swiper('.result__swiper', {
    slidesPerView: 3,
    spaceBetween: 32,
    slidesPerGroup: 1,
    // centeredSlides: true, // активный слайд будет в центре
    // autoHeight: true,
    direction: 'horizontal',
    // speed: 500, // Автовоспроизведение
    // autoplay: {
    // delay: 5000,
    // disableOnInteraction: false,
    // },
    // thumbs: { // Читаем ниже что даёт эта настройка
    //   swiper: thumbsSwiper,
    // },
    pagination: {
      clickable: true,
      },
    navigation: {
      nextEl: '.result__slide-next',
      prevEl: '.result__slide-prev',
      hideOnClick: false,
    },
    breakpoints:  {
      120: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      551: {
        slidesPerView: 2,
      },

      769: {
        slidesPerView: 3,
        spaceBetween: 32,
        slidesPerGroup: 1,
     },
    }
    // scrollbar: {
    //   el: '.hero__scrollbar',
    //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
    // },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   }
    // }
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
