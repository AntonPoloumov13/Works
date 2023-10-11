"use strict"

window.onload = function () {

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

  const form = document.querySelector(".form__bottom-form")
if(form)  {
  new JustValidate('.form__form-item', {
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
      required: 'Введите ваше имя',
      minLength: 'Минимальное количество букв - 2',
      strength: 'Недопустимый формат',
    },
    email: 'Введите ваш email'
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

}
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
    document.querySelector(".form__form-btn").classList.remove("disabled")
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
    document.querySelector(".form__form-btn").classList.remove("disabled")
  }
})
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




}

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;
  if (elementInteractive.closest(".info__accordion-button")) { // Аккордеон

    const pricesItem = elementInteractive.closest(".info__accordion-item");

    const pricesBottom = pricesItem.querySelector(".info__accordion-bottom");

    if (!pricesItem.classList.contains("active")) {

      document.querySelectorAll(".info__accordion-item").forEach(function (e) {
        e.classList.remove("active");
        gsap.to(e.querySelector(".info__accordion-bottom"), {
          height: 0,
        });
      })

      pricesItem.classList.add("active");

      gsap.to(pricesBottom, {
        height: 'auto',
      });

    } else if (pricesItem.classList.contains("active")) {

      pricesItem.classList.remove("active");

      gsap.to(pricesBottom, {
        height: 0,
      });
    }

  }
})


