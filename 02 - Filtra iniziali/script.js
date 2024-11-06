/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 * Description
 * @param {array} names
 * @param {string} letter
 * @returns {array}
 */
const nameWith = (names,letter) =>{

    const parole = [];
    for(let i=0; i<names.length; i++){

        const currItem = names[i];

        if(currItem[0] === letter){

            parole.push(currItem);
        }
        
    }

    return parole;
}


// Invoca la funzione qui e stampa il risultato in console
const letter = prompt("inserisci una lettera").toUpperCase();

const nomi = nameWith(names,letter);

console.log(nomi);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]