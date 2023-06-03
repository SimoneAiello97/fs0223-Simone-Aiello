import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoClass } from 'src/app/Models/todo-class';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-checked',
  templateUrl: './checked.component.html',
  styleUrls: ['./checked.component.scss']
})
export class CheckedComponent {
  todos: TodoClass[] = [];
  constructor(private todoSvc:TodoServiceService, route:ActivatedRoute){}
  ngOnInit(){

    this.getTodo();

  }

  getTodo(){
    this.todoSvc.getTodo().then(resp =>{
      this.todos = resp;
    })
  }
}
