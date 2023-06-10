import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', loadChildren: () => import('./add-todo/add-todo.module').then(m => m.AddTodoModule) },
  { path: 'edit/:id', loadChildren: () => import('./edit-todo/edit-todo.module').then(m => m.EditTodoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
