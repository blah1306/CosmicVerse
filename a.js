function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 2500; i++) {
      // Increase the number of stars to 1000
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      // position of the star
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();
  
  function showPopup(name, info) {
      const popup = document.getElementById('popup');
      document.getElementById('planet-name').textContent = name;
      document.getElementById('planet-info').textContent = info;
      popup.style.display = 'block';
      overlay.style.display = 'block';
  
      // Add the slide-in class for the transition
      popup.classList.add('slide-in');
  }
  
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }
  
  function playSound() {
    document.getElementById("soundEffect").play();
  }