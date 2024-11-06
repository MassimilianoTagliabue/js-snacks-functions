/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const numVowels = (parola) => {

let counter = 0;

    for(let i = 0; i< parola.length; i++){

        const currLetter = parola[i];

        if( currLetter === "a" || currLetter === "e" || currLetter === "i" || currLetter === "o" || currLetter === "u"){
            counter++;
        }

    }

    return counter;
}


// Invoca la funzione qui e stampa il risultato in console
const result = numVowels(word);

console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)