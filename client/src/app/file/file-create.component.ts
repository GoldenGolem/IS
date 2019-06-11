import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { FileService } from './file.service';
import { ActivatedRoute, Router } from '@angular/router';
const uploadOptions = {
  url: '/api/file',
  authToken: localStorage['id_token']
};



@Component({
  selector: 'app-file-create',
  templateUrl: './file-create.component.html'
})
export class FileCreateComponent implements OnInit, OnDestroy {
  public fileCreateForm: FormGroup;
  private _isBeingSaved = false;
  public uploader: FileUploader = new FileUploader(uploadOptions);
  public uploading = false;  
  public profilePic = "";

  constructor(
    public fileService: FileService,
    public location: Location,
    private _fb: FormBuilder,
    private _detector: ChangeDetectorRef,
    private _router: Router
  ) {}

  public createFileEntry(): void {
    this._isBeingSaved = true;
    this.fileService.createFileEntry(this.fileCreateForm.value);
  }

  canDeactivate() {
    const formValues = this.fileCreateForm.value;
    const valuesUnchanged = formValues.title === '' && formValues.content === '';

    if (valuesUnchanged || this._isBeingSaved) {
      return true;
    }

    return window.confirm('Discard changes?');
  }

  public startUpload(): void {
    this.uploading = true;
    this.uploader.queue[0].upload();
  }

  public detectChanges(): void {
    this._detector.detectChanges();
  }

  ngOnInit() {
    this.fileCreateForm = this._fb.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required]
    });
    this.uploader.onSuccessItem = (item, fileUrl) => {
      this._router.navigate(['/file/list']);
    };
  }

  ngOnDestroy() {
    this.fileService.error = null;
  }
}
