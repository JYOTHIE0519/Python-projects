
// =================================
// 1. MOBILE NAVIGATION MENU
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =================================
// 2. ACTIVE NAVIGATION LINK
// =================================

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }

    });

});


// =================================
// 3. SCROLL TO TOP BUTTON
// =================================

const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});

scrollTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =================================
// ANIMATED INTRODUCTION
// =================================

const roles = [
    "Computer Science Student",
    "Aspiring Software Developer",
    "Java & Python Enthusiast",
    "Passionate Problem Solver",
    "Future Software Engineer"
];

const roleText = document.getElementById("role-text");

let roleIndex = 0;

function changeRole() {

    roleText.classList.add("fade-out");

    setTimeout(() => {

        roleIndex = (roleIndex + 1) % roles.length;

        roleText.textContent = roles[roleIndex];

        roleText.classList.remove("fade-out");

    }, 500);

}

setInterval(changeRole, 2500);
