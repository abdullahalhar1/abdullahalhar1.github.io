// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this);

  fetch(this.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
    },
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('formStatus').textContent = 'Message sent successfully!';
      this.reset(); // Clear the form
    } else {
      document.getElementById('formStatus').textContent = 'Failed to send message. Please try again.';
    }
  })
  .catch(error => {
    document.getElementById('formStatus').textContent = 'Failed to send message. Please try again.';
  });
});