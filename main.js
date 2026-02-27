// Initialize Lucide Icons
lucide.createIcons();

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Trigger animations for elements in viewport on load
setTimeout(() => {
    revealElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('active');
        }
    });
}, 100);
