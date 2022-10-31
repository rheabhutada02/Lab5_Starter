// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector('select');
  const button = document.getElementsByTagName('button')[0];
  const image = document.images[0];

  let voices = [];

  function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();

    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  button.addEventListener('click', (event) => {
    let inputTxt = document.getElementById('text-to-speak').value;
    let utterThis = new SpeechSynthesisUtterance(inputTxt);
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    speechSynthesis.speak(utterThis);
    image.src = "assets/images/smiling-open.png";
    utterThis.onend = (event) => {
      image.src = "assets/images/smiling.png"
    }
  });
}