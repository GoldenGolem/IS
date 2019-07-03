webpackJsonp(["common"],{

/***/ "./client/src/app/blog/blog-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Create a Blog Entry</h1>\n\n<form novalidate [formGroup]=\"blogCreateForm\" (submit)=\"createBlogEntry()\">\n  <div\n    class=\"form-group\"\n    [class.has-error]=\"blogCreateForm.controls['title'].invalid\n      && blogCreateForm.controls['title'].touched\">\n    <label for=\"title\">Title</label>\n    <input\n      class=\"form-control\"\n      id=\"title\"\n      name=\"title\"\n      type=\"text\"\n      [formControl]=\"blogCreateForm.controls['title']\"/>\n    <span\n      class=\"help-block\"\n      *ngIf=\"blogCreateForm.controls['title'].hasError('required')\n        && blogCreateForm.controls['title'].touched\">\n      Title is required\n    </span>\n  </div>\n  <div\n    class=\"form-group\"\n    [class.has-error]=\"blogCreateForm.controls['content'].invalid\n      && blogCreateForm.controls['content'].touched\">\n    <label for=\"content\">Content</label>\n    <textarea\n      class=\"form-control\"\n      id=\"content\"\n      name=\"content\"\n      rows=\"30\"\n      type=\"text\"\n      [formControl]=\"blogCreateForm.controls['content']\">\n    </textarea>\n    <span\n      class=\"help-block\" \n      *ngIf=\"blogCreateForm.controls['content'].hasError('required')\n        && blogCreateForm.controls['content'].touched\">\n      Content is required\n    </span>\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"blogService.error\">\n    {{blogService.error}}\n  </div>\n  <div class=\"pull-right\">\n    <button\n       class=\"btn btn-primary\"\n       type=\"submit\"\n       [disabled]=\"blogCreateForm.invalid\">\n      Submit\n    </button>\n    <button\n      class=\"btn btn-default\"\n      type=\"button\"\n      (click)=\"location.back()\">\n      Cancel</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./client/src/app/blog/blog-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var BlogCreateComponent = (function () {
    function BlogCreateComponent(blogService, location, _fb) {
        this.blogService = blogService;
        this.location = location;
        this._fb = _fb;
        this._isBeingSaved = false;
    }
    BlogCreateComponent.prototype.createBlogEntry = function () {
        this._isBeingSaved = true;
        this.blogService.createBlogEntry(this.blogCreateForm.value);
    };
    BlogCreateComponent.prototype.canDeactivate = function () {
        var formValues = this.blogCreateForm.value;
        var valuesUnchanged = formValues.title === '' && formValues.content === '';
        if (valuesUnchanged || this._isBeingSaved) {
            return true;
        }
        return window.confirm('Discard changes?');
    };
    BlogCreateComponent.prototype.ngOnInit = function () {
        this.blogCreateForm = this._fb.group({
            'title': ['', forms_1.Validators.required],
            'content': ['', forms_1.Validators.required]
        });
    };
    BlogCreateComponent.prototype.ngOnDestroy = function () {
        this.blogService.error = null;
    };
    return BlogCreateComponent;
}());
BlogCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-blog-create',
        template: __webpack_require__("./client/src/app/blog/blog-create.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object])
], BlogCreateComponent);
exports.BlogCreateComponent = BlogCreateComponent;
var _a, _b, _c;
//# sourceMappingURL=blog-create.component.js.map

/***/ }),

/***/ "./client/src/app/blog/blog-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Edit Blog Entry</h1>\n\n<form\n  novalidate\n  *ngIf=\"authService.user()._id === blogEntry.user._id || authService.isAdmin\"\n  [formGroup]=\"blogEditForm\"\n  (submit)=\"editBlogEntry()\">\n  <div\n    class=\"form-group\"\n    [class.has-error]=\"blogEditForm.controls['title'].invalid\n      && blogEditForm.controls['title'].touched\">\n    <label for=\"title\">Title</label>\n    <input\n      class=\"form-control\"\n      id=\"title\"\n      name=\"title\"\n      type=\"text\"\n      [formControl]=\"blogEditForm.controls['title']\"/>\n    <span\n      class=\"help-block\"\n      *ngIf=\"blogEditForm.controls['title'].hasError('required')\n        && blogEditForm.controls['title'].touched\">\n      Title is required\n    </span>\n  </div>\n  <div\n    class=\"form-group\"\n    [class.has-error]=\"blogEditForm.controls['content'].invalid\n      && blogEditForm.controls['content'].touched\">\n    <label for=\"content\">Content</label>\n    <textarea class=\"form-control\"\n      id=\"content\"\n      name=\"content\"\n      rows=\"30\"\n      type=\"text\"\n      [formControl]=\"blogEditForm.controls['content']\">\n    </textarea>\n    <span\n      class=\"help-block\" \n      *ngIf=\"blogEditForm.controls['content'].hasError('required')\n        && blogEditForm.controls['content'].touched\">\n      Content is required\n    </span>\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"blogService.error\">\n    {{blogService.error}}\n  </div>\n  <div class=\"pull-right\">\n    <button\n       class=\"btn btn-primary\"\n       type=\"submit\"\n      [disabled]=\"blogEditForm.invalid\">\n      Update\n    </button>\n    <button\n      class=\"btn btn-default\"\n      type=\"button\"\n      (click)=\"location.back()\">\n      Cancel</button>\n  </div>\n</form>\n\n<div\n  class=\"alert alert-danger\"\n  *ngIf=\"authService.user()._id !== blogEntry.user._id && !authService.isAdmin\">\n  You are not authorized to edit this post\n</div>\n"

/***/ }),

/***/ "./client/src/app/blog/blog-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var BlogEditComponent = (function () {
    function BlogEditComponent(authService, blogService, location, _route, _fb) {
        this.authService = authService;
        this.blogService = blogService;
        this.location = location;
        this._route = _route;
        this._fb = _fb;
        this._isBeingSaved = false;
    }
    BlogEditComponent.prototype.editBlogEntry = function () {
        Object.assign(this.blogEntry, this.blogEditForm.value);
        this._isBeingSaved = true;
        this.blogService.updateBlogEntry(this.blogEntry);
    };
    BlogEditComponent.prototype.canDeactivate = function () {
        var formValues = this.blogEditForm.value;
        var valuesUnchanged = formValues.title === this.blogEntry.title
            && formValues.content === this.blogEntry.content;
        if (valuesUnchanged || this._isBeingSaved) {
            return true;
        }
        return window.confirm('Discard changes?');
    };
    BlogEditComponent.prototype.ngOnInit = function () {
        this.blogEntry = this._route.snapshot.data['resolveData'];
        this.blogEditForm = this._fb.group({
            'title': [this.blogEntry.title, forms_1.Validators.required],
            'content': [this.blogEntry.content, forms_1.Validators.required]
        });
    };
    BlogEditComponent.prototype.ngOnDestroy = function () {
        this.blogService.error = null;
    };
    return BlogEditComponent;
}());
BlogEditComponent = __decorate([
    core_1.Component({
        selector: 'app-blog-edit',
        template: __webpack_require__("./client/src/app/blog/blog-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _e || Object])
], BlogEditComponent);
exports.BlogEditComponent = BlogEditComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=blog-edit.component.js.map

/***/ }),

/***/ "./client/src/app/blog/blog-entry.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var BlogEntryResolver = (function () {
    function BlogEntryResolver(_router, _blogService) {
        this._router = _router;
        this._blogService = _blogService;
    }
    BlogEntryResolver.prototype.resolve = function (route) {
        var _this = this;
        var slug = route.params['slug'];
        return this._blogService.getBlogEntryBySlug(slug)
            .then(function (blogEntry) {
            if (blogEntry) {
                return blogEntry;
            }
            else {
                _this._router.navigate(['/404']);
                return null;
            }
        }, function (err) {
            _this._router.navigate(['/404']);
            return null;
        });
    };
    return BlogEntryResolver;
}());
BlogEntryResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" && _b || Object])
], BlogEntryResolver);
exports.BlogEntryResolver = BlogEntryResolver;
var _a, _b;
//# sourceMappingURL=blog-entry.resolver.js.map

/***/ }),

/***/ "./client/src/app/blog/blog-entry.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BlogEntry = (function () {
    function BlogEntry() {
    }
    return BlogEntry;
}());
exports.BlogEntry = BlogEntry;
//# sourceMappingURL=blog-entry.js.map

/***/ }),

/***/ "./client/src/app/blog/blog-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Blog List</h1>\n\n<a\n  class=\"btn btn-primary\"\n  id=\"createBlogEntryBtn\"\n  *ngIf=\"auth.loggedIn\" [routerLink]=\"['/blog/create']\">\n  <i class=\"fa fa-plus\"></i>\n  New Blog Entry\n</a>\n\n<br />\n\n<app-paginated-search-list\n  [listRetriever]=\"blogService.getList\"\n  [sortFields]=\"sortFields\"\n  #list>\n  <ul class=\"list-unstyled\" *ngIf=\"list.items\">\n    <li *ngFor=\"let blogEntry of list.items trackBy _id\" class=\"blog-list-item\">\n      <h2>\n        <a [routerLink]=\"['/blog', blogEntry.slug]\">{{blogEntry.title}}</a>\n      </h2>\n      <small>\n        Posted on {{blogEntry.created}} by\n        <!-- Pass username query param just for post count template. Only\n             user (id) is actually used for filtering. -->\n        <a\n          [queryParams]=\"{\n            user: blogEntry.user._id,\n            username: blogEntry.user.profile.name\n          }\"\n          [routerLink]=\"['/blog/list']\">\n          {{blogEntry.user.profile.name}}\n        </a>\n      </small>\n      <div>\n        {{blogEntry.content.slice(0, 100)}}...\n      </div>\n    </li>\n  </ul>\n</app-paginated-search-list>\n"

