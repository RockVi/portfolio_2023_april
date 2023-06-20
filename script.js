document.addEventListener('DOMContentLoaded', function() {
    var particlesContainer = document.getElementById('particlesContainer');
  
    particlesContainer.addEventListener('mousemove', function(event) {
      var particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.top = event.clientY + 'px';
      particle.style.left = event.clientX + 'px';
  
      particlesContainer.appendChild(particle);
  
      setTimeout(function() {
        particle.style.opacity = 1;
      }, 0);
  
      setTimeout(function() {
        particlesContainer.removeChild(particle);
      }, 2000);
    });
  });
  