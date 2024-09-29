document.addEventListener('DOMContentLoaded', function () {
    const images = [
        './img/e2cardswebsite1.png',
        './img/e2cardswebsite2.png',
        './img/e2cardswebsite3.png',
        './img/boxtope2final.png'
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
});
