document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector('.navbar ul');
  var items = document.querySelectorAll('.navbar li');

  items.forEach(function(item) {
    item.addEventListener('click', function() {
      navbar.style.transform = 'translateX(-100%)';
    });
  });
});


  document.getElementById('downloadButton').addEventListener('click', function() {
    // Code to download the CV
    // Replace 'path_to_your_cv' with the actual path to your CV file
    var cvUrl = 'path_to_your_cv';
    var link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'your_cv_filename.pdf'; // Set the filename for the downloaded CV
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
