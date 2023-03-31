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

  titoloCliccato= '';

  places = [{
      place: "Città del Vaticano",
  },
  {
    place: 'Galleria Borghese'
  },
  {
    place: 'Galleria Nazionale'
  },
  {
    place: 'MACRO'
  },
  {
    place: 'Palazzo Barberini'
  },
  {
    place: 'Palazzo Bonaparte'
  },
  {
    place: 'Palazzo Braschi'
  },
  {
    place: 'Villa Pamphilj'
  },
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
