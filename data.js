export function randomNames() {
    let names = ['Beezlebub', 'Giblit', 'Rufus', 'Jora', 'Stan', 'Amorak', 'Xenox'];
    return names[Math.floor(Math.random() * names.length)];
}