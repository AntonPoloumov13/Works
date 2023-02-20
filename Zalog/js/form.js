var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


  new JustValidate('.container__contacts-form', {
    colorWrong: "#FF6972",
    rules: {
      name: {
        required: true,
        minLength: 1,
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
        required: 'Ваше имя',
        strength: 'Ошибка',
      },
      tel: 'Введите телефон'
    },
  })
