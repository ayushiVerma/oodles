import { Component, OnInit } from '@angular/core';
import {HeaderDetailsService} from '../../services/header-details.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    private headerDetails: HeaderDetailsService
  ) { }

  ngOnInit() {
    this.headerDetails.updateCurrentTab('user_dashboard');
  }

}
