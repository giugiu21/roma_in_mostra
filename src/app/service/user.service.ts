import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl = 'api/users';

  datiUtente = new ReplaySubject;
  userRole = new ReplaySubject;

  constructor( private http: HttpClient) { }

  insertUser(user: any): Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user);
  }

  getUser(email: string): Observable<any>{
    const emailUtente = {email: email};
    return this.http.post<any>(`${this.apiBaseUrl}/user`, emailUtente);
  }



}
