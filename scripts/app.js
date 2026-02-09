console.log("E-Commerce Website Loaded");

const cartBadge = document.querySelector(".cart .badge");
const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".drawer");
const overlay = document.querySelector(".overlay");
const drawerLinks = document.querySelectorAll(".drawer a");

// Initialize cart count
let cartCount = 0;

document.querySelector(".cart").addEventListener("click", () => {
    cartCount++;
    cartBadge.textContent = cartCount;
});

// Toggle navigation menu on hamburger click
hamburger.addEventListener("click", () => {
    drawer.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Close drawer when clicking on overlay
overlay.addEventListener("click", () => {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
});

// Close drawer when clicking on any link inside it
drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
        drawer.classList.remove("active");
        overlay.classList.remove("active");
    });
});