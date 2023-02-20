window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('nav__burger')
    document.querySelector('.header__burger').classList.toggle('burger-active')
    document.querySelector('.header__nav__item').classList.toggle('nav__burger')
    document.querySelector('#body').classList.toggle('burger-active')
  })
  $( function() {
    $( "#accordion" ).accordion({heightStyle: "content"});
  } );
})
