var i;
var inputNumber;
var somma = 0;


// imposto un ciclo for che chiede 5 volte di inserire un numero

for (i = 5; i > 0; i--) {
    inputNumber = parseFloat(prompt('inserisci un numero : '));
    somma = ( somma + inputNumber );
}

document.getElementById('sum').innerHTML = somma;
