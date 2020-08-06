// Chiedo il nome dell'utente

var nome = prompt("Inserisci il tuo nome");

// Chiedo il sesso dell'utente

var sesso = prompt("inserisci il tuo sesso");

// Prendo l'id nell'HTML

var stampa = document.getElementById('stamp')


// Verifico che i dati inseriti siano validi e stampo

if (sesso == "maschio") {
  document.getElementById("stamp"). innerHTML = nome;
  stampa.classList.add("blueColor");
} else if (sesso == "femmina") {
  document.getElementById("stamp"). innerHTML = nome;
  stampa.classList.add("pinkColor");
} else {
  alert("Non hai inserito correttamente il sesso. Riprova!");
}
