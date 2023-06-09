import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ISignIn } from 'src/app/interfaces/isign-in';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  data:ISignIn = {
    email: '',
    password: ''
  }



constructor(private authSvc:AuthService,private router: Router){}

login(){
  this.authSvc.signIn(this.data)
  .subscribe(data => {
    console.log('sei loggato', data)
    this.router.navigate(['/'])
  })
}
}
