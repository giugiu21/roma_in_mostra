import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user: any;
  dataIscrizione: any;

  constructor(private userService: UserService,){}
  
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user'))){
      this.user = JSON.parse(localStorage.getItem('user'));
      this.dataIscrizione = moment(this.user.createdAt).locale('it').format('dddd DD MMMM YYYY');
    }
  }



}
