var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [];
var arrPrezzi = [];
fetch('./Abbigliamento.json')
    .then(function (response) {
    if (response.ok) {
        return response.json();
    }
    else {
        throw new Error("Request Error");
    }
})
    .catch(function (error) {
    console.error(error);
})
    .then(function (data) {
    data.forEach(function (element) {
        var nuovoCapo = new CapiAbbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        // console.log("nuovo capo", nuovoCapo)
        arr.push(nuovoCapo);
        arrPrezzi.push(nuovoCapo.mostraPrezzo);
    });
});
var CapiAbbigliamentoAstratta = /** @class */ (function () {
    function CapiAbbigliamentoAstratta(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    return CapiAbbigliamentoAstratta;
}());
var CapiAbbigliamento = /** @class */ (function (_super) {
    __extends(CapiAbbigliamento, _super);
    function CapiAbbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        return _super.call(this, id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) || this;
    }
    Object.defineProperty(CapiAbbigliamento.prototype, "mostraPrezzo", {
        get: function () {
            var prezzoSaldato = this.prezzoivainclusa - (this.prezzoivaesclusa * this.saldo / 100);
            return prezzoSaldato + '$';
        },
        enumerable: false,
        configurable: true
    });
    return CapiAbbigliamento;
}(CapiAbbigliamentoAstratta));
console.log("Array di tutti i capi", arr);
console.log("Array di tutti i prezzi dei capi saldati", arrPrezzi);
