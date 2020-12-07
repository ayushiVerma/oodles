import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, SubHeaderComponent],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
