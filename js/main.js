// //recupero la costante di risultato
// // const resultElement = document.getElementById('main-title');
// const userKm = document.getElementById('userKm');


// //chiedere all utente i km che deve percorrere
// const kmNeeded = prompt('Quanti km devi percorrere?');

// //chiedere all utente quanti anni ha
// const age = prompt('Quanti anni hai?');


//input 
const userNameInput = document.getElementById('userName');
const userKmInput = document.getElementById('userKm');
const userAgeInput = document.getElementById('userAge');
const printButton = document.getElementById('print-button');
const annullaInput = document.getElementById('annulla');
const finalTicket = document.getElementById('finalticket');
const userOffer = document.getElementById('offerta');



//variabile del biglietto che parte da 0
let ticket = 0;





printButton.addEventListener('click', function () {
    document.getElementById('opacity').classList.add('d-none');
    document.getElementById('barProgress').classList.add('d-none');
    document.getElementById('barComplete').classList.remove('d-none');

    const userAgeselection = userAgeInput.value;
    // quanti km devi fare
    const userKm = parseInt(userKmInput.value);
    //prezzo parziale del biglietto
    const partialTicket = userKm * 0.21;
    console.log(partialTicket);



    //tipologia di sconto
    let sconto20 = partialTicket * 0.2;
    let sconto40 = partialTicket * 0.4;
    if (userAgeselection == 'minori') {
        ticket = partialTicket - sconto20;
        userOffer.innerText = 'biglietto con sconto del  20%';


    } else if (userAgeselection == 'senior') {
        ticket = partialTicket - sconto40;
        userOffer.innerText = 'biglietto con sconto del 40%';

    } else {
        ticket = partialTicket;
        userOffer.innerText = 'biglietto base';
    }
    userGenerate.innerText = userNameInput.value;

    //stampiamo in html
    // finalTicket.innerText = 'Il tuo biglietto è ' + ticket.toFixed(2) + '€' + 'ricordati di obbliterarlo prima di salire sul treno';
    document.getElementById('finalTicket').innerText = ticket.toFixed(2) + '€';


    //carrozze random
    document.getElementById('carrozza').innerText = Math.floor(Math.random() * 10 + 1);
    //codice random sedile
    document.getElementById('codiceCp').innerText = Math.floor(Math.random() * 999 + 1);

    //add and remove text over the ticket
    document.getElementById('prepair').classList.add('d-none');

    //add ticket that was d-none
    document.getElementById('ticketContainer').classList.remove('d-none');
});
