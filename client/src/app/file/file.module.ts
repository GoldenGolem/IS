import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FileCreateComponent } from './file-create.component';
import { FileViewComponent } from './file-view.component';
import { FileEditComponent } from './file-edit.component';
import { FileListComponent } from './file-list.component';
import { CommentViewComponent } from './comment-view.component';
import { CommentEditComponent } from './comment-edit.component';
import { FileEntryResolver } from './file-entry.resolver';
import { FileService } from './file.service';
import { FileRoutingModule } from './file.routes';

@NgModule({
  declarations: [
    FileCreateComponent,
    FileViewComponent,
    FileEditComponent,
    FileListComponent,
    CommentViewComponent,
    CommentEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    FileRoutingModule,
    CoreModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [
    FileService,
    FileEntryResolver,
  ]
})
export class FileModule {}
