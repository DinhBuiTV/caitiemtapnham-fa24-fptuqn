// Preloader Conditions

window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    preloader.className += " conditions";
  
    const nav_bar = document.querySelector("nav.navigation-bar-menu");
    nav_bar.className += " conditions";
  
    const header_information = document.querySelector(".header-information");
    header_information.className += " conditions";
  
    const header_image_title = document.querySelector(".header-slogan-logo");
    header_image_title.className += " conditions";
  });

  document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExampleInterval');
    var images = carousel.querySelectorAll('.carousel-item img');

    carousel.addEventListener('slid.bs.carousel', function () {
        // Remove the animation class from all images
        images.forEach(function (img) {
            img.classList.remove('animate-slide');
        });

        // Add the animation class to the active image
        var activeImage = carousel.querySelector('.carousel-item.active img');
        if (activeImage) {
            activeImage.classList.add('animate-slide');
        }
    });
});
