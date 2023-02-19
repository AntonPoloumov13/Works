const heroSwiper = document.querySelector(".hero__swiper");
const offerSwiper = document.querySelector(".offer__container-slids");
const helpfulSwiper = document.querySelector(".helpful__container-slids");
const ratinglSwiper = document.querySelector(".rating__slides");
const productSwiper = document.querySelector(".product__card-slide");
const popupSwiper = document.querySelector(".popup__content-slides");

if(heroSwiper)  {
  const swiper = new Swiper('.hero__swiper', {
    loop: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 0,
    lazy: {
      loadPrevNext: true,
    },
    direction: 'horizontal',
    pagination: {
       el: '.hero__pagination',
       clickable: true,
       renderBullet: function (index, className) {
         return '<span class="' + className + '">'+'<svg class="fp-arc-loader" width="24" height="24" viewBox="0 0 24 24">'+
            '<circle class="path" cx="4" cy="12" r="10" transform="rotate(-90 8 8)"'+
            'stroke-width="2.5px" stroke="#ff862f" fill="transparent"></circle>'+
            '</svg></span>';
        },
      },
    allowTouchMove: false,
      loop: true,
      effect: 'fade',
      speed: 1500,
      autoplay: {
        delay: 9000
      },
    navigation: {
      nextEl: '.hero__button-next',
      prevEl: '.hero__button-prev',
    },
  });
}

if(offerSwiper) {
  const swiper = new Swiper('.offer__container-slids', {
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    spaceBetween: 32,
    slidesPerView: "auto",
    slidesPerGroup: 2,
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
      nextEl: '.offer-button-next',
      prevEl: '.offer-button-prev',
      hideOnClick: false,
    },

    breakpoints:  {
      100:  {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0,
    },

      601:  {
        slidesPerView: 2,
        spaceBetween: 32,
    },

      992:  {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 32,
    },
      1351:  {
      slidesPerGroup: 3,
      slidesPerView: "auto",
      spaceBetween: 32,
    },


    }
  });
}

if(helpfulSwiper) {
  const swiper = new Swiper('.helpful__container-slids', {
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    spaceBetween: 32,
    slidesPerView: "auto",
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
      nextEl: '.helpful-button-next',
      prevEl: '.helpful-button-prev',
      hideOnClick: false,
    },

    breakpoints:  {
      100:  {
        slidesPerView: 1,
        spaceBetween: 0,
    },

      601:  {
        slidesPerView: 2,
        spaceBetween: 32,
    },

      992:  {
      slidesPerView: "auto",
      spaceBetween: 32,
    },
      1220:  {
      slidesPerView: "auto",
      spaceBetween: 32,
    },
    }
  });
}

if(ratinglSwiper) {
  const swiper = new Swiper('.rating__slides', {
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    spaceBetween: 32,
    slidesPerView: "auto",
    slidesPerGroup: 2,
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
      nextEl: '.rating-button-next',
      prevEl: '.rating-button-prev',
      hideOnClick: false,
    },

    breakpoints:  {
      100:  {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 16,
    },
    601:  {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 32,
    },

      992:  {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 32,
    },
      1221:  {
      slidesPerGroup: 2,
      slidesPerView: "auto",
      spaceBetween: 32,
    },
    }
  });
}

if(productSwiper) {
  const thumbsSwiper = new Swiper('.product__card-thumbs', {
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    spaceBetween: 38,
    slidesPerView: 5,
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
    breakpoints: {
      100:  {
        spaceBetween: 38,
        slidesPerView: 2,
        direction: 'horizontal',
      },
      601:  {
        spaceBetween: 0,
        direction: 'vertical',
      },

      992:  {
        slidesPerView: 4,
        direction: 'horizontal',
      },
    }
  });

  const swiper = new Swiper('.product__card-slide', {
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
    navigation: {
     // nextEl: '.rating-button-next',
     // prevEl: '.rating-button-prev',
      hideOnClick: false,
    },
  });
}
if(popupSwiper) {
  const thumbSwiper = new Swiper('.popup__d31-thumbs', {
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    spaceBetween: 0,
    slidesPerView: "auto",
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
      nextEl: '.popup-button-next',
      prevEl: '.popup-button-prev',
      hideOnClick: false,
    },
    breakpoints: {
      100:  {
        slidesPerView: "auto",
        slidesPerGroup: 1,
      },
      601:  {
        slidesPerGroup: 1,
      },
      992:  {
        slidesPerGroup: 2,
      },

      1221:  {
        slidesPerGroup: 1,
      },
    }
  });

  const swiper = new Swiper('.popup__slide-top', {
    // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
    // centeredSlides: true, // центрирует активный слайд по центру а не слева
    spaceBetween: 38,
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
       swiper: thumbSwiper,
     },
    pagination: {
      clickable: true,
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
