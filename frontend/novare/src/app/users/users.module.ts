import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';

const usersRoutes: Routes = [
  {
    path: '',
    component: NewUserComponent
  }
]


@NgModule({
  declarations: [
    NewUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(usersRoutes),
    InputTextModule,
    PasswordModule,
    DropdownModule,
    ButtonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
