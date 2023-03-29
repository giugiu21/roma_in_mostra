import { Component, Input } from '@angular/core';
import { Mostra } from 'src/app/models/mostra.model';


@Component({
  selector: 'app-mostra-card',
  templateUrl: './mostra-card.component.html',
  styleUrls: ['./mostra-card.component.scss']
})
export class MostraCardComponent {

  @Input() mostre: Mostra[];
}
