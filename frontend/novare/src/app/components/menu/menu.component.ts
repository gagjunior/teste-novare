import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [
    {
        label: 'Usuários',
        icon: 'pi pi-fw pi-users',
        items: [
            {
                label: 'Novo',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: 'users/create'
            },
            {
                label: 'Listar',
                icon: 'pi pi-fw pi-list'
            }
        ]
    },
    {
        label: 'Perfis',
        icon: 'pi pi-fw pi-bars',
        items: [
            {
                label: 'Novo',
                icon: 'pi pi-fw pi-plus'
            },
            {
                label: 'Listar',
                icon: 'pi pi-fw pi-list'
            }
        ]
    },
];

  ngOnInit(): void {
      
  }

}
