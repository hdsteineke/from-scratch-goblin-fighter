// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
import { randomNames } from './data.js';

const spanDefeated = document.querySelector('#defeated-goblins');
const spanHP = document.querySelector('#player-hp');

const goblinInput = document.querySelector('#goblin-input');
const goblinForm = document.querySelector('form');
const goblinList = document.querySelector('.goblin-container');

// let state
let defeatedGoblins = 0;
let playerHP = 10;
let goblins = [
    { name: 'Fabian', hp: 3, strength: 5 },
    { name: 'Flupe', hp: 3, strength: 2 },
    { name: 'Jimbo', hp: 3, strength: 4 }
];




goblinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = new FormData(goblinForm);

    const newGoblin = {
        name: data.get('goblin-name') || randomNames(),
        hp: Math.ceil(Math.random() * 4),
        strength: Math.ceil(Math.random() * 5)
    };

    goblins.unshift(newGoblin);


    displayGoblins();
    displayStats();

    goblinInput.value = '';

});


function displayGoblins() {
    goblinList.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        
        if (playerHP > 0) {
            
            goblinEl.addEventListener('click', () => {

                if (playerHP <= 0) {
                    alert('GAME OVER');
                    return;
                }
                if (goblin.hp <= 0) {
                    alert('Settle down.');
                    return;
                }

                if (goblin.hp > 0 && Math.random() > .01) {
                    alert(`You hit ${goblin.name}!`);
                    goblin.hp--;
                //some way to randomize goblinHit, playerHit, and alerts for each
                } else {
                    alert(`You missed...`);
                }
            
                if (goblin.hp > 0 && Math.random() > .99) {
                    alert(`${goblin.name} strikes back!`);
                    playerHP -= goblin.strength;

                } else if (goblin.hp > 0) {
                    alert(`${goblin.name} strikes back! But they missed...`);
                }
            
                if (goblin.hp === 0) {
                    defeatedGoblins++;
                    

                } else if (playerHP <= 0) {
                    playerHP = 0;
                    alert('GAME OVER');
                }
            
                displayGoblins();
                displayStats();

                
            });
            
        }
        if (playerHP === 0) {
            goblinForm.classList.add('hidden');
    
        }
        goblinList.append(goblinEl);
    }
}

displayGoblins();

function displayStats() {
    spanDefeated.textContent = defeatedGoblins;
    spanHP.textContent = playerHP;
}
