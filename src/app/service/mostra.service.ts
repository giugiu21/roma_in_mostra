import { Injectable } from '@angular/core';
import { Mostra } from '../models/mostra.model';
import { MOSTRE } from '../mocks/mostre.mock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MostraService {

  apiBaseUrl = 'api/mostre';

  constructor( private http: HttpClient) {}

  // getMostre(): Observable<Mostra[]>{
  //   return of (MOSTRE);
  // }

  // getMostra(id: number): Observable<Mostra> {
  //   const mostra = MOSTRE.find(mostra => mostra._id == id);
  //   return of (mostra);

  // }

  getMostre() {
    return this.http.get<Mostra[]>(`${this.apiBaseUrl}/`);
  }

  getMostra(id: string): Observable<Mostra>{
    return this.http.get<Mostra>(`${this.apiBaseUrl}/${id}`);
  }

  postMostra(res: any): Observable<any>{
    return this.http.post<any>(`${this.apiBaseUrl}/`, res);
  }

}
