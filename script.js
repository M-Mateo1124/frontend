const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Registration Form Demo
const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Registration Successful!");

    form.reset();

});