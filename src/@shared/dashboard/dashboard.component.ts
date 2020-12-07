import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  toggleState = true;

  @Output() subHeaderData = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleMainContainer(toggleState) {
    this.toggleState = toggleState;
  }
}
