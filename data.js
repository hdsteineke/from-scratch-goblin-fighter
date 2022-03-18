export function randomNames() {
    let names = ['Beezlebub', 'Giblit', 'Ralph', 'Rufus', 'Wayne', 'Hanky', 'Stan', 'Flupe', 'Fabian', 'Jimbo'];
    return names[Math.floor(Math.random() * names.length)];
}