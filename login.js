// Get form elements
const form = document.querySelector(".form");
const emailInput = form.querySelector('input[type="email"]');
const passInput = form.querySelector('input[type="password"]');
const submitBtn = form.querySelector(".form-btn");

// Email pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Password pattern
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Function to validate email using regular expression
function validateEmail(email) {
  return emailPattern.test(email);
}

// Function to validate password using regular expression
function validatePassword(password) {
  return passwordPattern.test(password);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Get the values from the inputs
  const email = emailInput.value.trim();
  const password = passInput.value.trim();

  // Validate email and password
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePassword(password)) {
    alert('Please enter a valid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
    return;
  }

  // If both email and password are valid, redirect to the main page (index.html)
  location.href = form.getAttribute("action");

}
// Add event listener to the form submit button
submitBtn.addEventListener('click', handleSubmit);
