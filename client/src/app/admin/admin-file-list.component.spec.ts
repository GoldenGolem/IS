/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { AdminFileListComponent } from './admin-file-list.component';
import { AuthService } from '../user/auth.service';
import { FileService } from '../file/file.service';

const fileListStub = [{
  title: 'Test file entry',
  content: 'Test content',
  created: new Date(),
  _id: 'objectid',
  user: {
    profile: {
      name: 'Test User'
    },
    _id: 'objectid'
  }
}];
let fixture;
let component;

describe('AdminFileListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdminFileListComponent
      ],
      providers: [
        {
          provide: Router,
          useValue: {navigate: function() {}}
        },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: Observable.from([1]),
            snapshot: {
              data: {resolveData: {fileEntries: fileListStub}},
              queryParams: {limit: 10, sort: '-created', skip: 0}
            }
          }
        },
        {
          provide: AuthService,
          useValue: {}
        },
        {
          provide: FileService,
          useValue: {
            deleteFileEntry: entry => Observable.from([entry])
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(AdminFileListComponent);
    component = fixture.debugElement.componentInstance;
    component.ngOnDestroy = function() {};
  });

  it('loads the admin file list component', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteFileEntry()', () => {
    it('calls deleteFileEntry service method', () => {
      const fileService = TestBed.get(FileService);
      spyOn(fileService, 'deleteFileEntry').and.callThrough();
      component.deleteFileEntry(fileListStub[0]);
      expect(fileService.deleteFileEntry).toHaveBeenCalledWith(fileListStub[0]);
    });
  });
});
