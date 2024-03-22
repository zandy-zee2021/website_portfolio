document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector('.navbar ul');
  var items = document.querySelectorAll('.navbar li');

  items.forEach(function(item) {
    item.addEventListener('click', function() {
      navbar.style.transform = 'translateX(-100%)';
    });
  });
});
