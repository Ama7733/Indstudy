const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    nav.classList.toggle('active'); // Adjust nav padding when menu is active
});
