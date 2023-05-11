import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ProfileModel } from '../model/profile.model';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  profiles: ProfileModel[] = [];

  constructor(private service: UserService){}

  ngOnInit(): void {
    this.service.getAllProfile().subscribe(response => {
      this.profiles = response;
    })   
  }

  


}
