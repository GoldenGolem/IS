import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FileService } from './file.service';
import { FileEntry } from './file-entry';
import { Comment } from './comment';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html'
})
export class FileViewComponent implements OnInit, OnDestroy {
  public fileEntry: FileEntry;
  public newCommentIsBeingEntered = false;

  constructor(
    public auth: AuthService,
    public fileService: FileService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  public deleteFileEntry(): void {
    this.fileService.deleteFileEntry(this.fileEntry)
      .subscribe(() => {
        this._router.navigate(['/file/list']);
      }, err => this.fileService.error = JSON.parse(err._body).msg || err.statusText);
  }

  public filePermission(): void {
    this.fileService.enableFileEntry(this.fileEntry)
      .subscribe(() => {
        this._router.navigate(['/file/list']);
      }, err => this.fileService.error = JSON.parse(err._body).msg || err.statusText); 
  }

  public onCommentCancel(): void {
    this.newCommentIsBeingEntered = false;
  }

  public onCommentDeleteSuccess(index: number): void {
    this.fileEntry.comments.splice(index, 1);
  }

  public onCommentSave(comment: Comment): void {
    this.newCommentIsBeingEntered = false;
    this.fileEntry.comments.push(comment);
  }

  ngOnInit() {
    // Get file entry data from route resolve
    this.fileEntry = this._route.snapshot.data['resolveData'];
  }

  ngOnDestroy() {
    this.fileService.error = null;
  }
}
