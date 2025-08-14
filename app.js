// AI Hub JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize service links
    const serviceLinks = document.querySelectorAll('.service-link');
    
    serviceLinks.forEach(link => {
        // Ensure links open in same tab
        link.setAttribute('target', '_self');
        
        // Add click event listener for smooth interaction
        link.addEventListener('click', function(e) {
            const card = this.closest('.service-card');
            
            // Add brief scale effect on click
            card.style.transform = 'scale(0.95)';
            
            // Allow the click to proceed normally after brief animation
            setTimeout(() => {
                // The browser will handle navigation automatically
            }, 50);
        });
        
        // Enhanced keyboard support
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Trigger the click event which will handle navigation
                this.click();
            }
        });
        
        // Add proper focus handling
        link.addEventListener('focus', function() {
            this.closest('.service-card').style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('blur', function() {
            this.closest('.service-card').style.transform = '';
        });
    });
    
    // Ensure all images are loaded
    const serviceLogos = document.querySelectorAll('.service-logo');
    serviceLogos.forEach(logo => {
        logo.addEventListener('error', function() {
            console.error('Failed to load logo:', this.src);
            this.alt = 'Logo not available';
        });
        
        logo.addEventListener('load', function() {
            console.log('Logo loaded successfully:', this.alt);
        });
    });
    
    console.log('AI Hub loaded successfully with', serviceLinks.length, 'services');
});