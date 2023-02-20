var selector = document.querySelector("input[type='email']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.studio__right-form', {
  colorWrong: "#F06666",
  rules: {
    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: '[а-яА-Я\d]',
      },

      mail: {
        required: true,
        email: true,
      },
    },

  },
  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Минимальное количество букв - 2',
      strength: 'Недопустимый формат',
    },
    email: 'Недопустимый формат'
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

new JustValidate('.contacts__card-form', {
  colorWrong: "#FF3030",
  rules: {
    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: '[а-яА-Я\d]',
      },

      mail: {
        required: true,
        email: true,
      },

      conten: {

      }
    },

  },
  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат',
      strength: 'Недопустимый формат',
    },

    content: {
      required: 'Недопустимый формат',
      minLength: 'Минимальное количество букв - 2',
      strength: 'Недопустимый формат',
    },
    email: 'Недопустимый формат'
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
