import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule//questo per poter usare l'HttpClient
  ],
  providers: [
  /*   {
      //con questo oggetto attivo a tutti gli effetti l'interceptor
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,//la classe dell'interceptor da collegare
      multi:true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
