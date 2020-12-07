import { Component, OnInit } from '@angular/core';
import {HeaderDetailsService} from '../../services/header-details.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(
    private headerDetails: HeaderDetailsService
  ) { }

  ngOnInit() {
    this.headerDetails.updateCurrentTab('contact');
  }

}
