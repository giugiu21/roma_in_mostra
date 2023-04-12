import { MostraService } from 'src/app/service/mostra.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { Mostra } from 'src/app/models/mostra.model';

@Component({
  selector: 'app-add-mostra',
  templateUrl: './add-mostra.component.html',
  styleUrls: ['./add-mostra.component.scss']
})
export class AddMostraComponent {

  mostraInserita: any;

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
    private modalService: NgbModal
  ){}

  onSubmit(){
    const newMostra = this.form.value;

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

  open(content: any){
    this.onSubmit();
    this.modalService.open(content, { ariaLabelledBy: 'modale add mostre', size: 'lg', centered: true}).result.then(() =>{
      this.form.reset();

    }).catch((res) => {
      this.mostraInserita = '';
      this.router.navigate(['mostre']);
    });
   }



}
