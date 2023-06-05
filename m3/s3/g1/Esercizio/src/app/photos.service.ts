import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './modules/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  apiUrl: string = 'http://localhost:3000/endpoint';

  constructor(
    private http:HttpClient
  ) { }


  get(){
    return this.http.get<Photo[]>(this.apiUrl);
  }

  post(photo:Photo){
    return this.http.post<Photo>(this.apiUrl,photo);//il secondo argomento è l'oggetto che si manda al server per la creazione
  }

  put(photo:Photo){
    //ricorda che l'indirizzo è composto da 'http://localhost:3000/Photos/'+ id dell'utente da aggiornare
    return this.http.put<Photo>(this.apiUrl + '/' + photo.id, photo);//il secondo argomento è l'oggetto che si manda al server per l'aggironamento
  }

  delete(id:number){
    //ricorda che l'indirizzo è composto da 'http://localhost:3000/Photos/'+ id dell'utente da eliminare
    return this.http.delete(this.apiUrl + '/' + id);
  }


}
