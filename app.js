// AI Hub JavaScript - Enhanced Version
document.addEventListener('DOMContentLoaded', function() {
    // Initialize service links
    const serviceLinks = document.querySelectorAll('.service-link');
    const serviceCards = document.querySelectorAll('.service-card');

    // Ensure links open in same tab
    serviceLinks.forEach(link => {
        link.setAttribute('target', '_self');

        // Add click event listener for smooth interaction
        link.addEventListener('click', function(e) {
            const card = this.closest('.service-card');

            // Add brief scale effect on click
            card.style.transform = 'translateY(-10px) scale(0.98)';

            // Reset after brief animation
            setTimeout(() => {
                card.style.transform = 'translateY(-10px) scale(1.05)';
            }, 100);
        });

        // Enhanced keyboard support
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Add visual feedback
                const card = this.closest('.service-card');
                card.style.transform = 'translateY(-10px) scale(1.08)';

                // Navigate after brief delay
                setTimeout(() => {
                    window.location.href = this.href;
                }, 150);
            }
        });

        // Add proper focus handling
        link.addEventListener('focus', function() {
            const card = this.closest('.service-card');
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });

        link.addEventListener('blur', function() {
            const card = this.closest('.service-card');
            card.style.transform = '';
        });
    });

    // Add entrance animation with stagger effect
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
    });

    // Add smooth scroll and page load optimization
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.style.opacity = '0';
        mainTitle.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            mainTitle.style.transition = 'all 1s ease-out';
            mainTitle.style.opacity = '1';
            mainTitle.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add subtle parallax effect on mouse move
    document.addEventListener('mousemove', function(e) {
        const cards = document.querySelectorAll('.service-card');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        cards.forEach((card, index) => {
            const offsetX = (mouseX - 0.5) * 10 * (index + 1);
            const offsetY = (mouseY - 0.5) * 10 * (index + 1);

            if (!card.matches(':hover')) {
                card.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            }
        });
    });

    // Reset parallax on mouse leave
    document.addEventListener('mouseleave', function() {
        const cards = document.querySelectorAll('.service-card');
        cards.forEach(card => {
            if (!card.matches(':hover')) {
                card.style.transform = '';
            }
        });
    });

    console.log('AI Hub enhanced version loaded successfully with', serviceLinks.length, 'service links');
});