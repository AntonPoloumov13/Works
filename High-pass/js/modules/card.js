const Btn = document.querySelector(".contacts__card-svg");
const search = document.querySelector(".contacts__card-content");
const card = document.querySelector (".contacts__card-item");



document.addEventListener("click", function(e) {


  if (e.target.closest(".contacts__card-button")) {
    document.querySelector(".contacts__card-content").classList.toggle("card-active")
    document.querySelector(".contacts__card-button").classList.toggle("card-active")
  }
})
