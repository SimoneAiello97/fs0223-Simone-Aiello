/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

{
    let a = 2
    let b = 3 
    let c = 4
    if(a>b){
      
      console.log(`${a} è maggiore di ${b}`);
      
    }
    else if(a==b){
      console.log('sono uguali')
    }
    else{
      console.log(`${a} è minore di ${b}`);
    }

    console.log(Math.max(a,b,c))
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

{
  let a = 3
  if(a!=5){
    console.log("not equal");
  }
}
{
  let a = 3
  if(a==5){
    console.log("equal");
  }
  else{
    console.log("not equal");
  }
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let a = 25
  let b = 5
  let c = a % b
  if(c==0){
    console.log(`${a} è divisibile per ${b}`);
  }
  else{
    console.log(`${a} non è divisibile per ${b}`);
  }
  
  
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

{
  let a = 8
  let b = 16
  
  if(a !=8){
    console.log(`${a} è diverso da 8`);
  }
  else{
    console.log(`il valore "${a}" è uguale a 8(otto)`);
  }

  if(b + a == 8){
    console.log(`la somma di ${a} e ${b} è uguale a 8`);
  }
  else{
    console.log(`la differenza tra ${b} e ${a} è uguale a 8`)
  }



}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
  let a = 20
  let b = 50
  let c = 40
  let d = a + b + c
  if(d>50){
    d + 0
    console.log(`Il totale del carrello è ${d+0}`);
  }
  else{
    d + 10
    console.log(`Il totale del carrello è ${d+10}`);
  }
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

{
  let a = 2
  let b = 50
  let c = 4
  let d = a + b + c
  let e = d / 5
  if(d>50){
    d-e + 0
    console.log(`Il totale del carrello è ${d-e+0}`);
  }
  else{
    d-e + 10
    console.log(`Il totale del carrello è ${d-e+10}`);
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

{
  let a = 1
  let b = 2
  let c = 3
  let arr = []

  if(a > b && b > c){
    arr.push(a, b, c)
  }else if (b > a && a > c) {
    arr.push(b, a, c)
  }else{
    arr.push(c, b, a)
  }
  console.log(arr);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
{
 let x = 10
 if(typeof(x) === 'number'){
  console.log('number')
}else{
  console.log('not a number')
}


}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

{
  let a = 10
  let b = a % 2
  if(b>0){
    console.log('Numero dispari');
  }
  else{
    console.log('Numero pari');
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

{
  let val = 7
  if (val < 10 && val>=5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city=('Toronto')
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
{
delete me.lastName
console.log(me);
}
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

{
  me.skills.pop()
console.log(me);
}
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arr = []
arr.push(1,2,3,4,5,6,7,8,9,10)
console.log(arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

{arr[9] = 100;
console.log(arr);}

