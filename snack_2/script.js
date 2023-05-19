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
    // console.log(birthdayList);

// Variable for checking input value
const nameBirthdayChecker = document.getElementById('nameBirthdayChecker');
const nameCheckerBtn = document.getElementById('nameCheckerBtn');

nameCheckerBtn.addEventListener( 'click',
    function() {
        let isNameFound = false;

        for (let i = 0; i < birthdayList.length; i++) {
            if (birthdayList[i] === nameBirthdayChecker.value) {
                isNameFound = true;
            }
        }

        // Output Checker
        if (isNameFound) {
            console.log(`Complimenti, sei tra gli invitati al compleanno del grande Gatsby!`);
        } else {
            console.log(`Mi dispiace, ma non sei tra gli invitati al compleanno del grande Gatsby!`);
        }

    }
)