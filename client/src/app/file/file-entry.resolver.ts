import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { FileService } from './file.service';

@Injectable()
export class FileEntryResolver implements Resolve<any> {
  constructor(private _router: Router, private _fileService: FileService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const slug = route.params['slug'];
    return this._fileService.getFileEntryBySlug(slug)
      .then(fileEntry => {
        if (fileEntry) {
          return fileEntry;
        } else {
          this._router.navigate(['/404']);
          return null;
        }
      }, err => {
        this._router.navigate(['/404']);
        return null;
      });
  }
}
