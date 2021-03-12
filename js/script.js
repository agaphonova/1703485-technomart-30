const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");


const contactLink = document.querySelector(".contact");
const contactPopup = document.querySelector(".modal-feedback");
const contactClose = contactPopup.querySelector(".modal-close");


// const buyLink = document.querySelector(".buy");
// const buyPopup = document.querySelector(".modal-add");
// const buyClose = buyPopup.querySelector(".modal-close");



mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
});



contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
    }
  }

});


// buyLink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   buyPopup.classList.add("modal-show");
// });

// buyClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   buyPopup.classList.remove("modal-show");
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (buyPopup.classList.contains("modal-show")) {
//       evt.preventDefault();
//       buyPopup.classList.remove("modal-show");
//     }
//   }
// });




