// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.querySelector('#horn-select');
  const audio = document.querySelector('.hidden');
  const exposeElem = document.getElementById('expose');
  const button = exposeElem.children[4];
  const volume = document.getElementById('volume');
  const jsConfetti = new JSConfetti({ exposeElem });

  horn.addEventListener('change', (event) => {
    if(event.target.value == "select") {
      document.images[0].src = "assets/images/no-image.png";
      audio.src = "";
    }

    else if(event.target.value == "air-horn") {
      document.images[0].src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if(event.target.value == "car-horn") {
      document.images[0].src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else if(event.target.value == "party-horn") {
      document.images[0].src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  button.addEventListener('click', (event) => {
    audio.load();
    audio.play();

    if (horn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  volume.addEventListener('input', (event) => {
    var val = document.getElementById('volume').value;
    var valOffset = document.getElementById('volume').value/100;
    audio.volume = valOffset;
  
    if (val == 0) {
      document.images[1].src = "assets/icons/volume-level-0.svg";
    }
    else if (val < 33) {
      document.images[1].src = "assets/icons/volume-level-1.svg";
    }
    else if (val < 67) {
      document.images[1].src = "assets/icons/volume-level-2.svg";
    }
    else {
      document.images[1].src = "assets/icons/volume-level-3.svg";
    }
  });
}