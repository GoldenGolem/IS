webpackJsonp(["admin.module"],{

/***/ "./client/src/app/admin/admin-auth.guard.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var AdminAuthenticatedGuard = (function () {
    function AdminAuthenticatedGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AdminAuthenticatedGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._authService.getAuthenticatedState()
            .then(function (isAuthenticated) {
            if (!isAuthenticated || !_this._authService.isAdmin) {
                _this._router.navigate(['/']);
            }
            return _this._authService.isAdmin;
        });
    };
    return AdminAuthenticatedGuard;
}());
AdminAuthenticatedGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AdminAuthenticatedGuard);
exports.AdminAuthenticatedGuard = AdminAuthenticatedGuard;
var _a, _b;
//# sourceMappingURL=admin-auth.guard.js.map

/***/ }),

/***/ "./client/src/app/admin/admin-blog-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Admin Blog List</h1>\n\n<a\n  class=\"btn btn-primary\"\n  id=\"createBlogEntryBtn\"\n  *ngIf=\"auth.loggedIn\" [routerLink]=\"['/blog/create']\">\n  <i class=\"fa fa-plus\"></i>\n  New Blog Entry\n</a>\n\n<br />\n\n<div class=\"alert alert-danger\" *ngIf=\"blogService.error\">\n  {{blogService.error}}\n</div>\n\n<app-paginated-search-list\n  [listRetriever]=\"blogService.getList\"\n  [sortFields]=\"sortFields\"\n  #list>\n  <table class=\"table table-striped table-hover\" *ngIf=\"list.items\">\n    <tr>\n      <th>Title</th>\n      <th>Author</th>\n      <th>Date</th>\n      <th>Content</th>\n      <th>Edit</th>\n      <th>Delete</th>\n    </tr>\n    <tr\n      class=\"admin-blog-list-item\"\n      *ngFor=\"let blogEntry of list.items trackBy _id\">\n      <td>\n        <a [routerLink]=\"['/blog', blogEntry.slug]\">{{blogEntry.title}}</a>\n      </td>\n      <td>\n        <a\n          [queryParams]=\"{\n            user: blogEntry.user._id,\n            username: blogEntry.user.profile.name\n          }\"\n          [routerLink]=\"['/admin/blog/list']\">\n          {{blogEntry.user.profile.name}}\n        </a>\n      </td>\n      <td>\n        {{blogEntry.created}}\n      </td>\n      <td>\n        {{blogEntry.content.slice(0, 100)}}...\n      </td>\n      <td>\n        <a\n          class=\"btn btn-default\"\n          routerLink=\"/blog/{{blogEntry.slug}}/edit\">\n          <i class=\"fa fa-edit\"></i>\n        </a>\n      </td>\n      <td>\n        <button\n          class=\"btn btn-default\"\n          (click)=\"deleteBlogEntry(blogEntry)\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n    </tr>\n  </table>\n</app-paginated-search-list>\n"

/***/ }),

/***/ "./client/src/app/admin/admin-blog-list.component.ts":
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
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var blog_service_1 = __webpack_require__("./client/src/app/blog/blog.service.ts");
var AdminBlogListComponent = (function () {
    function AdminBlogListComponent(auth, blogService, _route, _router) {
        this.auth = auth;
        this.blogService = blogService;
        this._route = _route;
        this._router = _router;
        this.sortFields = [
            { displayName: 'Created', fieldName: 'created' },
            { displayName: 'Title', fieldName: 'title' }
        ];
    }
    AdminBlogListComponent.prototype.deleteBlogEntry = function (entry) {
        var _this = this;
        this.blogService.deleteBlogEntry(entry)
            .subscribe(function () {
            var queryParams = Object.assign({}, _this._route.snapshot.queryParams);
            queryParams.cache = new Date().valueOf();
            // Navigate to same url with cache buster to trigger results update
            _this._router.navigate([], { queryParams: queryParams, skipLocationChange: true });
        }, function (err) { return _this.blogService.error = JSON.parse(err._body).msg || err.statusText; });
    };
    return AdminBlogListComponent;
}());
AdminBlogListComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-blog-list',
        template: __webpack_require__("./client/src/app/admin/admin-blog-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof blog_service_1.BlogService !== "undefined" && blog_service_1.BlogService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], AdminBlogListComponent);
exports.AdminBlogListComponent = AdminBlogListComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=admin-blog-list.component.js.map

/***/ }),

