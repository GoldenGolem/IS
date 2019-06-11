import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogModule } from '../blog/blog.module';
import { FileModule } from '../file/file.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AdminBlogListComponent } from './admin-blog-list.component';
import { AdminFileListComponent } from './admin-file-list.component';
import { AdminUserEditComponent } from './admin-user-edit.component';
import { AdminUserListComponent } from './admin-user-list.component';
import { AdminService } from './admin.service';
import { AdminRoutingModule } from './admin.routes';
import { AdminAuthenticatedGuard } from './admin-auth.guard';

@NgModule({
  declarations: [
    AdminBlogListComponent,
    AdminUserListComponent,
    AdminUserEditComponent,
    AdminFileListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    AdminRoutingModule,
    CoreModule,
    FileModule,
    BlogModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [
    AdminService,
    AdminAuthenticatedGuard
  ]
})
export class AdminModule {}
