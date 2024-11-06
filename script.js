function adjustSizes() {
    const logo = document.querySelector('.logo');
    const text = document.querySelector('.text');
    const width = window.innerWidth;

    // Adjust logo size based on window width
    if (width < 1400) {
        logo.style.width = '60vw';
        text.style.fontSize = '1.5vw';
    } else {
        logo.style.width = '25vw';
        text.style.fontSize = '1vw';
    }
}

function adjustBackground() {
    const body = document.body;
    body.style.backgroundSize = 'cover'; // Ensures the background image covers the entire viewport
    body.style.backgroundPosition = 'center'; // Ensures the background image is centered
}

// Initial adjustment
adjustSizes();
adjustBackground();

// Adjust sizes and background on window resize
window.addEventListener('resize', () => {
    adjustSizes();
    adjustBackground();
});

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xOffset = (clientX / innerWidth - 0.5) * 10;
    const yOffset = (clientY / innerHeight - 0.5) * 10;
    document.body.style.backgroundPosition = `${50 - xOffset}% ${50 - yOffset}%`;
});