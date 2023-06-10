import { Component } from '@angular/core';
import { IPizza } from 'src/app/interfaces/ipizza';
import { HomeService } from '../../home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent {

  pizza:Partial<IPizza> = {
    gusto:'',
    prezzo:0,
    ingredients:''
  }

  constructor(
    private homeSvc:HomeService,
    private router:Router,
    private route:ActivatedRoute
    ){}

  ngOnInit(){

    this.route.params
    .subscribe((params:any)=>{

      this.homeSvc.getById(params.id).subscribe((pizza)=>{
          this.pizza = pizza
      })
    })



  }

  edit(){
    this.homeSvc.put(this.pizza)
    .subscribe((pizze)=>{
      this.router.navigate(['/home'])
    })
  }
}
