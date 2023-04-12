import { Component, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Mostra } from 'src/app/models/mostra.model';
import { MostraService } from 'src/app/service/mostra.service';

@Component({
  selector: 'app-scrolling-card',
  templateUrl: './scrolling-card.component.html',
  styleUrls: ['./scrolling-card.component.scss']
})
export class ScrollingCardComponent {
  
  mostre: Mostra[];
  //mostreFeatured: Mostra[];

  constructor( private mostraService: MostraService){}

  mostre$: Observable<Mostra[]> = this.mostraService.getMostre().pipe(
    map(response => response.filter(mostra => mostra.featured == true)),
    //map(res => this.mostre = res),
  );
  

  // getFeatured(): Mostra[]{
  //   return this.mostre.filter(mostra => mostra.featured == true);
  // }

  
}
