document.addEventListener('DOMContentLoaded', function () {
    const images = [
        './img/e2cardswebsite1.png',
        './img/e2cardswebsite2.png',
        './img/e2cardswebsite3.png',
    ];

    let currentIndex = 0;
    const serviceImage = document.getElementById('service-image');
    const chevron = document.getElementById('next-image');
    const chevronLeft = document.getElementById('next-image-left'); // Add reference to left arrow
    let intervalId;

    // Function to change the image forward
    function changeImageForward() {
        serviceImage.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            serviceImage.src = images[currentIndex];
            serviceImage.style.opacity = 1;
        }, 500);
    }

    // Function to change the image backward
    function changeImageBackward() {
        serviceImage.style.opacity = 0;

        setTimeout(() => {
            // Move to the previous image (wrap around if necessary)
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            serviceImage.src = images[currentIndex];
            serviceImage.style.opacity = 1;
        }, 500);
    }

    // Restart the 5-second interval
    function resetInterval() {
        clearInterval(intervalId);  // Clear the existing interval
        intervalId = setInterval(changeImageForward, 5000);  // Start a new interval
    }

    // Manual change on chevron click (forward)
    chevron.addEventListener('click', function () {
        changeImageForward();
        resetInterval();  // Reset the interval
    });

    // Manual change on left chevron click (backward)
    chevronLeft.addEventListener('click', function () {
        changeImageBackward();
        resetInterval();  // Reset the interval
    });

    // Start the initial interval
    resetInterval();

    // ScrollReveal for multiple elements to enhance overall animation effects

    // Header elements (logo, buttons)
    ScrollReveal().reveal('.logo, .connect-btn', {
        duration: 1000,
        origin: 'top',
        distance: '30px',
        easing: 'ease-in-out',
        delay: 200,
        reset: true
    });

    // Banner elements
    ScrollReveal().reveal('.banner-video, .banner-content', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out',
        delay: 300,
        reset: true
    });

    // "About the Game" Section
    ScrollReveal().reveal('#about_the_game img, .service-content .big-text, .service-content .small-text', {
        duration: 1200,
        origin: 'left',
        distance: '60px',
        easing: 'ease-out',
        delay: 400,
        reset: true
    });

    // "About Us" Section
    ScrollReveal().reveal('#about img, .service-content', {
        duration: 1200,
        origin: 'right',
        distance: '70px',
        easing: 'ease-out',
        delay: 500,
        reset: true
    });

    // Image carousel chevrons and images
    ScrollReveal().reveal('#service-image, .chevron-container', {
        duration: 1000,
        origin: 'bottom',
        distance: '40px',
        easing: 'ease-in-out',
        delay: 300,
        reset: true
    });

    // Specs Section (feature list icons and text)
    ScrollReveal().reveal('.service-icon-text', {
        duration: 1200,
        origin: 'left',
        distance: '50px',
        easing: 'ease-in-out',
        interval: 200,
        reset: true
    });

    // Video section
    ScrollReveal().reveal('iframe, .service-three .text-content', {
        duration: 1500,
        origin: 'top',
        distance: '70px',
        easing: 'ease-out',
        delay: 300,
        reset: true
    });

    // Centered call-to-action section
    ScrollReveal().reveal('.centered-section .text-wrapper, .centered-section .connect-btn', {
        duration: 1000,
        origin: 'bottom',
        distance: '40px',
        easing: 'ease-in-out',
        delay: 300,
        reset: true
    });

    // Footer content
    ScrollReveal().reveal('.footer-content a, .footer-content span', {
        duration: 1000,
        origin: 'bottom',
        distance: '30px',
        easing: 'ease-in-out',
        delay: 200,
        reset: true
    });

    function setFaviconBasedOnTheme() {
  const lightFavicon = document.getElementById('favicon-light');
  const darkFavicon = document.getElementById('favicon-dark');

  // Check if user prefers dark mode
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkMode) {
    // Dark mode: show the dark favicon
    darkFavicon.setAttribute('rel', 'icon');
    lightFavicon.setAttribute('rel', 'alternate icon');
  } else {
    // Light mode: show the light favicon
    lightFavicon.setAttribute('rel', 'icon');
    darkFavicon.setAttribute('rel', 'alternate icon');
  }
}

// Run on page load
setFaviconBasedOnTheme();

// Optional: Listen for changes in the color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFaviconBasedOnTheme);

});
