// //recupero la costante di risultato
// // const resultElement = document.getElementById('main-title');
// const userKm = document.getElementById('userKm');


// //chiedere all utente i km che deve percorrere
// const kmNeeded = prompt('Quanti km devi percorrere?');

// //chiedere all utente quanti anni ha
// const age = prompt('Quanti anni hai?');


//input 

const userKmInput = document.getElementById('userKm');
const userAgeInput = document.getElementById('userAge');
const printButton = document.getElementById('print-button');
const annullaInput = document.getElementById('annulla');
const finalTicket = document.getElementById('finalticket');



//variabile del biglietto che parte da 0
let ticket = 0;





printButton.addEventListener('click', function () {
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



    } else if (userAgeselection == 'senior') {
        ticket = partialTicket - sconto40;

    } else {
        ticket = partialTicket;

    }//stampiamo in html
    finalTicket.innerText = 'Il tuo biglietto è ' + ticket.toFixed(2) + '€' + 'ricordati di obbliterarlo prima di salire sul treno';
})



