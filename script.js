// Interactive JavaScript features for New York Pizza

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = document.querySelector('#name');
    if (name.value === '') {
        e.preventDefault();
        alert('Name is required');
    }
});

// Image Lazy Loading
const lazyImages = document.querySelectorAll('img.lazy');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(image => {
    imageObserver.observe(image);
});

// Dynamic Interactions
const dynamicElements = document.querySelectorAll('.dynamic');
dynamicElements.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
});