import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../user/auth.service';
import { FileEntry } from '../file/file-entry';
import { FileService } from '../file/file.service';

@Component({
  selector: 'app-admin-file-list',
  templateUrl: './admin-file-list.component.html'
})
export class AdminFileListComponent {
  public sortFields = [
    {displayName: 'Created', fieldName: 'created'},
    {displayName: 'Title', fieldName: 'title'}
  ];

  constructor(
    public auth: AuthService,
    public fileService: FileService,
    private _route: ActivatedRoute,
    private _router: Router
   ) {}

  public filepermission(entry: FileEntry): void {
    this.fileService.enableFileEntry(entry)
    .subscribe(() => {
        const queryParams: any = Object.assign({}, this._route.snapshot.queryParams);
        queryParams.cache = new Date().valueOf();
        // Navigate to same url with cache buster to trigger results update
        this._router.navigate([], {queryParams, skipLocationChange: true});
      }, err => this.fileService.error = JSON.parse(err._body).msg || err.statusText);
  } 

  public deleteFileEntry(entry: FileEntry): void {
    this.fileService.deleteFileEntry(entry)
      .subscribe(() => {
        const queryParams: any = Object.assign({}, this._route.snapshot.queryParams);
        queryParams.cache = new Date().valueOf();
        // Navigate to same url with cache buster to trigger results update
        this._router.navigate([], {queryParams, skipLocationChange: true});
      }, err => this.fileService.error = JSON.parse(err._body).msg || err.statusText);
  }
}

