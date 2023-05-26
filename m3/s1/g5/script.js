// mi creo una classe user implementando l'interfaccia
var User = /** @class */ (function () {
    function User(carica) {
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = minutiDurata * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            var nuovaChiamata = {
                id: this.numeroChiamate,
                durata: minutiDurata,
                dataOra: new Date()
            };
            this.registroChiamate.push(nuovaChiamata);
        }
        else {
            console.log("Saldo insufficiente per effettuare la chiamata.");
        }
    };
    Object.defineProperty(User.prototype, "numero404", {
        get: function () {
            return this.carica + '€';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getNumeroChiamate", {
        get: function () {
            return this.numeroChiamate;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        this.registroChiamate = []; /* aggiorno anche l'array che si svuota */
    };
    // aggiorniamo i moduli della classe con gli extra
    User.prototype.mostraRegistroChiamate = function () {
        console.log("Registro Chiamate:");
        this.registroChiamate.forEach(function (element) {
            console.log("Chiamata: ".concat(element.id, ", Durata: ").concat(element.durata, " minuti, Data/Ora: ").concat(element.dataOra.toLocaleString())); /* ho usato locateString perché ha un formato migliore leggibile in console */
        });
    };
    User.prototype.filtraChiamate = function (data) {
        this.registroChiamate.forEach(function (element) {
            var dataRicercata = new Date(data);
            dataRicercata.setSeconds(0);
            dataRicercata.setMilliseconds(0);
            var dataConvertita = element.dataOra;
            dataConvertita.setSeconds(0);
            dataConvertita.setMilliseconds(0);
            if (dataRicercata.getTime() == dataConvertita.getTime()) {
                console.log("\u00E8 stata effettuata a questa data e ora: \"".concat(data.split('T'), "\" la chiamata numero: ").concat(element.id));
            }
            else {
                console.log("Non \u00E8 stata effettuata nessuna chiamata a questa data: ".concat(data.split('T')));
            }
        });
    };
    return User;
}());
// RISULTATI CONSOLE
// creo tre istanze di oggetti usando la classe User
var utente1 = new User(50);
var utente2 = new User(20);
var utente3 = new User(1);
//   stampo in console il risultato
console.log("primo utente:", utente1);
console.log("secondo utente:", utente2);
console.log("terzo utente:", utente3);
console.log(""); /* per creare spazio in console */
//   controllo i metodi di un solo utente
utente1.ricarica(10);
console.log("Controllo il saldo dell'utente 1, dopo la ricarica di 10 euro:", utente1.numero404);
utente1.chiamata(4);
console.log("Controllo il saldo dell'utente 1, dopo una chiamata di 4 min", utente1.numero404);
console.log("Controllo il numero di chiamate effettuate dell'utente 1, dopo una chiamata di 4 min:", utente1.getNumeroChiamate);
utente1.azzeraChiamate();
console.log("Controllo il numero di chiamate effettuate dell'utente 1, dopo aver resettato:", utente1.getNumeroChiamate);
console.log(''); /* per creare spazio in console */
utente3.chiamata(6); /* log effettuato per constatare l'evento qualora il costo fosse troppo alto rispetto al saldo (ho usato utente3) */
// EXTRA
console.log(''); /* per creare spazio in console */
console.log('Array di registro chiamate:', utente1.registroChiamate);
// faccio due chiamate di prova e poi attivo il metodo mostraRegistroChiamate
var numeroCasuale = Math.floor(Math.random() * 5 + 1);
/* metto un numero casuale da uno a 5 che passerà come parametro nel metodo chiamata */
utente1.chiamata(numeroCasuale);
/* faccio un setTimeout che attivi la seconda chiamata e il metodo tot secondi quanto il numero casuale */
setTimeout(function () {
    utente1.chiamata(4);
    utente1.mostraRegistroChiamate();
    // il parametro data deve essere così: es: '26/5/2023 14:12' attenzione, qualora ci fosse uno zero non va inserito es: 15:9 NON 15:09
    utente1.filtraChiamate('2023-05-26T15:50');
}, numeroCasuale * 1000);
