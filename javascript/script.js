// Get the contact form and thank you message elements
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

// Add event listener for form submission
contactForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Show the thank you message
  thankYouMessage.classList.add("show");

  // Clear all form fields
  contactForm.reset();

  // Hide the thank you message after 5 seconds
  setTimeout(function () {
    thankYouMessage.classList.remove("show");
  }, 5000);
});