/***/ }),

/***/ "./client/src/app/blog/blog-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/skip.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var BlogListComponent = (function () {
    function BlogListComponent(auth, blogService) {
        this.auth = auth;
        this.blogService = blogService;
        this.sortFields = [
            { displayName: 'Created', fieldName: 'created' },
            { displayName: 'Title', fieldName: 'title' }
        ];
    }
    return BlogListComponent;
}());
BlogListComponent = __decorate([
    core_1.Component({
        selector: 'app-blog-list',
        template: __webpack_require__("./client/src/app/blog/blog-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" && _b || Object])
], BlogListComponent);
exports.BlogListComponent = BlogListComponent;
var _a, _b;
//# sourceMappingURL=blog-list.component.js.map

/***/ }),

/***/ "./client/src/app/blog/blog-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.loggedIn\n  && (auth.user()._id === blogEntry.user._id || auth.isAdmin)\">\n  <div class=\"pull-right\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['edit']\" id=\"blogEditBtn\">\n      <i class=\"fa fa-edit\"></i>\n      Edit\n    </a>\n    <button\n      class=\"btn btn-danger\"\n      id=\"blogDeleteBtn\"\n      (click)=\"deleteBlogEntry()\">\n      <i class=\"fa fa-trash-o\"></i>\n      Delete\n    </button>\n  </div>\n  <br />\n  <br />\n  <div class=\"alert alert-danger\" *ngIf=\"blogService.error\">\n    {{blogService.error}}\n  </div>\n</div>\n\n<h1>{{blogEntry.title}}</h1>\n\n<small>\n  Posted on {{blogEntry.created}} by\n  <!-- Pass username query param just for post count template. Only\n       user (id) is actually used for filtering. -->\n    <a\n      [queryParams]=\"{\n        user: blogEntry.user._id,\n        username: blogEntry.user.profile.name\n      }\"\n      [routerLink]=\"['/blog/list']\">\n    {{blogEntry.user.profile.name}}\n  </a>\n</small>\n\n<div id=\"blogEntryContent\">\n  {{blogEntry.content}}\n</div>\n\n<br />\n\n<div\n  *ngIf=\"blogEntry.comments && blogEntry.comments.length\"\n  id=\"blogEntryComments\">\n  <h3>Comments</h3>\n  <app-comment-view\n    *ngFor=\"let comment of blogEntry.comments trackBy _id; let index = index\"\n    [blogEntry]=\"blogEntry\"\n    [comment]=\"comment\"\n    (onDeleteSuccess)=\"onCommentDeleteSuccess(index)\"\n    class=\"blogEntryComment\">\n  </app-comment-view>\n</div>\n\n<br />\n\n<button\n  *ngIf=\"!newCommentIsBeingEntered && auth.loggedIn\"\n  (click)=\"newCommentIsBeingEntered = true\"\n  class=\"btn btn-primary\">\n  New Comment\n</button>\n\n<app-comment-edit\n  *ngIf=\"newCommentIsBeingEntered\"\n  [blogEntry]=\"blogEntry\"\n  [isNew]=\"true\"\n  (onCommentCancel)=\"onCommentCancel()\"\n  (onCommentSaveSuccess)=\"onCommentSave($event)\">\n</app-comment-edit>\n"

/***/ }),

/***/ "./client/src/app/blog/blog-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var BlogViewComponent = (function () {
    function BlogViewComponent(auth, blogService, _route, _router) {
        this.auth = auth;
        this.blogService = blogService;
        this._route = _route;
        this._router = _router;
        this.newCommentIsBeingEntered = false;
    }
    BlogViewComponent.prototype.deleteBlogEntry = function () {
        var _this = this;
        this.blogService.deleteBlogEntry(this.blogEntry)
            .subscribe(function () {
            _this._router.navigate(['/blog/list']);
        }, function (err) { return _this.blogService.error = JSON.parse(err._body).msg || err.statusText; });
    };
    BlogViewComponent.prototype.onCommentCancel = function () {
        this.newCommentIsBeingEntered = false;
    };
    BlogViewComponent.prototype.onCommentDeleteSuccess = function (index) {
        this.blogEntry.comments.splice(index, 1);
    };
    BlogViewComponent.prototype.onCommentSave = function (comment) {
        this.newCommentIsBeingEntered = false;
        this.blogEntry.comments.push(comment);
    };
    BlogViewComponent.prototype.ngOnInit = function () {
        // Get blog entry data from route resolve
        this.blogEntry = this._route.snapshot.data['resolveData'];
    };
    BlogViewComponent.prototype.ngOnDestroy = function () {
        this.blogService.error = null;
    };
    return BlogViewComponent;
}());
BlogViewComponent = __decorate([
    core_1.Component({
        selector: 'app-blog-view',
        template: __webpack_require__("./client/src/app/blog/blog-view.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], BlogViewComponent);
exports.BlogViewComponent = BlogViewComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=blog-view.component.js.map

/***/ }),

/***/ "./client/src/app/blog/blog.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var core_module_1 = __webpack_require__("./client/src/app/core/core.module.ts");
var shared_module_1 = __webpack_require__("./client/src/app/shared/shared.module.ts");
var blog_create_component_1 = __webpack_require__("./client/src/app/blog/blog-create.component.ts");
var blog_view_component_1 = __webpack_require__("./client/src/app/blog/blog-view.component.ts");
var blog_edit_component_1 = __webpack_require__("./client/src/app/blog/blog-edit.component.ts");
var blog_list_component_1 = __webpack_require__("./client/src/app/blog/blog-list.component.ts");
var comment_view_component_1 = __webpack_require__("./client/src/app/blog/comment-view.component.ts");
var comment_edit_component_1 = __webpack_require__("./client/src/app/blog/comment-edit.component.ts");
var blog_entry_resolver_1 = __webpack_require__("./client/src/app/blog/blog-entry.resolver.ts");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var blog_routes_1 = __webpack_require__("./client/src/app/blog/blog.routes.ts");
var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    core_1.NgModule({
        declarations: [
            blog_create_component_1.BlogCreateComponent,
            blog_view_component_1.BlogViewComponent,
            blog_edit_component_1.BlogEditComponent,
            blog_list_component_1.BlogListComponent,
            comment_view_component_1.CommentViewComponent,
            comment_edit_component_1.CommentEditComponent,
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            blog_routes_1.BlogRoutingModule,
            core_module_1.CoreModule,
            shared_module_1.SharedModule,
        ],
        exports: [],
        providers: [
            blog_service_1.BlogService,
            blog_entry_resolver_1.BlogEntryResolver,
        ]
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ "./client/src/app/blog/blog.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var blog_create_component_1 = __webpack_require__("./client/src/app/blog/blog-create.component.ts");
var blog_list_component_1 = __webpack_require__("./client/src/app/blog/blog-list.component.ts");
var blog_view_component_1 = __webpack_require__("./client/src/app/blog/blog-view.component.ts");
var blog_edit_component_1 = __webpack_require__("./client/src/app/blog/blog-edit.component.ts");
var blog_entry_resolver_1 = __webpack_require__("./client/src/app/blog/blog-entry.resolver.ts");
var authenticated_guard_1 = __webpack_require__("./client/src/app/user/authenticated.guard.ts");
var can_deactivate_guard_1 = __webpack_require__("./client/src/app/core/can-deactivate.guard.ts");
var BLOG_ROUTES = [
    {
        path: '',
        children: [
            {
                path: 'create',
                component: blog_create_component_1.BlogCreateComponent,
                canActivate: [authenticated_guard_1.AuthenticatedGuard],
                canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard],
                data: {
                    title: 'Create Blog Entry'
                }
            },
            {
                path: 'list',
                component: blog_list_component_1.BlogListComponent,
                data: {
                    title: 'Blog List'
                }
            },
            {
                path: ':slug',
                component: blog_view_component_1.BlogViewComponent,
                data: {
                    title: 'Blog Entry: '
                },
                resolve: {
                    resolveData: blog_entry_resolver_1.BlogEntryResolver
                }
            },
            {
                path: ':slug/edit',
                component: blog_edit_component_1.BlogEditComponent,
                data: {
                    title: 'Blog Edit: '
                },
                resolve: {
                    resolveData: blog_entry_resolver_1.BlogEntryResolver
                },
                canActivate: [authenticated_guard_1.AuthenticatedGuard],
                canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard]
            }
        ]
    }
];
var BlogRoutingModule = (function () {
    function BlogRoutingModule() {
    }
    return BlogRoutingModule;
}());
BlogRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(BLOG_ROUTES)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], BlogRoutingModule);
exports.BlogRoutingModule = BlogRoutingModule;
//# sourceMappingURL=blog.routes.js.map

/***/ }),