/***/ "./client/src/app/admin/admin-file-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Admin File List</h1>\n\n<a\n  class=\"btn btn-primary\"\n  id=\"createFileEntryBtn\"\n  *ngIf=\"auth.loggedIn\" [routerLink]=\"['/file/create']\">\n  <i class=\"fa fa-plus\"></i>\n  New File Entry\n</a>\n\n<br />\n\n<div class=\"alert alert-danger\" *ngIf=\"fileService.error\">\n  {{fileService.error}}\n</div>\n\n<app-paginated-search-list\n  [listRetriever]=\"fileService.getList\"\n  [sortFields]=\"sortFields\"\n  #list>\n  <table class=\"table table-striped table-hover\" *ngIf=\"list.items\">\n    <tr>\n      <th>Title</th>\n      <th>Author</th>\n      <th>Date</th>\n      <th>Enable/Disable</th>\n      <th>Delete</th>\n    </tr>\n    <tr\n      class=\"admin-file-list-item\"\n      *ngFor=\"let fileEntry of list.items trackBy _id\">\n      <td>\n        <a [routerLink]=\"['/file', fileEntry._id]\">{{fileEntry.name}}</a>\n      </td>\n      <td>\n        <a\n          [queryParams]=\"{\n            user: fileEntry.user._id,\n            username: fileEntry.user.profile.name\n          }\"\n          [routerLink]=\"['/admin/file/list']\">\n          {{fileEntry.user.profile.name}}\n        </a>\n      </td>\n      <td>\n        {{fileEntry.created}}\n      </td>\n      <td>\n        <button\n          class=\"btn btn-primary\"\n          (click) = \"filepermission(fileEntry)\"\n          *ngIf = \"fileEntry.enabled\">\n          <i class=\"fa fa-edit\"></i>\n          Enable\n        </button>\n        <button\n          class=\"btn btn-danger\"\n          (click) = \"filepermission(fileEntry)\"\n          *ngIf = \"!fileEntry.enabled\">\n          <i class=\"fa fa-edit\"></i>\n          Disable\n        </button>\n      </td>\n      <td>\n        <button\n          class=\"btn btn-danger\"\n          (click)=\"deleteFileEntry(fileEntry)\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n    </tr>\n  </table>\n</app-paginated-search-list>\n"

/***/ }),

/***/ "./client/src/app/admin/admin-file-list.component.ts":
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
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var file_service_1 = __webpack_require__("./client/src/app/file/file.service.ts");
var AdminFileListComponent = (function () {
    function AdminFileListComponent(auth, fileService, _route, _router) {
        this.auth = auth;
        this.fileService = fileService;
        this._route = _route;
        this._router = _router;
        this.sortFields = [
            { displayName: 'Created', fieldName: 'created' },
            { displayName: 'Title', fieldName: 'title' }
        ];
    }
    AdminFileListComponent.prototype.filepermission = function (entry) {
        var _this = this;
        this.fileService.enableFileEntry(entry)
            .subscribe(function () {
            var queryParams = Object.assign({}, _this._route.snapshot.queryParams);
            queryParams.cache = new Date().valueOf();
            // Navigate to same url with cache buster to trigger results update
            _this._router.navigate([], { queryParams: queryParams, skipLocationChange: true });
        }, function (err) { return _this.fileService.error = JSON.parse(err._body).msg || err.statusText; });
    };
    AdminFileListComponent.prototype.deleteFileEntry = function (entry) {
        var _this = this;
        this.fileService.deleteFileEntry(entry)
            .subscribe(function () {
            var queryParams = Object.assign({}, _this._route.snapshot.queryParams);
            queryParams.cache = new Date().valueOf();
            // Navigate to same url with cache buster to trigger results update
            _this._router.navigate([], { queryParams: queryParams, skipLocationChange: true });
        }, function (err) { return _this.fileService.error = JSON.parse(err._body).msg || err.statusText; });
    };
    return AdminFileListComponent;
}());
AdminFileListComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-file-list',
        template: __webpack_require__("./client/src/app/admin/admin-file-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof file_service_1.FileService !== "undefined" && file_service_1.FileService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], AdminFileListComponent);
exports.AdminFileListComponent = AdminFileListComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=admin-file-list.component.js.map

/***/ }),

