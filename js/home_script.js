
// This JavaScript code adds a click event listener to your "Home" link.
// When the link is clicked, it prevents the default link behavior (scrolling to the top without 
// animation) and uses window.scrollTo with behavior: "smooth" to achieve smooth scrolling to
// the top of the page.

// home_script.js
document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Enable smooth scrolling
        });
    });
});