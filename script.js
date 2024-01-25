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



// Adding bg-color and box-shadow to nav bar when Scrolled 

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var scrollTrigger = 100; // The scroll distance in pixels

    if (window.scrollY > scrollTrigger) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