/***/ "./client/src/app/admin/admin-user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n  <div class=\"jumbotron\">\n    <form\n      id=\"userEditForm\"\n      novalidate \n      *ngIf=\"userEditForm\"\n      [formGroup]=\"userEditForm\" \n      (submit)=\"adminService.updateUser(userEditForm.value)\">\n      <fieldset>\n        <legend>User Edit</legend>\n        <div\n          class=\"form-group\"\n          [class.has-error]=\"\n            !userEditForm.get('email').valid\n              && userEditForm.get('email').touched\">\n          <label class=\"control-label\" for=\"email\">\n            <strong>Email *</strong>\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"email\"\n            name=\"email\"\n            type=\"email\"\n            *ngIf=\"!user.oauth\"\n            [formControl]=\"userEditForm.get('email')\"/>\n          <p *ngIf=\"user.oauth\">{{user.email}}</p>\n          <small class=\"alert alert-info\" *ngIf=\"user.oauth\">\n            {{user.oauth}} oauth\n          </small>\n          <span\n            class=\"help-block\"\n            *ngIf=\"userEditForm.get('email').hasError('required')\">\n            Email is required\n          </span>\n          <span\n            class=\"help-block\"\n            *ngIf=\"userEditForm.get('email').hasError('pattern')\">\n            Must be a proper email\n          </span>\n        </div>\n        <div\n          class=\"form-group\"\n          [class.has-error]=\"\n            !userEditForm.get('profile').get('name').valid\n              && userEditForm.get('profile').get('name').touched\">\n          <label class=\"control-label\" for=\"name\">\n            <strong>Name *</strong>\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"name\"\n            name=\"name\"\n            type=\"text\"\n            [formControl]=\"userEditForm.get('profile').get('name')\"/>\n          <span\n            class=\"help-block\"\n            *ngIf=\"userEditForm.get('profile')\n              .get('name').hasError('required')\">\n            Name is required\n          </span>\n          <span\n            class=\"help-block\"\n            *ngIf=\"userEditForm.get('profile')\n              .get('name').hasError('minlength')\">\n            Name requires at least three characters\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"roles\">\n            Roles\n          </label>\n          <select\n            class=\"form-control\" \n            id=\"roles\"\n            multiple\n            name=\"roles\"\n            [formControl]=\"userEditForm.get('roles')\">\n            <option [value]=\"'admin'\">admin</option>\n            <option [value]=\"'moderator'\">moderator</option>\n            <option [value]=\"'none'\">none</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"gender\">\n            Gender\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"gender\"\n            name=\"gender\"\n            type=\"text\"\n            [formControl]=\"userEditForm.get('profile').get('gender')\"/>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"location\">\n            Location\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"location\"\n            name=\"location\"\n            type=\"text\"\n            [formControl]=\"userEditForm.get('profile').get('location')\"/>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"website\">\n            Web site\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"website\"\n            name=\"website\"\n            type=\"text\"\n            [formControl]=\"userEditForm.get('profile').get('website')\"/>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"website\">\n            API KEY\n          </label>\n          <span>\n            {{user._id}}\n          </span>\n        </div>\n        <input type=\"hidden\" [formControl]=\"userEditForm.get('_id')\">\n        <button\n          class=\"btn btn-primary\"\n          type=\"submit\"\n          [disabled]=\"userEditForm.invalid\">\n          Update User\n        </button>\n      </fieldset>\n    </form>\n    <br />\n    <br />\n    <div class=\"alert alert-danger\" *ngIf=\"adminService.error\">\n      {{adminService.error}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./client/src/app/admin/admin-user-edit.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var admin_service_1 = __webpack_require__("./client/src/app/admin/admin.service.ts");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var AdminUserEditComponent = (function () {
    function AdminUserEditComponent(adminService, _authService, _fb, _route, _router) {
        var _this = this;
        this.adminService = adminService;
        this._authService = _authService;
        this._fb = _fb;
        this._route = _route;
        this._router = _router;
        this._setupForm = function (user) {
            _this.userEditForm = _this._fb.group({
                'email': [user.email, [
                        forms_1.Validators.required,
                        forms_1.Validators.pattern(_this._authService.emailPattern)
                    ]],
                '_id': [user._id],
                'roles': [user.roles],
                'profile': _this._fb.group({
                    'name': [user.profile.name, [
                            forms_1.Validators.required,
                            forms_1.Validators.minLength(3)
                        ]],
                    'gender': [user.profile.gender],
                    'location': [user.profile.location],
                    'website': [user.profile.website],
                })
            });
        };
    }
    AdminUserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getUser(this._route.snapshot.params['id'])
            .subscribe(function (user) {
            _this.user = user;
            _this._setupForm(user);
        });
    };
    return AdminUserEditComponent;
}());
AdminUserEditComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-user-edit',
        template: __webpack_require__("./client/src/app/admin/admin-user-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object, typeof (_d = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
], AdminUserEditComponent);
exports.AdminUserEditComponent = AdminUserEditComponent;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-user-edit.component.js.map

