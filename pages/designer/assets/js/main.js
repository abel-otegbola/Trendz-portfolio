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
 * Back to top
 */
  let backToTop = document.querySelector("#backToTop"); 
  window.addEventListener('scroll', () => {
      let position = window.scrollY
      if(position > 300) {
          backToTop.style.display = "block"
      }
      else {
          backToTop.style.display = "none"
      }
  })

  backToTop.addEventListener("click", () => {
      document.body.scrollTop = 0 //For Safari
      document.documentElement.scrollTop = 0 //For chrome, Firefox, IE and Opera
  })

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


 /**
 * glightbox
 */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });


  /**
 * portfolio filter
 */ 
let portfolioFilters = document.querySelectorAll('#portfolio-flters li'); 
let portfolioGallery = document.querySelectorAll('#projects .gallery .project'); 
for(let i=0; i<portfolioFilters.length; i++) {
    portfolioFilters[i].addEventListener('click', function(e) {
        e.preventDefault();
        for(let j=0; j<portfolioFilters.length; j++) {
            portfolioFilters[j].classList.remove("active")
        }
        portfolioFilters[i].classList.add("active")
        let dataFilter = portfolioFilters[i].getAttribute("data-filter")
        for(let k=0; k<portfolioGallery.length; k++) {
            if(dataFilter === "*") {
                portfolioGallery[k].style.display = "block"   
            }
            else if(portfolioGallery[k].getAttribute("data-filter") === dataFilter) {
                portfolioGallery[k].style.display = "block"
            }
            else {  
                portfolioGallery[k].style.display = "none"   
            }
        }
        
        AOS.refresh()
    });
}