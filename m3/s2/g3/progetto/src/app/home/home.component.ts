import { Component, EventEmitter, Output } from '@angular/core';
import { PostsService } from '../posts.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: User[] = [];

  // @Output() onCreate = new EventEmitter()
constructor (private userSvc: PostsService){
  userSvc.getUserArr().forEach(el =>this.users.push(el))
}
}
