import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoClass } from 'src/app/Models/todo-class';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent {
todo:any = new TodoClass('',false,'')
new!:boolean

  constructor(private todoSvc:TodoServiceService,private router: Router, private route: ActivatedRoute){

  }
ngOnInit(){

  this.route.params.subscribe((params:any) =>{

      if(params.id){
        this.todoSvc.getSingleTodo(params.id)
        .then(res => {this.todo = res;})
        this.new = false
      }else{
        this.new = true
      }

    })

}
  onSubmit(form:NgForm){
    this.router.navigateByUrl('/')
    if(this.new){
      this.todoSvc.addTodo(form.value).then(res => console.log(res))
    }else{
      this.todoSvc.editTodo(this.todo).then(res => console.log(res))
    }
  }


  cancel(){
    this.router.navigateByUrl('/')
  }

}
