import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  user: any;

  constructor(private userService: UserService,){}
  
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user'))){
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }



}
