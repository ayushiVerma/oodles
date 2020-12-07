import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FeaturesComponent} from './features.component';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FeaturesRouting {
}
