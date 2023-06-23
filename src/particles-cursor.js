document.addEventListener("DOMContentLoaded", function () {
  const particleContainer = document.getElementById("cursor-overlay");

  // Helper function to generate a random number within a range
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Create a new particle element with random velocities and append it to the container
  function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.setProperty("--x", getRandomNumber(-50, 50) + "px");
    particle.style.setProperty("--y", getRandomNumber(-50, 50) + "px");
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particleContainer.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 800);
  }

  // Handle mousemove event to create particles at the cursor position
  document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    createParticle(x, y);
  });
});
