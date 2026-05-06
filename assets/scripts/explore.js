// explore.js
window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
let voices = [];

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImage = document.querySelector('img');

  // Funzione per popolare il menu a tendina con le voci
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Popola le voci appena sono pronte
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Azione quando si preme il bottone "Press to Talk"
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Evita che la pagina si ricarichi

    const text = textInput.value;
    const utterThis = new SpeechSynthesisUtterance(text);

    // Trova la voce selezionata
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    // Cambia l'immagine a bocca aperta quando INIZIA a parlare
    // NOTA: controlla il nome esatto della tua immagine "a bocca aperta" nella cartella assets/images
    // Qui assumo si chiami "smiling-open.png", cambialo se necessario!
    utterThis.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png'; 
    });

    // Rimetti l'immagine normale quando FINISCE di parlare
    utterThis.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    // Avvia la riproduzione vocale
    synth.speak(utterThis);
  });
}