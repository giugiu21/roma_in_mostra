import { MostraService } from './../../../service/mostra.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mostra } from './../../../models/mostra.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  mostra: Mostra;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private MostraService: MostraService
  ){}

  onGetMostra(): void{
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));

    this.MostraService.getMostra(id).subscribe({
      next: (res)=> {
        this.mostra = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void{
    this.onGetMostra();
  }

}
