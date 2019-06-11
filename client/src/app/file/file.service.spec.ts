/* tslint:disable:no-unused-variable */

import { TestBed, inject, fakeAsync, async, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, BaseRequestOptions, RequestMethod,
  Response, ResponseOptions } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { FileService } from './file.service';
import { FileEntry } from './file-entry';
import { User } from '../user/user';
import { Comment } from './comment';

const fileEntryStub: FileEntry = {
  title: 'Test file entry',
  content: 'Test content',
  created: new Date(),
  _id: 'objectid',
  slug: 'test-file-entry'
};
const comment: Comment = {
  content: 'Comment content',
  user: {
    email: 'test@user.com',
    _id: 'objectid',
    roles: [],
    profile: {name: 'Test User'}
  }
};
const fileListStub = [fileEntryStub];
const slug = 'test-file-entry';
// tslint:disable-next-line
const jwt = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODk4ZTg3MzFhYTM5Nzc5NTk4OTY1NjIiLCJpYXQiOjE0ODgzMDUwMDYsImV4cCI6MTQ4ODMxMjIwNn0.Mk41xT9GHchIzkI2NQQF_jWymmNpIcVB1YJFaL5Olho';
let service;
let mockBackend;

describe('FileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, defaultOptions) =>
            new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: AuthHttp,
          useExisting: Http
        },
        {
          provide: Router,
          useValue: {
            navigate: () => true,
            navigateByUrl: () => true
          }
        },
        FileService
      ]
    });
  });

  beforeEach(inject([FileService, MockBackend], (b, m) => {
    service = b;
    mockBackend = m;
  }));

  it('loads correctly', () => {
    expect(service).toBeTruthy();
  });

  describe('#createFileEntry()', () => {
    it('calls the correct api url', fakeAsync(() => {
      const expectedUrl = `/api/file`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.createFileEntry(fileEntryStub);
      tick();
    }));

    it('uses the POST request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Post);
      });
      service.createFileEntry(fileEntryStub);
      tick();
    }));

    it('creates the file entry', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request._body).toBe(fileEntryStub);
      });
      service.createFileEntry(fileEntryStub);
      tick();
    }));

    it('navigates to correct url upon creation success', fakeAsync(() => {
      const responseStub = Object.assign({}, fileEntryStub, {slug});
      const router = TestBed.get(Router);
      spyOn(router, 'navigate');
      mockBackend.connections.subscribe(c => {
        const response = new ResponseOptions({
          body: JSON.stringify(responseStub)
        });
        c.mockRespond(new Response(response));
      });
      service.createFileEntry(fileEntryStub);
      tick();
      expect(router.navigate).toHaveBeenCalledWith(['/file', responseStub.slug]);
    }));

    it('failed creation should cause error field to be filled with msg',
       fakeAsync(() => {
      const failResponse = {
        msg: 'Creation failed'
      };
      mockBackend.connections.subscribe(c => {
        const response = new ResponseOptions({
          body: JSON.stringify(failResponse)
        });
        c.mockError(new Response(response));
      });
      service.createFileEntry(fileEntryStub);
      expect(service.error).toBe(failResponse.msg);
      tick();
    }));
  });

  describe('#deleteFileEntry()', () => {
    it('calls the correct api url', fakeAsync(() => {
      const expectedUrl = `/api/file/${fileEntryStub.slug}`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.deleteFileEntry(fileEntryStub);
      tick();
    }));

    it('uses the DELETE request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Delete);
      });
      service.deleteFileEntry(fileEntryStub);
      tick();
    }));

    it('deletes the file entry', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request._body).toBeFalsy();
      });
      service.deleteFileEntry(fileEntryStub);
      tick();
    }));

    it('returns an observable', () => {
      const returned = service.deleteFileEntry(fileEntryStub);
      expect(returned instanceof Observable).toBe(true);
    });
  });

  describe('#getFileEntryBySlug()', () => {
    it('calls the correct api url', fakeAsync(() => {
      const expectedUrl = `/api/file/${slug}`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.getFileEntryBySlug(slug);
      tick();
    }));

    it('uses the GET request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Get);
      });
      service.getFileEntryBySlug('test');
      tick();
    }));

    it('returns the correct file entry', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        const response = new ResponseOptions({
          body: JSON.stringify(fileEntryStub)
        });
        c.mockRespond(new Response(response));
      });
      service.getFileEntryBySlug('test')
        .then(fileEntry => {
          expect(fileEntry.title).toEqual(fileEntryStub.title);
          expect(fileEntry.content).toEqual(fileEntryStub.content);
        });
      tick();
    }));
  });

  describe('#getList()', () => {
    it('calls the correct api url without query parameters', fakeAsync(() => {
      const expectedUrl = `/api/file?sort=-created`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.getList();
      tick();
    }));

    it('calls the correct api url with query parameters', fakeAsync(() => {
      const queryParams = {
        sort: '-created',
        where: 'created',
        gt: '2012-01-01'
      };
      const expectedUrl = `/api/file?sort=-created&where=created&gt=2012-01-01`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.getList(queryParams);
      tick();
    }));

    it('uses the GET request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Get);
      });
      service.getList();
      tick();
    }));

    it('returns the file list', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        const response = new ResponseOptions({
          body: JSON.stringify({files: fileListStub})
        });
        c.mockRespond(new Response(response));
      });
      service.getList()
        .then(fileListData => {
          const fileEntries = fileListData.items;
          expect(fileEntries[0].title).toEqual(fileListStub[0].title);
          expect(fileEntries[0].content).toEqual(fileListStub[0].content);
        });
      tick();
    }));
  });

  describe('#updateFileEntry()', () => {
    const title = 'Updated file title';
    const editedFileEntry: FileEntry = Object.assign({}, fileEntryStub, {title});

    it('calls the correct api url', fakeAsync(() => {
      const expectedUrl = `/api/file/${editedFileEntry.slug}`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.updateFileEntry(editedFileEntry);
      tick();
    }));

    it('uses the PUT request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Put);
      });
      service.updateFileEntry(editedFileEntry);
      tick();
    }));

    it('updates the file entry', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request._body).toBe(editedFileEntry);
      });
      service.updateFileEntry(editedFileEntry);
      tick();
    }));

    it('navigates to correct url upon update success', fakeAsync(() => {
      const updatedSlug = 'updated-file-title';
      const responseStub = Object.assign({}, editedFileEntry, {slug: updatedSlug});
      const router = TestBed.get(Router);
      spyOn(router, 'navigate');
      mockBackend.connections.subscribe(c => {
        const response = new ResponseOptions({
          body: JSON.stringify(responseStub)
        });
        c.mockRespond(new Response(response));
      });
      service.updateFileEntry(editedFileEntry);
      tick();
      expect(router.navigate).toHaveBeenCalledWith(['/file', responseStub.slug]);
    }));

    it('failed update should cause error field to be filled with msg',
       fakeAsync(() => {
      const failResponse = {
        msg: 'Update failed'
      };
      mockBackend.connections.subscribe(c => {
        const response = new ResponseOptions({
          body: JSON.stringify(failResponse)
        });
        c.mockError(new Response(response));
      });
      service.updateFileEntry(editedFileEntry);
      expect(service.error).toBe(failResponse.msg);
      tick();
    }));
  });

  describe('#createComment()', () => {
    it('calls the correct api url', fakeAsync(() => {
      const expectedUrl = `/api/file/${fileEntryStub._id}/comment`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.createComment(comment, fileEntryStub);
      tick();
    }));

    it('uses the POST request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Post);
      });
      service.createComment(comment, fileEntryStub);
      tick();
    }));

    it('returns an observable', () => {
      const returned = service.createComment(comment, fileEntryStub);
      expect(returned instanceof Observable).toBe(true);
    });
  });

  describe('#deleteComment()', () => {
    it('calls the correct api url', fakeAsync(() => {
      const expectedUrl = `/api/comment/${comment._id}`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.deleteComment(comment);
      tick();
    }));

    it('uses the DELETE request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Delete);
      });
      service.deleteComment(comment);
      tick();
    }));

    it('deletes the comment', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request._body).toBeFalsy();
      });
      service.deleteComment(comment);
      tick();
    }));

    it('returns an observable', () => {
      const returned = service.deleteComment(comment);
      expect(returned instanceof Observable).toBe(true);
    });
  });

  describe('#getCommentById()', () => {
    it('calls the correct api url', fakeAsync(() => {
      const expectedUrl = `/api/comment/${comment._id}`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.getCommentById(comment._id);
      tick();
    }));

    it('uses the GET request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Get);
      });
      service.getCommentById(comment._id);
      tick();
    }));

    it('returns an observable', () => {
      const returned = service.getCommentById(comment._id);
      expect(returned instanceof Observable).toBe(true);
    });
  });

  describe('#updateComment()', () => {
    it('calls the correct api url', fakeAsync(() => {
      const expectedUrl = `/api/comment/${comment._id}`;
      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(expectedUrl);
      });
      service.updateComment(comment);
      tick();
    }));

    it('uses the PUT request method', fakeAsync(() => {
      mockBackend.connections.subscribe(c => {
        expect(c.request.method).toBe(RequestMethod.Put);
      });
      service.updateComment(comment);
      tick();
    }));

    it('returns an observable', () => {
      const returned = service.updateComment(comment);
      expect(returned instanceof Observable).toBe(true);
    });
  });
});
