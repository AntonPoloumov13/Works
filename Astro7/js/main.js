"use strict"

window.onload = function () {

  document.querySelectorAll(".tarot__bottom-btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".tarot__bottom-player").forEach(function (tabContent) {
      tabContent.classList.remove("content-active")
    })
    document.querySelector(`[data-target="${path}"]`).classList.add("content-active")
  })
})

document.addEventListener("click", function(e) {
  const interactiveElement = e.target;

  if(interactiveElement.closest(".tarot__bottom-btn")) {
    document.querySelectorAll(".tarot__bottom-item").forEach(function (liner) {
      liner.classList.remove("active")
    })
    interactiveElement.closest(".tarot__bottom-item").classList.add("active")
  }
})


/*
            HTML


  <button class="btn" data-path="germany">Germany</button>

  <div class="content" data-target="germany">
      <div">
          <span>
            Что мы о нём знаем?
          </span>
          <p>
            Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
          </p>
          <a href="">
            В галерею
          </a>
      </div>
  </div>

              CSS

  .content {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .content-active {
    opacity: 1;
    pointer-events: visible;
    visibility: visible;
  }

*/

  const reviewsSwiper = document.querySelector(".reviews__swiper");

if(reviewsSwiper) {
  const swiper = new Swiper('.reviews__swiper', {
    //loop: true,
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 8,
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
      el: '.reviews__pagination',
      clickable: true,
      // dynamicBullets: true, // Если много кружков пагинации
      // dynamicMainBullets: 3, // Показывает количество отображаемых кружков пагинаии при включеном dynamicBullets
    },
    navigation: {
      nextEl: '.reviews__next-btn',
      prevEl: '.reviews__prev-btn',
    },
    // scrollbar: {
    //   el: '.hero__scrollbar',
    //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
    // },
    breakpoints:  {
      100:  {
        slidesPerView: 1,
        spaceBetween: 8,
        slidesPerGroup: 1,
    },
      661:  {
        slidesPerView: "auto",
        spaceBetween: 8,
        slidesPerGroup: 1,
    },
    }
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
