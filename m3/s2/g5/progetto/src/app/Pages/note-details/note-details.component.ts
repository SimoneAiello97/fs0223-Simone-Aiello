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


  constructor(private todoSvc:TodoServiceService,private router: Router, private route: ActivatedRoute){

  }
ngOnInit(){

  this.route.params.subscribe((params:any) =>{

      //params.id è l'id della pizza che voglio richiamare, e si trova nella rotta attuale
      //a questo punto chiedo al server di darmi la pizza corrispondente all'id
      this.todoSvc.getSingleTodo(params.id)
      .then(res => {

        this.todo = res;

      })

    })

}
  onSubmit(form:NgForm){
    this.todoSvc.addTodo(form.value)
    this.router.navigateByUrl('/')
  }
  cancel(){
    this.router.navigateByUrl('/')
  }
}
