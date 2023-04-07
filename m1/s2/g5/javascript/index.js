/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
{
    console.log(pets.sort());
}
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
{
    console.log(pets.reverse());
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
{
    pets.push(pets.shift())
    console.log(pets);
}
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

{
for (let a = 0; a<cars.length; a++){
    cars[a].licensePlate = "AA 000 AA";
    
}
console.log(cars);
}
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
{
    let b = {
        brand: '',
        model: '',
        color: '',
        trims: [],
      }
cars.push(b)
for (let c = 0; c < cars.length; c++)

{ 
let d = cars[c].trims
d.pop()
console.log(d);
}

}


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let e = 0; e < cars.length; e++)
{ 
let f = cars[e].trims
justTrims.push(f[0])

}
console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for( let h = 0 ; h < cars.length; h++){
    let g = cars[h].color
        if(g.startsWith('b')){
            console.log('Fizz')
        } else{
            console.log('Buzz');
        }
    }

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;

while (i < numericArray.length && numericArray[i] != 32) {
  console.log(numericArray[i]);
  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

let y = []

for (x = 0; x < charactersArray.length; x++){
    
    switch (charactersArray[x])
    {
    case "a":

      y.push(1);

      break;

    case "b":

      y.push(2);

      break;

    case "c":

      y.push(3);

      break;

    case "d":

      y.push(4);

      break;

    case "e":

      y.push(5);

      break;

    case "f":

      y.push(6);

      break;

    case "g":

      y.push(7);

      break;

    case "h":

      y.push(8);

      break;

    case "i":

      y.push(9);

      break;

    case "j":

      y.push(10);

      break;

    case "k":

      y.push(11);

      break;

    case "l":

      y.push(12);

      break;

    case "m":

      y.push(13);

      break;

    case "n":

      y.push(14);

      break;

    case "o":

      y.push(15);

      break;

    case "p":

      y.push(16);

      break;

    case "q":

      y.push(17);

      break;

    case "r":

      y.push(18);

      break;

    case "s":

      y.push(19);

      break;

    case "t":

      y.push(20);

      break;

    case "u":

      y.push(21);

      break;

    case "v":

      y.push(22);

      break;

    case "w":

      y.push(23);

      break;

    case "x":

      y.push(24);

      break;

    case "y":

      y.push(25);

      break;

    case "z":

      y.push(26);

      break;

    default:

      y.push(0);
  }

}
console.log(y);

