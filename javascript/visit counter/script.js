// Counter for the number of visitors
let visitorCounter = 0;
// Counter for time spent on the website
let timeCounter = 0;

// Target values
const visitorTarget = 1000; // Target for the visitor counter
const timeTarget = 2500;    // Target for the time spent counter

// Speed of increment (in milliseconds)
const speed = 10; // Adjust this value to control how fast the counters increment

// Function to increment a counter
function incrementCounter(counterElement, targetValue) {
    let currentValue = 0;

    const updateCounter = setInterval(() => {
        currentValue++;
        counterElement.textContent = currentValue;

        // Stop the counter when it reaches the target
        if (currentValue >= targetValue) {
            clearInterval(updateCounter);
        }
    }, speed);
}

// Get the counter elements from the DOM
const visitorCounterElement = document.getElementById('visitorCounter');
const timeCounterElement = document.getElementById('timeCounter');

// Start the visitor counter
incrementCounter(visitorCounterElement, visitorTarget);

// Start the time spent counter
incrementCounter(timeCounterElement, timeTarget);
