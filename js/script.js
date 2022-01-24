console.log('js ok')

// Descrizione:
// Generare 5 numeri casuali e mostrarli in un alert all'utente.
// Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
// Bonus:
// controllare che i numeri casuali siano diversi tra loro
// controllare che l'utente non inserisca 2 volte lo stesso numero

// funzione per generare numeri random
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// dichiaro 5 numeri casuali che l'utente dovrà memorizzare e poi inserire
let number1 = getRandomNumber(1, 100);
let number2 = getRandomNumber(1, 100);
let number3 = getRandomNumber(1, 100);
let number4 = getRandomNumber(1, 100);
let number5 = getRandomNumber(1, 100);


// dichiaro un array dove comprendo i 5 numeri che l'utente dovrà memorizzare e poi reinserire
const listNumber = [number1, number2, number3, number4, number5]
console.log(listNumber)


// inserisco i numeri in un alert 

alert(`questi sono i numeri che dovrai memorizzare: 

${listNumber}

Ricorda: Quando premerai ok , dopo 30 secondi , dovrai inserire uno ad uno i numeri che avrai memorizzato
allo scopo di indovinarne quanti più possibile`)