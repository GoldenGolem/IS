import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FileCreateComponent } from './file-create.component';
import { FileListComponent } from './file-list.component';
import { FileViewComponent } from './file-view.component';
import { FileEditComponent } from './file-edit.component';
import { FileEntryResolver } from './file-entry.resolver';
import { AuthenticatedGuard } from '../user/authenticated.guard';
import { CanDeactivateGuard } from '../core/can-deactivate.guard';

const BLOG_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: FileCreateComponent,
        canActivate: [AuthenticatedGuard],
        canDeactivate: [CanDeactivateGuard],
        data: {
          title: 'Create File Entry'
        }
      },
      {
        path: 'list',
        component: FileListComponent,
        data: {
          title: 'File List'
        }
      },
      {
        path: ':slug',
        component: FileViewComponent,
        data: {
          title: 'File Entry: '
        },
        resolve: {
          resolveData: FileEntryResolver
        }
      },
      {
        path: ':slug/edit',
        component: FileEditComponent,
        data: {
          title: 'File Edit: '
        },
        resolve: {
          resolveData: FileEntryResolver
        },
        canActivate: [AuthenticatedGuard],
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(BLOG_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class FileRoutingModule {}
