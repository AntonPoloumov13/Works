
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
