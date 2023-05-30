import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: any[] = [];
constructor (private userSvc: PostsService){
  userSvc.getUsers().then(users => this.users = users)
}
}
