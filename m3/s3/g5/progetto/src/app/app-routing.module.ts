import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },

  /* Inserisco queste rotte nel genitore Home */
  /* { path: 'addTodo', loadChildren: () => import('./pages/home/add-todo/add-todo.module').then(m => m.AddTodoModule) },
  { path: 'editTodo', loadChildren: () => import('./pages/home/edit-todo/edit-todo.module').then(m => m.EditTodoModule) }, */
  /* Inserisco queste rotte nel genitore Auth */
  /* { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule) } */
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
