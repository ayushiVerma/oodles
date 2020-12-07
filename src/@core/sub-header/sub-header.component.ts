import {Component, Input, OnInit} from '@angular/core';
import {HeaderDetailsService} from '../services/header-details.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  @Input() subHeaderData = null;

  defaultData = {
    name: 'Dashboard',
    details: '',
    subDetails: 'Welcome',
    isSearchVisible: false
  };

  constructor(
    private headerDetailsService: HeaderDetailsService
  ) { }

  ngOnInit() {
     this.headerDetailsService.headerDetails.subscribe(res => {
       console.log(' >>>>RES');
       console.log(res);
       this.defaultData = res;
    });
  }
}
