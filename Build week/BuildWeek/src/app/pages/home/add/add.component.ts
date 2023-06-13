import { Component } from '@angular/core';
import { IAccomodation } from 'src/app/interfaces/iaccomodation';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
newAppartament:IAccomodation = {
  id: 0,
  title: '',
  prezzo: 0,
  description: ''
}

constructor(private homeSvc : HomeService, private router:Router){}

create(){
  this.homeSvc.post(this.newAppartament)
  .subscribe((casa)=>{
    console.log(casa);
    this.router.navigate(['/'])
  })
}
}
