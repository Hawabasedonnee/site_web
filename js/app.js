document.addEventListener("DOMContentLoaded", () => {
    // Initialise AOS
    AOS.init({
        duration: 1000, // Durée de l'animation en millisecondes
        once: true      // L'animation se déclenche une seule fois
    });
});

console.log("first");

const menuToggle = document.querySelector('.menu-toggle');
const navLink = document.querySelector('.nav-link');
    menuToggle.addEventListener('click', () =>{
    navLink.classList.toggle('active');
})
