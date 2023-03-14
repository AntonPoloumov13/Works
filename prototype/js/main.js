"use strict"

window.onload = function () {
  document.addEventListener("click", function (e) {

    const elementInteractive = e.target;

    if (elementInteractive.closest(".card__content")) {
      elementInteractive.closest(".card__content").classList.toggle("active")
    }
  })
}
