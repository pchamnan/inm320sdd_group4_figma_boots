// toogle menu button 
const hamBurger = document.querySelector(".toggle-btn");

// the toggle function removes or adds a class to an element
hamBurger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
});