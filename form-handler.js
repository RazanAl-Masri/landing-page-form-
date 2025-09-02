document.addEventListener('DOMContentLoaded', function() {
    
  // Grab the form and success message elements
  const form = document.getElementById('form');
  const success = document.getElementById('form-success');
  
  // Add event listener to the form's submit event
  form.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission

    // Check form validity before submitting
    if (!form.checkValidity()) {
      form.reportValidity();
      return;  // Stop the process if the form is not valid
    }

    // Show success message
    success.style.display = 'block';

    // Wait 2 seconds before redirecting to the confirmation page
    setTimeout(() => {
      // Redirect to the confirmation page
      window.location.href = "success.html"; // Redirect to your success page
    }, 2000); // Wait for 2 seconds before redirecting
  });
});
