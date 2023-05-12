import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../model/profile.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  profiles!: ProfileModel[];
  

  constructor(private service: UserService){}

  ngOnInit() {
    this.getAllProfiles()                  
  }

  getAllProfiles(){
    this.service.getAllProfiles().subscribe(obj => {
      this.profiles = obj
      console.log(this.profiles)
    }) 
  }

  


}
