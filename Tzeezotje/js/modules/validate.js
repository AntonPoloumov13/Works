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
