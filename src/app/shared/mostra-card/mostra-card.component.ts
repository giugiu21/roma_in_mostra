import { Component, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Mostra } from 'src/app/models/mostra.model';
import { MostraService } from 'src/app/service/mostra.service';


@Component({
  selector: 'app-mostra-card',
  templateUrl: './mostra-card.component.html',
  styleUrls: ['./mostra-card.component.scss']
})
export class MostraCardComponent {

  mostre: Mostra[];

  constructor(private mostraService: MostraService){}

  mostre$: Observable<Mostra[]> = this.mostraService.getMostre().pipe(
    map(res => this.mostre = res),
  );


}
