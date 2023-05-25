let arr:CapiAbbigliamento[] = []
let arrPrezzi:string[] =[]
fetch('./Abbigliamento.json')
.then((response: Response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Request Error");
  }
})
.catch((error: Error) => {
  console.error(error);
})
.then(data => {
  data.forEach(element => {
    let nuovoCapo = new CapiAbbigliamento(element.id, element.codprod,element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo)
    console.log("nuovo capo", nuovoCapo)
    arr.push(nuovoCapo)
    arrPrezzi.push(nuovoCapo.mostraPrezzo);
});
})

abstract class CapiAbbigliamentoAstratta{
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number
    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string,saldo:number){
        this.id = id
        this.codprod = codprod
        this.collezione = collezione
        this.capo = capo
        this.modello = modello
        this.quantita = quantita
        this.colore = colore
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }
    abstract get mostraPrezzo():string
    abstract getacquistocapo():number
}

class CapiAbbigliamento extends CapiAbbigliamentoAstratta{
    get mostraPrezzo():string{
        return this.saldo + '$'
    }
    getacquistocapo(): number {
        throw new Error("Method not implemented.");
    }
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number
    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string,saldo:number){
        super(id, codprod,collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo);
    }
}

console.log("Array di tutti i capi", arr)
console.log("Array di tutti i prezzi dei capi", arrPrezzi)
