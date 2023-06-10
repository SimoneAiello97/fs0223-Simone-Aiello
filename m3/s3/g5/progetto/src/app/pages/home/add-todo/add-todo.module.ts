import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodoRoutingModule } from './add-todo-routing.module';
import { AddTodoComponent } from './add-todo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    AddTodoRoutingModule,
    FormsModule
  ]
})
export class AddTodoModule { }
