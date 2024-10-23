// script.js
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Update the analog clock hands
    const secondDegrees = ((seconds / 60) * 360) + 90; // +90 to offset initial rotation
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;

    // Update the digital time
    const digitalTime = now.toLocaleTimeString();
    document.getElementById('digital-time').textContent = digitalTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately on page load
updateClock();
