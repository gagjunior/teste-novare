import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from './components/components.module';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users/create",
    component: NewUserComponent
  },
  {
    path: "users/list",
    component: UserListComponent
  },
  {
    path: "users/detail/:id",
    component: UserDetailComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
