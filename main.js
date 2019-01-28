// Créer un tableau pour contenir les lettres du mot : 'B','O','N','J','O','U','R',

// Créer un autre tableau pour mettre les lettres devinées : '','','','','','','_'

// Écrivez une fonction appelée "guessLetter" cette fonction va

//     Itérer à travers les lettres
//     Voir si la lettre deviné se trouve dans le mot
//     Si oui changer le tableau des lettres deviné pour ajouter la nouvelle lettre
//     Afficher dans la console les lettre devinés
//     Le jeu doit savoir quand la partie est finie et féliciter le joueur

//-----------------------------------------------------------------------------------------------------------------//

let arrayWordToGuess = ['B','O','N','J','O','U','R'];
let arrayGuessedLetters =['-','-','-','-','-','-','-']; //Always fill this array with "-" to match the lenght needed//


let guessLetter = currentLetter => {
    for( i = 0 ; i < arrayWordToGuess.length ; i++ ){
        if( currentLetter.toUpperCase() == arrayWordToGuess[i] ){
            arrayGuessedLetters[i] = currentLetter.toUpperCase();
            document.getElementById("guessedLetter").value = "";
        }
    }
}

let TestLetter = () => {
    let fullWordIsCorrect = true;

    document.getElementById("correctLetters").innerHTML = ""
    guessLetter(document.getElementById("guessedLetter").value);

    for(i=0;i<arrayGuessedLetters.length;i++){
if(arrayGuessedLetters[i]== "-"){
            fullWordIsCorrect = false;
        }
        console.log(arrayGuessedLetters[i]);
        document.getElementById("correctLetters").innerHTML = document.getElementById("correctLetters").innerHTML + arrayGuessedLetters[i];
    }
    if (fullWordIsCorrect){
        document.getElementById("correctLetters").innerHTML = document.getElementById("correctLetters").innerHTML + "</br>" + "Congratulations! You found the secret word!";
    }
    return false;
}
