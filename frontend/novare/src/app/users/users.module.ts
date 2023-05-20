import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    NewUserComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule
  ],
  providers: [
    UserService,
    MessageService

  ]
})
export class UsersModule { }
