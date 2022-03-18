export function renderGoblin(goblin) {
    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');
    const hpEl = document.createElement('p');


    //goblinEl.classList.add('.monster');
    
    //let goblinEmoji = '';

    // if (goblin.hp >= 1) {
    //     goblinEmoji = '👹';
    // } else if (goblin.hp === 0) {
    //     goblinEmoji = '💀';
    // }

    nameEl.textContent = goblin.name;
    imgEl.src = './assets/monster.png';
    hpEl.textContent = `${goblin.hp}`;
    
    if (goblin.hp === 0) {
        imgEl.src = './assets/dead.png';
        imgEl.classList.add('.dead');
    }

    goblinEl.append(nameEl, imgEl, hpEl);

    return goblinEl;

}