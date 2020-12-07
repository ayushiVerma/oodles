import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps.component';
import {AppsRouting} from './apps.routing';

@NgModule({
  declarations: [AppsComponent],
  imports: [
    CommonModule,
    AppsRouting
  ]
})
export class AppsModule { }
