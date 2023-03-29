import { Injectable } from '@angular/core';
import { Mostra } from '../models/mostra.model';
import { MOSTRE } from '../mocks/mostre.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostraService {

  constructor() { }

  getMostre(): Observable<Mostra[]>{
    return of (MOSTRE);
  }
}
