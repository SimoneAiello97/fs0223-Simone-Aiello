import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  newAppartament:IAccomodation = {
    id: 0,
    title: '',
    prezzo: 0,
    description: ''
  }

  constructor(private homeSvc:HomeService, private router:Router, private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params
    .subscribe((params:any)=>{
      this.homeSvc.getSingola(params.id).subscribe((Appartament)=> this.newAppartament = Appartament)
    })
  }

  modifica(){
    return this.homeSvc.put(this.newAppartament).subscribe(data => {
      this.router.navigate(['/'])
    })
  }
}
