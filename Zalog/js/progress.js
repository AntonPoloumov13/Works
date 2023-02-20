document.addEventListener("click", function (e) {
  let progressValue = document.querySelector(".progress-bar");
  let progressNum = document.querySelector(".container__progress-num");
 
  if (e.target.closest(".container__check-checkbox-element")) {
    e.target.closest(".container__checbox-list").classList.add("active")
    let eeeee = document.querySelectorAll(".active");
    let numActive = eeeee.length;
    if (numActive === 1) {
      progressValue.style.width = "20%";
      progressNum.innerHTML = "20%";
    } else if (numActive === 2){
      progressValue.style.width = "40%";
      progressNum.innerHTML = "40%";
    } else if (numActive === 3){
      progressValue.style.width = "60%";
      progressNum.innerHTML = "60%";
    } else if (numActive === 4){
      progressValue.style.width = "80%";
      progressNum.innerHTML = "80%";
    } else if (numActive === 5){
      progressValue.style.width = "100%";
      progressNum.innerHTML = "100%";
    }

  }

})
