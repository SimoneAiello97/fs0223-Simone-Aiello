import { Injectable } from '@angular/core';
interface User {
    id:number
    name:string
    username:string
    email:string
    active:boolean
}
@Injectable({
  providedIn: 'root'
})

export class PostsService{
  api:string = '../assets/db.json'

  getUsers():Promise<User[]> {
    return fetch(this.api).then(res => res.json())
  }
}
