"use strict"

window.onload = function () {
  tippy('.tooltip', {
  placement: 'bottom', // Расположение
  //content: '<strong>Текст Текст Текст</strong>', // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
  //allowHTML: true, // Можно управлять наполнением тултипа с помощью этих свойств, чтобы работало нужно удалить атрибут у тултипа в html
  role: 'tooltip',
  trigger: 'mouseenter focus click', // Как срабатывает тултип, при наведение, фокусу и клике
  hideOnClick: true,
  theme: "colorToolp", // Кастомная тема
  maxWidth: 90, // максимальная ширина тултипа
});


// Появление тултипа можно анимировать , в документации есть

/* <button class="tooltip" data-tippy-content="Информация">
<span>!</span>
</button> */

// .tippy-box[data-theme~='colorToolp'] {
//   font-size: 9px;
//   line-height: 14px;
//   text-align: center;
//   background-color: #000;
// }

// .tippy-box[data-theme~='colorToolp'][data-placement^='top'] > .tippy-arrow::before {
//   border-top-color: #000;
// }


}
document.addEventListener("click", function(e) {


  if (e.target.closest(".management__button")) {
    document.querySelector(".management__left").classList.toggle("card-active")
    document.querySelector(".management__button").classList.toggle("card-active")
  }
})
