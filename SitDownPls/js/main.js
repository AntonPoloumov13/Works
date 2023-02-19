"use strict"

window.onload = function () {

  const menu = document.querySelector(".nav-burger");

document.addEventListener("click", function (e) {
  if(e.target.closest(".burger")) {
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
  }
  if (e.target.closest(".header__exit-menu")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (e.target.closest(".header__menu-list")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
})

  function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

const da = new DynamicAdapt("max");
da.init();


/*
       Как работает: 
       1) пишешь атрибут data-da в нём указываешь элемент куда он должен перейти 
       2) разрешение, на котором это должно произойти 
       3) и место куда оно перейдёт


<div data-da=".div2, 1280, 1" class="div three">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque!</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At neque reiciendis quidem accusantium dolor sed eveniet doloribus ex impedit odit.</p>
</div> 

<div class="div2"></div>

*/
  
const click = document.querySelector(".click__container-content")
const form = document.querySelector(".form__container")


if(form)  {
  const selector = document.querySelector(".input-tel");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

    new JustValidate('.form__card', {
      colorWrong: "#FF6972",
      rules: {
        name: {
          required: true,
          minLength: 2,
          strength: {
            custom: '[а-яА-Я\d]',
          },
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
        },
      },
      messages: {
        name: {
          required: 'Недопустимый формат',
          minLength: 'Минимальное количество букв - 2',
          strength: 'Недопустимый формат',
        },
        tel: 'Введите ваш телефон',
        email: 'Недопустимый формат',
      },


      // Отправка на почту
      submitHandler: function (form, values, ajax) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {

          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log("Отправлено")
            }
          }
        }

        xhr.open("POST", "mail.php", true);
        xhr.send(formData)

        form.reset();
      }
    });

const inputName = document.querySelector(".input-name");
if(inputName) {
  let banNumber = /[0-9]/g;
  let banEnglishLetter = /[^a-zA-ZА-Яа-яЁё]/g;
  inputName.oninput = function () {
  this.value = this.value.replace(banNumber, "")
  this.value = this.value.replace(banEnglishLetter, "")
}
inputName.addEventListener("change", function () {
  let length = inputName.value.length
  if (length >= 0) {
    document.querySelector(".input-name").classList.add("form-label-done");
  } else {
    document.querySelector(".input-name").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form__card-btn").classList.remove("disabled")
  }
})

document.querySelector(".input-tel").addEventListener("change", function () {
  if ((document.querySelector(".input-tel").value.indexOf('_') == -1) && document.querySelector(".input-tel").value != 0) {
    document.querySelector(".input-tel").classList.add("form-label-done");
  } else {
    document.querySelector(".input-tel").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form__card-btn").classList.remove("disabled")
  }
})

document.querySelector(".input-mail").addEventListener("change", function () {
  let length = inputName.value.length
  if (length >= 0) {
    document.querySelector(".input-mail").classList.add("form-label-done");
  } else {
    document.querySelector(".input-mail").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form__card-btn").classList.remove("disabled")
  }
})
}
}

if(click)  {
  const selector2 = document.querySelector(".click-tel");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector2);

    new JustValidate('.click__form', {
      colorWrong: "#FF6972",
      rules: {
        name: {
          required: true,
          minLength: 2,
          strength: {
            custom: '[а-яА-Я\d]',
          },
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector2.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
        },
      },
      messages: {
        name: {
          required: 'Недопустимый формат',
          minLength: 'Минимальное количество букв - 2',
          strength: 'Недопустимый формат',
        },
        tel: 'Введите ваш телефон',
        email: 'Недопустимый формат',
      },


      // Отправка на почту
      submitHandler: function (form, values, ajax) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {

          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log("Отправлено")
            }
          }
        }

        xhr.open("POST", "mail.php", true);
        xhr.send(formData)

        form.reset();
      }
    });

