// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section, .hero');

function setActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// Particle animation in hero
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-top, .reveal-bottom');

function reveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Counter animation for stats
const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

function animateCounters() {
    if (animated) return;
    
    const statsSection = document.querySelector('.stats-grid');
    const statsSectionTop = statsSection.getBoundingClientRect().top;
    
    if (statsSectionTop < window.innerHeight - 100) {
        animated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateCounters);

// Progress bars animation
const progressBars = document.querySelectorAll('.progress-fill');
let progressAnimated = false;

function animateProgressBars() {
    if (progressAnimated) return;
    
    const languagesSection = document.querySelector('.languages-section');
    if (!languagesSection) return;
    
    const languagesSectionTop = languagesSection.getBoundingClientRect().top;
    
    if (languagesSectionTop < window.innerHeight - 100) {
        progressAnimated = true;
        
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 200);
        });
    }
}

window.addEventListener('scroll', animateProgressBars);

// Back to top button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// WhatsApp floating button animation
const whatsappFloat = document.getElementById('whatsappFloat');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        whatsappFloat.style.opacity = '1';
        whatsappFloat.style.visibility = 'visible';
    } else {
        whatsappFloat.style.opacity = '0';
        whatsappFloat.style.visibility = 'hidden';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Create mailto link as fallback
    const mailtoLink = `mailto:luis.gascah@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.phone}\n\n` +
        `Mensaje:\n${formData.message}`
    )}`;
    
    // Show success message
    contactForm.style.display = 'none';
    formSuccess.style.display = 'flex';
    
    // Open email client
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 500);
    
    // Reset form after 3 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.style.display = 'none';
    }, 3000);
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = `© ${currentYear} Luis Gasca Herrera. Todos los derechos reservados.`;
}

// Typing animation for hero subtitle
const subtitle = document.querySelector('.hero-subtitle');
const subtitleText = subtitle.textContent;
subtitle.textContent = '';

let charIndex = 0;
function typeText() {
    if (charIndex < subtitleText.length) {
        subtitle.textContent += subtitleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    }
}

// Start typing animation after page load
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const marker = item.querySelector('.timeline-marker');
        marker.style.transform = 'translateX(-50%) scale(1.5)';
    });
    
    item.addEventListener('mouseleave', () => {
        const marker = item.querySelector('.timeline-marker');
        marker.style.transform = 'translateX(-50%) scale(1)';
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add animation to skill items on hover
const skillItems = document.querySelectorAll('.skill-list li');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console message
console.log('%c🚀 Portfolio de Luis Gasca Herrera', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%c✨ Desarrollado con pasión y tecnología', 'color: #7c3aed; font-size: 14px;');
console.log('%c📧 Contacto: luis.gascah@outlook.com', 'color: #06b6d4; font-size: 12px;');
