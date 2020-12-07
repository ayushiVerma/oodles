import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ViewsRouting} from './views.routing';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [HomeComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    ViewsRouting
  ],
  exports: [
    // UsersComponent
  ]
})
export class ViewsModule { }
