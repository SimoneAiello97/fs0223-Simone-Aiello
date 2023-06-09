/* ESERCIZIO 1
    Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
let h1 = document.querySelector('h1')
const changeTitle = function (str) {   
        return h1.textContent = str
    }
    changeTitle('Questo è il nuovo titolo');

    /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

    const addClassToTitle = function () {
        return h1.classList.add('myHeading')
    }
    addClassToTitle();

    /* ESERCIZIO 3
        Scrivi una funzione per che cambi il testo dei p figli di un div
        */
    
    /*let allP = document.querySelector('p')
    const changePcontent = function (str) {
        allP.forEach(el => el.textContent = str)
    }
    changePcontent('Nuovo testo per tutti i p');
*/
    let p = document.querySelectorAll('div p')    
    const changePcontent = function (str) {
        return p.forEach(el => el.textContent = str)
    }
    changePcontent('Nuovo testo per tutti i p')

    /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
        */
    let a = document.querySelectorAll('div a')
    const changeUrls = function (str) {
        return a.forEach(ele => ele.href = str)
    }
    changeUrls('https://www.google.com')

    /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */
   const addToTheSecond = function (str) {
        let ul = document.getElementById('secondList')
        let li = document.createElement('li')
        li.textContent = str
        ul.append(li)
    }
    addToTheSecond('nuova lista')

    /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un secondo paragrafo al primo div
    */
   const addParagraph = function (str) {
        let div = document.querySelector('div')
        let p = document.createElement('p')
        p.textContent = str
        return div.append(p)
    }
    addParagraph('Nuovo p')

    /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */
    let primaLista = document.querySelector('#firstList')
    const hideFirstUl = function () {
        return primaLista.textContent = ''
    }
    hideFirstUl()
    

    /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
        */

    const paintItGreen = function () {
        let coloreBackground = document.querySelectorAll('li')
        return coloreBackground.forEach( el => el.style.backgroundColor = 'green')
    }
    paintItGreen()

    /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
        */
       const makeItClickable = function () {
           let arrh1 = h1.textContent;
           h1.textContent = arrh1.slice(0, -1)
        }
       
         h1.addEventListener('click', function(){
            return makeItClickable();
           });


    /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
        */
       let footer = document.getElementsByTagName('footer') 
           console.log(footer);

       let footerLink = footer[0].querySelector('footer a');
       
       const revealFooterLink = function () {
        alert(footerLink.href)
        
    }
    
    footer[0].addEventListener('click', function(){
        return revealFooterLink();
    });

    /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */
        let target = document.querySelector('#tableArea');

        let tabella = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let primaTr = document.createElement('tr');
  
        thead.append(primaTr);
        tabella.append(thead, tbody);
        target.append(tabella);
  
        let colonne = ['immagine', ' nome prodotto', 'quantità', 'prezzo'];
  
        for (let colonna of colonne) {
            let th = document.createElement('th');
          th.style.border = '1px solid black';
          th.textContent = colonna;
          primaTr.append(th);
        }
    /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */
   let nuovaRiga = document.createElement('td');
   nuovaRiga.style.border = '1px solid black';
   nuovaRiga.textContent = 'src=cejn cr';
let nuovaRiga2 = document.createElement('td');
nuovaRiga2.style.border = '1px solid black';
nuovaRiga2.textContent = 'oggetto randomico';

let nuovaRiga3 = document.createElement('td');
nuovaRiga3.style.border = '1px solid black';
nuovaRiga3.textContent = '1000';

let nuovaRiga4 = document.createElement('td');
nuovaRiga4.style.border = '1px solid black';
nuovaRiga4.textContent = '15615$';
    
        tbody.append(nuovaRiga);
        tbody.append(nuovaRiga2);
        tbody.append(nuovaRiga3);
        tbody.append(nuovaRiga4);


    

    /* ESERCIZIO 14
        Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

    const hideAllImages = function () {


    }

    /* EXTRA ESERCIZIO 15
        Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

        const changeColorWithRandom = function () {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
    
            let colore = rgb(`${r},${g},${b}`);
    
            let titolo = document.getElementById("changeMyColor");
            titolo.style.color = colore;
          };
    
          let titolo = document.getElementById("changeMyColor");
          titolo.addEventListener("click", changeColorWithRandom);

    /* EXTRA ESERCIZIO 16
        Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

    const deleteVowels = function () {


    }
