import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/todo-service.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
@Input() title!: string
@Input() subtitle!: string

constructor(){}

}
