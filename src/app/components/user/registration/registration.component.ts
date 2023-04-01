import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './customValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', Validators.required), 
  },
  [CustomValidator.MatchValidator('password', 'ripetiPassword')]
  )

  cities = [
  {
    name: "Agrigento"
  },
  {
    name: "Alessandria"
  },
  {
    name: "Ancona"
  },
  {
    name: "Aosta"
  },
  {
    name: "Arezzo"
  },
    
  ]

  selectedCity: string;

  onSubmit(){
    console.log(this.form.value);
  }
}
