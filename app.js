// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
import {randomNames } from './data.js';

const spanDefeated = document.querySelector('#defeated-goblins');
const spanHP = document.querySelector('#player-hp');

const goblinInput = document.querySelector('#goblin-input');
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
        name: data.get('goblin-name') || randomNames(),
        hp: Math.ceil(Math.random() * 4),
    };

    goblins.push(newGoblin);


    displayGoblins();

    goblinInput.value = '';

});


function displayGoblins() {
    goblinList.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinList.append(goblinEl);

        goblinEl.addEventListener('click', () => {
            if (goblin.hp <= 0) {
                alert('Settle down.');
                return;
            }

            if (goblin.hp > 0 && Math.random() > .33) {
                alert(`You hit ${goblin.name}!`);
                goblin.hp--;
                //some way to randomize goblinHit, playerHit, and alerts for each
            } else {
                alert(`You missed...`);
            }
            
            if (playerHP > 0 && goblin.hp > 0 && Math.random() > .5) {
                alert(`${goblin.name} strikes back!`);
                playerHP--;
            } else if (goblin.hp > 0) {
                alert(`${goblin.name} strikes back! But they missed...`);
            }
            
            if (goblin.hp === 0) {
                defeatedGoblins++;
            }

            if (playerHP === 0) {
                alert('')
            }
            
            displayGoblins();
            displayStats();
        });

    }
}

displayGoblins();

function displayStats() {
    spanDefeated.textContent = defeatedGoblins;
    spanHP.textContent = playerHP;
}
