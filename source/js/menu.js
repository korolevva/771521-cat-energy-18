var menu = document.querySelector(".main-nav");
var buttonToggle = document.querySelector(".page-header__toggle");

buttonToggle.classList.toggle("page-header__toggle--hide");
menu.classList.toggle("main-nav--close");

buttonToggle.addEventListener("click", function(evt) {
  evt.preventDefault();

  buttonToggle.classList.toggle("page-header__toggle--close");
  menu.classList.toggle("main-nav--close");
});
