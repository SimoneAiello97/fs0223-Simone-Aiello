
import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { IPizza } from 'src/app/interfaces/ipizza';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pizze:IPizza[] = [];
  nomeUtente!:string
  newPizza:Partial<IPizza> = {
    gusto:'',
    prezzo:0,
    ingredients:''
  }

  constructor(private homeSvc:HomeService, private authSvc:AuthService, private router: Router){}

  ngOnInit(){
    this.homeSvc.getAll().subscribe((pizze)=>{
      this.pizze = pizze;
    })
    const utente:any = localStorage.getItem('user')
    const utenteparsato = JSON.parse(utente)
    this.nomeUtente = utenteparsato.user.name
  }

  delete(id:number){
    this.homeSvc.delete(id)
    .subscribe(data=>{
      let index = this.pizze.findIndex(p => p.id == id)
      this.pizze.splice(index,1)
    })
  }
  logout(){
    this.authSvc.logout()
    this.router.navigate(['/auth']);
  }
}
