console.log('JS Loaded Succesfully!');

let sum = 0;
let numbersInput = [];
let errorNan = false; // Boolean variable to track errors

//For Cycle for askign numebers
for (let i = 1; i <= 10; i++) {
    const numberInput = parseInt(prompt(`${i} Inserisci un numero a scelta!`));

    if (isNaN(numberInput)) {
        console.log(`Errore di scrittura alla finestra numero ${i}`);
        errorNan = true; // Set the error flag to true
      } else {
        sum += Number(numberInput);
        numbersInput.push(Number(numberInput));
      }
    }    

// Output If Cycle
if (numbersInput.length === 10 && !errorNan) {
    console.log(numbersInput);
    console.log(`La somma dei numeri e di = ${sum}!`);
} else {
    console.log('Errore: non ci sono abbastanza numeri per la somma!');
}