
import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (private homeSvc: HomeService){}

ngOnInit(){
  this.homeSvc.getAllPosts().subscribe(data =>console.log(data))
}
}