/***/ "./client/src/app/blog/blog.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var BlogService = (function () {
    function BlogService(_authHttp, _http, _router) {
        var _this = this;
        this._authHttp = _authHttp;
        this._http = _http;
        this._router = _router;
        /**
         * Get blog list. Uses arrow function format for this binding so it can work
         * when passed into component inputs.
         * @param {Object} params - Params for filtering blog list
         * @return {Promise<any>} blogList - Promise resolving to blogEntries, count, skip
         */
        this.getList = function (params) {
            var searchParams = Object.assign({}, params);
            if (searchParams.page) {
                searchParams.skip = searchParams.limit * (searchParams.page - 1);
                delete searchParams.page;
            }
            if (!searchParams.sort) {
                searchParams.sort = '-created';
            }
            var queryParams = new http_1.URLSearchParams();
            for (var key in searchParams) {
                if (searchParams.hasOwnProperty(key)) {
                    queryParams.set(key, searchParams[key]);
                }
            }
            return _this._http.get('/api/blog', { search: queryParams })
                .map(function (res) { return res.json(); })
                .map(function (res) { return ({
                items: res.blogs,
                count: res.count,
                skip: searchParams.skip
            }); })
                .toPromise();
        };
    }
    /**
     * Create blog entry
     * @param {BlogEntry} entry - Blog entry
     */
    BlogService.prototype.createBlogEntry = function (entry) {
        var _this = this;
        this._authHttp.post('/api/blog', entry)
            .map(function (res) { return res.json(); })
            .subscribe(function (blogEntry) {
            _this._router.navigate(['/blog', blogEntry.slug]);
        }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    /**
     * Delete blog entry
     * @param {BlogEntry} entry - Blog entry
     */
    BlogService.prototype.deleteBlogEntry = function (entry) {
        return this._authHttp.delete('/api/blog/' + entry.slug)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get blog entry using slug
     * @param {String} slug - Slug made from blog title
     * @return {Promise<BlogEntry>} blogEntry - Promise resolving to blogEntry or []
     */
    BlogService.prototype.getBlogEntryBySlug = function (slug) {
        return this._http.get('/api/blog/' + slug)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    /**
     * Update blog entry
     * @param {BlogEntry} entry - Blog entry
     * @return {Observable<BlogEntry>} blog entry
     */
    BlogService.prototype.updateBlogEntry = function (entry) {
        var _this = this;
        delete entry.comments;
        this._authHttp.put('/api/blog/' + entry.slug, entry)
            .map(function (res) { return res.json(); })
            .subscribe(function (blogEntry) {
            _this._router.navigate(['/blog', blogEntry.slug]);
        }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    /**
     * Create new comment for a blog entry.
     * @param {BlogEntry} entry - Blog entry
     * @return {Observable<BlogEntry>} blog entry
     */
    BlogService.prototype.createComment = function (comment, blogEntry) {
        return this._authHttp.post("/api/blog/" + blogEntry._id + "/comment", comment)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete comment.
     * @param {Comment} comment - Comment
     * @return {Observable<any>}
     */
    BlogService.prototype.deleteComment = function (comment) {
        return this._authHttp.delete('/api/comment/' + comment._id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get comment by id.
     * @param {String} id - Comment id
     * @return {Observable<Comment>} comment
     */
    BlogService.prototype.getCommentById = function (id) {
        return this._authHttp.get('/api/comment/' + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update comment
     * @param {Comment} comment - Comment
     * @return {Observable<Comment>} comment
     */
    BlogService.prototype.updateComment = function (comment) {
        return this._authHttp.put('/api/comment/' + comment._id, comment)
            .map(function (res) { return res.json(); });
    };
    return BlogService;
}());
BlogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], BlogService);
exports.BlogService = BlogService;
var _a, _b, _c;
//# sourceMappingURL=blog.service.js.map

/***/ }),

/***/ "./client/src/app/blog/comment-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"saveComment()\" [formGroup]=\"commentForm\">\n  <div\n    class=\"form-group\"\n    [class.has-error]=\"\n      !commentForm.get('content').valid\n        && commentForm.get('content').dirty\">\n    <textarea\n      class=\"form-control\"\n      id=\"commentInput\"\n      formControlName=\"content\">\n    </textarea>\n    <span\n      class=\"help-block\"\n      *ngIf=\"commentForm.get('content').hasError('required')\">\n      Comment is required\n    </span>\n    <span\n      class=\"help-block\"\n      *ngIf=\"commentForm.get('content').hasError('maxlength')\">\n      Must be under {{commentForm.controls.content.errors.maxlength.requiredLength}} characters.\n      You typed {{commentForm.controls.content.errors.maxlength.actualLength}} characters.\n    </span>\n  </div>\n  <br />\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"commentForm.invalid\">\n    Save\n  </button>\n  <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-default\">\n    Cancel\n  </button>\n</form>\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">\n {{error}}\n</div>"

/***/ }),

/***/ "./client/src/app/blog/comment-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var blog_entry_1 = __webpack_require__("./client/src/app/blog/blog-entry.ts");
var comment_1 = __webpack_require__("./client/src/app/blog/comment.ts");
var CommentEditComponent = (function () {
    function CommentEditComponent(auth, _blogService, _fb) {
        this.auth = auth;
        this._blogService = _blogService;
        this._fb = _fb;
        this.comment = new comment_1.Comment('');
        this.onCommentSaveSuccess = new core_1.EventEmitter();
        this.onCommentDeleteSuccess = new core_1.EventEmitter();
        this.onCommentCancel = new core_1.EventEmitter();
    }
    CommentEditComponent.prototype.cancel = function () {
        this.onCommentCancel.emit();
    };
    CommentEditComponent.prototype.saveComment = function () {
        if (this.isNew) {
            this._createComment();
        }
        else {
            this._updateComment();
        }
    };
    CommentEditComponent.prototype._createComment = function () {
        var _this = this;
        this._blogService.createComment(this.commentForm.value, this.blogEntry)
            .subscribe(function (comment) { return _this.onCommentSaveSuccess.emit(comment); }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    CommentEditComponent.prototype._updateComment = function () {
        var _this = this;
        var comment = this.commentForm.value;
        comment._id = this.comment._id;
        this._blogService.updateComment(comment)
            .subscribe(function (updatedComment) { return _this.onCommentSaveSuccess.emit(updatedComment); }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    CommentEditComponent.prototype.ngOnInit = function () {
        this.commentForm = this._fb.group({
            content: [this.comment.content, [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(1000)
                ]],
            user: [this.auth.user()._id]
        });
    };
    return CommentEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof blog_entry_1.BlogEntry !== "undefined" && blog_entry_1.BlogEntry) === "function" && _a || Object)
], CommentEditComponent.prototype, "blogEntry", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommentEditComponent.prototype, "comment", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CommentEditComponent.prototype, "isNew", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentEditComponent.prototype, "onCommentSaveSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentEditComponent.prototype, "onCommentDeleteSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentEditComponent.prototype, "onCommentCancel", void 0);
CommentEditComponent = __decorate([
    core_1.Component({
        selector: 'app-comment-edit',
        template: __webpack_require__("./client/src/app/blog/comment-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" && _c || Object, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object])
], CommentEditComponent);
exports.CommentEditComponent = CommentEditComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=comment-edit.component.js.map

/***/ }),

/***/ "./client/src/app/blog/comment-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!commentIsBeingEdited\">\n  <small>{{comment.user.profile.name}} commented on {{comment.created}}</small>\n  <div>{{comment.content}}</div>\n  <div *ngIf=\"canEditDelete()\">\n    <button\n      (click)=\"commentIsBeingEdited = true\"\n      class=\"btn btn-info btn-xs\">\n      Edit Comment\n    </button>\n    <button\n      (click)=\"deleteComment()\"\n      class=\"btn btn-danger btn-xs\">\n      Delete Comment\n    </button>\n  </div>\n</div>\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">\n  {{error}}\n</div>\n\n<app-comment-edit\n  *ngIf=\"commentIsBeingEdited\"\n  [blogEntry]=\"blogEntry\"\n  [comment]=\"comment\"\n  [isNew]=\"false\"\n  (onCommentCancel)=\"onCommentCancel()\"\n  (onCommentSaveSuccess)=\"onCommentSave($event)\">\n</app-comment-edit>\n"

/***/ }),

/***/ "./client/src/app/blog/comment-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var blog_entry_1 = __webpack_require__("./client/src/app/blog/blog-entry.ts");
var comment_1 = __webpack_require__("./client/src/app/blog/comment.ts");
var CommentViewComponent = (function () {
    function CommentViewComponent(_auth, _blogService) {
        this._auth = _auth;
        this._blogService = _blogService;
        this.onDeleteSuccess = new core_1.EventEmitter();
        this.commentIsBeingEdited = false;
    }
    CommentViewComponent.prototype.canEditDelete = function () {
        if (!this._auth.loggedIn) {
            return false;
        }
        var isCommentAuthor = this._auth.user()._id === this.comment.user._id;
        return this._auth.isAdmin || isCommentAuthor;
    };
    CommentViewComponent.prototype.deleteComment = function () {
        var _this = this;
        this._blogService.deleteComment(this.comment)
            .subscribe(function () { return _this.onDeleteSuccess.emit(); }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    CommentViewComponent.prototype.onCommentCancel = function () {
        this.commentIsBeingEdited = false;
    };
    CommentViewComponent.prototype.onCommentSave = function (comment) {
        this.comment = comment;
        this.commentIsBeingEdited = false;
    };
    return CommentViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof blog_entry_1.BlogEntry !== "undefined" && blog_entry_1.BlogEntry) === "function" && _a || Object)
], CommentViewComponent.prototype, "blogEntry", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof comment_1.Comment !== "undefined" && comment_1.Comment) === "function" && _b || Object)
], CommentViewComponent.prototype, "comment", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentViewComponent.prototype, "onDeleteSuccess", void 0);
CommentViewComponent = __decorate([
    core_1.Component({
        selector: 'app-comment-view',
        template: __webpack_require__("./client/src/app/blog/comment-view.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" && _d || Object])
], CommentViewComponent);
exports.CommentViewComponent = CommentViewComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=comment-view.component.js.map

/***/ }),

