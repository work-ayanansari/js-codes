// Function to start the Countdown Timer 

function startTimer() {
     const expiryDateTime = new Date(document.getElementById("expiryDateTime").value);
     const expiryTimeElement = document.getElementById("expiryTime");
     const currentTimeElement = document.getElementById("currentTime");
     const remainingTimeElement = document.getElementById("remainingTime");

    if (isNaN(expiryDateTime)) {
        alert("Please enter a valid date and time.");
        return;
    }
    expiryTimeElement.innerText = `Expiry Time: ${expiryDateTime.toLocaleString()}`;

    // Function to update the countdown every second (1000 ms) 
    const countdown = setInterval(() => { const now = new Date();
        // Current date & time let remainingTime = expiryDateTime - now; // Time difference in milliseconds

    // Display the current time 
    currentTimeElement.innerText = `Current Time: ${now.toLocaleString()}`; 

    // If remaining time is zero or negative,display "Timer Expired" 
    if (remainingTime <= 0) {
        clearInterval(countdown); remainingTimeElement.innerText = "Countdown Timer Expired";
        return;
    }


    // First calculate years
    const years = expiryDateTime.getFullYear() - now.getFullYear();

    // Calculate months by adjusting for the year difference
    let months = expiryDateTime.getMonth() - now.getMonth();
    if (months < 0) {
        months += 12;
    }

    // Adjust remainingTime to ignore the full years and months already calculated
    const futureDateWithoutYearsAndMonths = new Date(
        now.getFullYear() + years,
        now.getMonth() + months,
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
        now.getSeconds()
    );

    remainingTime = expiryDateTime - futureDateWithoutYearsAndMonths;

    // Convert the remaining time into days, hours, minutes, and seconds 
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60))/ (1000 * 60)); 
    const seconds = Math.floor((remainingTime % (1000 * 60))/ 1000);
    // Display the remaining time 
    remainingTimeElement.innerText = `Remaining Time: ${years}y ${months}mo ${days}d ${hours}h ${minutes}m ${seconds}s`; }, 1000);
}

