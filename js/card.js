
const buyLink = document.querySelectorAll(".buy");
const buyPopup = document.querySelector(".modal-add");
const buyClose = buyPopup.querySelector(".modal-busket-close");

buyLink.forEach(function(item){
  item.addEventListener('click', function(evt) {
  evt.preventDefault();
buyPopup.classList.add("modal-show");
});
});

buyClose.addEventListener("click", function () {
  buyPopup.classList.remove("modal-show");
});

