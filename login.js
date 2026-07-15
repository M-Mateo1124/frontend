// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// Automatically highlight active page

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Smooth scrolling (for future internal sections)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior:"smooth"
            });

    });

});

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

if (loginBtn && registerBtn && loginForm && registerForm) {

    loginBtn.addEventListener("click", function () {

        loginBtn.classList.add("active");
        registerBtn.classList.remove("active");

        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");

    });

    registerBtn.addEventListener("click", function () {

        registerBtn.classList.add("active");
        loginBtn.classList.remove("active");

        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");

    });

}
