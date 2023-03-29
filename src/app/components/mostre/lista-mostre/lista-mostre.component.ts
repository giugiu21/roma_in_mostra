
import { Component, OnInit } from '@angular/core';
import { Mostra } from 'src/app/models/mostra.model';
import { MostraService } from 'src/app/service/mostra.service';

@Component({
  selector: 'app-lista-mostre',
  templateUrl: './lista-mostre.component.html',
  styleUrls: ['./lista-mostre.component.scss']
})
export class ListaMostreComponent implements OnInit{

  mostre: Mostra[];

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
