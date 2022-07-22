 // Animation on scroll
 window.addEventListener('load', () => {
   AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true,
   });
 });

/**
 * Preloader
 */
let preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove()
    });
}

 /**
 * navbar background
 */

  let navbar = document.querySelector('#nav');
  window.addEventListener('scroll', () => {
    let position = window.scrollY
    if(position > 69) {
        navbar.classList.add("scrolled")
    }
    else {
        navbar.classList.remove("scrolled")
    }
})
