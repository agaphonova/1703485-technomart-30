
const buyLink = document.querySelectorAll(".buy");
const buyPopup = document.querySelector(".modal-add");
const buyClose = buyPopup.querySelectorAll(".modal-busket-close");

buyLink.forEach(function(item){
  item.addEventListener('click', function(evt) {
  evt.preventDefault();
buyPopup.classList.add("modal-show");
});
});

buyClose.forEach(function(item){
  item.addEventListener('click', function(e) {
  buyPopup.classList.remove("modal-show");
});
});