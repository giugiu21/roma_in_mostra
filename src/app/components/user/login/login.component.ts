import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {

  loginError: string;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ){}

  onSubmit(credentials: any){
    if(credentials.email !== null && credentials.password !== null){
      this.authService.login(credentials.email, credentials.password)
      .subscribe({
        next: (res) =>{
          if(res){
            this.authService.saveStorage(res);
          this.messageService.add({severity: 'success', summary: 'Success!', detail: 'il Login è andato a buon fine!', life: 2000});
          setTimeout(() => this.router.navigate(['home']), 2000);

          }
          else{
            this.loginError = "Email o password errati";
            this.messageService.add({severity: 'error', summary: 'Error!', detail: 'il Login non è andato a buon fine'});
          }
        },
        error: (err) =>{
          console.log(err);
          this.loginError = "Email o password errati";
          this.messageService.add({severity: 'error', summary: 'Error!', detail: 'il Login non è andato a buon fine'});
        }
      })
    }
  }
}
