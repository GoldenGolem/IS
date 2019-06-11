import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { FileEntry } from './file-entry';
import { Comment } from './comment';

@Injectable()
export class FileService {
  /**
   * File errors stored here for alerting to user
   */
  public error: string;

  constructor(
    private _authHttp: AuthHttp,
    private _http: Http,
    private _router: Router
  ) {}

  /**
   * Create file entry
   * @param {FileEntry} entry - File entry
   */
  public createFileEntry(entry: FileEntry): void {
    this._authHttp.post('/api/file', entry)
      .map(res => res.json())
      .subscribe(fileEntry => {
        this._router.navigate(['/file', fileEntry._id]);
      }, err => this.error = JSON.parse(err._body).msg || err.statusText);
  }

  /**
   * Delete file entry
   * @param {FileEntry} entry - File entry
   */
  public deleteFileEntry(entry: FileEntry): Observable<any> {
    return this._authHttp.delete('/api/file/' + entry._id)
      .map(res => res.json());
  }

  /**
   * Enable/Disable file entry
   * @param {FileEntry} entry - File entry
   */
  public enableFileEntry(entry: FileEntry): Observable<any> {
    return this._authHttp.get('/api/file/enable/' + entry._id)
      .map(res => res.json());
  }


  /**
   * Get file entry using slug
   * @param {String} slug - Slug made from file title
   * @return {Promise<FileEntry>} fileEntry - Promise resolving to fileEntry or []
   */
  public getFileEntryBySlug(slug: string): Promise<FileEntry> {
    return this._http.get('/api/file/' + slug)
      .map(res => res.json())
      .toPromise();
  }

  /**
   * Get file list. Uses arrow function format for this binding so it can work
   * when passed into component inputs.
   * @param {Object} params - Params for filtering file list
   * @return {Promise<any>} fileList - Promise resolving to fileEntries, count, skip
   */
  public getList = (params: any): Promise<any> => {
    const searchParams = Object.assign({}, params);

    if (searchParams.page) {
      searchParams.skip = searchParams.limit * (searchParams.page - 1);
      delete searchParams.page;
    }

    if (!searchParams.sort) {
      searchParams.sort = '-created';
    }

    const queryParams = new URLSearchParams();

    for (const key in searchParams) {
      if (searchParams.hasOwnProperty(key)) {
        queryParams.set(key, searchParams[key]);
      }
    }

    return this._http.get('/api/file', {search: queryParams})
      .map(res => res.json())
      .map(res => ({
        items: res.files,
        count: res.count,
        skip: searchParams.skip
      }))
      .toPromise();
  }

  /**
   * Update file entry
   * @param {FileEntry} entry - File entry
   * @return {Observable<FileEntry>} file entry
   */
  public updateFileEntry(entry: FileEntry): void {
    delete entry.comments;

    this._authHttp.put('/api/file/' + entry.slug, entry)
      .map(res => res.json())
      .subscribe(fileEntry => {
        this._router.navigate(['/file', fileEntry.slug]);
      }, err => this.error = JSON.parse(err._body).msg || err.statusText);
  }

  /**
   * Create new comment for a file entry.
   * @param {FileEntry} entry - File entry
   * @return {Observable<FileEntry>} file entry
   */
  public createComment(comment: Comment, fileEntry: FileEntry): Observable<Comment> {
    return this._authHttp.post(`/api/file/${fileEntry._id}/comment`, comment)
      .map(res => res.json());
  }

  /**
   * Delete comment.
   * @param {Comment} comment - Comment
   * @return {Observable<any>}
   */
  public deleteComment(comment: Comment): Observable<any> {
    return this._authHttp.delete('/api/comment/' + comment._id)
      .map(res => res.json());
  }

  /**
   * Get comment by id.
   * @param {String} id - Comment id
   * @return {Observable<Comment>} comment
   */
  public getCommentById(id: string): Observable<Comment> {
    return this._authHttp.get('/api/comment/' + id)
      .map(res => res.json());
  }

  /**
   * Update comment
   * @param {Comment} comment - Comment
   * @return {Observable<Comment>} comment
   */
  public updateComment(comment: Comment): Observable<Comment> {
    return this._authHttp.put('/api/comment/' + comment._id, comment)
      .map(res => res.json());
  }
}
