/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';

import { FileCreateComponent } from './file-create.component';
import { FileService } from './file.service';

let fixture;
let component;

describe('FileCreateComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        FileCreateComponent
      ],
      providers: [
        {provide: Location, useValue: {}},
        {
          provide: FileService,
          useValue: {
            createFileEntry: (fileEntry) => fileEntry
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(FileCreateComponent);
    component = fixture.debugElement.componentInstance;
    component.ngOnInit();
  });

  it('creates a fileCreateForm FormGroup', () => {
    expect(component.fileCreateForm instanceof FormGroup).toBe(true);
  });

  it('initializes form with blanks', () => {
    expect(component.fileCreateForm.value.title).toEqual('');
    expect(component.fileCreateForm.value.content).toEqual('');
  });

  it('calls FileService createFileEntry method for component method', () => {
    const newFormValues = {
      title: 'test title',
      content: 'test content'
    };
    const fileService = TestBed.get(FileService);
    spyOn(fileService, 'createFileEntry');
    component.fileCreateForm.patchValue(newFormValues);
    component.createFileEntry();
    expect(fileService.createFileEntry)
      .toHaveBeenCalledWith(newFormValues);
  });

  describe('#canDeactivate', () => {
    beforeAll(() => {
      // Mock confirm so test can proceed without interaction
      // Simulates user clicking cancel on browser confirm prompt
      spyOn(window, 'confirm').and.returnValue(false);
    });

    it('allows deactivation if inputs are unchanged', () => {
      expect(component.canDeactivate()).toBe(true);
    });

    it('disallows deactivation if inputs are changed but file entry not created',
       () => {
      const title = 'changed title';
      const content = 'changed content';
      component.fileCreateForm.patchValue({content, title});
      expect(component.canDeactivate()).toBe(false);
    });

    it('allows deactivation if inputs changed & file entry is created', () => {
      const title = 'changed title';
      const content = 'changed content';
      component.fileCreateForm.patchValue({content, title});
      component.createFileEntry();
      expect(component.canDeactivate()).toBe(true);
    });
  });
});
