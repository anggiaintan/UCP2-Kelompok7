// script.js

// Open modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Close modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Select form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Select input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create alert message
    const alertMessage = `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`;

    // Display alert with form values
    alert(alertMessage);

    // Optional: Clear form inputs after submission
    form.reset();
});

