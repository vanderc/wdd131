let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", function() {
    const showMenu = document.getElementById('showMenu');
    const hideMenu = document.getElementById('hideMenu');
    const linkFlex = document.querySelector('.linkFlex');
  
    showMenu.addEventListener('click', function() {
        linkFlex.classList.add('active');
    });
  
    hideMenu.addEventListener('click', function() {
        linkFlex.classList.remove('active');
    });
  });

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
  }