/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { FileListComponent } from './file-list.component';
import { AuthService } from '../user/auth.service';
import { FileService } from './file.service';

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

describe('FileListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FileListComponent
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
          useValue: {getList: function() {}}
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FileListComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('loads the file list component', () => {
    expect(component).toBeTruthy();
  });
});
