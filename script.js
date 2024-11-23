document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Simple feedback message
    const message = `Thank you, ${name}! We will contact you at ${email} soon.`;
    document.getElementById('response-message').textContent = message;
  
    // Clear form inputs
    this.reset();
  });
  