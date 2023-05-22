var numeroCasuale = Math.floor(Math.random() * (100 - 1) + 1);
console.log("🚀 ~ file: script.ts:2 ~ numeroCasuale:", numeroCasuale);
// let giocatore1:HTMLInputElement | null = document.getElementById('giocatore1')
// let giocatore2 = document.getElementById('giocatore2')
var numeroGiocatore1 = 5;
var numeroGiocatore2 = 50;
var confrontaNumero = function (a, b) {
    if (a == numeroCasuale || b == numeroCasuale) {
        console.log('uno dei due giocatori ha azzeccato il numero');
    }
    else if (Math.abs(numeroCasuale - a) > Math.abs(numeroCasuale - b)) {
        console.log('a si è avvicinat di più al numero casuale');
    }
    else {
        console.log('b si è avvicinat di più al numero casuale');
    }
};
window.onload = function () {
    confrontaNumero(numeroGiocatore1, numeroGiocatore2);
};
