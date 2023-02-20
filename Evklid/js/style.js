window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('nav__burger')
    document.querySelector('.header__burger').classList.toggle('burger-active')
    document.querySelector('.nav__item').classList.toggle('nav__burger')
  })
  $( function() {
    $( "#accordion" ).accordion({heightStyle: "content"});
  } );
})


new Swiper('.solutions__swiper__container-sol', {

  direction: 'horizontal',

  pagination: {
    el: '.solutions__pagination',
    clickable: true,
  },
});
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.container-stages__button').forEach( function (containerStagesButton) {
    containerStagesButton.addEventListener('click', function (event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.container-stages__cards ').forEach( function (containerStages__cards ){
        containerStages__cards.classList.remove('tab-contetn-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-contetn-active')
    })
  })

})


const headerBtn = document.querySelector(".header__btn")
const searchWrapper = document.querySelector(".searchwrapper")
const searchExitBtn = document.querySelector(".searchwrapper__exit")
const body = document.querySelector("body")

headerBtn.addEventListener("click", function () {
  searchWrapper.classList.add("search-active")
  body.classList.add("body-block")
})

searchExitBtn.addEventListener("click", function () {
  searchWrapper.classList.remove("search-active")
  body.classList.remove("body-block")
})
