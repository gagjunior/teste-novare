import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../model/user.model';
import { UserService } from '../user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserModel[] = []
  selectedUser: UserModel | undefined;

  constructor(private service: UserService, private messageService: MessageService){}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(resp => {
      this.users = resp
    })
  }

    


}