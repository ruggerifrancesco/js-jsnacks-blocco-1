console.log('JS Loaded Succesfully!');

// Numer List Array
const oddNumberList = [];

for (let i = 1; i <= 6; i++) {
    const numberInput = parseInt(prompt(`${i} Inserisci un numero a scelta!`));

    if (numberInput % 1 === 0 && numberInput % 2 !== 0) {
        oddNumberList.push(numberInput) ; 
    }
}

console.log(oddNumberList);