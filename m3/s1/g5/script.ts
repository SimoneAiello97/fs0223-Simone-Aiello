// inizio a crearmi una interfaccia di nome Smartphone
interface Smartphone {
    carica: number; /* rappresenta il quantitativo di euro disponibile per le chiamate. */
    numeroChiamate: number; /*  numero chiamate effettuate */
    costoMinuto:number ; /*  imposta un valore standard a 0.20 */

    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    get numero404(): string; /* ho reso questi due metodi delle get poichè dobbiamo ricevere soltanto il dato */
    get getNumeroChiamate(): number; /* ho reso questi due metodi delle get poichè dobbiamo ricevere soltanto il dato */
    azzeraChiamate(): void;
}
// mi creo un interfaccia per costruire l'array dell'extra
interface Chiamata{
    id:number
    durata:number
    dataOra:Date
}

// mi creo una classe user implementando l'interfaccia
class User implements Smartphone{
    carica: number;
    numeroChiamate: number;
    costoMinuto:number
    registroChiamate:Chiamata[] /* aggiungo l'array dell'extra */

    constructor(carica: number) {   /* nel costruttore metto esclusicamente la carica di partenza che varia da utente a utente, ma non il n di chiamate che parte da 0 */
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20
        this.registroChiamate = [];
    }

    ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    chiamata(minutiDurata: number): void {
        let costoChiamata = minutiDurata * this.costoMinuto;
            if (this.carica >= costoChiamata) {
                this.carica -= costoChiamata;
                this.numeroChiamate++;

                let nuovaChiamata:Chiamata = {
                    id: this.numeroChiamate,
                    durata: minutiDurata,
                    dataOra: new Date()
                }
                this.registroChiamate.push(nuovaChiamata);

            } else {
                console.log("Saldo insufficiente per effettuare la chiamata.");
            }
    }

    get numero404(): string {
        return this.carica + '€';
    }

    get getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        this.registroChiamate = [] /* aggiorno anche l'array che si svuota */
    }

    // aggiorniamo i moduli della classe con gli extra
    mostraRegistroChiamate(): void {
        console.log("Registro Chiamate:");
        this.registroChiamate.forEach(element => {
        console.log(`Chiamata: ${element.id}, Durata: ${element.durata} minuti, Data/Ora: ${element.dataOra.toLocaleString()}`); /* ho usato locateString perché ha un formato migliore leggibile in console */
        })
    }
    
    filtraChiamate (data:string){
        this.registroChiamate.forEach((element) => {
            let dataSplittata = data.split('T') /* splittato la stringa per far si che non si legga la "T" */
            
            let dataRicercata:Date = new Date(data);
            dataRicercata.setSeconds(0)
            dataRicercata.setMilliseconds(0)
            let dataConvertita:Date = element.dataOra
            dataConvertita.setSeconds(0)
            dataConvertita.setMilliseconds(0)
            
            if(dataRicercata.getTime() == dataConvertita.getTime())
            {
                console.log(`è stata effettuata a questa data e ora: "${dataSplittata[0] + ' ' + dataSplittata[1]}" la chiamata numero: ${element.id}`);
            }
            else {
                console.log(`Non è stata effettuata nessuna chiamata a questa data: ${dataSplittata[0] + ' ' + dataSplittata[1]}`);
            }
        })
    }

}

// RISULTATI CONSOLE
// creo tre istanze di oggetti usando la classe User
let utente1 = new User(50)
let utente2 = new User(20)
let utente3 = new User(1)
//   stampo in console il risultato
console.log("primo utente:", utente1)
console.log("secondo utente:", utente2)
console.log("terzo utente:", utente3)
console.log(""); /* per creare spazio in console */

//   controllo i metodi di un solo utente
utente1.ricarica(10)
console.log("Controllo il saldo dell'utente 1, dopo la ricarica di 10 euro:", utente1.numero404)
utente1.chiamata(4)
console.log("Controllo il saldo dell'utente 1, dopo una chiamata di 4 min", utente1.numero404)
console.log("Controllo il numero di chiamate effettuate dell'utente 1, dopo una chiamata di 4 min:", utente1.getNumeroChiamate)
utente1.azzeraChiamate()
console.log("Controllo il numero di chiamate effettuate dell'utente 1, dopo aver resettato:", utente1.getNumeroChiamate)
console.log(''); /* per creare spazio in console */ 
utente3.chiamata(6) /* log effettuato per constatare l'evento qualora il costo fosse troppo alto rispetto al saldo (ho usato utente3) */

// EXTRA
console.log(''); /* per creare spazio in console */
console.log('Array di registro chiamate:', utente1.registroChiamate)
// faccio due chiamate di prova e poi attivo il metodo mostraRegistroChiamate
let numeroCasuale = Math.floor(Math.random()*5 +1)
/* metto un numero casuale da uno a 5 che passerà come parametro nel metodo chiamata */
utente1.chiamata(numeroCasuale)
/* faccio un setTimeout che attivi la seconda chiamata e il metodo tot secondi quanto il numero casuale (se si volessero i minuti efettuati basta moltiplicare per 60 il nuomero casuale * 1000) */
setTimeout(() =>{
    utente1.chiamata(4)
    utente1.mostraRegistroChiamate()
    // il parametro data deve essere così: es: '2023-05-26T15:50'
    utente1.filtraChiamate('2023-05-26T16:27')
}, numeroCasuale*1000)
