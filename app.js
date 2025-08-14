// AI Hub Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    init();
});

function init() {
    // Add smooth interactions
    setupServiceCards();
    
    // Add keyboard navigation support
    setupKeyboardNavigation();
    
    // Add accessibility enhancements
    setupAccessibility();
}

function setupServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add click tracking (for console logging only, don't prevent default)
        card.addEventListener('click', function(e) {
            const serviceName = this.querySelector('.service-name').textContent;
            console.log(`Navigating to ${serviceName}`);
            // Don't prevent default - let the link work normally
        });
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Add focus management
        card.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        card.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
}

function setupKeyboardNavigation() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    document.addEventListener('keydown', function(e) {
        // Handle Enter key on focused service cards
        if (e.key === 'Enter' && document.activeElement.classList.contains('service-card')) {
            // Trigger the link navigation
            window.location.href = document.activeElement.href;
        }
        
        // Handle arrow key navigation
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const currentIndex = Array.from(serviceCards).indexOf(document.activeElement);
            
            if (currentIndex !== -1) {
                e.preventDefault();
                
                let nextIndex;
                if (e.key === 'ArrowRight') {
                    nextIndex = (currentIndex + 1) % serviceCards.length;
                } else {
                    nextIndex = (currentIndex - 1 + serviceCards.length) % serviceCards.length;
                }
                
                serviceCards[nextIndex].focus();
            }
        }
    });
}

function setupAccessibility() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add ARIA labels
        const serviceName = card.querySelector('.service-name').textContent;
        const serviceDesc = card.querySelector('.service-description').textContent;
        card.setAttribute('aria-label', `Open ${serviceName} - ${serviceDesc}`);
        
        // Ensure tabindex for keyboard navigation
        if (!card.hasAttribute('tabindex')) {
            card.setAttribute('tabindex', '0');
        }
    });
}

// Add visual feedback for keyboard users
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Utility function to handle any errors gracefully
function handleError(error) {
    console.error('AI Hub Error:', error);
}

// Export functions for potential testing or extension
window.AIHub = {
    init,
    setupServiceCards,
    setupKeyboardNavigation,
    setupAccessibility
};