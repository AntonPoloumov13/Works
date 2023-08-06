document.querySelectorAll(".tarot__bottom-btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".tarot__bottom-player").forEach(function (tabContent) {
      tabContent.classList.remove("content-active")
    })
    document.querySelector(`[data-target="${path}"]`).classList.add("content-active")
  })
})

document.addEventListener("click", function(e) {
  const interactiveElement = e.target;

  if(interactiveElement.closest(".tarot__bottom-btn")) {
    document.querySelectorAll(".tarot__bottom-item").forEach(function (liner) {
      liner.classList.remove("active")
    })
    interactiveElement.closest(".tarot__bottom-item").classList.add("active")
  }
})


/*
            HTML


  <button class="btn" data-path="germany">Germany</button>

  <div class="content" data-target="germany">
      <div">
          <span>
            Что мы о нём знаем?
          </span>
          <p>
            Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
          </p>
          <a href="">
            В галерею
          </a>
      </div>
  </div>

              CSS

  .content {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .content-active {
    opacity: 1;
    pointer-events: visible;
    visibility: visible;
  }

*/
