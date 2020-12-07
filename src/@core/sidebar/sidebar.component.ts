import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  /**
   *  Emit the toggle Side bar class > Used in Dashboard
   */
  @Output() emitToggleSidebarClass = new EventEmitter();

  toggleSidebar = true;
  toggleProfileDropdown = false;

  toggleUserDropdown = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebarNav() {
    this.toggleSidebar = !this.toggleSidebar;
    this.emmitToggleSidebar();
  }

  /**
   * Function used to emit the toggle sidebar class to dashboard.
   */
  emmitToggleSidebar() {
    this.emitToggleSidebarClass.emit(this.toggleSidebar);
  }
}
