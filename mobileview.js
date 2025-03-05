  // JavaScript for dropdown functionality
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').classList.add('block');
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').classList.remove('block');
    });
    dropdown.addEventListener('focusin', () => {
        dropdown.querySelector('.dropdown-content').classList.add('block');
    });
    dropdown.addEventListener('focusout', () => {
        dropdown.querySelector('.dropdown-content').classList.remove('block');
    });
});

// Video mute toggle functionality
const video = document.getElementById('campusVideo');
const muteToggle = document.getElementById('muteToggle');
const muteIcon = muteToggle.querySelector('i');

muteToggle.addEventListener('click', () => {
    video.muted = !video.muted;
    muteIcon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
});

// Autoplay video when it comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
}, { threshold: 0.5 });

observer.observe(video);

// Error handling for video
video.addEventListener('error', () => {
    console.error('Error loading video');
    // Optionally, display a fallback image or message
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuContent = document.getElementById('mobileMenuContent');

mobileMenuButton.addEventListener('click', () => {
mobileMenuOverlay.classList.remove('hidden');
mobileMenuContent.classList.remove('-translate-x-full');
});

closeMobileMenu.addEventListener('click', () => {
mobileMenuOverlay.classList.add('hidden');
mobileMenuContent.classList.add('-translate-x-full');
});

mobileMenuOverlay.addEventListener('click', () => {
mobileMenuOverlay.classList.add('hidden');
mobileMenuContent.classList.add('-translate-x-full');
});