/***/ "./client/src/app/blog/comment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Comment = (function () {
    function Comment(content) {
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "./client/src/app/file/comment-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"saveComment()\" [formGroup]=\"commentForm\">\n  <div\n    class=\"form-group\"\n    [class.has-error]=\"\n      !commentForm.get('content').valid\n        && commentForm.get('content').dirty\">\n    <textarea\n      class=\"form-control\"\n      id=\"commentInput\"\n      formControlName=\"content\">\n    </textarea>\n    <span\n      class=\"help-block\"\n      *ngIf=\"commentForm.get('content').hasError('required')\">\n      Comment is required\n    </span>\n    <span\n      class=\"help-block\"\n      *ngIf=\"commentForm.get('content').hasError('maxlength')\">\n      Must be under {{commentForm.controls.content.errors.maxlength.requiredLength}} characters.\n      You typed {{commentForm.controls.content.errors.maxlength.actualLength}} characters.\n    </span>\n  </div>\n  <br />\n  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"commentForm.invalid\">\n    Save\n  </button>\n  <button (click)=\"cancel()\" type=\"button\" class=\"btn btn-default\">\n    Cancel\n  </button>\n</form>\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">\n {{error}}\n</div>"

/***/ }),

/***/ "./client/src/app/file/comment-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var file_entry_1 = __webpack_require__("./client/src/app/file/file-entry.ts");
var comment_1 = __webpack_require__("./client/src/app/file/comment.ts");
var CommentEditComponent = (function () {
    function CommentEditComponent(auth, _fileService, _fb) {
        this.auth = auth;
        this._fileService = _fileService;
        this._fb = _fb;
        this.comment = new comment_1.Comment('');
        this.onCommentSaveSuccess = new core_1.EventEmitter();
        this.onCommentDeleteSuccess = new core_1.EventEmitter();
        this.onCommentCancel = new core_1.EventEmitter();
    }
    CommentEditComponent.prototype.cancel = function () {
        this.onCommentCancel.emit();
    };
    CommentEditComponent.prototype.saveComment = function () {
        if (this.isNew) {
            this._createComment();
        }
        else {
            this._updateComment();
        }
    };
    CommentEditComponent.prototype._createComment = function () {
        var _this = this;
        this._fileService.createComment(this.commentForm.value, this.fileEntry)
            .subscribe(function (comment) { return _this.onCommentSaveSuccess.emit(comment); }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    CommentEditComponent.prototype._updateComment = function () {
        var _this = this;
        var comment = this.commentForm.value;
        comment._id = this.comment._id;
        this._fileService.updateComment(comment)
            .subscribe(function (updatedComment) { return _this.onCommentSaveSuccess.emit(updatedComment); }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    CommentEditComponent.prototype.ngOnInit = function () {
        this.commentForm = this._fb.group({
            content: [this.comment.content, [
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(1000)
                ]],
            user: [this.auth.user()._id]
        });
    };
    return CommentEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof file_entry_1.FileEntry !== "undefined" && file_entry_1.FileEntry) === "function" && _a || Object)
], CommentEditComponent.prototype, "fileEntry", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CommentEditComponent.prototype, "comment", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CommentEditComponent.prototype, "isNew", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentEditComponent.prototype, "onCommentSaveSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentEditComponent.prototype, "onCommentDeleteSuccess", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentEditComponent.prototype, "onCommentCancel", void 0);
CommentEditComponent = __decorate([
    core_1.Component({
        selector: 'app-comment-edit',
        template: __webpack_require__("./client/src/app/file/comment-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _c || Object, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object])
], CommentEditComponent);
exports.CommentEditComponent = CommentEditComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=comment-edit.component.js.map

/***/ }),

/***/ "./client/src/app/file/comment-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!commentIsBeingEdited\">\n  <small>{{comment.user.profile.name}} commented on {{comment.created}}</small>\n  <div>{{comment.content}}</div>\n  <div *ngIf=\"canEditDelete()\">\n    <button\n      (click)=\"commentIsBeingEdited = true\"\n      class=\"btn btn-info btn-xs\">\n      Edit Comment\n    </button>\n    <button\n      (click)=\"deleteComment()\"\n      class=\"btn btn-danger btn-xs\">\n      Delete Comment\n    </button>\n  </div>\n</div>\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">\n  {{error}}\n</div>\n\n<app-comment-edit\n  *ngIf=\"commentIsBeingEdited\"\n  [fileEntry]=\"fileEntry\"\n  [comment]=\"comment\"\n  [isNew]=\"false\"\n  (onCommentCancel)=\"onCommentCancel()\"\n  (onCommentSaveSuccess)=\"onCommentSave($event)\">\n</app-comment-edit>\n"

/***/ }),

/***/ "./client/src/app/file/comment-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var file_entry_1 = __webpack_require__("./client/src/app/file/file-entry.ts");
var comment_1 = __webpack_require__("./client/src/app/file/comment.ts");
var CommentViewComponent = (function () {
    function CommentViewComponent(_auth, _fileService) {
        this._auth = _auth;
        this._fileService = _fileService;
        this.onDeleteSuccess = new core_1.EventEmitter();
        this.commentIsBeingEdited = false;
    }
    CommentViewComponent.prototype.canEditDelete = function () {
        if (!this._auth.loggedIn) {
            return false;
        }
        var isCommentAuthor = this._auth.user()._id === this.comment.user._id;
        return this._auth.isAdmin || isCommentAuthor;
    };
    CommentViewComponent.prototype.deleteComment = function () {
        var _this = this;
        this._fileService.deleteComment(this.comment)
            .subscribe(function () { return _this.onDeleteSuccess.emit(); }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    CommentViewComponent.prototype.onCommentCancel = function () {
        this.commentIsBeingEdited = false;
    };
    CommentViewComponent.prototype.onCommentSave = function (comment) {
        this.comment = comment;
        this.commentIsBeingEdited = false;
    };
    return CommentViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_a = typeof file_entry_1.FileEntry !== "undefined" && file_entry_1.FileEntry) === "function" && _a || Object)
], CommentViewComponent.prototype, "fileEntry", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", typeof (_b = typeof comment_1.Comment !== "undefined" && comment_1.Comment) === "function" && _b || Object)
], CommentViewComponent.prototype, "comment", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommentViewComponent.prototype, "onDeleteSuccess", void 0);
CommentViewComponent = __decorate([
    core_1.Component({
        selector: 'app-comment-view',
        template: __webpack_require__("./client/src/app/file/comment-view.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _c || Object, typeof (_d = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _d || Object])
], CommentViewComponent);
exports.CommentViewComponent = CommentViewComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=comment-view.component.js.map

/***/ }),

/***/ "./client/src/app/file/comment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Comment = (function () {
    function Comment(content) {
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "./client/src/app/file/file-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Upload New File</h1>\n\n<div>\n  <img\n    *ngIf=\"profilePic && !uploader.queue[0]\"\n    src=\"{{profilePic}}\"\n    style=\"width: 100%;\"/>\n  <div *ngIf=\"uploading\"><i class=\"fa fa-spinner fa-pulse\"></i></div>\n  <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" (change)=\"detectChanges()\"/>\n  <br />\n  <button\n    class=\"btn btn-default\"\n    (click)=\"startUpload()\"\n    [disabled]=\"!uploader.queue[0]\">\n    Upload File\n  </button>\n</div>"

/***/ }),

/***/ "./client/src/app/file/file-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_file_upload_1 = __webpack_require__("./node_modules/ng2-file-upload/index.js");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var uploadOptions = {
    url: '/api/file',
    authToken: localStorage['id_token']
};
var FileCreateComponent = (function () {
    function FileCreateComponent(fileService, location, _fb, _detector, _router) {
        this.fileService = fileService;
        this.location = location;
        this._fb = _fb;
        this._detector = _detector;
        this._router = _router;
        this._isBeingSaved = false;
        this.uploader = new ng2_file_upload_1.FileUploader(uploadOptions);
        this.uploading = false;
        this.profilePic = "";
    }
    FileCreateComponent.prototype.createFileEntry = function () {
        this._isBeingSaved = true;
        this.fileService.createFileEntry(this.fileCreateForm.value);
    };
    FileCreateComponent.prototype.canDeactivate = function () {
        var formValues = this.fileCreateForm.value;
        var valuesUnchanged = formValues.title === '' && formValues.content === '';
        if (valuesUnchanged || this._isBeingSaved) {
            return true;
        }
        return window.confirm('Discard changes?');
    };
    FileCreateComponent.prototype.startUpload = function () {
        this.uploading = true;
        this.uploader.queue[0].upload();
    };
    FileCreateComponent.prototype.detectChanges = function () {
        this._detector.detectChanges();
    };
    FileCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileCreateForm = this._fb.group({
            'title': ['', forms_1.Validators.required],
            'content': ['', forms_1.Validators.required]
        });
        this.uploader.onSuccessItem = function (item, fileUrl) {
            _this._router.navigate(['/file/list']);
        };
    };
    FileCreateComponent.prototype.ngOnDestroy = function () {
        this.fileService.error = null;
    };
    return FileCreateComponent;
}());
FileCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-file-create',
        template: __webpack_require__("./client/src/app/file/file-create.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _a || Object, typeof (_b = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof core_1.ChangeDetectorRef !== "undefined" && core_1.ChangeDetectorRef) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
], FileCreateComponent);
exports.FileCreateComponent = FileCreateComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=file-create.component.js.map

