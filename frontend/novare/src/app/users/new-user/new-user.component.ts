import { Component, OnInit } from '@angular/core';

interface Profile {
  code: number,
  name: string
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  profiles: Profile[] = [];

  ngOnInit(): void {
    this.profiles = [
      {code: 1, name: 'Administrador'},
      {code: 2, name:'Financeiro'}      
    ]    
  }

  


}
