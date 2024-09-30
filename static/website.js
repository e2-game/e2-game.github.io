document.addEventListener('DOMContentLoaded', function () {
const countdownDate = new Date("2024-10-13T23:59:00.000-08:00");
    //countdownDate.setMonth(countdownDate.getMonth() + 1); // Add 1 month to the current date

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeRemaining = countdownDate - now;

        // Time calculations for months, days, hours, minutes, and seconds
        const oneMonth = 30 * 24 * 60 * 60 * 1000;
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;
        const oneSecond = 1000;

        let months = Math.floor(timeRemaining / oneMonth);
        let days = Math.floor((timeRemaining % oneMonth) / oneDay);
        let hours = Math.floor((timeRemaining % oneDay) / oneHour);
        let minutes = Math.floor((timeRemaining % oneHour) / oneMinute);
        let seconds = Math.floor((timeRemaining % oneMinute) / oneSecond);

        // Output the result in the respective elements
        document.getElementById('months').innerHTML = months;
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        // If the countdown is finished, stop the timer
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown-timer').innerHTML = "Time's up!";
        }
    }, 1000);
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

    // ScrollReveal settings
    const isMobile = window.innerWidth <= 768;

    // ScrollReveal for multiple elements with mobile-friendly settings
    function applyScrollReveal() {
        ScrollReveal().reveal('.logo, .connect-btn', {
            duration: isMobile ? 800 : 1000,
            origin: 'top',
            distance: isMobile ? '20px' : '30px',
            easing: 'ease-in-out',
            delay: 200,
            reset: true
        });

        ScrollReveal().reveal('.banner-video, .banner-content', {
            duration: isMobile ? 1200 : 1500,
            origin: 'bottom',
            distance: isMobile ? '30px' : '50px',
            easing: 'ease-in-out',
            delay: 300,
            reset: true
        });

        ScrollReveal().reveal('#about_the_game img, .service-content .big-text, .service-content .small-text', {
            duration: isMobile ? 1000 : 1200,
            origin: 'left',
            distance: isMobile ? '40px' : '60px',
            easing: 'ease-out',
            delay: 400,
            reset: true
        });

        ScrollReveal().reveal('#about img, .service-content', {
            duration: isMobile ? 1000 : 1200,
            origin: 'right',
            distance: isMobile ? '40px' : '70px',
            easing: 'ease-out',
            delay: 500,
            reset: true
        });

        ScrollReveal().reveal('#service-image, .chevron-container', {
            duration: isMobile ? 800 : 1000,
            origin: 'bottom',
            distance: isMobile ? '30px' : '40px',
            easing: 'ease-in-out',
            delay: 300,
            reset: true
        });

        ScrollReveal().reveal('.service-icon-text', {
            duration: isMobile ? 1000 : 1200,
            origin: 'left',
            distance: isMobile ? '40px' : '50px',
            easing: 'ease-in-out',
            interval: 200,
            reset: true
        });

        ScrollReveal().reveal('iframe, .service-three .text-content', {
            duration: isMobile ? 1200 : 1500,
            origin: 'top',
            distance: isMobile ? '50px' : '70px',
            easing: 'ease-out',
            delay: 300,
            reset: true
        });

        ScrollReveal().reveal('.centered-section .text-wrapper, .centered-section .connect-btn', {
            duration: isMobile ? 800 : 1000,
            origin: 'bottom',
            distance: isMobile ? '30px' : '40px',
            easing: 'ease-in-out',
            delay: 300,
            reset: true
        });

        ScrollReveal().reveal('.footer-content a, .footer-content span', {
            duration: isMobile ? 800 : 1000,
            origin: 'bottom',
            distance: isMobile ? '20px' : '30px',
            easing: 'ease-in-out',
            delay: 200,
            reset: true
        });
    }

    applyScrollReveal();

    // Dynamically adjust favicon based on theme
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
