//slider
let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("current-slide");

if (n > slides.length) {
    slideIndex = 1
}
if (n < 1) {
    slideIndex = slides.length
}

for (let slide of slides) {
    slide.style.display = "none";
}

for (i =0; i < dots.length; i ++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}

//tabs
var jsTriggers = document.querySelectorAll('.benefit-trigger'),
    jsContents = document.querySelectorAll('.benefit-item');

    jsTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        var id = this.getAttribute('data-tab'),
            content = document.querySelector('.benefit-item[data-tab="'+id+'"]'),
            activeTrigger = document.querySelector('.benefit-trigger.active'),
            activeContent = document.querySelector('.benefit-item.active');
        
        activeTrigger.classList.remove('active');
        trigger.classList.add('active');
        
        activeContent.classList.remove('active');
        content.classList.add('active');
   });
});