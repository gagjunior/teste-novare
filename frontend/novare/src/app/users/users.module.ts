import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { NewUserComponent } from './new-user/new-user.component';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewUserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule  
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
