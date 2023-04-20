/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: 'Simone', 
  surname: 'Aiello', 
  age: '25'
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ['JavaScript', 'PHP'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Angular')
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice(){
    return Math.floor(Math.random() * 6 + 1);
  }
  console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

let whoIsBigger = (a, b) => {return a > b ? a : b};
console.log(whoIsBigger(8, 9));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str){
  return str.split(' ')
}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, bool){
  if(bool){
    return str.slice(1);
  } else {
    return str.slice(0,-1);
  }
}
console.log(deleteOne("I love coding", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str){
  return str.replace(/[0-9]/g, '');
}

console.log(onlyLetters('I have 4 dogs'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str){
  let regexp = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
  let validMail = regexp.test(str);
  return validMail;
}
console.log(isThisAnEmail('ciao@gmail.com'));


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt(){
  let now = new Date();
  let weekDay = now.getDay();
  let giorni = [
    'domenica',
    'lunedì',
    'martedì',
    'mercoledì',
    'giovedì',
    'venerdì',
    'sabato'
  ]
return giorni[weekDay]
}
console.log(whatDayIsIt())


/* ESERCIZIO 8
Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
    sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(num){
  //inizialmente avevo creato un oggetto ma successivamente ho usato un costruttore
  function Oggetto(){           
    this.sum = null;
    this.values = []
  };
  let oggetto = new Oggetto();
  for (let i= 0; i < num; i++){
    let dadi = dice();
    oggetto.values.push(dadi)
  }
oggetto.sum = oggetto.values.reduce((a, b) => a + b) 
// o sum += dadi all'interno del ciclo for loop
return oggetto
}
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(date){
  let diff = new Date().getTime() - new Date(date).getTime();
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
}
console.log(howManyDays('1997-12-27'));// la mia data di nascita

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
  */
let now = new Date();
let monthDay = now.getMonth() + 1
let data = now.getDate();

let isTodayMyBirthday = (giorno,mese) => {return (data === giorno && monthDay === mese) ? true : false}
console.log(isTodayMyBirthday(27,12));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

  /* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
  */

function deleteProp(obj, stringa){ 
  delete obj[stringa]
  return obj
}
console.log(deleteProp(me,'skills'));

/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

function newestMovie(){return movies.reduce((a, b) =>(a.Year > b.Year)? a : b)}
  console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(){
  return movies.length;
}
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(){
let anni =[]
    for(i=0;i<movies.length;i++)
      {anni.push(movies[i].Year)};
      return anni
}
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(){
  let filmVecchi = [];
movies.map(function (p) {
  if (p.Year < '2000') {
    filmVecchi.push(p);
  }
})
return filmVecchi;
}
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(){
  return movies.reduce(function(a, b) {
    return a + Number(b.Year);
},0)
}
console.log(sumAllTheYears())

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(title) {
  let titoli = []
  movies.forEach((a) => {
    if (a.Title.includes(title)) {
      titoli.push(a.Title)
    }
  });
  return titoli;
};

console.log(searchByTitle('the'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(title){
  function Oggetto() {  
  this.match = []
  this.unmatch = []
  }
  let oggetto = new Oggetto();
  movies.forEach((movie) => {
    if (movie.Title.includes(title)) {
      oggetto.match.push(movie.Title)
    }else{
      oggetto.unmatch.push(movie.Title)
    }
  });
  return oggetto;
}
console.log(searchAndDivide('of'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(num){
  movies.splice(num, 1);
  return movies
}
console.log(removeIndex(4));


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
// le funzioni sono state create, ma non attivate... ho fatto un check creando l'elemento nell'HTML e invocando la funzione

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function elementContainer(){
  let container = document.querySelector('#container');
  }


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function elementTD(){
  let td = document.querySelectorAll('td');
  }
  
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function scrivereSuTD(){
  let allTd = document.querySelectorAll('td')
  for(let i of allTd ){
    let allTD = i.textContent;
    console.log(allTD);
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function addBackground(){
  let allLinks = document.querySelectorAll('a');
  for(let i of allLinks ){
    i.style.backgroundColor = 'red';
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addElementToList(){
  let myList = document.querySelector('#myList');
  let newElement = document.createElement('li');
  newElement.textContent = 'New element';
  myList.appendChild(newElement);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

//così elimino i <li> senza <ul>
function removeLi() {
  let ul = document.getElementById('myList')
  let allLi = ul.querySelectorAll('li');
  allLi.forEach(li => li.remove());
}

//così svuoto l'intero <ul>
function removeElementFromList(){
    document.querySelector('#myList').remove() 
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClass(){
  let allTr = document.querySelectorAll('tr');
  for(let i of allTr ){
     return i.classList.add('test');
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(num){
  let sum = ''
for(let i=0;i<num;i++){
sum += "*"
console.log(sum);
}
}
halfTree(3)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

  *
 ***
*****

*/

function tree(num) {
  for (let i = 0; i < num; i++) {
    let ast = '';
    let space = ((num-1) - i);
    if (i == 0) {
      ast += ''.repeat(space) ;
    }
    ast += ' '.repeat(space);
    let zero = 2 * i + 1;
    ast += '*'.repeat(zero);
    console.log(ast);
  }
}

tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


  /* si è stabilito che 1 non è un numero primo se no inserivo al primo if n<1 e al secondo aggiungevo n!=0
  https://www.youmath.it/lezioni/algebra-elementare/lezioni-di-algebra-e-aritmetica-per-scuole-medie/1770-numeri-primi.html#:~:text=1%20è%20un%20numero%20primo,un%20ragazzo%20di%20scuola%20media.
  */
  
  function isItPrime(n){ 
        if (n<=1)                 
        return false;
          if (n <= 3)
          return true;
          if (n%2 == 0 || n%3 == 0)
          return false;
          for (let i=5; i*i<=n; i=i+6)
          {
              if (n%i == 0 || n%(i+2) == 0)
              return false;
          }

          return true;
  } 
  console.log(isItPrime(0));
