console.log('JS Loaded Succesfully!');

let sum = 0;
let numbersInput = [];

for (let i = 1; i <= 10; i++) {
    const numberInput = parseInt(prompt(`${i} Inserisci un numero a scelta!`));

    sum += Number(numberInput); 
    numbersInput.push(Number(numberInput));
}

if (numbersInput.length === 10) {
    console.log(numbersInput);
    console.log(`The result of the sum of your numbers is ${sum}!`);
} else {
    console.log('Error: Insufficient inputs');
}