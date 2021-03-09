// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, GAME OVER, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//
// Bonus (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50


// Campo Minato
// creo array vuoti per i numeri
var bombe = [];
var safe = [];

// creo funzione per genereare numeri random (con verifica parametri)
function randomNumberPc (min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non hai inserito un numero!");
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

// creo funzione per ottenere 16 numeri random, non duplicati
function createBombs (array, max) {
  while (array.length < 16) {
    var numero = randomNumberPc(1, max);
    // verifico che lo stesso numero non sia inserito 2 volte
    if (!array.includes(numero)) {
      array.push(numero);
    }
  }
}

// creo variabile numero massimo (100)
var maxNum = '100';

// creo funzione del game
function game (bombe, safe, maxNum) {
  // fintanto che i numeri safe sono (100 - 16)
  while (safe.length <= maxNum - 16) {
    // chiedo all'utente di inserire un numero
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100 e fai attenzione alle bombe!"));
      // poi verifico che: sia un numero e sia compreso tra 1 e 100 e che non sia già stato inserito
      if(!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 100 && !safe.includes(numeroUtente)) {
        // se il numero non è incluso in bombe
        if (!bombe.includes(numeroUtente)) {
        // lo pusho in safe
        safe.push(numeroUtente);
        // altrimenti
        } else {
        // ritorno il numero dei numeri in safe
        return safe.length;
        }
      }
  } return safe.length;
}

// stampo i numeri "bombe" per una verifica
console.log("Le bombe sono le seguenti: ");
console.log(bombe);

// utilizzo le funzioni per iniziare il game
createBombs(bombe, maxNum);
var risultato = game(bombe, safe, maxNum);

// stampo il risultato e il punteggio ottenuto
console.log("GAME OVER");
console.log("Il tuo punteggio: " + risultato);
