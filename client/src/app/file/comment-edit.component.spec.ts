import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Comment } from './comment';
import { FileEntry } from './file-entry';
import { AuthService } from '../user/auth.service';
import { FileService } from './file.service';
import { CommentEditComponent } from './comment-edit.component';
import { User } from '../user/user';

describe('CommentEditComponent', () => {
  let component: CommentEditComponent;
  let fixture: ComponentFixture<CommentEditComponent>;
  const user = {
    email: 'test@test.com',
    _id: 'userobjectid',
  };
  const comment: Comment  = {
    content: 'Test comment content'
  };
  const fileEntry: FileEntry = {
    title: 'Test entry',
    content: 'Test entry content',
    _id: 'fileobjectid'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentEditComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: AuthService,
          useValue: {
            user: () => user
          }
        },
        {
          provide: FileService,
          useValue: {
            updateComment: (updatedComment: Comment) => Observable.from([1]),
            createComment: (newComment: Comment, selectedFileEntry: FileEntry) =>
              Observable.from([1])
          }
        },
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('initialization', () => {
    it('has a commentForm formgroup', () => {
      expect(component.commentForm instanceof FormGroup).toBe(true);
    });

    it('loads commentForm with empty values if no comment input', () => {
      expect(component.commentForm.value.content).toBe('');
    });

    it('loads commentForm with input comment', () => {
      component.comment = comment;
      component.ngOnInit();
      expect(component.commentForm.value.content).toBe(comment.content);
    });

    it('loads commentForm hidden user value with user id', () => {
      const authService = TestBed.get(AuthService);
      component.ngOnInit();
      expect(component.commentForm.value.user).toBe(authService.user()._id);
    });
  });

  describe('#cancel()', () => {
    it('emits event for onCommentCancel output', () => {
      spyOn(component.onCommentCancel, 'emit');
      component.cancel();
      fixture.detectChanges();
      expect(component.onCommentCancel.emit).toHaveBeenCalled();
    });
  });

  describe('#saveComment()', () => {
    let fileService: FileService;

    beforeEach(() => {
      fileService = TestBed.get(FileService);
      component.commentForm.setValue({...comment, user: user._id});
    });

    it('calls fileService.createComment() for new comments', () => {
      spyOn(fileService, 'createComment').and.callThrough();
      component.fileEntry = fileEntry;
      component.isNew = true;
      component.ngOnInit();
      component.saveComment();
      expect(fileService.createComment)
        .toHaveBeenCalledWith(component.commentForm.value, component.fileEntry);
    });

    it('calls fileService.updateComment() for non-new comments', () => {
      spyOn(fileService, 'updateComment').and.callThrough();
      component.isNew = false;
      component.ngOnInit();
      component.saveComment();
      expect(fileService.updateComment)
        .toHaveBeenCalledWith(component.commentForm.value);
    });
  });
});
