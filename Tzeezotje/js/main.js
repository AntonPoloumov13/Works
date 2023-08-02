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
  const serviceSwiper = document.querySelector(".service__swiper");
const fotoSwiper = document.querySelector(".foto__swiper");

if(serviceSwiper)  {
  const swiper = new Swiper('.service__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
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
      nextEl: '.service-next-btn',
      prevEl: '.service-prev-btn',
      hideOnClick: false,
    },
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

if(fotoSwiper)  {
  const swiper = new Swiper('.foto__swiper', {
    spaceBetween: 0,
    slidesPerGroup: 1,
    slidesPerView: "auto",
    centeredSlides: true, // активный слайд будет в центре
    loop: true,
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
      nextEl: '.foto-next-btn',
      prevEl: '.foto-prev-btn',
      hideOnClick: false,
    },
    // scrollbar: {
    //   el: '.hero__scrollbar',
    //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
    // },
     breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
      320: {
        slidesPerView: "auto",
        loop: false,
       },
       1221: {
        slidesPerView: "auto",
       }
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

  const form = document.querySelector(".contacts__card-form")
const clickForm = document.querySelector(".click__form")

if(form)  {
  new JustValidate('.contacts__card-form', {
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
        required: 'Enter your name',
        minLength: 'Minimum number of letters - 2',
        strength: 'Invalid format',
      },
      email: 'Enter email',
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
      document.querySelector(".contacts__card-btn").classList.remove("disabled")
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
      document.querySelector(".contacts__card-btn").classList.remove("disabled")
    }
  })
  }
}

if(clickForm) {
  const selector = document.querySelector(".click-tel");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

    new JustValidate('.click__form', {
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
        tel: 'Enter your phone',
        email: 'Invalid format',
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
    document.querySelector(".click__card-btn").classList.remove("disabled")
  }
})
}
}

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

  

  

document.addEventListener("click", function(e) {
  const elementInteractive = e.target;

  if(elementInteractive.closest(".main__btn")) {
    document.querySelector(".click__container").classList.add("click-active")
  }
  if(elementInteractive.closest(".click__container-close")) {
    document.querySelector(".click__container").classList.remove("click-active")
  }
  /*if(!elementInteractive.closest(".click__exit")) {
    document.querySelector(".click__container").classList.remove("click-active")
  }*/
  if (e.target.closest(".click__exit")) {
    document.querySelector(".click__container").classList.remove("click-active")
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

}

const requestUrl = "https://jsonplaceholder.typicode.com/users";

document.addEventListener("click", function (e) {
  if (e.target.closest(".click__card-btn")) {

    const form = e.target.closest(".click__form"); // форма

    function sendRequest(method, url, body = null) {
      const headers = {
        'Content-Type': 'application/json',
      };

      return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers,
      }).then(response => {
        return response.json()
      })

    }

    const body = { // то что передается
      tel: form.querySelector(".click-tel").value,
      name: form.querySelector(".click-name").value,
    }

    sendRequest("POST", requestUrl, body)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
})