/***/ }),

/***/ "./client/src/app/file/file-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Edit File Entry</h1>\n\n<form\n  novalidate\n  *ngIf=\"authService.user()._id === fileEntry.user._id || authService.isAdmin\"\n  [formGroup]=\"fileEditForm\"\n  (submit)=\"editFileEntry()\">\n  <div\n    class=\"form-group\"\n    [class.has-error]=\"fileEditForm.controls['title'].invalid\n      && fileEditForm.controls['title'].touched\">\n    <label for=\"title\">Title</label>\n    <input\n      class=\"form-control\"\n      id=\"title\"\n      name=\"title\"\n      type=\"text\"\n      [formControl]=\"fileEditForm.controls['title']\"/>\n    <span\n      class=\"help-block\"\n      *ngIf=\"fileEditForm.controls['title'].hasError('required')\n        && fileEditForm.controls['title'].touched\">\n      Title is required\n    </span>\n  </div>\n  <div\n    class=\"form-group\"\n    [class.has-error]=\"fileEditForm.controls['content'].invalid\n      && fileEditForm.controls['content'].touched\">\n    <label for=\"content\">Content</label>\n    <textarea class=\"form-control\"\n      id=\"content\"\n      name=\"content\"\n      rows=\"30\"\n      type=\"text\"\n      [formControl]=\"fileEditForm.controls['content']\">\n    </textarea>\n    <span\n      class=\"help-block\" \n      *ngIf=\"fileEditForm.controls['content'].hasError('required')\n        && fileEditForm.controls['content'].touched\">\n      Content is required\n    </span>\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"fileService.error\">\n    {{fileService.error}}\n  </div>\n  <div class=\"pull-right\">\n    <button\n       class=\"btn btn-primary\"\n       type=\"submit\"\n      [disabled]=\"fileEditForm.invalid\">\n      Update\n    </button>\n    <button\n      class=\"btn btn-default\"\n      type=\"button\"\n      (click)=\"location.back()\">\n      Cancel</button>\n  </div>\n</form>\n\n<div\n  class=\"alert alert-danger\"\n  *ngIf=\"authService.user()._id !== fileEntry.user._id && !authService.isAdmin\">\n  You are not authorized to edit this post\n</div>\n"

/***/ }),

/***/ "./client/src/app/file/file-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var FileEditComponent = (function () {
    function FileEditComponent(authService, fileService, location, _route, _fb) {
        this.authService = authService;
        this.fileService = fileService;
        this.location = location;
        this._route = _route;
        this._fb = _fb;
        this._isBeingSaved = false;
    }
    FileEditComponent.prototype.editFileEntry = function () {
        Object.assign(this.fileEntry, this.fileEditForm.value);
        this._isBeingSaved = true;
        this.fileService.updateFileEntry(this.fileEntry);
    };
    FileEditComponent.prototype.canDeactivate = function () {
        var formValues = this.fileEditForm.value;
        var valuesUnchanged = formValues.title === this.fileEntry.title
            && formValues.content === this.fileEntry.content;
        if (valuesUnchanged || this._isBeingSaved) {
            return true;
        }
        return window.confirm('Discard changes?');
    };
    FileEditComponent.prototype.ngOnInit = function () {
        this.fileEntry = this._route.snapshot.data['resolveData'];
        this.fileEditForm = this._fb.group({
            'title': [this.fileEntry.title, forms_1.Validators.required],
            'content': [this.fileEntry.content, forms_1.Validators.required]
        });
    };
    FileEditComponent.prototype.ngOnDestroy = function () {
        this.fileService.error = null;
    };
    return FileEditComponent;
}());
FileEditComponent = __decorate([
    core_1.Component({
        selector: 'app-file-edit',
        template: __webpack_require__("./client/src/app/file/file-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _b || Object, typeof (_c = typeof common_1.Location !== "undefined" && common_1.Location) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _e || Object])
], FileEditComponent);
exports.FileEditComponent = FileEditComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=file-edit.component.js.map

/***/ }),

/***/ "./client/src/app/file/file-entry.resolver.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var FileEntryResolver = (function () {
    function FileEntryResolver(_router, _fileService) {
        this._router = _router;
        this._fileService = _fileService;
    }
    FileEntryResolver.prototype.resolve = function (route) {
        var _this = this;
        var slug = route.params['slug'];
        return this._fileService.getFileEntryBySlug(slug)
            .then(function (fileEntry) {
            if (fileEntry) {
                return fileEntry;
            }
            else {
                _this._router.navigate(['/404']);
                return null;
            }
        }, function (err) {
            _this._router.navigate(['/404']);
            return null;
        });
    };
    return FileEntryResolver;
}());
FileEntryResolver = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _b || Object])
], FileEntryResolver);
exports.FileEntryResolver = FileEntryResolver;
var _a, _b;
//# sourceMappingURL=file-entry.resolver.js.map

/***/ }),

/***/ "./client/src/app/file/file-entry.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileEntry = (function () {
    function FileEntry() {
    }
    return FileEntry;
}());
exports.FileEntry = FileEntry;
//# sourceMappingURL=file-entry.js.map

/***/ }),

/***/ "./client/src/app/file/file-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>File List</h1>\n\n<a\n  class=\"btn btn-primary\"\n  id=\"createFileEntryBtn\"\n  *ngIf=\"auth.loggedIn\" [routerLink]=\"['/file/create']\">\n  <i class=\"fa fa-plus\"></i>\n  New File Upload\n</a>\n\n<br />\n\n<app-paginated-search-list\n  [listRetriever]=\"fileService.getList\"\n  [sortFields]=\"sortFields\"\n  #list>\n  <ul class=\"list-unstyled\" *ngIf=\"list.items\">\n    <li *ngFor=\"let fileEntry of list.items trackBy _id\" class=\"file-list-item\">\n      <h2>\n        <a [routerLink]=\"['/file', fileEntry._id]\">{{fileEntry.name}}</a>\n      </h2>\n      <small>\n        Uploaded on {{fileEntry.created}} by\n        <!-- Pass username query param just for post count template. Only\n             user (id) is actually used for filtering. -->\n        <a\n          [queryParams]=\"{\n            user: fileEntry.user._id,\n            username: fileEntry.user.profile.name\n          }\"\n          [routerLink]=\"['/file/list']\">\n          {{fileEntry.user.profile.name}}\n        </a>\n      </small>\n    </li>\n  </ul>\n</app-paginated-search-list>\n"

/***/ }),

/***/ "./client/src/app/file/file-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/skip.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var FileListComponent = (function () {
    function FileListComponent(auth, fileService) {
        this.auth = auth;
        this.fileService = fileService;
        this.sortFields = [
            { displayName: 'Created', fieldName: 'created' },
            { displayName: 'Title', fieldName: 'title' }
        ];
    }
    return FileListComponent;
}());
FileListComponent = __decorate([
    core_1.Component({
        selector: 'app-file-list',
        template: __webpack_require__("./client/src/app/file/file-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _b || Object])
], FileListComponent);
exports.FileListComponent = FileListComponent;
var _a, _b;
//# sourceMappingURL=file-list.component.js.map

/***/ }),

/***/ "./client/src/app/file/file-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.loggedIn\n  && (auth.user()._id === fileEntry.user._id || auth.isAdmin)\">\n  <div class=\"pull-right\">\n    <button class=\"btn btn-primary\" (click)=\"filePermission()\" id=\"fileEditBtn\" *ngIf=\"fileEntry.enabled\">\n      <i class=\"fa fa-edit\"></i>\n      Disable\n    </button>\n    <button class=\"btn btn-primary\" (click)=\"filePermission()\" id=\"fileEditBtn\" *ngIf=\"!fileEntry.enabled\">\n      <i class=\"fa fa-edit\"></i>\n      Enable\n    </button>\n    <button\n      class=\"btn btn-danger\"\n      id=\"fileDeleteBtn\"\n      (click)=\"deleteFileEntry()\">\n      <i class=\"fa fa-trash-o\"></i>\n      Delete\n    </button>\n  </div>\n  <br />\n  <br />\n  <div class=\"alert alert-danger\" *ngIf=\"fileService.error\">\n    {{fileService.error}}\n  </div>\n</div>\n\n<h1>{{fileEntry.name}}</h1>\n\n<small>\n  Posted on {{fileEntry.created}} by\n  <!-- Pass username query param just for post count template. Only\n       user (id) is actually used for filtering. -->\n    <a\n      [queryParams]=\"{\n        user: fileEntry.user._id,\n        username: fileEntry.user.profile.name\n      }\"\n      [routerLink]=\"['/file/list']\">\n    {{fileEntry.user.profile.name}}\n  </a>\n</small>\n\n<div id=\"fileEntryContent\">\n  File Key: {{fileEntry._id}}\n</div>\n\n<br />\n\n<div\n  *ngIf=\"fileEntry.comments && fileEntry.comments.length\"\n  id=\"fileEntryComments\">\n  <h3>Comments</h3>\n  <app-comment-view\n    *ngFor=\"let comment of fileEntry.comments trackBy _id; let index = index\"\n    [fileEntry]=\"fileEntry\"\n    [comment]=\"comment\"\n    (onDeleteSuccess)=\"onCommentDeleteSuccess(index)\"\n    class=\"fileEntryComment\">\n  </app-comment-view>\n</div>\n\n<br />\n"

/***/ }),

