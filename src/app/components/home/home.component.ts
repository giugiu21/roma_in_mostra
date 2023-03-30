import { Component, OnInit } from '@angular/core';
import { Mostra } from 'src/app/models/mostra.model';
import { MostraService } from 'src/app/service/mostra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mostre: Mostra[];

  titoloCliccato: string;

  places = [{
      place: "Galleria Borghese",
  },
  {
    place: 'Palazzo Bonaparte'
  }
];


memorizzaTitolo(titolo: string){
  if(this.titoloCliccato == titolo){
    this.titoloCliccato = '';
  }
  else{
    this.titoloCliccato = titolo;
  }
  
}


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
  
}
