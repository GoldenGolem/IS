/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { FileViewComponent } from './file-view.component';
import { FileService } from './file.service';
import { AuthService } from '../user/auth.service';

const fileEntry = {
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
};
let fixture;
let component;

describe('FileViewComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileViewComponent
      ],
      providers: [
        {
          provide: Router,
          useValue: {navigate: function() {}}
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {resolveData: fileEntry}
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
            deleteFileEntry: fileEntryInput => Observable.from([1])
          }
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FileViewComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('loads the file view component', () => {
    expect(component).toBeTruthy();
  });

  it('initializes with file entry from route resolve', () => {
    component.ngOnInit();
    expect(component.fileEntry).toEqual(fileEntry);
  });

  it('calls FileService deleteFileEntry method for component method', () => {
    const fileService = TestBed.get(FileService);
    component.ngOnInit();
    spyOn(fileService, 'deleteFileEntry').and.callThrough();
    component.deleteFileEntry();
    expect(fileService.deleteFileEntry).toHaveBeenCalledWith(fileEntry);
  });
});
