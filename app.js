// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

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

goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(goblinForm);

    const newGoblin = {
        name: data.get('goblin-name'),
        hp: Math.ceil(Math.random() * 4),
    };

    goblins.push(newGoblin);


    displayGoblins();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

});


function displayGoblins() {
    goblinList.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinList.append(goblinEl);

        goblinEl.addEventListener('click', () => {
            if (goblin.hp === 0) {
                alert('Settle down.');
            } else if (goblin.hp > 0 && playerHP > 0) {
                alert(`You hit ${goblin.name}!`);
                goblin.hp--;
                //some way to randomize goblinHit, playerHit, and alerts for each
            }
            displayGoblins();
            //****function to display playerHP */
        });

    }
}

displayGoblins();