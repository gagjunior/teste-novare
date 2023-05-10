import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    DropdownModule
  ]
})
export class UsersModule { }
