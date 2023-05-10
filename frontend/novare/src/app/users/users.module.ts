import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    ButtonModule
  ]
})
export class UsersModule { }
