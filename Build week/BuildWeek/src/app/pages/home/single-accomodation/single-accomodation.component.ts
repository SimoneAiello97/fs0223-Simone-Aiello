import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-accomodation',
  templateUrl: './single-accomodation.component.html',
  styleUrls: ['./single-accomodation.component.scss']
})
export class SingleAccomodationComponent {
  newAppartament:IAccomodation = {
    id: 0,
    title: '',
    prezzo: 0,
    description: ''
  }

  constructor(private homeSvc:HomeService,  private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params
    .subscribe((params:any)=>{
      this.homeSvc.getSingola(params.id).subscribe((Appartament)=> this.newAppartament = Appartament)
    })
  }
}
