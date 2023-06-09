import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { ISignUpData } from 'src/app/Moduli/isign-up-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  data: ISignUpData = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }

    constructor(private authSvc:AuthService){}

    register(){
      this.authSvc.signUp(this.data)
      .subscribe(res => console.log('il dato del form', res))
    }


}
