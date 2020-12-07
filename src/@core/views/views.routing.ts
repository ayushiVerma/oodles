import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ViewsRouting {
}
