console.log('JS Loaded Succesfully!');

let sum = 0;

for (let i = 0; i < 9; i++) {
    const numberInput = parseInt(prompt("Inserisci un numero a scelta!"));
    sum += Number(numberInput); 
}

console.log(
    `Il risulato della somma dei tuoi numeri e = ${sum}!`
    );