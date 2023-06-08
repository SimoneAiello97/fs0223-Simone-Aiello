import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { ILoginData } from 'src/app/Moduli/i-login-data';
import { Iauthdata } from 'src/app/Moduli/iauthdata';
import { ISignUpData } from 'src/app/Moduli/isign-up-data';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHlper:JwtHelperService = new JwtHelperService()
  apiUrl:string = environment.url
  registerUrl:string = this.apiUrl + '/register';
  loginUrl:string = this.apiUrl + '/login';
  userUrl:string = this.apiUrl + '/users';


  private authSubject = new BehaviorSubject<null | Iauthdata>(null)
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)));

  constructor(
    private http:HttpClient,
    private router: Router) { }


    signUp(data:ISignUpData){
      return this.http.post<Iauthdata>(this.registerUrl, data)
    }

    signIn(data:ILoginData){
      return this.http.post<Iauthdata>(this.loginUrl, data)
      .pipe(tap(data => {
        this.authSubject.next(data)
        localStorage.setItem('user', JSON.stringify(data))

        const expDate =this.jwtHlper.getTokenExpirationDate(data.accessToken) as Date
         this.autoLogout(expDate)
      }))
    }

    restoreUser(){
      const userJson = localStorage.getItem('user');
      if(!userJson){
        return
      }
      const user:Iauthdata = JSON.parse(userJson);
      if(this.jwtHlper.isTokenExpired(user.accessToken)){
        return
      }
      this.authSubject.next(user)
      console.log('Sei attualmente loggato');

    }

    logout(){
      this.authSubject.next(null);
      localStorage.removeItem('user')
      this.router.navigate(['/login']);
    }
    autoLogTimer:any

    autoLogout(expDate:Date){
      const expMs:number = expDate.getTime() - new Date().getTime();

      this.autoLogTimer = setTimeout(() => {this.logout()}, expMs);
    }
}
