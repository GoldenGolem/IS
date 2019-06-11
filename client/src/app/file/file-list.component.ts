import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/skip';

import { AuthService } from '../user/auth.service';
import { FileService } from './file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html'
})
export class FileListComponent {
  public sortFields = [
    {displayName: 'Created', fieldName: 'created'},
    {displayName: 'Title', fieldName: 'title'}
  ];

  constructor(public auth: AuthService, public fileService: FileService) {}
}
