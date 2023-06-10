import { Component } from '@angular/core';
import { IPizza } from 'src/app/interfaces/ipizza';
import { HomeService } from '../../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  newPizza:Partial<IPizza> = {
    gusto:''
  }

  constructor(private homeSvc:HomeService, private router:Router){}
  create(){
    this.homeSvc.post(this.newPizza)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['/'])

    })
  }
}
