function updateCounter() {
    // Date of October 26, 1995
    const startDate = new Date('1995-10-26T00:00:00Z');

    // Current date and time
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - startDate;

    // Convert milliseconds to years, months, hours, minutes, and seconds
    const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

    // Display the time elapsed
    document.getElementById('counter').innerHTML = `
        <span class="year">${years} years</span>
        <span>${months} months</span>
        <span>${days} days</span>
        <span>${hours} hours</span>
        <span>${minutes} minutes</span>
        <span>${seconds} seconds</span>
    `;

    // Update every second
    setTimeout(updateCounter, 1000);
}

// Initial call to start the counter
updateCounter();

// Fetch a random quote from Quotable API
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        // Update HTML with the quote and author
        document.getElementById('quote').innerText = `"${data.content}"`;
        document.getElementById('author').innerText = `— ${data.author}`;
    })
    .catch(error => console.error(error));
