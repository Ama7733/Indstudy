let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentIndex = (index + slides.length) % slides.length;
    const offset = -currentIndex * 100; // Adjust based on number of images
    document.getElementById('carouselImages').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Toggle menu visibility
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// Button click functionality
document.getElementById('cta-button').addEventListener('click', function() {
    window.location.href = 'contact.html'; // Replace with your actual contact page
});