/***/ }),

/***/ "./client/src/app/admin/admin-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Admin User List</h1>\n\n<br />\n\n<div class=\"alert alert-danger\" *ngIf=\"adminService.error\">\n  {{adminService.error}}\n</div>\n\n<app-paginated-search-list\n  [listRetriever]=\"adminService.getUserList\"\n  [sortFields]=\"sortFields\"\n  #list>\n  <table class=\"table table-striped table-hover\" *ngIf=\"list.items\">\n    <tr>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Last Logged In</th>\n    </tr>\n    <tr\n      class=\"admin-blog-list-item\"\n      *ngFor=\"let user of list.items trackBy _id\">\n      <td>\n        <a routerLink=\"/admin/user/{{user._id}}/edit\">\n          {{user.profile.name}}\n        </a>\n      </td>\n      <td>\n        <a routerLink=\"/admin/user/{{user._id}}/edit\">{{user.email}}</a>\n      </td>\n      <td>\n        {{user.lastLoggedIn}}\n      </td>\n      <td>\n        <a\n          class=\"btn btn-default\"\n          routerLink=\"/admin/user/{{user._id}}/edit\">\n          <i class=\"fa fa-edit\"></i>\n        </a>\n      </td>\n      <td>\n        <button\n          class=\"btn btn-default\"\n          (click)=\"deleteUser(user)\">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n      </td>\n    </tr>\n  </table>\n</app-paginated-search-list>\n"

/***/ }),

/***/ "./client/src/app/admin/admin-user-list.component.ts":
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
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var admin_service_1 = __webpack_require__("./client/src/app/admin/admin.service.ts");
var AdminUserListComponent = (function () {
    function AdminUserListComponent(auth, adminService, _route, _router) {
        this.auth = auth;
        this.adminService = adminService;
        this._route = _route;
        this._router = _router;
        this.sortFields = [
            { displayName: 'Email', fieldName: 'email' },
            { displayName: 'Created At', fieldName: 'createdAt' },
            { displayName: 'Last Logged In', fieldName: 'lastLoggedIn' },
            { displayName: 'Name', fieldName: 'profile.name' },
        ];
    }
    AdminUserListComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.adminService.deleteUser(user)
            .subscribe(function () {
            var queryParams = Object.assign({}, _this._route.snapshot.queryParams);
            queryParams.cache = new Date().valueOf();
            // Navigate to same url with cache buster to trigger results update
            _this._router.navigate([], { queryParams: queryParams, skipLocationChange: true });
        }, function (err) { return _this.adminService.error = JSON.parse(err._body).msg || err.statusText; });
    };
    return AdminUserListComponent;
}());
AdminUserListComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-user-list',
        template: __webpack_require__("./client/src/app/admin/admin-user-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof admin_service_1.AdminService !== "undefined" && admin_service_1.AdminService) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object])
], AdminUserListComponent);
exports.AdminUserListComponent = AdminUserListComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=admin-user-list.component.js.map

/***/ }),

