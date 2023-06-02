import { Component } from '@angular/core';
import { TodoClass } from 'src/app/Models/todo-class';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
todos: TodoClass[] = [];
todo:TodoClass = new TodoClass('',false, '');


constructor(private todoSvc:TodoServiceService){}

create(){
  this.todoSvc.addTodo(this.todo)
  .then(res => console.log(res)
  );
  this.getTodo();
}
ngOnInit(){

  this.getTodo();

}

getTodo(){
  this.todoSvc.getTodo().then(resp =>{
    this.todos = resp;
  })
}

delete(id?:number){

  this.todoSvc.deleteTodo(id)
  .then(res => {
    console.log('pizza Eliminata');
    this.getTodo();

  })
}
edit(){

  this.todoSvc.editTodo(this.todo)
    .then(res => console.log(res));
}
}
