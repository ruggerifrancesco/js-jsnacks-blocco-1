console.log('JS Loaded Succesfully!');

// List of Persons Allowed to the party
const birthdayList = [
    'Bartolomeo Barillaro',
    'Romana Comolli',
    'Lilla Morosini',
    'Ippazio Casaleggio',
    'Valeria Filzi',
    'Lidia Gagliardi',
    'Giulio Gangemi',
    'Michela Rossi',
    'Bruno Boito',
    'Rosaria Solari',
    'Pasquale Crespi',
    'Claudia Sagredo-Pedroni',
    'Gianfrancesco Mengolo',
    'Telemaco Vivaldi',
    'Gabriella Polizzi',
    'Bianca Bocelli',
    'Adriana Ceci',
    'Patrizio Asprucci-Respighi',
    'Loredana Turchetta',
    'Raffaellino Marconi',
];

//Show List - [DEV ONLY TOUCH]
    console.log(birthdayList);

const nameCheckerBtn = document.getElementById('nameCheckerBtn');

nameCheckerBtn.addEventListener( 
    function() {
        // Variable for checking input value
        const nameBirthdayChecker = document.getElementById('nameBirthdayChecker').value;
        let nameFound = false;

        for (let i = 0; i < 19; i++) {
            if (birthdayList[i] === nameBirthdayChecker.value) {
                nameFound = true;
            }
        }

        // Output Checker
    }
)