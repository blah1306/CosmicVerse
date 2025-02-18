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

function showPopup(name,dia,M,st,para) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    document.getElementById('planet-name').textContent = name;
    document.getElementById('diameter').textContent = dia;
    document.getElementById('mass').textContent = M;
    document.getElementById('surface-temperature').textContent = st;
    document.getElementById('ff').textContent = para;
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
function Hover(){
  document.getElementById("hoe").play();
}

//   function playSFX() {
//     let sound = new Audio("click.wav");
//     sound.play();
//   }