import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {UsersComponent} from '../../@core/views/users/users.component';
import {InboxComponent} from '../../@core/views/inbox/inbox.component';
import {TodoComponent} from '../../@core/views/todo/todo.component';
import {ChatComponent} from '../../@core/views/chat/chat.component';
import {SupportCenterComponent} from '../../@core/views/support-center/support-center.component';
import {ProjectComponent} from '../../@core/views/project/project.component';
import {ContactsComponent} from '../../@core/views/contacts/contacts.component';
import {ProfileComponent} from '../../@core/views/profile/profile.component';
import {SettingsComponent} from '../../@core/views/settings/settings.component';

const routes: Routes = [{
    path: '', component: DashboardComponent, children: [
      {
        path: 'dashboard', children: [
          {
            path: '',
            loadChildren: () => import('../../@core/views/views.module').then(m => m.ViewsModule)
          },
        ]
      },
    {
      path: 'users', component: UsersComponent,
    },
    {
      path: 'inbox', component: InboxComponent,
    },
    {
      path: 'todo', component: TodoComponent,
    },
    {
      path: 'support_center', component: SupportCenterComponent,
    },
    {
      path: 'settings', component: SettingsComponent,
    },
    {
      path: 'contacts', component: ContactsComponent,
    },
    {
      path: 'profile', component: ProfileComponent,
    },
    {
      path: 'project', component: ProjectComponent,
    },
    {
      path: 'chat', component: ChatComponent,
    },
    {
      path: 'pages',
      loadChildren: () => import('../../@core/majors/pages/pages.module').then(m => m.PagesModule)
    },
    {
      path: 'features',
      loadChildren: () => import('../../@core/majors/features/features.module').then(m => m.FeaturesModule)
    },
    {
      path: 'apps',
      loadChildren: () => import('../../@core/majors/apps/apps.module').then(m => m.AppsModule)
    },

    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardRouting {
}
