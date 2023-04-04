/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatypes di JavaScript sono i seguenti: string, number, boolean, null, undefined, array e object.

- String: una stringa è una sequenza di caratteri. Può contenere anche un solo carattere o dei numeri, purché questi ultimi siano comunque contenuti all'interno di virgolette, apici o backtik. Esempi: "stringa 1", 'stringa 2', `stringa 3`.

- Number: si tratta di un semplice dato numerico. Può essere un numero intero o un numero decimale (i decimali vanno scritti con . e non con ,). Un dato numerico va scritto senza apici né virgolette, altrimenti JavaScript lo interpreterà automaticamente come una stringa.

- Boolean: un dato booleano è un tipo di dato che ammette solo due valori: true e false. È il tipo di dato che mi viene restituito quando voglio verificare delle condizioni.

- Array: un array è una serie di valori contenuti all'interno di [] e separati da una virgola.

- Object: è un insieme di proprietà e valori annidati all'interno di un blocco {}. Tutte le coppie proprietà/valore di un oggetto vanno separate da una virgola e possono essere di vari datatypes. Gli oggetti possono contenere anche delle funzioni: le funzioni contenute all'interno di un oggetto si chiamano metodi.

Poi questi datatypes possono essere:

- Undefined: è una proprietà che indica che ad  una variabile non è stato assegnato un valore oppure che essa non è stata definita.

- Null: il valore null indica l'assenza intenzionale di un oggetto. Indica una mancanza di identificazione.

*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Simone";


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

function somma() {
  let x = 12;
  let y = 20;
  let z = x + y
  console.log(z);
}

somma();

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


  let x = 12


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

 name = "Aiello";
 /*
 const name = "Salzano"
 Uncaught SyntaxError: Identifier 'name' has already been declared (at D2.js:60:7)
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


  console.log(4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


let name1 = 'john'
let name2 = 'John'

console.log(name1 == name2)
console.log(!(name1 == name2))
let result1 = name1.toLowerCase ()
let result2 = name2.toLowerCase ()
console.log(result1 == result2)