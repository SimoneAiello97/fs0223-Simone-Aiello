/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
{
function area(l1, l2) {
    return l1 * l2;
}
console.log(area(5,2));
}
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
{
function crazySum(a, b) {
    if(a === b){
        return (a+b)*3
    }
    return a + b;
}
console.log(crazySum(4,3));
}
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
{
function crazyDiff(num){
    if(num > 19){
        return ((num - 19)*3)
    }
    return Math.abs(num - 19);
    
}
console.log(crazyDiff(5));

}
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
{
function boundary(num){
    if(num > 20 && num <= 100 || num === 400){
        return true;
    }
    return false 
    
}
console.log(boundary(25));
}
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
{
function epify(str){
    if(str.startsWith("EPICODE")){
        return str}
        let b = "EPICODE ";
        return b += str;
    }
    console.log(epify('EPICODE è bello'));
}
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num){
    if(num % 3 === 0 || num % 7 === 0){
        return `${num} è un multiplo di 3 o di 7`;
    }
    return `${num} non è un multiplo di 3 o di 7`;
}
console.log(check3and7(16));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("EPICODE"));

//[E,P,I,C,O,N,D,E]
//[E,D,N,O,C,I,P,E]
//[E+D+N+O+C+I+P+E]

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str){
    let b = str.split(" ")
    for(let i = 0; i < b.length; i++){
       b[i] = b[i][0].toUpperCase() + b[i].slice(1)
        
    }
    return b.join(" ")
    
}
    console.log(upperFirst("javascript mi fa cagare"));



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str){
    let a = (str.length)
    return str.slice(1,a-1)
}
console.log(cutString('supercalifragili'))


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n6){
    let array1 = [];
    for (let k = 0; k < n6; k++) {
        array1.push(Math.floor(Math.random() * 11));
    } return array1;
}
console.log(giveMeRandom(4));

