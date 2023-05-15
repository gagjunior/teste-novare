import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDto } from '../dto/user-dto';
import { ProfileModel } from '../model/profile.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  profiles: ProfileModel[] = [];

  formGroup = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    profile: new FormControl,
    password: new FormControl<string>('')
  })




  constructor(private service: UserService) { }

  ngOnInit() {
    this.getAllProfiles()


  }

  getAllProfiles() {
    this.service.getAllProfiles().subscribe(obj => {
      this.profiles = obj
      console.log(this.profiles)
    })
  }

  public saveNewUser() {

    let user: UserDto = {
      name: this.formGroup.controls.name.value,
      email: this.formGroup.controls.email.value,
      profileId: this.formGroup.controls.profile.value['id'],
      password: this.formGroup.controls.password.value
    }

    this.service.saveNewUser(user).subscribe()

  }




}
