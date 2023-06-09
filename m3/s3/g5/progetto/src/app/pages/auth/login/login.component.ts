import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ILoginData } from 'src/app/Moduli/i-login-data';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  data:ILoginData = {
    email: '',
    password: ''
  }



constructor(private authSvc:AuthService,private router: Router){}

login(){
  this.authSvc.signIn(this.data)
  .subscribe(data => {
    console.log('sei loggato')
    this.router.navigate(['/'])
  })
}
}
