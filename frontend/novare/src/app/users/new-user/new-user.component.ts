import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../model/profile.model';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  profiles: ProfileModel[] = [];

 formGroup = new FormGroup({
  name: new FormControl(''),
}) 
  

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

   public testPrint(){
    console.log(this.formGroup.controls.name.value)
  }

  


}
