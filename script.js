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
/* ============================
      EVENT SEARCH & FILTER
============================= */

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");

const eventCards = document.querySelectorAll(".event-card");

function filterEvents(){

    if(!searchInput) return;

    const search = searchInput.value.toLowerCase();

    const category = categoryFilter.value;

    eventCards.forEach(card=>{

        const title = card.querySelector("h3").textContent.toLowerCase();

        const cardCategory = card.dataset.category;

        const searchMatch = title.includes(search);

        const categoryMatch = category === "all" || cardCategory === category;

        if(searchMatch && categoryMatch){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}

if(searchInput){

    searchInput.addEventListener("keyup",filterEvents);

    categoryFilter.addEventListener("change",filterEvents);

}

/* ==========================
      EVENT LISTING
========================== */

const eventField = document.getElementById("selectedEvent");

if(eventField){

const params = new URLSearchParams(window.location.search);

const selectedEvent = params.get("event");

if(selectedEvent){

eventField.value = selectedEvent;

}else{

eventField.value = "No Event Selected";

}

}

const registrationForm = document.getElementById("registrationForm");

if(registrationForm){

registrationForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Registration Successful!");

registrationForm.reset();

if(eventField){

const params = new URLSearchParams(window.location.search);

eventField.value = params.get("event") || "";

}

});

}

/* ==========================
      EVENT REGISTRATION
========================== */

const eventField = document.getElementById("selectedEvent");

if(eventField){

const params = new URLSearchParams(window.location.search);

const selectedEvent = params.get("event");

if(selectedEvent){

eventField.value = selectedEvent;

}else{

eventField.value = "No Event Selected";

}

}

const registrationForm = document.getElementById("registrationForm");

if(registrationForm){

registrationForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Registration Successful!");

registrationForm.reset();

if(eventField){

const params = new URLSearchParams(window.location.search);

eventField.value = params.get("event") || "";

}

});

}

/* ==============================
      ATTENDANCE PAGE
============================== */

const attendanceForm = document.getElementById("attendanceForm");

if(attendanceForm){

attendanceForm.addEventListener("submit",function(e){

e.preventDefault();

const table = document.getElementById("attendanceTable");

const id =
attendanceForm.querySelectorAll("input")[0].value;

const name =
attendanceForm.querySelectorAll("input")[1].value;

const event =
attendanceForm.querySelector("select").value;

const now = new Date();

const time =
now.toLocaleTimeString([],{
hour:'2-digit',
minute:'2-digit'
});

table.innerHTML += `

<tr>

<td>${id}</td>

<td>${name}</td>

<td>${event}</td>

<td><span class="present">Present</span></td>

<td>${time}</td>

</tr>

`;

attendanceForm.reset();

const event =
attendanceForm.querySelector("select").value;

window.location.href =
`certificates.html?event=${encodeURIComponent(event)}&status=eligible`;

});

}

/* QR Scanner Placeholder */

const startScanner =
document.getElementById("startScanner");

const stopScanner =
document.getElementById("stopScanner");

const scanResult =
document.getElementById("scanResult");

if(startScanner){

startScanner.onclick = function(){

scanResult.innerHTML =
"📷 Camera Started (QR scanning will be implemented later).";

};

}

if(stopScanner){

stopScanner.onclick = function(){

scanResult.innerHTML =
"Scanner Stopped.";

};

}

/* ===============================
      DASHBOARD
=============================== */

const dashboardCards = document.querySelectorAll(".dashboard-card");

dashboardCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/* ============================
     CERTIFICATE PAGE
============================ */

const certificateEvent =
document.getElementById("certificateEvent");

const certificateTitle =
document.getElementById("certificateTitle");

const certificateStatus =
document.getElementById("certificateStatus");

if(certificateEvent){

const params =
new URLSearchParams(window.location.search);

const event =
params.get("event") || "Unknown Event";

const status =
params.get("status") || "pending";

certificateEvent.textContent = event;

certificateTitle.textContent = event;

certificateStatus.textContent =
status === "eligible"
? "Eligible for Download"
: "Attendance Required";

certificateStatus.className =
status === "eligible"
? "eligible"
: "pending";

}

const downloadBtn =
document.getElementById("downloadCertificate");

if(downloadBtn){

downloadBtn.addEventListener("click",function(){

alert(
"PDF download will be connected once jsPDF or a backend is added."
);

});

}
