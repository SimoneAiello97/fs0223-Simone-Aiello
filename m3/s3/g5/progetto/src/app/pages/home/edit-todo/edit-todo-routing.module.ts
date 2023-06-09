import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './edit-todo.component';

const routes: Routes = [{ path: '', component: EditTodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTodoRoutingModule { }
