document.addEventListener('DOMContentLoaded', function() {
  // Welcome screen fade-out animation
  setTimeout(function() {
    document.querySelector('.welcome-screen').classList.add('fade-out');
    setTimeout(function() {
      document.querySelector('.welcome-screen').style.display = 'none';
      document.querySelector('.main-content').classList.add('show');
    }, 1000); // Adjust transition duration if needed
  }, 3000); // Adjust delay before hiding

  // Back-to-top button visibility
  window.onscroll = function() {
    document.querySelector(".back-to-top").style.display = window.scrollY > 200 ? "block" : "none";
  };

  // Smooth scroll to top
  document.querySelector(".back-to-top").addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Image preview interaction
  const imagePreviews = document.querySelectorAll('.grid-item img.image-preview');
  imagePreviews.forEach(imagePreview => {
    imagePreview.addEventListener('click', (event) => {
      event.preventDefault();

      const imageWindow = window.open(imagePreview.src, '_self');
      imageWindow.document.body.style.border = '5px solid #f0f8ff';
      imageWindow.document.body.style.transition = 'border-color 0.5s ease-in-out';

      let isLightBlue = true;
      const changeBorder = () => {
        imageWindow.document.body.style.borderColor = isLightBlue ? '#007bff' : '#f0f8ff';
        isLightBlue = !isLightBlue;
        setTimeout(changeBorder, 500);
      };
      changeBorder();
    });
  });
});
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.welcome-screen').classList.add('hide-welcome');
  }, 2000); 
});

