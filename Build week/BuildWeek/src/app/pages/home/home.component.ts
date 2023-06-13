import { Component } from '@angular/core';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
/* prima ci prepariamo un array vuoto e all'inizio del caricamento della pagina verrá riempito */
appartaments:IAccomodation[] = []
/* l'inizio del caricamento intendo il ngOnInit => il server legge tutto il componente e successivamente, in una frazione di sec legge ció che c'é scritto nell'ngOnInit */

constructor(private homeSvc:HomeService){}

ngOnInit(){
  this.homeSvc.getAll()
  .subscribe((res)=>{
    this.appartaments = res
  })
}
delete(id:number){
  this.homeSvc.delete(id)
  .subscribe(
    data => {
      let index = this.appartaments.findIndex(el => el.id === id)
      this.appartaments.splice(index, 1)
    }
  )
}
}
