document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog-container__exile').forEach( function (containerStagesButton) {
    containerStagesButton.addEventListener('click', function (event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-container__left ').forEach( function (containerStages__cards ){
        containerStages__cards.classList.remove('tab-contetn-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('tab-contetn-active')
    })
  })
  $( function() {
    $( "#accordion" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: false,
      active: false,
      heightStyle: "content"});

  } );


})
document.addEventListener("click", function(e)  {
  if(e.target.closest(".catalog-container__exile")) {
    document.querySelectorAll(".catalog-container__exile").forEach(function(q) {
      q.classList.remove("link-active")
    })
    e.target.classList.add("link-active")
  }
})
