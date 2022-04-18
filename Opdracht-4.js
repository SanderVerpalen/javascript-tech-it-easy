function tvToString(o) {
    let string = o.brand + " - " + o.name + '<br>' + o.price + '<br>' + o.availableSizes.map(s => s + " inch (" + Math.round(s * 2.54) + "cm) | ") + '<br>' + '<br>';
    return string;
}

document.getElementById("singelTV").style.color = "black"
document.getElementById("singelTV").innerHTML = inventory.map(o => tvToString(o));