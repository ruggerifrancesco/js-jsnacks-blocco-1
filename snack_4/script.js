console.log('JS Loaded Succesfully!');

//Ask user a 4 digits number
const userInput = prompt("Inserisci un numero a 4 cifre");

// Check if the input is exactly 4 digits
if (userInput.length !== 4) {
    console.log("Errore, input non valido. Serve perforza un numero a 4 cifre!");
  } else {
    // Calculate the sum of individual digits
    let sum = 0;
    for (let i = 0; i < userInput.length; i++) {
      sum += parseInt(userInput[i]);
    }
  
    // Show output of the sum
    console.log(`La somma dei 4 numeri e di, ${sum}`);
  }