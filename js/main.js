'use strict';

// Generamos el número elegido al cargar la página

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const winnerNumber = getRandomNumber(100);
console.log(`estoy pensando en el número ${winnerNumber}, intenta adivinarlo!`);

// Establecemos las reglas del juego con la función checkNumber y registramos cada intento con countRounds

const numberInput = document.querySelector('#number');
const tryButton = document.querySelector('#button');
const hintBox = document.querySelector('.hint');
const countBox = document.querySelector('.count');
let round = 0;
countBox.innerHTML = round;
const background = document.querySelector('.background');

function checkNumber () {
    const myNumber = parseInt(numberInput.value);
    if (myNumber === winnerNumber) {
        hintBox.innerHTML = 'Has ganado campeona!!!';
        tryButton.classList.add('hidden') // Al ganar el botón desaparece para detener el juego
        background.classList.add('winner'); // Cambiamos el fondo para celebrarlo
    } else if (myNumber < winnerNumber && myNumber > 0) {
        hintBox.innerHTML = 'Demasiado bajo';
    } else if (myNumber > winnerNumber && myNumber < 101) {
        hintBox.innerHTML = 'Demasiado alto';
    } else {
        hintBox.innerHTML = 'El número debe estar entre 1 y 100';
    }
}
function countRounds () {
    round ++;
    countBox.innerHTML = round;
}


function tryButtonHandler (event) {
    event.preventDefault();
    checkNumber();
    countRounds();
}


tryButton.addEventListener('click', tryButtonHandler)