const inputsName = document.querySelector(".click-name");
if(inputsName) {
  let bansNumber = /[0-9]/g;
let bansEnglishLetter = /[^a-zA-ZА-Яа-яЁё]/g;
inputsName.oninput = function () {
  this.value = this.value.replace(bansNumber, "")
  this.value = this.value.replace(bansEnglishLetter, "")
}
inputsName.addEventListener("change", function () {
  let length = inputsName.value.length
  if (length >= 0) {
    document.querySelector(".click-name").classList.add("form-label-done");
  } else {
    document.querySelector(".click-name").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form__card-btn").classList.remove("disabled")
  }
})

document.querySelector(".click-tel").addEventListener("change", function () {
  if ((document.querySelector(".click-tel").value.indexOf('_') == -1) && document.querySelector(".click-tel").value != 0) {
    document.querySelector(".click-tel").classList.add("form-label-done");
  } else {
    document.querySelector(".click-tel").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form__card-btn").classList.remove("disabled")
  }
})
}
}


//





/* Обязательно инпутам добавить name и проверь пути к mail.php в js и html


<form action="mail.php" class="contacts__form" method="post" enctype="multipart/form-data">
<h3 class="contacts__form-subtitle">Заказать обратный звонок</h3>
<input type="hidden" name="admin_email[]" value="exigonyashka@yandex.ru">
<input type="hidden" name="form_subject" value="Заявка с сайта">
<label class="form-label margin-top"><input type="text" name="name" placeholder="Имя*" required
    data-validate-field="name" id="name" aria-label="Введите своё имя"></label>
<label class="form-label"><input type="tel" name="phone" placeholder="Телефон*" required
    data-validate-field="tel" data-validate-rules="phone" id="tel"
    aria-label="Введите свой телефон"></label>
<button class="contacts__form-btn" type="submit">Заказать</button>
</form>


*/

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

  tippy('.tooltip', {
  placement: 'top', // Расположение
  //content: '<strong>Текст Текст Текст</strong>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
  //allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
  role: 'tooltip',
  trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
  hideOnClick: true,
  theme: "colorToolp", // Кастомная тема
  maxWidth: 158, // максимальная ширина тултипа
});


// Появление тултипа можно анимировать , в документации есть

/* <button class="tooltip" data-tippy-content="Информация">
<span>!</span>
</button> */

// .tippy-box[data-theme~='colorToolp'] {
//   font-size: 9px;
//   line-height: 14px;
//   text-align: center;
//   background-color: #000;
// }

// .tippy-box[data-theme~='colorToolp'][data-placement^='top'] > .tippy-arrow::before {
//   border-top-color: #000;
// }

  // не забыть подключить файлы nouislider
const rangeSlider = document.querySelector(".catalog__price-slide");
const catalogtag = document.querySelector(".catalog__right-tabs");

if(rangeSlider)  {
  const btnClose = document.querySelector(".catalog__price-title"); // Закрыть оболочку вывода значений
 const priceWrapperValue = document.querySelector(".to-input") // Если куда-то нужно вывести значение инпутов, если нет то комменитируем
 const priceWrapper = document.querySelector(".wrapper-value") // Если куда-то нужно вывести значение инпутов, если нет то комменитируем , так же расскоментировать код ниже

//btnClose.addEventListener("click", function () { // Закрыть оболочку вывода значений
//  priceWrapper.classList.remove("wrapper-value-active")
//})


noUiSlider.create(rangeSlider, {
  start: [2000, 150000],
  connect: true,
  // tooltips: true, // показывает на каком значение находится элемент управления активным телом range
  animationDuration: 100,
  step: 1,
  handleAttributes: [{
      'aria-label': 'уменьшить цену'
    },
    {
      'aria-label': 'повысить цену'
    },
  ],
  behaviour: 'tap',
  decimals: 0,
  range: {
    'min': 0,
    'max': 200000,
  }
});
const firstPrice = document.querySelector(".from-input"); // инпут со значением от
const secondPrice = document.querySelector(".to-input"); // инпут со значением до
const inputPrice = [firstPrice, secondPrice];

rangeSlider.noUiSlider.on("update", function (values, handle) {
  inputPrice[handle].value = Math.round(values[handle])
  if (document.querySelector(".wrapper-num")) {
    let valueNum = document.querySelector(".to-input").value;
    document.querySelector(".wrapper-num").querySelector(".catalog__tag-name").innerHTML = `До ${valueNum}`;
  } else {
    let valueNum = document.querySelector(".to-input").value;
    let template = `
  <div class="wrapper-num">
    <div class="catalog__right-tab color2">
      <p class="catalog__tag-name">До ${valueNum}</p>
      <button class="catalog__tag-exit">x</button>
    </div>
  </div>
`;

    catalogtag.insertAdjacentHTML("beforeend", template);
  }

  priceWrapperValue.innerHTML = "До" + secondPrice.value // так же удаляем если не нужно никуда записывать значения  с инпутов

  // priceWrapper.classList.add("wrapper-value-active") // так же удаляем если не нужно никуда записывать значения  с инпутов
})

const setRangeSlider = (i, value) => {
  let arr = [null, null]
  arr[i] = value;

  rangeSlider.noUiSlider.set(arr)
}

inputPrice.forEach((el, index) => {
  el.addEventListener("change", (e) => {
    setRangeSlider(index, e.currentTarget.value);
  });
});

}

