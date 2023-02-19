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
