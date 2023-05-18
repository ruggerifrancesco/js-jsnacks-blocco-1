console.log('JS Loaded Succesfully!');

let sum = 0;
let numbersInput = [];

for (let i = 1; i <= 10; i++) {
    const numberInput = parseInt(prompt(`${i} Inserisci un numero a scelta!`));

     if (isNaN(numberInput)) {
        console.log(`Errore di scrittura alla finestra numero ${i}`);
        break;
    }

    sum += Number(numberInput); 
    numbersInput.push(Number(numberInput));
}

if (numbersInput.length === 10) {
    console.log(numbersInput);
    console.log(`La somma dei numeri e di = ${sum}!`);
} else {
    console.log('Errore: non ci sono abbastanza numeri per la somma!');
}