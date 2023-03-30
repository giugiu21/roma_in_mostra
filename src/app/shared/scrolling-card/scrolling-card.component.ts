import { Component, Input } from '@angular/core';
import { Mostra } from 'src/app/models/mostra.model';

@Component({
  selector: 'app-scrolling-card',
  templateUrl: './scrolling-card.component.html',
  styleUrls: ['./scrolling-card.component.scss']
})
export class ScrollingCardComponent {
  
  @Input() mostre: Mostra[];
  mostreFeatured: Mostra[];

  

  getFeatured(): Mostra[]{
    this.mostreFeatured = this.mostre.filter(mostra => mostra.featured == true);
    return this.mostreFeatured;
  }

  
}
