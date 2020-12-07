import { Component, OnInit } from '@angular/core';
import {HeaderDetailsService} from '../../services/header-details.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(
    private headerDetails: HeaderDetailsService
  ) { }

  ngOnInit() {
    this.headerDetails.updateCurrentTab('page');
  }

}
