import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CheckedComponent } from './Pages/checked/checked.component';

const routes: Routes = [
  {
  path:'',
  component: HomeComponent,
  },
  {
    path:'checked',
    component: CheckedComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
