
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ITodo } from '../interfaces/i-todo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl:string = environment.urlTodo

  constructor(private http:HttpClient) { }

  getAllPosts(){
    return this.http.get<ITodo[]>(this.apiUrl)
  }

  getSinglePost(id:number){
    return this.http.get(this.apiUrl + '/' + id);
  }

  addPost(post:ITodo){
    return this.http.post(this.apiUrl, post);
  }

  editPost(post:ITodo){
    return this.http.put(this.apiUrl + '/' + post.id, post);
  }

  deletePost(id:number = 0){
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
