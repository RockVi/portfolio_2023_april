document.addEventListener('DOMContentLoaded', function() {
    let particlesContainer = document.getElementById('particlesContainer');

    particlesContainer.addEventListener('mousemove', function(event) {
      let particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.top = event.pageY + 'px';
      particle.style.left = event.clientX + 'px';

      particlesContainer.appendChild(particle);
  
      setTimeout(function() {
        particle.style.opacity = 1;
      }, 1);
      
      setTimeout(function() {
        particlesContainer.removeChild(particle);
      }, 1000);
    });
  });
  