const catalogtags = document.querySelector(".catalog__right-tabs");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".input1")) {

    if (elementInteractive.closest(".input1").checked == true) {

      let tagValue = elementInteractive.closest(".label1").querySelector(".span1").innerHTML;

      let tagValueId = elementInteractive.closest(".label1").querySelector(".input1").getAttribute("id");

      let template = `
      <div class="${tagValueId}">
        <div class="catalog__right-tab color1">
          <p class="catalog__tag-name">${tagValue}</p>
          <button class="catalog__tag-exit">
            <svg width="24" height="24">
              <use xlink:href="./img/svg/sprites.svg#close"></use>
            </svg>
          </button>
        </div>
      </div>
    `;

      catalogtags.insertAdjacentHTML("beforeend", template);
    } else {

      let tagValueId = elementInteractive.closest(".label1").querySelector(".input1").getAttribute("id");

      document.querySelector(`.${tagValueId}`).remove();

    }

  }

  if (elementInteractive.closest(".input3")) {

    if (elementInteractive.closest(".input3").checked == true) {

      let tagValue = elementInteractive.closest(".label3").querySelector(".span3").innerHTML;

      let tagValueId = elementInteractive.closest(".label3").querySelector(".input3").getAttribute("id");

      let template = `
      <div class="${tagValueId}">
        <div class="catalog__right-tab color3">
          <p class="catalog__tag-name">${tagValue}</p>
          <button class="catalog__tag-exit">
            <svg width="24" height="24">
              <use xlink:href="./img/svg/sprites.svg#close"></use>
            </svg>
          </button>
        </div>
      </div>
    `;

      catalogtags.insertAdjacentHTML("beforeend", template);
    } else {

      let tagValueId = elementInteractive.closest(".label3").querySelector(".input3").getAttribute("id");

      document.querySelector(`.${tagValueId}`).remove();

    }

  }

  if (elementInteractive.closest(".input4")) {

    if (elementInteractive.closest(".input4").checked == true) {

      let tagValue = elementInteractive.closest(".label4").querySelector(".span4").innerHTML;

      let tagValueId = elementInteractive.closest(".label4").querySelector(".input4").getAttribute("id");

      let template = `
      <div class="${tagValueId}">
        <div class="catalog__right-tab color4">
          <p class="catalog__tag-name">${tagValue}</p>
          <button class="catalog__tag-exit">
            <svg width="24" height="24">
              <use xlink:href="./img/svg/sprites.svg#close"></use>
            </svg>
          </button>
        </div>
      </div>
    `;

      catalogtags.insertAdjacentHTML("beforeend", template);
    } else {

      let tagValueId = elementInteractive.closest(".label4").querySelector(".input4").getAttribute("id");

      document.querySelector(`.${tagValueId}`).remove();

    }

  }


  if (elementInteractive.closest(".catalog__tag-exit")) {

    let ele = elementInteractive.closest(".catalog__right-tab").querySelector(".catalog__tag-name").innerHTML;

    let catalogLabel = document.querySelectorAll(".catalog__category-list");

    catalogLabel.forEach(function (e) {

      if (e.querySelector(".catalog__category-span").innerHTML == ele) {
        e.querySelector(".catalog__category-item").checked = false;
      }
    })

    elementInteractive.closest(".catalog__right-tab").parentNode.remove();

  }

})
//document.querySelector(".to-input").addEventListener("change", function () {


