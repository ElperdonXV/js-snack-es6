//Scrivere una funzione(e lanciarla) che accetti tre argomenti, un array e due numeri(a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//Usiamo i nuovi metodi degli array foreach o filter.
const num = [32, 33, 16, 40,57,62,55,23,33,78,96,5];
const anum = 2;
const bnum = 7;

let arrayTwo = arrayNumbers(num, anum, bnum);
console.log(arrayTwo);

function arrayNumbers (array, a, b){
    let newArray = [];
    array.forEach((number, i) => {
        if (i > a && i < b) {
            newArray.push(number);
        }
    });
    return newArray;
}