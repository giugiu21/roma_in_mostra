import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiBaseUrl = 'api/users';

  constructor(
    private http: HttpClient,
    private UserService: UserService,
  ) { }

  login(email: string, password: string): Observable<any>{
    const user = {email: email, password: password}
    return this.http.post<any>(`${this.apiBaseUrl}/login`, user);
  }

  saveStorage(res: any){
    const user = {
      name: res.name,
      lastname: res.lastname,
      email: res.email,
      password: res.password,
      role: res.role,
      createdAt: res.createdAt,
    }

    this.UserService.userRole.next(res.role);
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogged(): boolean{
    return JSON.parse(localStorage.getItem('user'));
  }

  logout(): void{
    localStorage.removeItem('user');
    this.UserService.userRole.next('');
  }



}
