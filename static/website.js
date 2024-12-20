document.addEventListener('DOMContentLoaded', function () {
    include_countdown = false;
    if(include_countdown){
        const countdownDate = new Date("2024-10-20T23:59:00.000-07:00");
        //const countdownDate = new Date("2024-10-03T11:59:00.000-07:00");

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
    }

    const images = [
        './img/e2cardswebsite1.png',
        './img/e2cardswebsite2.png',
        './img/e2cardswebsite3.png',
    ];

    let currentIndex = 0;
    const serviceImage = document.getElementById('service-image');
    const chevron = document.getElementById('next-image');
    const chevronLeft = document.getElementById('next-image-left');
    let intervalId;

    function changeImageForward() {
        serviceImage.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            serviceImage.src = images[currentIndex];
            serviceImage.style.opacity = 1;
        }, 500);
    }

    function changeImageBackward() {
        serviceImage.style.opacity = 0;
        setTimeout(() => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            serviceImage.src = images[currentIndex];
            serviceImage.style.opacity = 1;
        }, 500);
    }

    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(changeImageForward, 5000);
    }

    chevron.addEventListener('click', function () {
        changeImageForward();
        resetInterval();
    });

    chevronLeft.addEventListener('click', function () {
        changeImageBackward();
        resetInterval();
    });

    resetInterval();
function updateBannerImage() {
        var bannerLogo = document.querySelector('.banner-logo');

        if (window.innerWidth <= 480) {
            bannerLogo.src = './img/e2-logo-mobile.png'; // Mobile image
            bannerLogo.style.width = '10%';  // Set the width to 30%
            bannerLogo.style.height = 'auto'; // Maintain aspect ratio
        } else {
            bannerLogo.src = './img/e2-logo-dark.png'; // Desktop image
            bannerLogo.style.width = '';  // Reset to original size
            bannerLogo.style.height = ''; // Reset to original size
        }
    }

    // Run function on load and on window resize
    window.addEventListener('load', updateBannerImage);
    window.addEventListener('resize', updateBannerImage);

window.addEventListener('resize', centerElement);


// Initial call to center the element on page load
centerElement();

    // Select the countdown container
// Select the countdown container and minute/second elements
const countdownContainer = document.querySelector('.countdown-container');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Function to shrink the countdown container
function shrinkCountdownContainer(scale) {
    countdownContainer.style.transform = `scale(${scale})`;
    countdownContainer.style.transformOrigin = 'top left'; // Ensures it shrinks from the top left corner
}

// Function to hide the minutes and seconds elements
function hideMinutesAndSeconds() {
    minutesElement.style.display = 'none';
    secondsElement.style.display = 'none';
}

// Function to check screen width and apply changes if under 480px
function applyCountdownChanges() {
    if (window.innerWidth <= 480) {
        hideMinutesAndSeconds();
        shrinkCountdownContainer(0.70);
    }
}

// Call the function on page load
applyCountdownChanges();

// Optionally, add a resize event listener to handle screen resizing dynamically
window.addEventListener('resize', applyCountdownChanges);




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
