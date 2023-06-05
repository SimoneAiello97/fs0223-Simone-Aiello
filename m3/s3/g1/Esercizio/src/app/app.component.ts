import { Component, OnInit } from '@angular/core';
import { Photo } from './modules/photo';
import { PhotosService } from './photos.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Esercizio';
  photos:Photo[] =[]
  /* photo!:Photo */
  likes:number = 0;
  currentLike:number[]= []

  constructor(private photoSvc:PhotosService){}

  ngOnInit(): void {
    this.photoSvc.get().subscribe(res => {//mi iscrivo all'observable
      this.photos = res;//appena ricevuti i dati vado a popolare l'array userArr per mostrare i dati in arrivo
    })
  }
  delete(id:number){
    this.photoSvc.delete(id).subscribe(res => this.photoSvc.get().subscribe(res => {this.photos = res;}));
  }

  addLike(id:number){
    let allBtn = document.querySelectorAll('.active')
    this.likes = allBtn.length

    this.currentLike.push(id)
    let allLikes = this.currentLike.length

    const subject = new Subject<number>()
    subject.subscribe((value:number):any=>{
      console.log('Quanti post hanno il mi piace?', value);
    })
    subject.next(allLikes)
  }

}
