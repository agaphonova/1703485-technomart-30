const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".close-map");

const contactLink = document.querySelector(".contact");
const contactPopup = document.querySelector(".modal-feedback");
const contactClose = contactPopup.querySelector(".modal-close");
const contactName = contactPopup.querySelector("[name='name']")
const contactLogin = contactPopup.querySelector("[name='login']")
const contactForm = contactPopup.querySelector(".form-feedback");


mapLink.addEventListener("click", function () {
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function () {
  mapPopup.classList.remove("modal-show");
});


contactLink.addEventListener("click", function () {
  contactPopup.classList.add("modal-show");
  contactName.focus();
});

contactClose.addEventListener("click", function () {
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactLogin.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("contact", contactName.value);
    }
  }

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
      contactPopup.classList.remove("modal-error");
    }
  }

});
