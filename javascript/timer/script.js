// Function to start the timer
function startTimer() {
    let minutes = parseInt(document.getElementById('minutes').value) || 0;
    let seconds = parseInt(document.getElementById('seconds').value) || 0;

    // Total time in seconds
    let totalTimeInSeconds = minutes * 60 + seconds;

    // Display the countdown
    const timerDisplay = document.getElementById('timerDisplay');

    // Update the timer every second
    const countdown = setInterval(() => {
        if (totalTimeInSeconds <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
        } else {
            totalTimeInSeconds--;

            // Calculate minutes and seconds
            const minutesLeft = Math.floor(totalTimeInSeconds / 60);
            const secondsLeft = totalTimeInSeconds % 60;

            // Update the timer display (pad the values to always show 2 digits)
            timerDisplay.textContent = 
                `${String(minutesLeft).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
        }
    }, 1000);
}

// Add event listener to the start button
document.getElementById('startTimer').addEventListener('click', startTimer);