/***/ "./client/src/app/file/file-view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var FileViewComponent = (function () {
    function FileViewComponent(auth, fileService, _route, _router) {
        this.auth = auth;
        this.fileService = fileService;
        this._route = _route;
        this._router = _router;
        this.newCommentIsBeingEntered = false;
    }
    FileViewComponent.prototype.deleteFileEntry = function () {
        var _this = this;
        this.fileService.deleteFileEntry(this.fileEntry)
            .subscribe(function () {
            _this._router.navigate(['/file/list']);
        }, function (err) { return _this.fileService.error = JSON.parse(err._body).msg || err.statusText; });
    };
    FileViewComponent.prototype.filePermission = function () {
        var _this = this;
        this.fileService.enableFileEntry(this.fileEntry)
            .subscribe(function () {
            _this._router.navigate(['/file/list']);
        }, function (err) { return _this.fileService.error = JSON.parse(err._body).msg || err.statusText; });
    };
    FileViewComponent.prototype.onCommentCancel = function () {
        this.newCommentIsBeingEntered = false;
    };
    FileViewComponent.prototype.onCommentDeleteSuccess = function (index) {
        this.fileEntry.comments.splice(index, 1);
    };
    FileViewComponent.prototype.onCommentSave = function (comment) {
        this.newCommentIsBeingEntered = false;
        this.fileEntry.comments.push(comment);
    };
    FileViewComponent.prototype.ngOnInit = function () {
        // Get file entry data from route resolve
        this.fileEntry = this._route.snapshot.data['resolveData'];
    };
    FileViewComponent.prototype.ngOnDestroy = function () {
        this.fileService.error = null;
    };
    return FileViewComponent;
}());
FileViewComponent = __decorate([
    core_1.Component({
        selector: 'app-file-view',
        template: __webpack_require__("./client/src/app/file/file-view.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], FileViewComponent);
exports.FileViewComponent = FileViewComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=file-view.component.js.map

/***/ }),

/***/ "./client/src/app/file/file.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_file_upload_1 = __webpack_require__("./node_modules/ng2-file-upload/index.js");
var core_module_1 = __webpack_require__("./client/src/app/core/core.module.ts");
var shared_module_1 = __webpack_require__("./client/src/app/shared/shared.module.ts");
var file_create_component_1 = __webpack_require__("./client/src/app/file/file-create.component.ts");
var file_view_component_1 = __webpack_require__("./client/src/app/file/file-view.component.ts");
var file_edit_component_1 = __webpack_require__("./client/src/app/file/file-edit.component.ts");
var file_list_component_1 = __webpack_require__("./client/src/app/file/file-list.component.ts");
var comment_view_component_1 = __webpack_require__("./client/src/app/file/comment-view.component.ts");
var comment_edit_component_1 = __webpack_require__("./client/src/app/file/comment-edit.component.ts");
var file_entry_resolver_1 = __webpack_require__("./client/src/app/file/file-entry.resolver.ts");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var file_routes_1 = __webpack_require__("./client/src/app/file/file.routes.ts");
var FileModule = (function () {
    function FileModule() {
    }
    return FileModule;
}());
FileModule = __decorate([
    core_1.NgModule({
        declarations: [
            file_create_component_1.FileCreateComponent,
            file_view_component_1.FileViewComponent,
            file_edit_component_1.FileEditComponent,
            file_list_component_1.FileListComponent,
            comment_view_component_1.CommentViewComponent,
            comment_edit_component_1.CommentEditComponent,
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_file_upload_1.FileUploadModule,
            file_routes_1.FileRoutingModule,
            core_module_1.CoreModule,
            shared_module_1.SharedModule,
        ],
        exports: [],
        providers: [
            file_service_1.FileService,
            file_entry_resolver_1.FileEntryResolver,
        ]
    })
], FileModule);
exports.FileModule = FileModule;
//# sourceMappingURL=file.module.js.map

/***/ }),

/***/ "./client/src/app/file/file.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var file_create_component_1 = __webpack_require__("./client/src/app/file/file-create.component.ts");
var file_list_component_1 = __webpack_require__("./client/src/app/file/file-list.component.ts");
var file_view_component_1 = __webpack_require__("./client/src/app/file/file-view.component.ts");
var file_edit_component_1 = __webpack_require__("./client/src/app/file/file-edit.component.ts");
var file_entry_resolver_1 = __webpack_require__("./client/src/app/file/file-entry.resolver.ts");
var authenticated_guard_1 = __webpack_require__("./client/src/app/user/authenticated.guard.ts");
var can_deactivate_guard_1 = __webpack_require__("./client/src/app/core/can-deactivate.guard.ts");
var BLOG_ROUTES = [
    {
        path: '',
        children: [
            {
                path: 'create',
                component: file_create_component_1.FileCreateComponent,
                canActivate: [authenticated_guard_1.AuthenticatedGuard],
                canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard],
                data: {
                    title: 'Create File Entry'
                }
            },
            {
                path: 'list',
                component: file_list_component_1.FileListComponent,
                data: {
                    title: 'File List'
                }
            },
            {
                path: ':slug',
                component: file_view_component_1.FileViewComponent,
                data: {
                    title: 'File Entry: '
                },
                resolve: {
                    resolveData: file_entry_resolver_1.FileEntryResolver
                }
            },
            {
                path: ':slug/edit',
                component: file_edit_component_1.FileEditComponent,
                data: {
                    title: 'File Edit: '
                },
                resolve: {
                    resolveData: file_entry_resolver_1.FileEntryResolver
                },
                canActivate: [authenticated_guard_1.AuthenticatedGuard],
                canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard]
            }
        ]
    }
];
var FileRoutingModule = (function () {
    function FileRoutingModule() {
    }
    return FileRoutingModule;
}());
FileRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(BLOG_ROUTES)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], FileRoutingModule);
exports.FileRoutingModule = FileRoutingModule;
//# sourceMappingURL=file.routes.js.map

/***/ }),

