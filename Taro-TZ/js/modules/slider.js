const swiper = new Swiper('.speaker__swiper', {
  loop: true,
  // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
  // centeredSlides: true, // центрирует активный слайд по центру а не слева
  observer: true,
  observeParents: true,
  watchOverflow: true,
  slidesPerView: "auto",
  spaceBetween: 39,
  // slidesPerGroup: 1,
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
    el: '.hero__pagination',
    clickable: true,
    // dynamicBullets: true, // Если много кружков пагинации
    // dynamicMainBullets: 3, // Показывает количество отображаемых кружков пагинаии при включеном dynamicBullets
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // scrollbar: {
  //   el: '.hero__scrollbar',
  //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
  // },
   breakpoints: {
    120:  {
      slidesPerView: 1,
      spaceBetween: 40,
  },
  601:  {
    slidesPerView: 2,
    spaceBetween: 40,
},
    992:  {
      slidesPerView: 3,
      spaceBetween: 40,
  },
     1350: {
      slidesPerView: "auto",
       spaceBetween: 40
     }
   }
});



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
