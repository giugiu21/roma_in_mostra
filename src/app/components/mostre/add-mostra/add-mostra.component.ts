import { MostraService } from 'src/app/service/mostra.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Mostra } from 'src/app/models/mostra.model';

@Component({
  selector: 'app-add-mostra',
  templateUrl: './add-mostra.component.html',
  styleUrls: ['./add-mostra.component.scss']
})
export class AddMostraComponent {

  mostraInserita: Mostra;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    featured: new FormControl('', Validators.required),
    published: new FormControl(''),
  })


  constructor(
    private router: Router,
    private mostraService: MostraService,
  ){}

  onSubmit(){
    const newMostra = this.form.valueChanges;

    this.mostraService.postMostra(newMostra).pipe(take(1))
    .subscribe({
      next: (res) => {
        console.log(res);
        this.mostraInserita = res;
      },
      error: (err) => {
        console.log(err)
      }});
  }



}
