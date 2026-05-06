// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // 1. Inizializziamo la libreria dei coriandoli (fornita dal lab)
  const jsConfetti = new JSConfetti();

  // 2. Selezioniamo tutti gli elementi dal DOM (usando il tuo HTML)
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img'); // Prende la prima immagine dentro <section id="expose">
  const audioElement = document.querySelector('audio'); // Prende il tag <audio>
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img'); // L'immagine dentro i controlli del volume
  const playButton = document.querySelector('button'); // Il bottone "Play Sound"

  // 3. Gestiamo il cambio di corno nel menu a tendina
  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    
    // Aggiorniamo i percorsi dell'immagine e dell'audio
    // (I file si chiamano esattamente come i value: air-horn.svg, car-horn.mp3, ecc.)
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  // 4. Gestiamo il movimento dello slider del volume
  volumeSlider.addEventListener('input', function() {
    // Convertiamo il valore in un numero intero (da 0 a 100)
    const volumeValue = parseInt(volumeSlider.value);
    
    // Cambiamo il volume effettivo dell'audio (deve essere tra 0.0 e 1.0)
    audioElement.volume = volumeValue / 100;

    // Cambiamo l'icona del volume in base alle istruzioni del lab
    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      // Per valori da 67 a 100
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // 5. Gestiamo il click sul bottone "Play Sound"
  playButton.addEventListener('click', function() {
    // Facciamo partire il suono!
    audioElement.play();

    // Se il corno selezionato è quello delle feste, spariamo i coriandoli!
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
