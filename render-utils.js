export function renderGoblin(goblin) {
    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    let goblinEmoji = '';

    if (goblin.hp >= 4) {
        goblinEmoji = '👹';
    } else if (goblin.hp === 0) {
        goblinEmoji = '💀';
    }

    nameEl.textContent = goblin.name;
    hpEl.textContent = `${goblinEmoji} ${goblin.hp}`;

    goblinEl.append(nameEl, hpEl);

    return goblinEl;

}