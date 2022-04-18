//2a.

let totalSold = 0;

for (let i of inventory) {
    totalSold = totalSold + i.sold;
}

console.log(totalSold);
//2b.

document.getElementById("totalSold").style.color = "green"
document.getElementById("totalSold").innerHTML = 'Total sold is ' + totalSold + '.';

//2c.

let totalBought = 0;

for (let i of inventory) {
    totalBought = totalBought + i.originalStock;
}

console.log(totalBought);

document.getElementById("totalBought").style.color = "blue"
document.getElementById("totalBought").innerHTML = 'Total bought is ' + totalBought + '.';

let toBeSold = totalBought - totalSold;

document.getElementById("toBeSold").style.color = "red"
document.getElementById("toBeSold").innerHTML = 'To be sold is ' + toBeSold + '.';