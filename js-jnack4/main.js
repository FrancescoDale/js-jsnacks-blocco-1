var i;
var arrOdds = [];
var inputNumber;

for (i = 6; i > 0; i--) {
    inputNumber = parseFloat(prompt('inserisci un numero : '));
    if ((inputNumber % 2) != 0 ) {
        arrOdds.push(inputNumber);
    }
}


document.getElementById('odds').innerHTML = arrOdds;