/***/ "./client/src/app/file/file.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var FileService = (function () {
    function FileService(_authHttp, _http, _router) {
        var _this = this;
        this._authHttp = _authHttp;
        this._http = _http;
        this._router = _router;
        /**
         * Get file list. Uses arrow function format for this binding so it can work
         * when passed into component inputs.
         * @param {Object} params - Params for filtering file list
         * @return {Promise<any>} fileList - Promise resolving to fileEntries, count, skip
         */
        this.getList = function (params) {
            var searchParams = Object.assign({}, params);
            if (searchParams.page) {
                searchParams.skip = searchParams.limit * (searchParams.page - 1);
                delete searchParams.page;
            }
            if (!searchParams.sort) {
                searchParams.sort = '-created';
            }
            var queryParams = new http_1.URLSearchParams();
            for (var key in searchParams) {
                if (searchParams.hasOwnProperty(key)) {
                    queryParams.set(key, searchParams[key]);
                }
            }
            return _this._http.get('/api/file', { search: queryParams })
                .map(function (res) { return res.json(); })
                .map(function (res) { return ({
                items: res.files,
                count: res.count,
                skip: searchParams.skip
            }); })
                .toPromise();
        };
    }
    /**
     * Create file entry
     * @param {FileEntry} entry - File entry
     */
    FileService.prototype.createFileEntry = function (entry) {
        var _this = this;
        this._authHttp.post('/api/file', entry)
            .map(function (res) { return res.json(); })
            .subscribe(function (fileEntry) {
            _this._router.navigate(['/file', fileEntry._id]);
        }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    /**
     * Delete file entry
     * @param {FileEntry} entry - File entry
     */
    FileService.prototype.deleteFileEntry = function (entry) {
        return this._authHttp.delete('/api/file/' + entry._id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Enable/Disable file entry
     * @param {FileEntry} entry - File entry
     */
    FileService.prototype.enableFileEntry = function (entry) {
        return this._authHttp.get('/api/file/enable/' + entry._id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get file entry using slug
     * @param {String} slug - Slug made from file title
     * @return {Promise<FileEntry>} fileEntry - Promise resolving to fileEntry or []
     */
    FileService.prototype.getFileEntryBySlug = function (slug) {
        return this._http.get('/api/file/' + slug)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    /**
     * Update file entry
     * @param {FileEntry} entry - File entry
     * @return {Observable<FileEntry>} file entry
     */
    FileService.prototype.updateFileEntry = function (entry) {
        var _this = this;
        delete entry.comments;
        this._authHttp.put('/api/file/' + entry.slug, entry)
            .map(function (res) { return res.json(); })
            .subscribe(function (fileEntry) {
            _this._router.navigate(['/file', fileEntry.slug]);
        }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    /**
     * Create new comment for a file entry.
     * @param {FileEntry} entry - File entry
     * @return {Observable<FileEntry>} file entry
     */
    FileService.prototype.createComment = function (comment, fileEntry) {
        return this._authHttp.post("/api/file/" + fileEntry._id + "/comment", comment)
            .map(function (res) { return res.json(); });
    };
    /**
     * Delete comment.
     * @param {Comment} comment - Comment
     * @return {Observable<any>}
     */
    FileService.prototype.deleteComment = function (comment) {
        return this._authHttp.delete('/api/comment/' + comment._id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get comment by id.
     * @param {String} id - Comment id
     * @return {Observable<Comment>} comment
     */
    FileService.prototype.getCommentById = function (id) {
        return this._authHttp.get('/api/comment/' + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update comment
     * @param {Comment} comment - Comment
     * @return {Observable<Comment>} comment
     */
    FileService.prototype.updateComment = function (comment) {
        return this._authHttp.put('/api/comment/' + comment._id, comment)
            .map(function (res) { return res.json(); });
    };
    return FileService;
}());
FileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object, typeof (_c = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _c || Object])
], FileService);
exports.FileService = FileService;
var _a, _b, _c;
//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ "./client/src/app/shared/paginated-search-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search-box\n  [searchTerm]=\"searchTerm\"\n  (searchChanged)=\"changePage({search: $event.searchTerm, page: 1})\">\n</app-search-box>\n\n<br />\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">\n  {{error}}\n</div>\n\n<div *ngIf=\"!items && loaded\" class=\"alert alert-info\">\n  No items at this time.\n</div>\n\n<div *ngIf=\"items && loaded\">\n  <div>\n    <div class=\"pull-right\">\n      <div class=\"form-group\">\n        <label for=\"sort\">Sort</label>\n        <select\n          class=\"form-control\"\n          id=\"sort\"\n          name=\"sort\"\n          (change)=\"changePage({page: 1})\"\n          [(ngModel)]=\"sort\">\n          <option\n            *ngFor=\"let field of sortFields\"\n            value=\"{{field.fieldName}}\">\n            {{field.displayName}} Ascending\n          </option>\n          <option\n            *ngFor=\"let field of sortFields\"\n            value=\"-{{field.fieldName}}\">\n            {{field.displayName}} Descending\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"limit\">Limit</label>\n        <select\n          class=\"form-control\"\n          id=\"limit\"\n          name=\"limit\"\n          (change)=\"page = 0; changePage()\"\n          [(ngModel)]=\"limit\">\n          <option value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"20\">20</option>\n          <option value=\"25\">25</option>\n          <option value=\"50\">50</option>\n          <option value=\"100\">100</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"item-count\">\n      {{currentStart}} through {{currentEnd}} of {{count}}\n      <span *ngIf=\"searchTerm\">for search term \"{{searchTerm}}\"</span>\n      <span *ngIf=\"queryParams.user\">by user {{queryParams.username}}</span>\n    </div>\n    <pagination\n      class=\"pagination-sm\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\"\n      nextText=\"&rsaquo;\"\n      previousText=\"&lsaquo;\"\n      [boundaryLinks]=\"true\"\n      [itemsPerPage]=\"limit\"\n      [(ngModel)]=\"currentPage\"\n      (pageChanged)=\"changePage($event)\"\n      [totalItems]=\"count\">\n   </pagination> \n  </div>\n  <ng-content></ng-content>\n  <div>\n    <!-- Setting (pageChanged) again here would make it fire twice on page changes -->\n    <pagination\n      class=\"pagination-sm\"\n      firstText=\"&laquo;\"\n      lastText=\"&raquo;\"\n      nextText=\"&rsaquo;\"\n      previousText=\"&lsaquo;\"\n      [boundaryLinks]=\"true\"\n      [itemsPerPage]=\"limit\"\n      [(ngModel)]=\"currentPage\"\n      [totalItems]=\"count\">\n   </pagination> \n    <div>\n      {{currentStart}} through {{currentEnd}} of {{count}}\n      <span *ngIf=\"searchTerm\">for search term \"{{searchTerm}}\"</span>\n      <span *ngIf=\"queryParams.user\">by user {{queryParams.username}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./client/src/app/shared/paginated-search-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var PaginatedSearchListComponent = (function () {
    function PaginatedSearchListComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.limit = 20;
        this.loaded = false;
        this.sort = '-created';
    }
    /**
     * Change page. Used by pagination component and by selects' (change) output.
     * @param {Object} options - Pagination options
     */
    PaginatedSearchListComponent.prototype.changePage = function (options) {
        var page = options ? options.page : 1;
        var newSearch = options && (options.search || options.search === '')
            ? options.search : null;
        var oldParams = Object.assign({}, this.queryParams);
        var newParams = { page: page, sort: this.sort, limit: this.limit };
        var queryParams = Object.assign({}, oldParams, newParams);
        if (newSearch) {
            queryParams.search = newSearch;
            queryParams.page = 1;
        }
        else if (newSearch === '') {
            delete queryParams.search;
        }
        this.searchTerm = queryParams.search;
        this.currentPage = queryParams.page;
        this._router.navigate([], { queryParams: queryParams });
    };
    /**
     * Set page data based on returned list items and query params used to
     * retrieve the items.
     * @param {*} listData
     */
    PaginatedSearchListComponent.prototype._setPageData = function (listData) {
        var count = listData.count, items = listData.items, limit = listData.limit, sort = listData.sort, search = listData.search;
        var skip = listData.skip, page = listData.page;
        skip = skip || 0;
        page = page - 1 || 0;
        this.items = items;
        this.count = count;
        this.limit = limit || this.limit;
        this.sort = sort || this.sort;
        this.currentPage = page + 1;
        this.currentStart = count > 0 ? skip + 1 : 0;
        this.currentEnd = this.currentStart > 0 ? skip + items.length : 0;
    };
    /**
     * Subscribe to route query params and retrieve list items when route query
     * params change.
     */
    PaginatedSearchListComponent.prototype._getListItemsOnQueryParamChange = function () {
        var _this = this;
        this._queryParams = this._route.queryParams
            .subscribe(function (qp) {
            var queryParams = Object.assign({}, qp);
            _this.queryParams = queryParams;
            if (queryParams.search) {
                _this.searchTerm = queryParams.search;
            }
            // If navigating back to default blog list page 1 while already on blog
            // list, reset everything.
            if (!queryParams.search && !queryParams.page
                && !queryParams.sort && !queryParams.limit) {
                _this.searchTerm = '';
                _this.currentPage = 1;
                _this.sort = '-created';
                _this.limit = 20;
            }
            var list = _this.listRetriever(queryParams);
            if (list instanceof Promise) {
                _this.loaded = false;
                list.then(function (listData) {
                    _this._setPageData(Object.assign(listData, queryParams));
                    _this.loaded = true;
                }, function (err) { return _this.error = err; });
            }
            else {
                throw new Error('List retrieval function must return a promise');
            }
        });
    };
    PaginatedSearchListComponent.prototype.ngOnInit = function () {
        this._getListItemsOnQueryParamChange();
    };
    PaginatedSearchListComponent.prototype.ngOnDestroy = function () {
        this._queryParams.unsubscribe();
    };
    return PaginatedSearchListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PaginatedSearchListComponent.prototype, "listRetriever", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PaginatedSearchListComponent.prototype, "sortFields", void 0);
PaginatedSearchListComponent = __decorate([
    core_1.Component({
        selector: 'app-paginated-search-list',
        template: __webpack_require__("./client/src/app/shared/paginated-search-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], PaginatedSearchListComponent);
exports.PaginatedSearchListComponent = PaginatedSearchListComponent;
var _a, _b;
//# sourceMappingURL=paginated-search-list.component.js.map

/***/ }),

/***/ "./client/src/app/shared/search-box.component.html":
/***/ (function(module, exports) {

module.exports = "<form\n  novalidate\n  [formGroup]=\"searchForm\">\n  <input\n    class=\"form-control\"\n    name=\"searchTerm\"\n    placeholder=\"Search...\"\n    type=\"search\"\n    [formControl]=\"searchForm.get('searchTerm')\">\n</form>\n"

/***/ }),

/***/ "./client/src/app/shared/search-box.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/src/app/shared/search-box.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var SearchBoxComponent = (function () {
    function SearchBoxComponent(_fb) {
        this._fb = _fb;
        this.searchTerm = '';
        this.debounce = 500;
        this.minlength = 3;
        this.searchChanged = new core_1.EventEmitter();
    }
    SearchBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = this._fb.group({ searchTerm: [this.searchTerm] });
        this._searchSub = this.searchForm.controls['searchTerm'].valueChanges
            .debounceTime(this.debounce)
            .filter(function (val) { return val.length >= _this.minlength || val === ''; })
            .subscribe(function (val) { return _this.searchChanged.emit({ searchTerm: val }); });
    };
    SearchBoxComponent.prototype.ngOnDestroy = function () {
        this._searchSub.unsubscribe();
    };
    SearchBoxComponent.prototype.ngOnChanges = function (changes) {
        var searchTermChange = changes.searchTerm;
        if (!searchTermChange.firstChange) {
            this.searchForm.controls['searchTerm']
                .setValue(searchTermChange.currentValue, { emitEvent: false });
        }
    };
    return SearchBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchBoxComponent.prototype, "searchTerm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchBoxComponent.prototype, "debounce", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SearchBoxComponent.prototype, "minlength", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SearchBoxComponent.prototype, "searchChanged", void 0);
SearchBoxComponent = __decorate([
    core_1.Component({
        selector: 'app-search-box',
        template: __webpack_require__("./client/src/app/shared/search-box.component.html"),
        styles: [__webpack_require__("./client/src/app/shared/search-box.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
], SearchBoxComponent);
exports.SearchBoxComponent = SearchBoxComponent;
var _a;
//# sourceMappingURL=search-box.component.js.map

/***/ }),

/***/ "./client/src/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var pagination_1 = __webpack_require__("./node_modules/ngx-bootstrap/pagination/index.js");
var paginated_search_list_component_1 = __webpack_require__("./client/src/app/shared/paginated-search-list.component.ts");
var search_box_component_1 = __webpack_require__("./client/src/app/shared/search-box.component.ts");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            pagination_1.PaginationModule.forRoot(),
        ],
        declarations: [
            paginated_search_list_component_1.PaginatedSearchListComponent,
            search_box_component_1.SearchBoxComponent,
        ],
        exports: [
            paginated_search_list_component_1.PaginatedSearchListComponent,
            search_box_component_1.SearchBoxComponent,
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pager_component__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pager.component.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__pager_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_component__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.component.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__pagination_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_module__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return __WEBPACK_IMPORTED_MODULE_2__pagination_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_config__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.config.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return __WEBPACK_IMPORTED_MODULE_3__pagination_config__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pager.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.config.js");



var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PagerComponent; }),
    multi: true
};
var PAGER_TEMPLATE = "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\">\n        <a href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a>\n      </li>\n      <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align, 'float-right': align}\" class=\"{{ pageBtnClass }}\">\n        <a href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a>\n      </li>\n  </ul>\n";
var PagerComponent = (function () {
    function PagerComponent(renderer, elementRef, paginationConfig) {
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object with current page index and number of items per page */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PagerComponent.prototype.ngOnInit = function () {
        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        // watch for maxSize
        this.maxSize = typeof this.maxSize !== 'undefined'
            ? this.maxSize
            : this.config.maxSize;
        this.rotate = typeof this.rotate !== 'undefined'
            ? this.rotate
            : this.config.rotate;
        this.boundaryLinks = typeof this.boundaryLinks !== 'undefined'
            ? this.boundaryLinks
            : this.config.boundaryLinks;
        this.directionLinks = typeof this.directionLinks !== 'undefined'
            ? this.directionLinks
            : this.config.directionLinks;
        this.pageBtnClass = typeof this.pageBtnClass !== 'undefined'
            ? this.pageBtnClass
            : this.config.pageBtnClass;
        // base class
        this.itemsPerPage = typeof this.itemsPerPage !== 'undefined'
            ? this.itemsPerPage
            : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PagerComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PagerComponent.prototype.getText = function (key) {
        return this[key + 'Text'] || this.config[key + 'Text'];
    };
    PagerComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PagerComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PagerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PagerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PagerComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PagerComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PagerComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PagerComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PagerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pager',
                    template: PAGER_TEMPLATE,
                    providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */], },
    ]; };
    PagerComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PagerComponent;
}());

//# sourceMappingURL=pager.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PAGINATION_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.config.js");



var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PaginationComponent; }),
    multi: true
};
var PAGINATION_TEMPLATE = "\n  <ul class=\"pagination\" [ngClass]=\"classMap\">\n    <li class=\"pagination-first page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(1, $event)\" [innerHTML]=\"getText('first')\"></a>\n    </li>\n\n    <li class=\"pagination-prev page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noPrevious()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\" [innerHTML]=\"getText('previous')\"></a>\n      </li>\n\n    <li *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.active\"\n        [class.disabled]=\"disabled&&!pg.active\"\n        class=\"pagination-page page-item\">\n      <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\" [innerHTML]=\"pg.text\"></a>\n    </li>\n\n    <li class=\"pagination-next page-item\"\n        *ngIf=\"directionLinks\"\n        [class.disabled]=\"noNext()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\" [innerHTML]=\"getText('next')\"></a></li>\n\n    <li class=\"pagination-last page-item\"\n        *ngIf=\"boundaryLinks\"\n        [class.disabled]=\"noNext()||disabled\">\n      <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\" [innerHTML]=\"getText('last')\"></a></li>\n  </ul>\n  ";
var PaginationComponent = (function () {
    function PaginationComponent(renderer, elementRef, paginationConfig) {
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object with current page index and number of items per page */
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.renderer = renderer;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = (value > this.totalPages) ? this.totalPages : (value || 1);
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        // watch for maxSize
        this.maxSize = typeof this.maxSize !== 'undefined'
            ? this.maxSize
            : this.config.maxSize;
        this.rotate = typeof this.rotate !== 'undefined'
            ? this.rotate
            : this.config.rotate;
        this.boundaryLinks = typeof this.boundaryLinks !== 'undefined'
            ? this.boundaryLinks
            : this.config.boundaryLinks;
        this.directionLinks = typeof this.directionLinks !== 'undefined'
            ? this.directionLinks
            : this.config.directionLinks;
        this.pageBtnClass = typeof this.pageBtnClass !== 'undefined'
            ? this.pageBtnClass
            : this.config.pageBtnClass;
        // base class
        this.itemsPerPage = typeof this.itemsPerPage !== 'undefined'
            ? this.itemsPerPage
            : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        return this[key + 'Text'] || this.config[key + 'Text'];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    PaginationComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'pagination',
                    template: PAGINATION_TEMPLATE,
                    providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */], },
    ]; };
    PaginationComponent.propDecorators = {
        'align': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'boundaryLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'firstText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'previousText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nextText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'lastText': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'rotate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'pageBtnClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'numPages': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'pageChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'itemsPerPage': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'totalItems': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return PaginationComponent;
}());

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// todo: split

