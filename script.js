// ==========================================
// NAVIGATION LOGIC
// ==========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-menu a');
const navbar = document.getElementById('navbar');

// Toggle menu
navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('active');
    
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    document.body.style.overflow = isOpen ? '' : 'hidden';
});

// Close menu function
const closeMenu = () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
        
        setTimeout(() => {
            const target = document.querySelector(link.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    });
});

// Close menu when clicking overlay
navOverlay.addEventListener('click', closeMenu);

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// ==========================================
// REPEATABLE SCROLL ANIMATIONS (MIRROR EFFECT)
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element masuk viewport (scroll down) -> Tambah class visible
            entry.target.classList.add('visible');
        } else {
            // Element keluar viewport (scroll up) -> Hapus class visible agar animasi bisa berulang
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate-on-scroll, .slide-left, .slide-right, .slide-up, .scale-in').forEach((el) => {
    observer.observe(el);
});

// ==========================================
// NAVBAR BACKGROUND CHANGE ON SCROLL
// ==========================================

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.padding = '1rem 5%';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.padding = '1.5rem 5%';
    }
});

// ==========================================
// FORM HANDLING
// ==========================================

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    e.target.reset();
});
