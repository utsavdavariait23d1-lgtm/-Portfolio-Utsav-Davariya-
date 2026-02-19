/**
 * Professional Portfolio JavaScript
 * Handles smooth scrolling and UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {

    // Navbar styling on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
        }
    });

    // Replay hero animation when at the TOP
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            const hero = document.querySelector("#home");
            if (hero) {
                hero.classList.remove("show");
                setTimeout(() => hero.classList.add("show"), 100);
            }
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Project cards hover effect (subtle scale update for clarity)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--accent-color)';
        });
    });

    // Scroll animation (replays every time section enters viewport)
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // remove when leaving
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

});
