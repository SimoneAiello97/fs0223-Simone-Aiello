import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iform } from 'src/app/iform';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  form!:FormGroup;
  obj!:any;
  arr!:any[]
  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({

          name: this.fb.control(null,[Validators.required]),
          alterEgo: this.fb.control(null, [Validators.required]),
          power: this.fb.control(null, [Validators.required]),
          enemy: this.fb.control(null),
          planet: this.fb.control(null, [Validators.required, Validators.minLength(5)]),
          weakness: this.fb.control(null)
})
  }
  logghiamoIlForm(){
    console.log(this.form.value);
  }
  isValid(value:string){
    return this.form.get(value)?.invalid
  }
}
