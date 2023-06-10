import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTodoRoutingModule } from './edit-todo-routing.module';
import { EditTodoComponent } from './edit-todo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    EditTodoRoutingModule,
    FormsModule
  ]
})
export class EditTodoModule { }
