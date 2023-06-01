import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss']
})
export class InactivePostComponent {
  users: any[] = [];
  constructor (private userSvc: PostsService){
    userSvc.getUsers().then(users => this.users = users)
  }
}
