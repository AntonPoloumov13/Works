const menu = document.querySelector(".nav-burger");

document.addEventListener("click", function (e) {
  if(e.target.closest(".burger")) {
    menu.classList.add("menu-active")
    document.body.style.overflow = "hidden";
  }
  if (e.target.closest(".header__exit-menu")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
  if (e.target.closest(".header__menu-list")) {
    menu.classList.remove("menu-active")
    document.body.style.overflow = "";
  }
})
