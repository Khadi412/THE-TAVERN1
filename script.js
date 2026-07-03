/**
 * 1. Mobile Responsive Hamburger Navigation Controls
 */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate individual hamburger dashboard bars
    const spans = hamburger.querySelectorAll('span');
    spans.forEach((span, index) => {
        if(navLinks.classList.contains('active')) {
            if(index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if(index === 1) span.style.opacity = '0';
            if(index === 2) span.style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Auto-retract mobile layout link overlay on navigation tap click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.querySelectorAll('span').forEach(s => { s.style.transform = 'none'; s.style.opacity = '1'; });
        }
    });
});


/**
 * 2. Header Document Scroll Progress Tracker System
 */
window.addEventListener('scroll', () => {
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (windowScroll / documentHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercentage + '%';
});


/**
 * 3. Modern Scroll Reveal Interface System (Intersection Observer Engine)
 */
const dynamicRevealTargets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Remove item observation path once animated into frame view
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.1, // Fires when 10% target volume crosses viewport boundary
    rootMargin: "0px 0px -30px 0px"
});

dynamicRevealTargets.forEach(target => scrollObserver.observe(target));


/**
 * 4. Micro-Interactions: Shopping Cart UX Optimization 
 */
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const standardLabelText = this.innerText;
        this.innerText = "✓ Added to Bag";
        this.style.backgroundColor = "#2b2b2b";
        this.style.color = "#ffffff";
        this.style.transform = "scale(0.95)";
        
        setTimeout(() => {
            this.innerText = standardLabelText;
            this.style.backgroundColor = "";
            this.style.color = "";
            this.style.transform = "";
        }, 1800);
    });
});

// Mock Application Form Dispatch Handler UI
document.getElementById('tavernForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const actionBtn = this.querySelector('button[type="submit"]');
    actionBtn.innerText = "Processing Details...";
    
    setTimeout(() => {
        actionBtn.innerText = "Message Dispatched Successfully!";
        actionBtn.style.backgroundColor = "#d4a373";
        actionBtn.style.color = "#2b2b2b";
        this.reset();
    }, 1400);
});

// Trigger Above-The-Fold Elements Immediately on Load
window.addEventListener('load', () => {
    const heroTarget = document.querySelector('.hero-content');
    if(heroTarget) heroTarget.classList.add('active');
});