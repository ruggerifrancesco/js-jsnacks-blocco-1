console.log('JS Loaded Succesfully!');

let sum = 0;
let numbersInput = [];

for (let i = 1; i <= 10; i++) {
    const numberInput = parseInt(prompt(`${i} Inserisci un numero a scelta!`));

    sum += Number(numberInput); 
    numbersInput.push(Number(numberInput));
}

console.log(numbersInput);
console.log(`Il risulato della somma dei tuoi numeri e = ${sum}!`);