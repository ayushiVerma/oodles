import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppsComponent} from './apps.component';

const routes: Routes = [
  {
    path: '', component: AppsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AppsRouting {
}