/***/ "./client/src/app/admin/admin.module.ts":
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
var blog_module_1 = __webpack_require__("./client/src/app/blog/blog.module.ts");
var file_module_1 = __webpack_require__("./client/src/app/file/file.module.ts");
var core_module_1 = __webpack_require__("./client/src/app/core/core.module.ts");
var shared_module_1 = __webpack_require__("./client/src/app/shared/shared.module.ts");
var admin_blog_list_component_1 = __webpack_require__("./client/src/app/admin/admin-blog-list.component.ts");
var admin_file_list_component_1 = __webpack_require__("./client/src/app/admin/admin-file-list.component.ts");
var admin_user_edit_component_1 = __webpack_require__("./client/src/app/admin/admin-user-edit.component.ts");
var admin_user_list_component_1 = __webpack_require__("./client/src/app/admin/admin-user-list.component.ts");
var admin_service_1 = __webpack_require__("./client/src/app/admin/admin.service.ts");
var admin_routes_1 = __webpack_require__("./client/src/app/admin/admin.routes.ts");
var admin_auth_guard_1 = __webpack_require__("./client/src/app/admin/admin-auth.guard.ts");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        declarations: [
            admin_blog_list_component_1.AdminBlogListComponent,
            admin_user_list_component_1.AdminUserListComponent,
            admin_user_edit_component_1.AdminUserEditComponent,
            admin_file_list_component_1.AdminFileListComponent
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            admin_routes_1.AdminRoutingModule,
            core_module_1.CoreModule,
            file_module_1.FileModule,
            blog_module_1.BlogModule,
            shared_module_1.SharedModule,
        ],
        exports: [],
        providers: [
            admin_service_1.AdminService,
            admin_auth_guard_1.AdminAuthenticatedGuard
        ]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "./client/src/app/admin/admin.routes.ts":
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
var admin_blog_list_component_1 = __webpack_require__("./client/src/app/admin/admin-blog-list.component.ts");
var admin_file_list_component_1 = __webpack_require__("./client/src/app/admin/admin-file-list.component.ts");
var admin_user_edit_component_1 = __webpack_require__("./client/src/app/admin/admin-user-edit.component.ts");
var admin_user_list_component_1 = __webpack_require__("./client/src/app/admin/admin-user-list.component.ts");
var admin_auth_guard_1 = __webpack_require__("./client/src/app/admin/admin-auth.guard.ts");
var can_deactivate_guard_1 = __webpack_require__("./client/src/app/core/can-deactivate.guard.ts");
var ADMIN_ROUTES = [
    {
        path: '',
        children: [
            {
                path: 'blog/list',
                component: admin_blog_list_component_1.AdminBlogListComponent,
                data: {
                    title: 'Admin Blog List'
                },
                canActivate: [admin_auth_guard_1.AdminAuthenticatedGuard],
            },
            {
                path: 'user/list',
                component: admin_user_list_component_1.AdminUserListComponent,
                data: {
                    title: 'Admin User List'
                },
                canActivate: [admin_auth_guard_1.AdminAuthenticatedGuard],
            },
            {
                path: 'user/:id/edit',
                component: admin_user_edit_component_1.AdminUserEditComponent,
                data: {
                    title: 'Admin User Edit: '
                },
                canActivate: [admin_auth_guard_1.AdminAuthenticatedGuard],
                canDeactivate: [can_deactivate_guard_1.CanDeactivateGuard]
            },
            {
                path: 'file/list',
                component: admin_file_list_component_1.AdminFileListComponent,
                data: {
                    title: 'Admin File List'
                }
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(ADMIN_ROUTES)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AdminRoutingModule);
exports.AdminRoutingModule = AdminRoutingModule;
//# sourceMappingURL=admin.routes.js.map

/***/ }),

/***/ "./client/src/app/admin/admin.service.ts":
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
var AdminService = (function () {
    function AdminService(_authHttp, _router) {
        var _this = this;
        this._authHttp = _authHttp;
        this._router = _router;
        /**
         * Blog errors stored here for alerting to user
         */
        this.error = null;
        /**
         * Get user list
         * @param {Object} params - Params for filtering user list
         * @return {Promise<any>} userList - Promise resolving to items, count, skip
         */
        this.getUserList = function (params) {
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
            return _this._authHttp.get('/api/admin/users', { search: queryParams })
                .map(function (res) { return res.json(); })
                .map(function (res) { return ({
                items: res.users,
                count: res.count,
                skip: searchParams.skip
            }); })
                .toPromise();
        };
    }
    /**
     * Delete blog entry
     * @param {User} user - User
     */
    AdminService.prototype.deleteUser = function (user) {
        return this._authHttp.delete('/api/admin/users/' + user._id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Get user by id
     *
     * @param {string} id - User id
     * @returns {Observable<User>} user - User
     */
    AdminService.prototype.getUser = function (id) {
        return this._authHttp.get('/api/admin/users/' + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Update user
     * @param {User} user - User
     */
    AdminService.prototype.updateUser = function (user) {
        var _this = this;
        if (user.roles.includes('none')) {
            user.roles = [];
        }
        this._authHttp.put('/api/admin/users/' + user._id, user)
            .map(function (res) { return res.json(); })
            .subscribe(function () {
            _this._router.navigate(['/admin/user/list']);
        }, function (err) { return _this.error = JSON.parse(err._body).msg || err.statusText; });
    };
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AdminService);
exports.AdminService = AdminService;
var _a, _b;
//# sourceMappingURL=admin.service.js.map

/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map