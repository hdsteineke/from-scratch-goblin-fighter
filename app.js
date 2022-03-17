// import functions and grab DOM elements
const spanDefeated = document.querySelector('#defeated-goblins');
const spanHP = document.querySelector('#player-hp');

const goblinInput = document.querySelector('#goblin-input');
const goblinButton = document.querySelector('#spawn-goblin-button');
const goblinForm = document.querySelector('form');
const goblinList = document.querySelector('.goblin-container');

// let state
let defeatedGoblins = 0;
let playerHP = 10;
let goblins = [
    { name: 'Fabian', hp: 3 },
    { name: 'Flupe', hp: 4 },
    { name: 'Jimbo', hp: 2 }
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
