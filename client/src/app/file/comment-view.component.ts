import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../user/auth.service';
import { FileService } from './file.service';
import { FileEntry } from './file-entry';
import { Comment } from './comment';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html'
})
export class CommentViewComponent {
  @Input() fileEntry: FileEntry;
  @Input() comment: Comment;
  @Output() onDeleteSuccess = new EventEmitter();
  public commentIsBeingEdited = false;
  public error: string;

  constructor(
    private _auth: AuthService,
    private _fileService: FileService
  ) {}

  public canEditDelete(): boolean {
    if (!this._auth.loggedIn) {
      return false;
    }

    const isCommentAuthor = this._auth.user()._id === this.comment.user._id;

    return this._auth.isAdmin || isCommentAuthor;
  }

  public deleteComment(): void {
    this._fileService.deleteComment(this.comment)
      .subscribe(
        () => this.onDeleteSuccess.emit(),
        err => this.error = JSON.parse(err._body).msg || err.statusText
      );
  }

  public onCommentCancel(): void {
    this.commentIsBeingEdited = false;
  }

  public onCommentSave(comment: Comment): void {
    this.comment = comment;
    this.commentIsBeingEdited = false;
  }
}
