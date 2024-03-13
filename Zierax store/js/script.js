document.getElementById('process-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedService = document.querySelector('input[name="service"]:checked').value;
  
    if (selectedService === 'Programming') {
      window.open('store/programming.html', '_blank');
    } else if (selectedService === 'Cyber security') {
      window.open('store/cyber_security.html', '_blank');
    }
  });
  