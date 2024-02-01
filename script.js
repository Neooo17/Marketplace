const primaryNav = document.querySelector(".primary-navigation");
const mobToggle = document.querySelector(".mobile-nav-toggle");
const links = document.querySelectorAll("li");

mobToggle.addEventListener("click", () => {

    document.body.classList.toggle('no-scroll'); // disable the scroll bar

    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        mobToggle.setAttribute("aria-expanded", true);
    }else{
        primaryNav.setAttribute("data-visible", false);
        mobToggle.setAttribute("aria-expanded", false);
    }
})


links.forEach((link) => {
    link.addEventListener("click", () => {
        primaryNav.setAttribute("data-visible", false);
        mobToggle.setAttribute("aria-expanded", false);

        document.body.classList.remove('no-scroll'); // Enables the Scroll bar
    })
})


//** Adding bg-color and box-shadow to nav bar when Scrolled....

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var scrollTrigger = 100; // The scroll distance in pixels

    if (window.scrollY > scrollTrigger) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

//** Adding bg-color & box-shadow to nav bar when scrolled */







//** When the user scrolls down 20px from the top of the document, show the moveTop button
// * and go to top of the page when clicked moverTop btn with animation using lil CSS

var moveTopButton = document.getElementById("movetop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        moveTopButton.style.display = "block";
    } else {
        moveTopButton.style.display = "none";
    }
};

moveTopButton.addEventListener('click', function() {
     window.scrollTo({top: 0, behavior: 'smooth'});
});



//** other way to go to top when click on movetop button without smooth animation

// const moveTopButton = document.getElementById("movetop");

// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         moveTopButton.style.display = "block";
//     } else {
//         moveTopButton.style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document

// moveTopButton.addEventListener("click", () => {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, Opera
// })


//** go to top when click on movetop button without smooth animation */
