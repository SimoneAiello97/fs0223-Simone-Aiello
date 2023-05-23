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
var SonAccount = /** @class */ (function () {
    function SonAccount(balance) {
        this.balanceInit = balance;
    }
    SonAccount.prototype.deposit = function (accredito) {
        this.balanceInit += accredito;
        var saldoAccredito = "\u00E8 stato accreditato ".concat(accredito, "$, il nuovo saldo \u00E8 ").concat(this.balanceInit, "$");
        console.log(saldoAccredito);
    };
    SonAccount.prototype.draw = function (prelievo) {
        this.balanceInit -= prelievo;
        var saldoPrelievo = "\u00E8 stato prelevato ".concat(prelievo, "$, il nuovo saldo \u00E8 ").concat(this.balanceInit, "$");
        console.log(saldoPrelievo);
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.addInterest = function (interessi) {
        interessi = this.balanceInit * 0.1;
        return this.balanceInit += interessi;
    };
    return MotherAccount;
}(SonAccount));
var sonAccount = new SonAccount(100);
var motherAccount = new MotherAccount(500);
console.log("Il saldo del figlio \u00E8: ".concat(sonAccount.balanceInit));
console.log("Il saldo della madre \u00E8: ".concat(motherAccount.balanceInit));
sonAccount.deposit(40);
motherAccount.deposit(10);
sonAccount.draw(40);
motherAccount.draw(10);
console.log("🚀 ~ file: script.ts:27 ~ motherAccount.addInterest(10):", motherAccount.addInterest(10));
