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
// let number1 = getRandomNumber(1, 100);
// let number2 = getRandomNumber(1, 100);
// let number3 = getRandomNumber(1, 100);
// let number4 = getRandomNumber(1, 100);
// let number5 = getRandomNumber(1, 100);


// // dichiaro un array dove comprendo i 5 numeri che l'utente dovrà memorizzare e poi reinserire
// const listNumbers = [number1, number2, number3, number4, number5]
// console.log(listNumbers)



const getRandomNumbers = (listNumbers) => {
    while (listNumbers.length < 5) {
        const number = getRandomNumber(1, 100);
        if (!listNumbers.includes(number)) {
            listNumbers.push(number);
        }
    }
};




// funzione per chiedere i numeri 5 volte
const askNumbers = (userNumbers, listNumbers, rightNumbers) => {
    let i = 0;
    while (userNumbers.length < listNumbers.length) {
        const number = parseInt(prompt(`Inserisci il ${++i} numero: `));
        if (!userNumbers.includes(number)) {
            if (listNumbers.includes(number)) {
                userNumbers.push(number);
                rightNumbers.push(number);
            } else {
                userNumbers.push(number);
                // potrei inserire un array con i numeri sbagliati per poi fare il display
            }
        }
    }
};

// elementi utili
//dichiaro una funzione per effettuare un deelay sul chiedere all'utente i 5 numeri
// Creo un array dove conterò i 5 numeri inseriti dall'utente tramite prompt
const userNumbers = [];

// creo un array per i numeri giusti
const rightNumbers = [];
// // creo un array per i numeri sbagliati
// const wrongNumbers = [];

// sostituisco i 5 numeri dichiarati a mano con una funzione che genera numeri casuali , applicando un controllo per vedere se il numero è ripetuto
// dichiaro l'array vuoto dove inserire i numeri 
const listNumbers = [];



// Esecuzione 
// richiamo la funzione per generare 5 numeri nell'array
getRandomNumbers(listNumbers);

// eseguo la funzione con deelay
setTimeout(function() {
    askNumbers(userNumbers, listNumbers, rightNumbers);

    // vedo se ci sono numeri corretti 
    if (rightNumbers.length == 0) {
        const message = 'Non hai indovinato nessun numero'
        rightNumbers.push(message)
        console.log(
            `${message} 
            I numeri erano:                     ${listNumbers}
            I numeri che hai inserito sono      ${userNumbers}`)
    } else {
        console.log(
            `Hai indovinato ${rightNumbers.length} numeri, e sono i seguenti: ${rightNumbers} 
                I numeri erano:                    ${listNumbers}
                I numeri che hai inserito sono     ${userNumbers}`
        );
    }
}, 300);


// inserisco i numeri in un alert  riposizionato nel codice altrimenti non letto list number
alert(`questi sono i numeri che dovrai memorizzare: 
        
        ${listNumbers}
        
        Ricorda: Quando premerai ok , dopo 30 secondi , dovrai inserire uno ad uno i numeri che avrai memorizzato
        allo scopo di indovinarne quanti più possibile`);