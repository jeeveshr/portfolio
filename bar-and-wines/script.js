// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header Background
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(5, 5, 5, 1)';
        header.style.padding = '10px 0';
    } else {
        header.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
        header.style.padding = '15px 0';
    }
});

// Menu Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const menuGrids = document.querySelectorAll('.menu-grid');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and grids
        tabBtns.forEach(b => b.classList.remove('active'));
        menuGrids.forEach(grid => grid.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Show corresponding grid
        const target = btn.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});

// Scroll Reveal Animation (Simple Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate
// We can add a class 'reveal' to elements in HTML or just target specific ones here
// For simplicity, let's target the about text and gallery items
const revealElements = document.querySelectorAll('.about-text, .gallery-item');
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Mobile Menu Toggle (Basic)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'rgba(5,5,5,0.98)';
        navLinks.style.width = '100%';
        navLinks.style.textAlign = 'center';
        navLinks.style.padding = '20px 0';
        navLinks.style.borderBottom = '1px solid var(--primary-gold)';
    }
});
