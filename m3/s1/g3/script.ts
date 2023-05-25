abstract class LavoratoreTasseApplicate{
    redditoannuolordo: number;
    codredd: number;
    tasseinps: number;
    tasseirpef: number;

    constructor(redditoannuolordo: number, codredd: number, tasseinps: number, tasseirpef: number) {
        this.redditoannuolordo = redditoannuolordo;
        this.codredd = this.getUtileTasse();
        this.tasseinps = this.getTasselnps();
        this.tasseirpef = this.getTasselrpef();
    }

    abstract getUtileTasse():number

    abstract getTasselnps():number

    abstract getTasselrpef():number

    abstract getRedditoAnnuoNetto():number

}

class Lavoratore extends LavoratoreTasseApplicate {
    redditoNetto: string;

    constructor(redditoannuolordo: number, codredd: number = 0, tasseinps: number = 0, tasseirpef: number = 0, redditoNetto: string = ''){
        super(redditoannuolordo, codredd, tasseinps, tasseirpef);
        this.redditoNetto = `Il reddito netto del lavoratore è ${this.getRedditoAnnuoNetto()}€`;
    }

    getUtileTasse(): number {
        const coefficienteRedditivita: number[] = [40, 54, 62, 67, 78, 86]
        const randomPick: number = Math.floor(Math.random() * coefficienteRedditivita.length);
        return (this.redditoannuolordo/100) * coefficienteRedditivita[randomPick];
    }

    getTasselnps(): number {
        const aliquotaINPS = 0.09;

        const tassazioneINPS = this.codredd * aliquotaINPS;

        return tassazioneINPS;
    }

    getTasselrpef(): number {
        const aliquoteIRPEF:number[] = [0.23, 0.25, 0.35];
        const soglieReddito:number[] = [15000, 28000, 50000];
      
        let tassazioneIRPEF:number = 0;
      
        for (let i = 0; i < aliquoteIRPEF.length; i++) {
          if (this.codredd <= soglieReddito[i]) {
            tassazioneIRPEF += this.codredd * aliquoteIRPEF[i];
            break;
          } else {
            const redditoTranche = soglieReddito[i + 1] - soglieReddito[i];
            tassazioneIRPEF += redditoTranche * aliquoteIRPEF[i];
          }
        }
        console.log("🚀 ~ file: script.ts:71 ~ Lavoratore ~ getTasselrpef ~ tassazioneIRPEF:", tassazioneIRPEF)
        return tassazioneIRPEF;
    }
    getRedditoAnnuoNetto(): number {
        let utile: number = this.redditoannuolordo - this.tasseinps - this.tasseirpef;
        console.log("🚀 ~ file: script.ts:73 ~ Lavoratore ~ getRedditoAnnuoNetto ~ utile:", utile)
        return utile;
    }
}
let marioRossi = new Lavoratore(10000)
console.log("🚀 ~ file: script.ts:78 ~ marioRossi:", marioRossi)


class Persona {
    nome:string
    constructor(nome: string) {
         this.nome = nome
}
get trovaNome() {
    return  `il mio nome è ${this.nome}`
}
set cambiaNome(nome:string) {
    this.nome = nome
}
}

let user1= new Persona('Mario')

user1.nome
console.log("🚀 ~ file: script.ts:88 ~ user1.nome:", user1.trovaNome)
user1.cambiaNome = 'piero'
console.log(user1.nome);