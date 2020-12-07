import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent
  },
  {
    path: 'pages', component: PagesComponent
    // loadChildren: () => import('../../@core/views/views.module').then(m => m.ViewsModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PagesRouting {
}
