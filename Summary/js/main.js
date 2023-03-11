"use strict"

window.onload = function () {

  const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {
  if(e.target.closest(".burger")) {
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
  }
  if (e.target.closest(".header__exit-menu")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (e.target.closest(".nav__link")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
})




}
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } else  {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('section');

for (let elm of elements) {
  observer.observe(elm);
}
