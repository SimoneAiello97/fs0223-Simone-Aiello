import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss']
})
export class ActivePostComponent {
  users: any[] = [];
  constructor (private userSvc: PostsService){
    userSvc.getUsers().then(users => this.users = users)
  }
}