/** Provides default values for Pagination and pager components */
var PaginationConfig = (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    PaginationConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PaginationConfig.ctorParameters = function () { return []; };
    return PaginationConfig;
}());

//# sourceMappingURL=pagination.config.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/pagination.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_config__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pager_component__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pager.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagination_component__ = __webpack_require__("./node_modules/ngx-bootstrap/pagination/pagination.component.js");





var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [__WEBPACK_IMPORTED_MODULE_2__pagination_config__["a" /* PaginationConfig */]] };
    };
    PaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__pager_component__["a" /* PagerComponent */], __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__pager_component__["a" /* PagerComponent */], __WEBPACK_IMPORTED_MODULE_4__pagination_component__["a" /* PaginationComponent */]]
                },] },
    ];
    /** @nocollapse */
    PaginationModule.ctorParameters = function () { return []; };
    return PaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "./node_modules/rxjs/_esm5/Scheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scheduler; });
/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
//# sourceMappingURL=Scheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/operator/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/skip.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_skip PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].prototype.skip = __WEBPACK_IMPORTED_MODULE_1__operator_skip__["a" /* skip */];
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_skip__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/skip.js");
/** PURE_IMPORTS_START .._operators_skip PURE_IMPORTS_END */

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_skip__["a" /* skip */])(count)(this);
}
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var DebounceTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operators/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = skip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return function (source) { return source.lift(new SkipOperator(count)); };
}
var SkipOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=skip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/Action.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START .._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(__WEBPACK_IMPORTED_MODULE_0__Subscription__["a" /* Subscription */]));
//# sourceMappingURL=Action.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AsyncAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_root__ = __webpack_require__("./node_modules/rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Action__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/Action.js");
/** PURE_IMPORTS_START .._util_root,._Action PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.pending = false;
        this.work = work;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return __WEBPACK_IMPORTED_MODULE_0__util_root__["a" /* root */].clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    /** @deprecated internal use only */ AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(__WEBPACK_IMPORTED_MODULE_1__Action__["a" /* Action */]));
//# sourceMappingURL=AsyncAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/Scheduler.js");
/** PURE_IMPORTS_START .._Scheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var AsyncScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__Scheduler__["a" /* Scheduler */]));
//# sourceMappingURL=AsyncScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/scheduler/async.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return async; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__ = __webpack_require__("./node_modules/rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncAction,._AsyncScheduler PURE_IMPORTS_END */


/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
var async = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__AsyncScheduler__["a" /* AsyncScheduler */](__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]);
//# sourceMappingURL=async.js.map


/***/ })

});
//# sourceMappingURL=common.chunk.js.map