// 1a.

// Log in console...
// een map door inventory.
// Declare aan functie met parameter 'a'.
// Return voor a de value van key 'name'.

console.log(inventory.map(a => a.name));

//1b.

// Log in console...
// een filter van de inventory op true.
// Declare een functie met parameter 'a'
// return true voor elke 'a' waarvan key 'sold' is gelijk aan key 'originalStock'

console.log(inventory.filter(a => a.sold === a.originalStock));

//1c.

// Log in console...
// een filter van de inventory op true.
// Declare een functie met parameter 'a'
// return de waarde van elke a.options.ambiLight.
console.log(inventory.filter(a => a.options.ambiLight));