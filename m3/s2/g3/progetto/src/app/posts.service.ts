import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})

export class PostsService{
  arr:User[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "active": true,
      "type": "news"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "active": false,
      "type": "politic"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "active": true,
      "type": "education"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "active": true,
      "type": "news"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "active": true,
      "type": "education"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "active": false,
      "type": "politic"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "active": true,
      "type": "news"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "active": false,
      "type": "education"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "active": false,
      "type": "politic"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "active": true,
      "type": "news"
    }
  ]
  api:string = '../assets/db.json'
@Output() onEdit = new EventEmitter()
  getUsers():Promise<User[]> {
    return fetch(this.api).then(res => res.json())
  }
  getUserArr(){
    return this.arr
  }



  postUserArr(){
    return this.onEdit.emit(this.arr.filter(user => user.name))
  }


}
