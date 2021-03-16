let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

if (n > slides.length) {
    slideIndex = 1
}
if (n < 1) {
    slideIndex = slides.length
}

for (let slide of slides) {
    slide.style.display = "none";
}

slides[slideIndex - 1].style.display = "block";
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
        
        activeTrigger.classList.remove('active'); // 1
        trigger.classList.add('active'); // 2
        
        activeContent.classList.remove('active'); // 3
        content.classList.add('active'); // 4
   });
});