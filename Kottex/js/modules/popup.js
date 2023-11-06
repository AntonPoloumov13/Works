
function showModule(e) {
  var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  if (e.pageY <= 1 || (e.pageX >= w - 1)) {
    const open = document.querySelector(".popup__container");
    open.classList.add("active")
    document.addEventListener("click", function(a) {
      const elementInteractive = a.target;
      if(elementInteractive.closest(".popup__container-close")) {
        document.querySelector(".popup__container").classList.remove("active")
      }
      /*if(!elementInteractive.closest(".click__exit")) {
        document.querySelector(".click__container").classList.remove("click-active")
      }*/
      if (a.target.closest(".click__exit")) {
        document.querySelector(".click__container").classList.remove("click-active")
      }
    })
  }
}


document.onmousemove = showModule;


//document.addEventListener('mousemove', (event) => {
  // координата X относительно окна браузера
//  const mouseX = event.clientX;

  // координата Y относительно окна браузера
//  const mouseY = event.clientY;
//  console.log(`Координаты мыши: X = ${mouseX}, Y = ${mouseY}`);
//});






// Попапы формы

// const buttonSign = document.querySelector(".header__sign");
// const buttonLog = document.querySelector(".header__log");
// const reg = document.querySelector(".popup-reg");
// const log = document.querySelector(".popup-log");
// const signClose = document.querySelector(".popup-reg__close");
// const signLog = document.querySelector(".popup-log__close");
// const signExit = document.querySelector(".popup-reg__exit");
// const logExit = document.querySelector(".popup-log__exit");
// const body = document.querySelector("body");
// const menu = document.querySelector(".header__wrapper-menu");

// if (buttonSign && buttonLog) {
//   buttonLog.addEventListener("click", function() {
//     log.classList.add("popup-log-active")
//     body.classList.add("body-block")
//     menu.classList.remove("menu-active")
//   })
//   signLog.addEventListener("click", function() {
//     log.classList.remove("popup-log-active")
//     body.classList.remove("body-block")
//   })
//   logExit.addEventListener("click", function() {
//     log.classList.remove("popup-log-active")
//     body.classList.remove("body-block")
//   })

//   buttonSign.addEventListener("click", function() {
//     reg.classList.add("popup-reg-active")
//     body.classList.add("body-block")
//     menu.classList.remove("menu-active")
//   })
//   signClose.addEventListener("click", function() {
//     reg.classList.remove("popup-reg-active")
//     body.classList.remove("body-block")
//   })
//   signExit.addEventListener("click", function() {
//     reg.classList.remove("popup-reg-active")
//     body.classList.remove("body-block")
//   })
// }
