const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close mobile menu when a link is clicked

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });

});


// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }

    });


    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });

});


// =========================
// THEME TOGGLE
// =========================

const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");
    
    if (document.body.classList.contains("light")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");

    const icon = themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}


// =========================
// PROJECT MODAL
// =========================

const modal = document.querySelector("#projectModal");
const modalBody = modal.querySelector(".modal-body")
const modalClose = document.querySelector("#modalClose");
const projectButtons = document.querySelectorAll(".project-details");


projectButtons.forEach(button => {
    button.addEventListener("click", () => {
        let html = '';
        const project = button.dataset.project;

        if (project == "todo") {
            // modal.classList.add("show");
            html = `
            <p class="eyebrow">PROJECT DETAILS</p>
            <h2>Todo App</h2>
            <p>This project was built to practice JavaScript application logic and state management.</p>

            <div class="modal-features">
                <div>
                    <i class="fa-solid fa-check"></i>
                    Create tasks
                </div>
                <div>
                    <i class="fa-solid fa-check"></i>
                    Edit existing tasks
                </div>
                <div>
                    <i class="fa-solid fa-check"></i>
                    Delete tasks
                </div>
                <div>
                    <i class="fa-solid fa-check"></i>
                    Filter active and completed tasks
                </div>

                <div>
                    <i class="fa-solid fa-check"></i>
                    Persist tasks with localStorage
                </div>

                <div>
                    <i class="fa-solid fa-check"></i>
                    Responsive interface
                </div>
            </div>
        </div>`;

        modalBody.innerHTML = html
        }

        if(project == "weather") {
            html = `
            <p class="eyebrow">PROJECT DETAILS</p>
            <h2>Weather App</h2>
            <p>A responsive weather application that allows users to search for a city and view real-time weather information through a REST API.</p>

            <div class="modal-features">
                <div>
                    <i class="fa-solid fa-check"></i>
                    Search weather by city
                </div>

                <div>
                    <i class="fa-solid fa-check"></i>
                    Fetch weather data from a REST API
                </div>

                <div>
                    <i class="fa-solid fa-check"></i>
                    Display current temperature and conditions
                </div>

                <div>
                    <i class="fa-solid fa-check"></i>
                    Display humidity and feels-like temperature
                </div>

                <div>
                    <i class="fa-solid fa-check"></i>
                    Handle API responses and user input
                </div>

                <div>
                    <i class="fa-solid fa-check"></i>
                    Responsive design for different screen sizes
                </div>

            </div>`;
            modalBody.innerHTML = html;
        }

         modal.classList.add("show");

    });

});


modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
});


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modal.classList.remove("show");
    }

});


// =========================
// CURRENT YEAR
// =========================

document.querySelector("#year").textContent =
    new Date().getFullYear();