//})

  
document.addEventListener("click", function(e) {
  const elementInteractive = e.target;

  if(elementInteractive.closest(".product__img-btn")) {
    document.querySelector(".popup__d31").classList.add("popup-active")
  }
  if(elementInteractive.closest(".popup__d31-close")) {
    document.querySelector(".popup__d31").classList.remove("popup-active")
  }
  if(elementInteractive.closest(".popup__d31-exit")) {
    document.querySelector(".popup__d31").classList.remove("popup-active")
  }
})




// Попапы формы

// const buttonSign = document.querySelector(".header__sign");
// const buttonLog = document.querySelector(".header__log");
// const reg = document.querySelector(".popup-reg");
// const log = document.querySelector(".popup-log");
// const signClose = document.querySelector(".popup-reg__close");
// const signLog = document.querySelector(".popup-log__close");
// const signExit = document.querySelector(".popup-reg__exit");
// const logExit = document.querySelector(".popup-log__exit");
// const body = document.querySelector("body");
// const menu = document.querySelector(".header__wrapper-menu");

// if (buttonSign && buttonLog) {
//   buttonLog.addEventListener("click", function() {
//     log.classList.add("popup-log-active")
//     body.classList.add("body-block")
//     menu.classList.remove("menu-active")
//   })
//   signLog.addEventListener("click", function() {
//     log.classList.remove("popup-log-active")
//     body.classList.remove("body-block")
//   })
//   logExit.addEventListener("click", function() {
//     log.classList.remove("popup-log-active")
//     body.classList.remove("body-block")
//   })

