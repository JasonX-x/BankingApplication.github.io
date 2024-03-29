document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.closest('.nav-item').classList.add('active');
    } else {
      link.closest('.nav-item').classList.remove('active');
    }
  });
});
