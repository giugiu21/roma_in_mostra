import { Component, OnInit } from '@angular/core';
import { Mostra } from 'src/app/models/mostra.model';
import { MostraService } from 'src/app/service/mostra.service';

@Component({
  selector: 'app-scrolling-card',
  templateUrl: './scrolling-card.component.html',
  styleUrls: ['./scrolling-card.component.scss']
})
export class ScrollingCardComponent implements OnInit{
  mostre: Mostra[];
  mostreFeatured: Mostra[];

  constructor(private mostraService: MostraService){}

  ngOnInit(): void {
    this.mostraService.getMostre().subscribe({
      next: (response) => {
        this.mostre = response;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  getFeatured(mostre: Mostra[]): Mostra[]{
    for(let mostra of mostre){
      if(mostra.featured){
        this.mostreFeatured.push(mostra);
      }
    }
    return this.mostreFeatured;
  }

  
}