//   buttonSign.addEventListener("click", function() {
//     reg.classList.add("popup-reg-active")
//     body.classList.add("body-block")
//     menu.classList.remove("menu-active")
//   })
//   signClose.addEventListener("click", function() {
//     reg.classList.remove("popup-reg-active")
//     body.classList.remove("body-block")
//   })
//   signExit.addEventListener("click", function() {
//     reg.classList.remove("popup-reg-active")
//     body.classList.remove("body-block")
//   })
// }

  document.addEventListener("click", function(e) {
  const elementInteractive = e.target;

  if(elementInteractive.closest(".product__card-btn")) {
    document.querySelector(".click__container").classList.add("click-active")
  }
  if(elementInteractive.closest(".click__container-close")) {
    document.querySelector(".click__container").classList.remove("click-active")
  }
  if(elementInteractive.closest(".click__exit")) {
    document.querySelector(".click__container").classList.remove("click-active")
  }
})



  const mapClass = document.querySelector(".contacts__map")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    var points = [
      "Москва, SitDownPls на Солянке м. Китай-город, ул. Солянка, д.24",
      "Москва, SitDownPls на Покровке м. Курская, ул. Покровка, д.14"
    ];

    var find = function (points, find) {
      return points.filter(function (value) {
          return (value + "").toLowerCase().indexOf(find.toLowerCase()) != -1;
      });
  };
  var myProvider = {
    suggest: function (request, options) {
        var res = find(points, request),
            arrayResult = [],
            results = Math.min(options.results, res.length);
            for (var i = 0; i < results; i++) {
                arrayResult.push({displayName: res[i], value: res[i]})
            }
        return ymaps.vow.resolve(arrayResult);
    }
  }
  var suggestView = new ymaps.SuggestView('search-input', {provider: myProvider, results: 2});
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.755494501090126,37.64353399999998],
      zoom: 14.5,
    },
  );
  const myPlacemark = new ymaps.Placemark([55.750615568993275,37.64180899999995], {
    balloonContent: `
          <div class="contacts__balloon balloon">
          <div class="balloon__top">
            <h2 class="balloon__title">SitDownPls на Солянке </h2>
            <address class="balloon__address">м. Китай-город, ул. Солянка, д.24</address>
            <a href="tel:+74958854547" class="balloon__link">
              <svg class="balloon__svg" width="22" height="22">
                <use xlink:href="./img/svg/sprites.svg#tel"></use>
              </svg>
              +7 (495) 885-45-47
            </a>
          </div>
          <div class="balloon__center">
            <p class="balloon__clockwork"><span class="balloon__span">Часы работы:</span> с 10:00 до 21:00</p>
          </div>
          <div class="balloon__bottom">
            <p class="balloon__descr">
              <span class="balloon__span">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
            </p>
          </div>
        </div>
    `
  }, {
      iconLayout: "default#image",
      iconImageHref: "./img/map-slone.svg",
      iconImageSize: [32, 22],
      iconImageOffset: [0, 0],
      hideIconOnBalloonOpen: false,
      balloonOffset: [0, -10]
    }
  );

  const myPlacemark2 = new ymaps.Placemark([55.75863431277058,37.64210467193599], {
    balloonContent: `
          <div class="contacts__balloon balloon">
          <div class="balloon__top">
            <h2 class="balloon__title">SitDownPls на Покровке </h2>
            <address class="balloon__address">м. Курская, ул. Покровка, д.14</address>
            <a href="tel:+74958854547" class="balloon__link">
              <svg class="balloon__svg" width="22" height="22">
                <use xlink:href="./img/svg/sprites.svg#tel"></use>
              </svg>
              +7 (495) 885-45-47
            </a>
          </div>
          <div class="balloon__center">
            <p class="balloon__clockwork"><span class="balloon__span">Часы работы:</span> с 10:00 до 21:00</p>
          </div>
          <div class="balloon__bottom">
            <p class="balloon__descr">
              <span class="balloon__span">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр
            </p>
          </div>
        </div>
    `
  }, {
      iconLayout: "default#image",
      iconImageHref: "./img/map-slone.svg",
      iconImageSize: [32, 22],
      iconImageOffset: [0, 0],
      balloonOffset: [0, -10],
      hideIconOnBalloonOpen: false,
    }
  );

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myPlacemark.balloon.open();
    myPlacemark2.balloon.open();
  }




  // для позднего появления карты

  // let flag = 0;

  // window.addEventListener("scroll", function () {
  //   let scrollY = window.scrollY;
  //   let mapOffset = this.document.querySelector("#map").offsetTop;
  //   if (scrollY >= mapOffset - 1000 && flag == 0) {
  //     ymaps.ready(init);

  //       function init() {
  //       const myMap = new ymaps.Map(
  //         "map",
  //         {
  //           center: [55.76963601332982,37.63668850000002],
  //           zoom: 14,
  //         },
  //       );
  //       var myPlacemark = new ymaps.Placemark([55.76963601332982,37.63668850000002], {}, {
  //         iconLayout: 'default#image',
  //         iconImageHref: '../../img/baloon.png',
  //         iconImageSize: [12, 12],
  //       });

  //       myMap.geoObjects.add(myPlacemark);
  //     }
  //     flag = 1;
  //   }

  // })
}



// html

/*
        <div class="contacts__map" id="map"></div>
<script src="https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU"></script>

*/

}

const element = document.querySelector('.header__select');
const element2 = document.querySelector('.header__select2');
const choices = new Choices(element, {
  searchEnabled: false,
});
const choices2 = new Choices(element2, {
  searchEnabled: false,
});

//

document.addEventListener("click", function (e) {
  const elementInteractive = e.target;

  if (elementInteractive.classList.contains("tabs__btn") && !elementInteractive.classList.contains("active")) {

    const activeElement = document.querySelector(".tabs__btn.active");

    const elements = document.querySelectorAll(".rating__card-list");

    const elementType = elementInteractive.dataset.workType;

    activeElement.classList.remove("active");

    elementInteractive.classList.add("active");

    elements.forEach(element => {
      !elementType || element.dataset.workType === elementType ?
        element.hidden = false : element.hidden = true;
    })

  }

})

//

document.addEventListener("click", function(e) {
  const interactiveElement = e.target;

  if(interactiveElement.closest(".appearance-btn")) {
    interactiveElement.closest(".appearance").classList.toggle("active")
  }
  if(!interactiveElement.closest(".appearance")) {
    document.querySelectorAll(".appearance").forEach(function(e) {
     e.classList.remove("active")
    })
 }
})


