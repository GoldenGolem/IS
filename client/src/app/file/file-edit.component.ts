import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../user/auth.service';
import { FileService } from './file.service';
import { FileEntry } from './file-entry';

@Component({
  selector: 'app-file-edit',
  templateUrl: './file-edit.component.html'
})
export class FileEditComponent implements OnInit, OnDestroy {
  public fileEditForm: FormGroup;
  public fileEntry;
  private _isBeingSaved = false;

  constructor(
    public authService: AuthService,
    public fileService: FileService,
    public location: Location,
    private _route: ActivatedRoute,
    private _fb: FormBuilder
  ) {}

  public editFileEntry(): void {
    Object.assign(this.fileEntry, this.fileEditForm.value);
    this._isBeingSaved = true;
    this.fileService.updateFileEntry(this.fileEntry);
  }

  canDeactivate() {
    const formValues = this.fileEditForm.value;
    const valuesUnchanged = formValues.title === this.fileEntry.title
      && formValues.content === this.fileEntry.content;

    if (valuesUnchanged || this._isBeingSaved) {
      return true;
    }

    return window.confirm('Discard changes?');
  }

  ngOnInit() {
    this.fileEntry = this._route.snapshot.data['resolveData'];
    this.fileEditForm = this._fb.group({
      'title': [this.fileEntry.title, Validators.required],
      'content': [this.fileEntry.content, Validators.required]
    });
  }

  ngOnDestroy() {
    this.fileService.error = null;
  }
}
