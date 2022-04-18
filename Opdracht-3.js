//3a.

document.getElementById("brandList").style.color = "purple"
document.getElementById("brandList").innerHTML = 'Tv Brand list is : ' + inventory.map(a => a.brand) + '.';

//3b.

function brandList(array){
    let newArray = array.map(a => a.brand);
    return newArray;
}

document.getElementById("brandList2").style.color = "yellow"
document.getElementById("brandList2").innerHTML = 'Tv Brand list 2 is : ' + brandList(inventory) + '.';