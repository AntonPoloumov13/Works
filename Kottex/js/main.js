"use strict"

window.onload = function () {

  const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {
  if(e.target.closest(".burger")) {
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
  }
  if (e.target.closest(".header__exit-menu")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (e.target.closest(".nav__link")) {
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

  
const clickForm = document.querySelector(".form__form-item")
const clickForm2 = document.querySelector(".form-item2")
const clickForm3 = document.querySelector(".form-item3")

if(clickForm) {
  const selector = document.querySelector(".click-tel");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

    new JustValidate('.form__form-item', {
      colorWrong: "#FF6972",
      rules: {
        fio: {
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
        fio: {
          required: 'Enter your name',
          minLength: 'Minimum number of letters - 2',
          strength: 'Invalid format',
        },
        tel: 'Введите номер телефона',
        name: 'Введите ФИО',
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

        form.reset();
      }
    });



const inputName = document.querySelector(".click-name");
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
    document.querySelector(".click-name").classList.add("form-label-done");
  } else {
    document.querySelector(".click-name").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form__form-btn").classList.remove("disabled")
  }
})

document.querySelector(".click-tel").addEventListener("change", function () {
  if ((document.querySelector(".click-tel").value.indexOf('_') == -1) && document.querySelector(".click-tel").value != 0) {
    document.querySelector(".click-tel").classList.add("form-label-done");
  } else {
    document.querySelector(".click-tel").classList.remove("form-label-done");
  }
  if (document.querySelectorAll(".form-label-done").length == 2) {
    document.querySelector(".form__form-btn").classList.remove("disabled")
  }
})
}
}

if(clickForm2) {
  const selector = document.querySelector(".click-tel2");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

    new JustValidate('.form-item2', {
      colorWrong: "#FF6972",
      rules: {
        fio: {
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
        fio: {
          required: 'Enter your name',
          minLength: 'Minimum number of letters - 2',
          strength: 'Invalid format',
        },
        tel: 'Введите номер телефона',
        name: 'Введите ФИО',
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

        form.reset();
      }
    });

    const inputName = document.querySelector(".click-name2");
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
        document.querySelector(".click-name2").classList.add("form-label-done");
      } else {
        document.querySelector(".click-name2").classList.remove("form-label-done");
      }
      if (document.querySelectorAll(".form-label-done").length == 2) {
        document.querySelector(".btn2").classList.remove("disabled")
      }
    })

    document.querySelector(".click-tel2").addEventListener("change", function () {
      if ((document.querySelector(".click-tel2").value.indexOf('_') == -1) && document.querySelector(".click-tel2").value != 0) {
        document.querySelector(".click-tel2").classList.add("form-label-done");
      } else {
        document.querySelector(".click-tel2").classList.remove("form-label-done");
      }
      if (document.querySelectorAll(".form-label-done").length == 2) {
        document.querySelector(".btn2").classList.remove("disabled")
      }
    })
    }

}


if(clickForm3) {
  const selector = document.querySelector(".click-tel3");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

    new JustValidate('.form-item3', {
      colorWrong: "#FF6972",
      rules: {
        fio: {
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
        fio: {
          required: 'Enter your name',
          minLength: 'Minimum number of letters - 2',
          strength: 'Invalid format',
        },
        tel: 'Введите номер телефона',
        name: 'Введите ФИО',
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

        form.reset();
      }
    });

    const inputName = document.querySelector(".click-name3");
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
        document.querySelector(".click-name3").classList.add("form-label-done");
      } else {
        document.querySelector(".click-name3").classList.remove("form-label-done");
      }
      if (document.querySelectorAll(".form-label-done").length == 2) {
        document.querySelector(".btn2").classList.remove("disabled")
      }
    })

    document.querySelector(".click-tel3").addEventListener("change", function () {
      if ((document.querySelector(".click-tel3").value.indexOf('_') == -1) && document.querySelector(".click-tel3").value != 0) {
        document.querySelector(".click-tel3").classList.add("form-label-done");
      } else {
        document.querySelector(".click-tel3").classList.remove("form-label-done");
      }
      if (document.querySelectorAll(".form-label-done").length == 2) {
        document.querySelector(".btn3").classList.remove("disabled")
      }
    })
    }

}

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

  
function showModule(e) {
  var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  if (e.pageY <= 1 || (e.pageX >= w - 1)) {
    const open = document.querySelector(".popup__container");
    open.classList.add("active")
    document.addEventListener("click", function(a) {
      const elementInteractive = a.target;
      if(elementInteractive.closest(".popup__container-close")) {
        document.querySelector(".popup__container").classList.remove("active")
      }
      /*if(!elementInteractive.closest(".click__exit")) {
        document.querySelector(".click__container").classList.remove("click-active")
      }*/
      if (a.target.closest(".click__exit")) {
        document.querySelector(".click__container").classList.remove("click-active")
      }
    })
  }
}


document.onmousemove = showModule;


//document.addEventListener('mousemove', (event) => {
  // координата X относительно окна браузера
//  const mouseX = event.clientX;

  // координата Y относительно окна браузера
//  const mouseY = event.clientY;
//  console.log(`Координаты мыши: X = ${mouseX}, Y = ${mouseY}`);
//});






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


if (document.body.clientWidth > 600)  {
  let popupTimer, timeOut = 10000;
const listItem = document.querySelectorAll(".random__card");

function displayPopup() {
  const q = Math.round(Math.random() * 3);

  listItem.forEach(function(e, i) {
    e.classList.remove('active-popup');

    if(i === q) {
      e.classList.add('active-popup');
    }
  })
}

popupTimer = setInterval(displayPopup, timeOut);

window.addEventListener("click", function (e) {
  let eTarget = e.target;

  if (eTarget.closest(".random__btn")) { // Открытие и закрытие бургера
    listItem.forEach(function(e) {
      e.classList.remove('active-popup');
    })

    clearTimeout(popupTimer);
    popupTimer = setInterval(displayPopup, timeOut);
  }

})
}

//




