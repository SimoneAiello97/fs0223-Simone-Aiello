import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoClass } from 'src/app/Models/todo-class';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.scss']
})
export class CheckedComponent {
  todos: TodoClass[] = [];
  constructor(private todoSvc:TodoServiceService,private router: Router, route:ActivatedRoute){}
  ngOnInit(){

    this.getTodos();

  }

  getTodos(){
    this.todoSvc.getTodo().then(resp =>{
      this.todos = resp;
    })
  }
  deleteNote(id:number =  0){
    this.todoSvc.deleteTodo(id)
    this.getTodos();
    }
}
