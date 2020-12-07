import { Component, OnInit } from '@angular/core';
import {HeaderDetailsService} from '../../services/header-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private headerDetails: HeaderDetailsService
  ) { }

  ngOnInit() {
    this.headerDetails.updateCurrentTab('profile');
  }

}
