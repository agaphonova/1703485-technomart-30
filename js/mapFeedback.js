const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".close-map");

const contactLink = document.querySelector(".contact");
const contactPopup = document.querySelector(".modal-feedback");
const contactClose = contactPopup.querySelector(".modal-close");
const userName = contactPopup.querySelector("[name='name']")


mapLink.addEventListener("click", function () {
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function () {
  mapPopup.classList.remove("modal-show");
});


contactLink.addEventListener("click", function () {
  contactPopup.classList.add("modal-show");
  userName.focus();
});

contactClose.addEventListener("click", function () {
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
