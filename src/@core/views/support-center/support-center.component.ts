import { Component, OnInit } from '@angular/core';
import {HeaderDetailsService} from '../../services/header-details.service';

@Component({
  selector: 'app-support-center',
  templateUrl: './support-center.component.html',
  styleUrls: ['./support-center.component.scss']
})
export class SupportCenterComponent implements OnInit {

  constructor(
    private headerDetails: HeaderDetailsService
  ) { }

  ngOnInit() {
    this.headerDetails.updateCurrentTab('support_center');
  }

}
