// HOME/script.js


document.addEventListener('DOMContentLoaded', function() {
    
    // TAR ROTATION ON HOVER
    const starIcon = document.querySelector('.star-icon');
    if (starIcon) {
        starIcon.style.transform = 'rotate(0deg)';
        starIcon.parentElement.addEventListener('mouseenter', () => {
            starIcon.style.transform = 'rotate(360deg)';
        });
        starIcon.parentElement.addEventListener('mouseleave', () => {
            starIcon.style.transform = 'rotate(0deg)';
        });
    }

    // LOADING OVERLAY WITH PARTICLES
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        // Create loading content if it doesn't exist
        if (!document.querySelector('.loading-content')) {
            createLoadingOverlay();
        }
        
        // Show overlay for 3 seconds only 
        setTimeout(() => {
            showLoadingOverlay();
            setTimeout(() => {
                hideLoadingOverlay();
            }, 3000);
        }, 500);
    }

    // CARD ANIMATIONS
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // GALLERY LINK 
    const galleryLink = document.querySelector('.GALLERY');
    if (galleryLink) {
        galleryLink.addEventListener('mouseenter', () => {
            galleryLink.style.color = '#f1c40f';
            galleryLink.style.textShadow = '0 0 10px #f1c40f';
        });
        galleryLink.addEventListener('mouseleave', () => {
            galleryLink.style.color = '#ecf0f1';
            galleryLink.style.textShadow = 'none';
        });
    }
});

// LOADING 
function createLoadingOverlay() {
    const overlay = document.querySelector('.loading-overlay') || createOverlayElement();
    const content = document.createElement('di v');
    content.className = 'loading-content';
    
    content.innerHTML = `
        <div class="particle-container">
            <div class="particle" style="animation-delay: 0s; background: #4facfe;"></div>
            <div class="particle" style="animation-delay: 0.5s; background: #00f2fe;"></div>
            <div class="particle" style="animation-delay: 1s; background: #43e97b;"></div>
            <div class="particle" style="animation-delay: 1.5s; background: #fa709a;"></div>
            <div class="particle" style="animation-delay: 2s; background: #ffeb3b;"></div>
            <div class="particle" style="animation-delay: 2.5s; background: #ff8e53;"></div>
            <div class="particle" style="animation-delay: 3s; background: #c44569;"></div>
        </div>
        <p>Loading FIRSTAR Portfolio...</p>
    `;
    
    overlay.innerHTML = '';
    overlay.appendChild(content);
    document.body.appendChild(overlay);
}

function createOverlayElement() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    return overlay;
}

function showLoadingOverlay() {
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) overlay.classList.add('active');
}

function hideLoadingOverlay() {
    const overlay = document.querySelector('.loading-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }
}

// 6. BLOB
function animateBlobs() {
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const duration = 20 + index * 5;
        blob.animate([
            { transform: 'translate(0px, 0px) scale(1)' },
            { transform: 'translate(20px, -10px) scale(1.05)' },
            { transform: 'translate(-15px, 15px) scale(0.98)' },
            { transform: 'translate(0px, 0px) scale(1)' }
        ], {
            duration: duration * 1000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    });
}


setTimeout(animateBlobs, 1000);

// 7. TRANSITION EFFECT
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});