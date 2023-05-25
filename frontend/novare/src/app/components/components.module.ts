import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
