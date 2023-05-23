class SonAccount{
    balanceInit:number
    constructor(balance:number){
        this.balanceInit = balance
        
    }
    deposit(accredito:number):void{
        this.balanceInit += accredito
        let saldoAccredito:string = `è stato accreditato ${accredito}$, il nuovo saldo è ${this.balanceInit}$`
        console.log(saldoAccredito);
    }
    draw(prelievo:number):void{
        this.balanceInit -= prelievo
        let saldoPrelievo:string = `è stato prelevato ${prelievo}$, il nuovo saldo è ${this.balanceInit}$`
        console.log(saldoPrelievo);
    }
}
class MotherAccount extends SonAccount{
    constructor(balanceInit:number){
        super (balanceInit)
    }
    addInterest(interessi:number):number{
        interessi = this.balanceInit * 0.1;
        return this.balanceInit += interessi
    }
}

let sonAccount = new SonAccount(100)
let motherAccount= new MotherAccount(500)
console.log(`Il saldo del figlio è: ${sonAccount.balanceInit}`)
console.log(`Il saldo della madre è: ${motherAccount.balanceInit}`)


sonAccount.deposit(40)
motherAccount.deposit(10)

sonAccount.draw(40)
motherAccount.draw(10)

console.log("🚀 ~ file: script.ts:27 ~ motherAccount.addInterest(10):", motherAccount.addInterest(10))
