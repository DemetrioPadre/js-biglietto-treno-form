//recupero la costante di risultato
// const resultElement = document.getElementById('main-title');
const kmdafare = document.getElementById('kmdafare');


//chiedere all utente i km che deve percorrere
const kmNeeded = prompt('Quanti km devi percorrere?');

//chiedere all utente quanti anni ha
const age = prompt('Quanti anni hai?');

//prezzo parziale del biglietto
const partialTicket = kmNeeded * 0.21;



//tipologia di sconto
let sconto20 = partialTicket * 0.2;
let sconto40 = partialTicket * 0.4;

//variabile del biglietto che parte da 0
let ticket = 0;

//calcolatore di sconto in base all età dell utente
if (age < 18) {
    ticket = partialTicket - sconto20;

} else if (age >= 65) {
    ticket = partialTicket - sconto40;
} else {
    ticket = partialTicket;

}

//stampiamo in html
resultElement.innerHTML = 'Il tuo biglietto è ' + ticket.toFixed(2) + '€';