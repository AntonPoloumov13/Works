const menu = document.querySelector(".card__item");

document.addEventListener("click", function (e) {
  if(e.target.closest(".card__item")) {
    menu.classList.add("menu-active")

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
