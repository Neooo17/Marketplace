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


