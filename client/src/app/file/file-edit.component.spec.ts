/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../user/auth.service';
import { FileEditComponent } from './file-edit.component';
import { FileService } from './file.service';

const fileEntryStub = {
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

describe('FileEditComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        FileEditComponent
      ],
      providers: [
        {provide: Location, useValue: {}},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {resolveData: fileEntryStub}
            }
          }
        },
        {
          provide: FileService,
          useValue: {
            updateFileEntry: (fileEntry) => fileEntry
          }
        },
        {
          provide: AuthService,
          useValue: {}
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FileEditComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('loads the file edit component', () => {
    expect(component).toBeTruthy();
  });

  it('initializes with file entry from route resolve', () => {
    component.ngOnInit();
    expect(component.fileEntry).toEqual(fileEntryStub);
  });

  it('creates a fileEditForm FormGroup', () => {
    component.ngOnInit();
    expect(component.fileEditForm instanceof FormGroup).toBe(true);
  });

  it('initializes form with file entry', () => {
    component.ngOnInit();
    expect(component.fileEditForm.value).toEqual({
        title: fileEntryStub.title,
        content: fileEntryStub.content
      });
  });

  it('calls FileService editFileEntry method for component method', () => {
    const fileService = TestBed.get(FileService);
    const editedFileEntry = {title: 'edited title', content: 'edited content'};
    const expectedFileEntryArg = Object.assign({}, fileEntryStub, editedFileEntry);
    component.ngOnInit();
    component.fileEditForm.setValue(editedFileEntry);
    spyOn(fileService, 'updateFileEntry');
    component.editFileEntry();
    expect(fileService.updateFileEntry)
      .toHaveBeenCalledWith(expectedFileEntryArg);
  });

  describe('#canDeactivate', () => {
    beforeEach(() => {
      // Mock confirm so test can proceed without interaction
      // Simulates user clicking cancel on browser confirm prompt
      spyOn(window, 'confirm').and.returnValue(false);
      component.ngOnInit();
    });

    it('allows deactivation if inputs are unchanged', () => {
      expect(component.canDeactivate()).toBe(true);
    });

    it('disallows deactivation if inputs are changed but file entry not edited',
       () => {
      const title = 'changed title';
      const content = 'changed content';
      component.fileEditForm.patchValue({content, title});
      expect(component.canDeactivate()).toBe(false);
    });

    it('allows deactivation if inputs changed & file entry is edited', () => {
      const title = 'changed title';
      const content = 'changed content';
      component.fileEditForm.patchValue({content, title});
      component.editFileEntry();
      expect(component.canDeactivate()).toBe(true);
    });
  });
});
