import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderDetailsService {

  currentTab = '';

  HeaderDetailsData = [
    {
      key: 'project',
      data: {
        name: 'Projects',
        details: '',
        subDetails: 'Welcome',
        isSearchVisible: false
      }
    },
    {
      key: 'chat',
      data: {
        name: 'Chat',
        details: '',
        subDetails: 'Enter User Name',
        isSearchVisible: true
      }
    },
    {
      key: 'todo',
      data: {
        name: 'ToDos',
        details: '',
        subDetails: 'Tasks',
        isSearchVisible: true
      }
    },
    {
      key: 'contact',
      data: {
        name: 'Contact',
        details: '',
        subDetails: 'Add Contacts',
        isSearchVisible: true
      }
    },
    {
      key: 'profile',
      data: {
        name: 'Profile',
        details: '',
        subDetails: 'Update Profile',
        isSearchVisible: true
      }
    },
    {
      key: 'support_center',
      data: {
        name: 'Support Center',
        details: '',
        subDetails: 'Contact Us',
        isSearchVisible: false
      }
    },
    {
      key: 'users',
      data: {
        name: 'User List',
        details: 'Page 1',
        subDetails: '',
        isSearchVisible: true
      }
    },
    {
      key: 'settings',
      data: {
        name: 'Settings',
        details: 'Manage User',
        subDetails: '',
        isSearchVisible: true
      }
    },
    {
      key: 'user_dashboard',
      data: {
        name: 'User Dashboard',
        details: 'Manage',
        subDetails: '',
        isSearchVisible: false
      }
    },
    {
      key: 'page',
      data: {
        name: 'Pages',
        details: '',
        subDetails: 'Page Details',
        isSearchVisible: true
      }
    },
    {
      key: 'inbox',
      data: {
        name: 'Inbox',
        details: '',
        subDetails: 'Inbox Messages',
        isSearchVisible: false
      }
    }
  ];

  public headerDetails: Subject<any> = new Subject<any>();

  constructor() {
    this.headerDetails.subscribe(res => {
      this.currentTab = res;
    });
  }

  /**
   * Update the current Tab
   * @param tab: string
   */
  updateCurrentTab(tab: string) {
    this.currentTab = tab;

    const details = this.HeaderDetailsData.filter(d => {
      return d.key === tab;
    })[0].data;

    this.headerDetails.next(details);
  }
}
