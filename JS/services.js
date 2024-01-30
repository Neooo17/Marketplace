const headers = document.querySelectorAll(".faq-page h2");

headers.forEach(heading => {
    heading.addEventListener("click", () => {
        // Get the next sibling of the clicked header, which should be the corresponding p element
        const content = heading.nextElementSibling;

        // Toggle the display of the specific p element
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";  
        }
    });
});


//Other way to doing this with a smooth animation

// const headers = document.querySelectorAll(".faq-page h2");

// headers.forEach(heading => {
//     heading.addEventListener("click", () => {
//         const content = heading.nextElementSibling;

//         // Toggle a class that controls the appearance
//         content.classList.toggle('active');
//     });
// });



