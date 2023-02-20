"use strict"

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


  new JustValidate('.contacts__form', {
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
      tel: 'Введите ваш телефон'
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
