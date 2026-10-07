import './style.css'

    // Toggle Button

    const navMenu = document.getElementById("nav-menu")
    const navLink = document.querySelectorAll(".nav-link")
    const hamburger = document.getElementById("hamburger")

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
           hamburger.classList.toggle("fa-bars");
           hamburger.classList.toggle("fa-xmark");
    })

    navLink.forEach(link => {
        link.addEventListener("click", () => {
             navMenu.classList.toggle("left-[0]")
                 hamburger.classList.toggle("fa-bars");
                 hamburger.classList.toggle("fa-xmark");
        })
    })



// swiper rapper js code

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 400,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true,

  breakpoints: {
    640: {
     slidesPerView: 1
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});

  // scroll up button
  
  const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollUp);


/*~~~~~~~~~~~~~~~  HEADER-br ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if (window.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500");
    } else {
        header.classList.remove("border-b", "border-yellow-500");
    }
};

window.addEventListener("scroll", scrollHeader);


/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");

        if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll", activeLink);


//   Animation

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal('.home-data, .about-top, .popular-top, .review-top, .review-swiper, .footer-icon, .footer-content, .copy-right')
sr.reveal('.home-image', {delay:500, scale:0.5})

sr.reveal('.service-card, .popular-card', {interval: 100})


sr.reveal('.about-leaf', {delay: 1000, origin:"right"})

sr.reveal('.about-item-1-content, .about-item-2-img', {delay: 1000, origin:"right"})
sr.reveal('.about-item-2-content, .about-item-1-img', {delay: 1000, origin:"left"})
sr.reveal('.review-leaf, .footer-floral', {delay: 1000, origin:"left"})

