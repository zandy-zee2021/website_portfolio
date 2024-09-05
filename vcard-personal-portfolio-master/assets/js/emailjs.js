
  // Initialize EmailJS with your user ID
  emailjs.init("3ik4zHUKIf7erOtqh");

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send the email using EmailJS
    emailjs.sendForm('service_c9czpow', 'template_lzsz50m', this)
      .then(function(response) {
        console.log('Sent successfully:', response);
        alert('Your message has been sent!');
      }, function(error) {
        console.error('Failed to send:', error);
        alert('Failed to send message. Please try again later.');
      });
  });

