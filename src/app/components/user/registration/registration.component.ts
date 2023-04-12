import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './customValidator';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { take } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [MessageService],
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


  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService,
  ){}

  onSubmit(){
    const user = {
      name: this.form.value.name,
      email: this.form.value.email,
    };
    this.userService.insertUser(this.form.value).pipe(take(1))
    .subscribe({
      next: (res)=>{
        if(res){
          this.userService.datiUtente.next(user);
          this.messageService.add({severity: 'success', summary: 'Success!', detail: 'Grazie per esserti registrato!', life: 2000});
          setTimeout(() => this.router.navigate(['home']), 2000);
        }
        else{
          this.messageService.add({severity: 'error', summary: 'Error!', detail: 'Errore nella registrazione, riprova!', life: 2000});
        }
      },
      error: (err) =>{
        console.log(err);
        this.messageService.add({severity: 'error', summary: 'Error!', detail: 'Errore nella registrazione, riprova!', life: 2000});
      }
    })
  }
}
