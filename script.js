// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enroll button click handler
const enrollButtons = document.querySelectorAll('.enroll-btn, .primary-btn, .large-btn');
enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        handleEnrollment();
    });
});

// Handle enrollment
function handleEnrollment() {
    const email = prompt('Enter your email to enroll:');
    if (email) {
        if (validateEmail(email)) {
            alert(`Thank you for enrolling, ${email}! You will receive a confirmation email shortly.`);
            trackEvent('enrollment', {
                email: email,
                timestamp: new Date().toISOString()
            });
        } else {
            alert('Please enter a valid email address.');
        }
    }
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Track events (for analytics)
function trackEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
    // Here you would send data to your analytics service
}

// Watch promo button
const watchPromoBtn = document.querySelector('.watch-btn');
if (watchPromoBtn) {
    watchPromoBtn.addEventListener('click', function() {
        alert('Opening promo video...\n\nIn a real implementation, this would open a modal with an embedded video player.');
        trackEvent('watch_promo', {
            timestamp: new Date().toISOString()
        });
    });
}

// Learn more about instructor
const learnMoreBtn = document.querySelector('.learn-more-btn');
if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', function() {
        alert('Loading instructor bio...\n\nThis would typically open a detailed instructor profile page.');
        trackEvent('learn_more_instructor', {
            timestamp: new Date().toISOString()
        });
    });
}

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.learning-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Mobile menu toggle (for future implementation)
function createMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Check if we're on mobile
    if (window.innerWidth <= 768) {
        // Mobile menu logic could be added here
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    createMobileMenu();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createMobileMenu();
    console.log('Landing page loaded successfully');
});

// Testimonial carousel (example for future use)
class TestimonialCarousel {
    constructor() {
        this.testimonials = [];
        this.currentIndex = 0;
    }

    addTestimonial(name, text, rating) {
        this.testimonials.push({ name, text, rating });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }

    previous() {
        this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    }

    getCurrent() {
        return this.testimonials[this.currentIndex];
    }
}

// Initialize carousel (optional)
const carousel = new TestimonialCarousel();

// Form submission helper (for future contact form)
function handleFormSubmit(formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        
        // Simulate form submission
        console.log('Form submitted:', Object.fromEntries(formData));
        alert('Thank you for your submission!');
        this.reset();
    });
}

// Utility: Scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals/dropdowns
        console.log('Escape key pressed');
    }
});

// Performance: Lazy load images (future implementation)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                imageObserver.unobserve(img);
            }
        });
    });

    // document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Export functions for external use
window.landingPageUtils = {
    handleEnrollment,
    validateEmail,
    trackEvent,
    scrollToSection
};
