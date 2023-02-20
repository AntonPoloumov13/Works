const entrance = document.querySelector(".header-container__enter");
const nav = document.querySelector(".header-container__nav__list");
const burger = document.querySelector(".header__burger");
const searchClicker = document.querySelector(".header__searchclicker");
const search = document.querySelector(".searchwrapper");
const searchExitBtn = document.querySelector(".header-container__exit")



    entrance.addEventListener("click", function () {
      nav.classList.remove("nav-active")
    })

    searchClicker.addEventListener("click", function () {
      search.classList.toggle("search-active")
    })

    searchExitBtn.addEventListener("click", function () {
      search.classList.remove("search-active")

    })

