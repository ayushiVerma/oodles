import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {DashboardRouting} from './dashboard.routing';
import {CoreModule} from '../../@core/core.module';
import {RouterModule} from '@angular/router';
import {UsersComponent} from '../../@core/views/users/users.component';
import {InboxComponent} from '../../@core/views/inbox/inbox.component';
import {TodoComponent} from '../../@core/views/todo/todo.component';
import {ChatComponent} from '../../@core/views/chat/chat.component';
import {SupportCenterComponent} from '../../@core/views/support-center/support-center.component';
import {ProjectComponent} from '../../@core/views/project/project.component';
import {ProfileComponent} from '../../@core/views/profile/profile.component';
import {ContactsComponent} from '../../@core/views/contacts/contacts.component';
import {SettingsComponent} from '../../@core/views/settings/settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    InboxComponent,
    TodoComponent,
    ChatComponent,
    SupportCenterComponent,
    ProjectComponent,
    ProfileComponent,
    ContactsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    CoreModule,
    RouterModule,
  ]
})
export class DashboardModule { }
