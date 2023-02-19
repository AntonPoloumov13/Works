document.addEventListener("click", function(e) {
  const elementInteractive = e.target;

  if(elementInteractive.closest(".product__card-btn")) {
    document.querySelector(".click__container").classList.add("click-active")
  }
  if(elementInteractive.closest(".click__container-close")) {
    document.querySelector(".click__container").classList.remove("click-active")
  }
  if(elementInteractive.closest(".click__exit")) {
    document.querySelector(".click__container").classList.remove("click-active")
  }
})


