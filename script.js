document.addEventListener('DOMContentLoaded', () => {
    // Select the email element and the "Copied!" message span
    const emailElement = document.getElementById('email');
    const copyMessage = document.getElementById('copy-message');

    // Check if the email element exists
    if (emailElement) {
        // Add a click event listener to the email element
        emailElement.addEventListener('click', function () {
            const emailText = emailElement.textContent; // Get the email text from the element

            // Use the Clipboard API to copy the text to the clipboard
            navigator.clipboard
                .writeText(emailText)
                .then(() => {
                    // If copying is successful, show the "Copied!" message
                    copyMessage.textContent = "Copied!";
                    copyMessage.style.display = 'inline'; // Make the message visible

                    // Hide the message after 2 seconds
                    setTimeout(() => {
                        copyMessage.style.display = 'none';
                    }, 2000);
                })
                .catch((error) => {
                    // If an error occurs, show an error message in the "Copied!" span
                    copyMessage.textContent = "Failed to copy!";
                    copyMessage.style.display = 'inline';

                    // Hide the error message after 2 seconds
                    setTimeout(() => {
                        copyMessage.style.display = 'none';
                    }, 2000);

                    console.error('Error copying email:', error); // Log the error for debugging
                });
        });
    }
});


// new
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  lenis.on('scroll', (e) => {
    console.log('Scroll event triggered:', e)
  })

//   time
function updateTime() {
    const timeElement = document.getElementById('time');
    
    // Get the current time
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    // Format time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    // Update the time element
    timeElement.textContent = formattedTime;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time immediately on page load
  updateTime();
  