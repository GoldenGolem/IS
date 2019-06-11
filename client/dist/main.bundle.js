webpackJsonp(["main"],{

/***/ "./client/src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./client/src/app/admin/admin.module.ts",
		"common",
		"admin.module"
	],
	"./blog/blog.module": [
		"./client/src/app/blog/blog.module.ts",
		"common"
	],
	"./file/file.module": [
		"./client/src/app/file/file.module.ts",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./client/src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./client/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar [color]=\"'steelblue'\"></ng2-slim-loading-bar>\n<app-navbar></app-navbar>\n<section>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./client/src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/src/app/app.component.ts":
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
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var AppComponent = (function () {
    function AppComponent(_route, _router, _titleService) {
        this._route = _route;
        this._router = _router;
        this._titleService = _titleService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._setupDOMTitleChanges();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._DOMTitleChangeSub.unsubscribe();
    };
    /**
     * Subscribe to route changes and update DOM title with route titles.
     */
    AppComponent.prototype._setupDOMTitleChanges = function () {
        var _this = this;
        var baseTitle = 'Meangular | ';
        this._DOMTitleChangeSub = this._router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .map(function (event) { return _this._route; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .map(function (route) { return route.data['value']; })
            .subscribe(function (data) {
            var title = baseTitle + data['title'];
            if (data.resolveData && data.resolveData.title) {
                title += ' ' + data.resolveData.title;
            }
            _this._titleService.setTitle(title);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("./client/src/app/app.component.html"),
        styles: [__webpack_require__("./client/src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof platform_browser_1.Title !== "undefined" && platform_browser_1.Title) === "function" && _c || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./client/src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var angular2_jwt_1 = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
var ng2_slim_loading_bar_1 = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
var app_component_1 = __webpack_require__("./client/src/app/app.component.ts");
var core_module_1 = __webpack_require__("./client/src/app/core/core.module.ts");
var user_module_1 = __webpack_require__("./client/src/app/user/user.module.ts");
var app_routes_1 = __webpack_require__("./client/src/app/app.routes.ts");
var http_factory_1 = __webpack_require__("./client/src/app/core/http.factory.ts");
// Needed for angular2-jwt to work properly. See:
// https://github.com/auth0/angular2-jwt/issues/258#issuecomment-272223420
function authHttpServiceFactory(http, options) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({}), http, options);
}
exports.authHttpServiceFactory = authHttpServiceFactory;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            common_1.CommonModule,
            http_1.HttpModule,
            ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
            app_routes_1.AppRoutingModule,
            user_module_1.UserModule,
            core_module_1.CoreModule,
        ],
        exports: [
            ng2_slim_loading_bar_1.SlimLoadingBarModule
        ],
        providers: [
            // Needed for angular2-jwt to work properly. See:
            // https://github.com/auth0/angular2-jwt/issues/258#issuecomment-272223420
            {
                provide: angular2_jwt_1.AuthHttp,
                useFactory: authHttpServiceFactory,
                deps: [http_1.Http, http_1.RequestOptions]
            },
            // Use custom http service which uses slim loading bar.
            // See `./core/http.interceptor.ts`
            {
                provide: http_1.Http,
                useFactory: http_factory_1.httpFactory,
                deps: [http_1.XHRBackend, http_1.RequestOptions, ng2_slim_loading_bar_1.SlimLoadingBarService]
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./client/src/app/app.routes.ts":
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
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
// Add lazy-loaded routes/modules here
var APP_ROUTES = [
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule',
        data: {
            preload: true
        }
    },
    {
        path: 'file',
        loadChildren: './file/file.module#FileModule',
        data: {
            preload: true
        }
    }
];
// Custom preloading strategy. Preloads routes with data: {preload: true}
var CustomPreloadingStrategy = (function () {
    function CustomPreloadingStrategy() {
    }
    CustomPreloadingStrategy.prototype.preload = function (route, load) {
        return route.data && route.data['preload'] ? load() : Observable_1.Observable.of(null);
    };
    return CustomPreloadingStrategy;
}());
exports.CustomPreloadingStrategy = CustomPreloadingStrategy;
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(APP_ROUTES, {
                preloadingStrategy: CustomPreloadingStrategy
            })
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            CustomPreloadingStrategy
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "./client/src/app/core/can-deactivate.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return CanDeactivateGuard;
}());
CanDeactivateGuard = __decorate([
    core_1.Injectable()
], CanDeactivateGuard);
exports.CanDeactivateGuard = CanDeactivateGuard;
//# sourceMappingURL=can-deactivate.guard.js.map

/***/ }),

/***/ "./client/src/app/core/core.module.ts":
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
var dropdown_1 = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
var home_component_1 = __webpack_require__("./client/src/app/core/home.component.ts");
var navbar_component_1 = __webpack_require__("./client/src/app/core/navbar.component.ts");
var page_not_found_component_1 = __webpack_require__("./client/src/app/core/page-not-found.component.ts");
var can_deactivate_guard_1 = __webpack_require__("./client/src/app/core/can-deactivate.guard.ts");
var core_routes_1 = __webpack_require__("./client/src/app/core/core.routes.ts");
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        declarations: [
            home_component_1.HomeComponent,
            navbar_component_1.NavbarComponent,
            page_not_found_component_1.PageNotFoundComponent,
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            dropdown_1.BsDropdownModule.forRoot(),
            core_routes_1.CoreRoutingModule
        ],
        exports: [
            navbar_component_1.NavbarComponent,
        ],
        providers: [
            can_deactivate_guard_1.CanDeactivateGuard
        ]
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./client/src/app/core/core.routes.ts":
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
var home_component_1 = __webpack_require__("./client/src/app/core/home.component.ts");
var page_not_found_component_1 = __webpack_require__("./client/src/app/core/page-not-found.component.ts");
var CORE_ROUTES = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent,
        data: {
            title: '404 - Page Not Found'
        }
    }
];
var CoreRoutingModule = (function () {
    function CoreRoutingModule() {
    }
    return CoreRoutingModule;
}());
CoreRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(CORE_ROUTES)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], CoreRoutingModule);
exports.CoreRoutingModule = CoreRoutingModule;
//# sourceMappingURL=core.routes.js.map

/***/ }),

/***/ "./client/src/app/core/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>This is Home page.</h1>"

/***/ }),

/***/ "./client/src/app/core/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("./client/src/app/core/home.component.html")
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./client/src/app/core/http.factory.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var http_interceptor_1 = __webpack_require__("./client/src/app/core/http.interceptor.ts");
/**
 * Use custom implementation of http service. This is needed so that the slim
 * loading bar displays during xhr requests.
 *
 * @export
 * @param {XHRBackend} xhrBackend
 * @param {RequestOptions} requestOptions
 * @param {SlimLoadingBarService} slimLoadingBarService
 * @returns {Http}
 */
function httpFactory(xhrBackend, requestOptions, slimLoadingBarService) {
    return new http_interceptor_1.InterceptedHttp(xhrBackend, requestOptions, slimLoadingBarService);
}
exports.httpFactory = httpFactory;
//# sourceMappingURL=http.factory.js.map

/***/ }),

/***/ "./client/src/app/core/http.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var ng2_slim_loading_bar_1 = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/**
 * Add functionality to normal http service. Slim loading bar displays when
 * requests are in progress. Slim loading bar goes away once a response or error
 * is returned.
 *
 * @export
 */
var InterceptedHttp = (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions, _slimLoadingBarService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this._slimLoadingBarService = _slimLoadingBarService;
        return _this;
    }
    InterceptedHttp.prototype.request = function (url, options) {
        var _this = this;
        this._slimLoadingBarService.start();
        return _super.prototype.request.call(this, url, options)
            .finally(function () { return _this._slimLoadingBarService.complete(); });
    };
    return InterceptedHttp;
}(http_1.Http));
InterceptedHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.ConnectionBackend !== "undefined" && http_1.ConnectionBackend) === "function" && _a || Object, typeof (_b = typeof http_1.RequestOptions !== "undefined" && http_1.RequestOptions) === "function" && _b || Object, typeof (_c = typeof ng2_slim_loading_bar_1.SlimLoadingBarService !== "undefined" && ng2_slim_loading_bar_1.SlimLoadingBarService) === "function" && _c || Object])
], InterceptedHttp);
exports.InterceptedHttp = InterceptedHttp;
var _a, _b, _c;
//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ "./client/src/app/core/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">Home</a>\n\t\t</div>\n\t\t<ul class=\"nav navbar-nav pull-left\">\n      <li>\n        <a\n          [routerLink]=\"['/file/list']\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: false}\">\n          File\n        </a>\n      </li>\n\t\t</ul>\n\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t\t<li *ngIf=\"!auth.loggedIn\">\n        <a routerLink=\"/login\" routerLinkActive=\"active\">\n          Log In\n        </a>\n      </li>\n\t\t\t<li *ngIf=\"!auth.loggedIn\">\n        <a routerLink=\"/signup\" routerLinkActive=\"active\">\n          Sign Up\n        </a>\n      </li>\n\t\t\t<li dropdown *ngIf=\"auth.loggedIn && auth.isAdmin\">\n        <a class=\"pointer\" dropdownToggle>\n          Admin\n          <i class=\"fa fa-angle-down\"></i>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a\n              class=\"dropdown-item\"\n              routerLink=\"/admin/file/list\"\n              routerLinkActive=\"active\">\n              File\n            </a>\n            <a\n              class=\"dropdown-item\"\n              routerLink=\"/admin/user/list\"\n              routerLinkActive=\"active\">\n              Users\n            </a>\n          </li>\n        </ul>\n      </li>\n\t\t\t<li *ngIf=\"auth.loggedIn\">\n        <a routerLink=\"/profile\" routerLinkActive=\"active\">\n          Profile\n        </a>\n      </li>\n\t\t\t<li *ngIf=\"auth.loggedIn\">\n        <a class=\"pointer\" (click)=\"logout()\">\n          Logout\n        </a>\n      </li>\n\t\t</ul>\n\t</div>\n</nav>\n"

/***/ }),

/***/ "./client/src/app/core/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".active {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./client/src/app/core/navbar.component.ts":
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
var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-navbar',
        template: __webpack_require__("./client/src/app/core/navbar.component.html"),
        styles: [__webpack_require__("./client/src/app/core/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./client/src/app/core/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    core_1.Component({
        selector: 'app-page-not-found',
        template: "\n    <h1>404 - Page Not Found</h1>\n  "
    })
], PageNotFoundComponent);
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "./client/src/app/user/auth.service.ts":
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
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var AuthService = (function () {
    function AuthService(_http, _router, _authHttp) {
        this._http = _http;
        this._router = _router;
        this._authHttp = _authHttp;
        /**
         * Regex pattern used for form validation
         */
        // tslint:disable-next-line
        this.emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        /**
         * Admin status gotten from user roles
         */
        this.isAdmin = false;
        this.loggedIn = false;
        this._jwtHelper = new angular2_jwt_1.JwtHelper();
        this.getAuthenticatedState();
        this._watchForRedirectTarget();
        // Set default redirect target. Localstorage needed for oauth auth flow.
        localStorage['redirect'] = '/';
    }
    /**
     * Change user's password
     * @param {Object} password form value - Password form value
     * @return {Observable<IAuthResponse>}
     */
    AuthService.prototype.changePassword = function (password, confirmPassword) {
        return this._authHttp.put('/api/account/password', { password: password, confirmPassword: confirmPassword })
            .map(function (res) { return res.json(); });
    };
    /**
     * Send forgot request to server so user can reset password
     * @param {String} email - User's email
     * @return {Observable<IAuthResponse>}
     */
    AuthService.prototype.forgot = function (email) {
        return this._http.post('/api/forgot', { email: email })
            .map(function (res) { return res.json(); });
    };
    /**
     * Get whether user is authenticated or not
     * @return {Promise<Boolean>}
     */
    AuthService.prototype.getAuthenticatedState = function () {
        var _this = this;
        var token = localStorage['id_token'];
        var tokenIsPresentAndExpired = token
            && this._jwtHelper.isTokenExpired(token);
        if (!token || tokenIsPresentAndExpired) {
            return Promise.resolve(false);
        }
        return this._authHttp.get('/api/authenticate')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (res) {
            if (res && res.user && res.token) {
                _this.setAuthenticatedUser(res);
                return true;
            }
            return false;
        });
    };
    /**
     * Login user using email and password
     * @param {String} email
     * @param {String} password
     */
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var redirect = localStorage['redirect'];
        this._http.post('/api/login', { email: email, password: password, redirect: redirect })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this._onAuthenticated.call(_this, res); }, function (err) { return _this.error = JSON.parse(err._body).msg; });
    };
    /**
     * Logout user and return to homepage.
     */
    AuthService.prototype.logout = function () {
        var _this = this;
        if (!localStorage['id_token']) {
            return;
        }
        this._authHttp.get('/api/logout')
            .subscribe(function () {
            _this._setUnauthenticatedUser();
            _this._router.navigate(['/']);
        });
    };
    /**
     * Reset user password
     * @param {String} password - Password
     * @param {String} confirmPassword - Password confirmation
     * @param {String} token - Password reset token
     * @return {Observable<IAuthResponse>}
     */
    AuthService.prototype.resetPassword = function (password, confirmPassword, token) {
        return this._http.post('/api/reset/' + token, { password: password, confirmPassword: confirmPassword })
            .map(function (res) { return res.json(); });
    };
    /**
     * Set user after authentication. Public for oauth.
     * @param {IAuthResponse} res - Response object from server
     */
    AuthService.prototype.setAuthenticatedUser = function (res) {
        this._user = res.user;
        this.isAdmin = this._user.roles.indexOf('admin') > -1;
        this.loggedIn = true;
        localStorage['id_token'] = res.token;
    };
    /**
     * Signup user.
     * @param {User} user - User info for signup
     */
    AuthService.prototype.signup = function (user) {
        var _this = this;
        user.redirect = localStorage['redirect'];
        this._http.post('/api/signup', user)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this._onAuthenticated.call(_this, res); }, function (err) { return _this.error = JSON.parse(err._body).msg; });
    };
    /**
     * Update user.
     * @param {User} user - User info to update
     * @return {Observable<IAuthResponse>}
     */
    AuthService.prototype.updateUser = function (user) {
        return this._authHttp.put('/api/account/profile', user)
            .map(function (res) { return res.json(); });
    };
    /**
     * Retrieve user.
     */
    AuthService.prototype.user = function () {
        return this._user;
    };
    AuthService.prototype._onAuthenticated = function (res) {
        this.setAuthenticatedUser(res);
        this._router.navigateByUrl(localStorage['redirect'] || '/');
    };
    AuthService.prototype._setUnauthenticatedUser = function () {
        this._user = null;
        this.isAdmin = false;
        this.loggedIn = false;
        localStorage.removeItem('id_token');
    };
    /**
     * Watch for route changes so a redirect target can be saved
     * for the user to be redirected to after authentication.
     */
    AuthService.prototype._watchForRedirectTarget = function () {
        this._router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .filter(function (event) { return event['url'] !== '/login'; })
            .filter(function (event) { return event['url'] !== '/signup'; })
            .filter(function (event) { return event['url'] !== '/oauth'; })
            .subscribe(function (event) { return localStorage['redirect'] = event['url']; });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _c || Object])
], AuthService);
exports.AuthService = AuthService;
var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./client/src/app/user/authenticated.guard.ts":
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
var AuthenticatedGuard = (function () {
    function AuthenticatedGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthenticatedGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._authService.getAuthenticatedState()
            .then(function (isAuthenticated) {
            if (!isAuthenticated) {
                _this._router.navigate(['/login']);
            }
            return isAuthenticated;
        });
    };
    return AuthenticatedGuard;
}());
AuthenticatedGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthenticatedGuard);
exports.AuthenticatedGuard = AuthenticatedGuard;
var _a, _b;
//# sourceMappingURL=authenticated.guard.js.map

/***/ }),

/***/ "./client/src/app/user/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron col-sm-6 col-sm-offset-2\">\n  <form novalidate [formGroup]=\"forgotForm\" (submit)=\"forgot()\">\n    <fieldset>\n      <legend>Forgot Password</legend>\n      <div\n        class=\"form-group\"\n        [class.has-error]=\"!forgotForm.controls['email'].valid\n          && forgotForm.controls['email'].touched\">\n        <label class=\"control-label\" for=\"email\">\n          Email\n        </label>\n        <input\n          class=\"form-control\" \n          id=\"email\"\n          type=\"email\"\n          [formControl]=\"forgotForm.controls['email']\"\n        />\n        <span\n          class=\"help-block\"\n          *ngIf=\"forgotForm.controls['email'].hasError('required')\n            && forgotForm.controls['email'].touched\">\n          Email is required\n        </span>\n        <span\n          class=\"help-block\"\n          *ngIf=\"forgotForm.controls['email'].hasError('pattern')\">\n          Must be a proper email\n        </span>\n      </div>\n      <button\n        class=\"btn btn-primary\"\n        type=\"submit\"\n        [disabled]=\"forgotForm.invalid\">\n        Reset Password\n      </button>\n    </fieldset>\n  </form>\n  <div class=\"alert alert-success\" *ngIf=\"message\">\n    {{message}}\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"authService.error\">\n    {{authService.error}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./client/src/app/user/forgot-password.component.ts":
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
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(authService, _fb) {
        this.authService = authService;
        this._fb = _fb;
        this.message = '';
    }
    ForgotPasswordComponent.prototype.forgot = function () {
        var _this = this;
        var email = this.forgotForm.value.email;
        this.authService.forgot(email)
            .subscribe(function (res) { return _this._flashMessage('Email with reset link sent'); }, function (err) { return _this._flashError('Could not process'); });
    };
    ForgotPasswordComponent.prototype._flashError = function (errMessage) {
        var _this = this;
        this.authService.error = errMessage;
        setTimeout(function () { return _this.authService.error = null; }, 3000);
    };
    ForgotPasswordComponent.prototype._flashMessage = function (message) {
        var _this = this;
        this.message = message;
        setTimeout(function () { return _this.message = null; }, 3000);
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = this._fb.group({
            'email': ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(this.authService.emailPattern)
                ]]
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-forgot-password',
        template: __webpack_require__("./client/src/app/user/forgot-password.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
var _a, _b;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "./client/src/app/user/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n\t\t<div class=\"jumbotron\">\n\t\t\t<h2>Enter your credentials.</h2>\n\t\t\t<form (ngSubmit)=\"login()\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"email\">E-mail address</label>\n\t\t\t\t\t<input type=\"email\" [(ngModel)]=\"email\" id=\"email\" name=\"email\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" id=\"password\"\n\t\t\t\t\t\tname=\"password\" class=\"form-control\">\n\t\t\t\t</div>\n        <small>\n          <a [routerLink]=\"['/forgot-password']\">Forgot your password?</a>\n        </small>\n        <br />\n        <div *ngIf=\"authService.error\" class=\"alert alert-danger\">\n          {{authService.error}}\n        </div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Log In</button>\n\t\t\t</form>\n\n      <hr>\n\n      <a class=\"btn btn-default\" href=\"/auth/google\">\n        <i class=\"fa fa-google\"></i> \n        Log In with Google\n      </a>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./client/src/app/user/login.component.ts":
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
var LoginComponent = (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.login = function () {
        this.authService.login(this.email, this.password);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authService.error = null;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("./client/src/app/user/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./client/src/app/user/oauth.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var OauthComponent = (function () {
    function OauthComponent(authService, _router, _http) {
        this.authService = authService;
        this._router = _router;
        this._http = _http;
    }
    OauthComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get and set jwt and user after redirect from oauth authentication
        this._http.get('/auth/oauth/token')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            var redirect = localStorage['redirect'] || '/';
            _this.authService.setAuthenticatedUser(res);
            _this._router.navigate([redirect]);
        }, function (err) { return console.log; });
    };
    return OauthComponent;
}());
OauthComponent = __decorate([
    core_1.Component({
        selector: 'app-oauth',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _c || Object])
], OauthComponent);
exports.OauthComponent = OauthComponent;
var _a, _b, _c;
//# sourceMappingURL=oauth.component.js.map

/***/ }),

/***/ "./client/src/app/user/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n  <div class=\"jumbotron\">\n    <form\n      id=\"profileForm\"\n      novalidate \n      [formGroup]=\"profileForm\" \n      (submit)=\"updateUser()\">\n      <fieldset>\n        <legend>Profile</legend>\n        <div\n          class=\"form-group\"\n          [class.has-error]=\"\n            !profileForm.get('email').valid\n              && profileForm.get('email').touched\">\n          <label class=\"control-label\" for=\"email\">\n            <strong>Email *</strong>\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"email\"\n            name=\"email\"\n            type=\"email\"\n            *ngIf=\"!user.oauth\"\n            [formControl]=\"profileForm.get('email')\"/>\n          <p *ngIf=\"user.oauth\">{{user.email}}</p>\n          <span\n            class=\"help-block\"\n            *ngIf=\"profileForm.get('email').hasError('required')\">\n            Email is required\n          </span>\n          <span\n            class=\"help-block\"\n            *ngIf=\"profileForm.get('email').hasError('pattern')\">\n            Must be a proper email\n          </span>\n        </div>\n        <div\n          class=\"form-group\"\n          [class.has-error]=\"\n            !profileForm.get('profile').get('name').valid\n              && profileForm.get('profile').get('name').touched\">\n          <label class=\"control-label\" for=\"name\">\n            <strong>Name *</strong>\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"name\"\n            name=\"name\"\n            type=\"text\"\n            [formControl]=\"profileForm.get('profile').get('name')\"/>\n          <span\n            class=\"help-block\"\n            *ngIf=\"profileForm.get('profile')\n              .get('name').hasError('required')\">\n            Name is required\n          </span>\n          <span\n            class=\"help-block\"\n            *ngIf=\"profileForm.get('profile')\n              .get('name').hasError('minlength')\">\n            Name requires at least three characters\n          </span>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"gender\">\n            Gender\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"gender\"\n            name=\"gender\"\n            type=\"text\"\n            [formControl]=\"profileForm.get('profile').get('gender')\"/>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"location\">\n            Location\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"location\"\n            name=\"location\"\n            type=\"text\"\n            [formControl]=\"profileForm.get('profile').get('location')\"/>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"website\">\n            Web site\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"website\"\n            name=\"website\"\n            type=\"text\"\n            [formControl]=\"profileForm.get('profile').get('website')\"/>\n        </div>\n        <button\n          class=\"btn btn-primary\"\n          type=\"submit\"\n          [disabled]=\"profileForm.invalid\">\n          Update Profile\n        </button>\n      </fieldset>\n    </form>\n\n    <br />\n    <br />\n\n    <div>\n      <img\n        *ngIf=\"profilePic && !uploader.queue[0]\"\n        src=\"{{profilePic}}\"\n        style=\"width: 100%;\"/>\n      <div *ngIf=\"uploading\"><i class=\"fa fa-spinner fa-pulse\"></i></div>\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" (change)=\"detectChanges()\"/>\n      <br />\n      <button\n        class=\"btn btn-default\"\n        (click)=\"startUpload()\"\n        [disabled]=\"!uploader.queue[0]\">\n        Upload Picture\n      </button>\n    </div>\n\n    <br />\n    <br />\n\n    <form\n      id=\"passwordForm\"\n      novalidate\n      *ngIf=\"!user.oauth\"\n      [formGroup]=\"passwordForm\"\n      (submit)=\"changePassword()\">\n      <fieldset>\n        <legend>Change Password</legend>\n        <div\n          class=\"form-group\"\n          [class.has-error]=\"!passwordForm.get('password').valid\n              && passwordForm.get('password').touched\">\n          <label class=\"control-label\" for=\"password\">\n            Password\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"password\"\n            name=\"password\"\n            type=\"password\"\n            [formControl]=\"passwordForm.get('password')\"/>\n          <span\n            class=\"help-block\"\n            *ngIf=\"passwordForm.get('password').hasError('minlength')\">\n            Password must contain at least 6 characters\n          </span>\n        </div>\n        <div\n          class=\"form-group\"\n          [class.has-error]=\"!passwordForm.get('confirmPassword').valid\n              && passwordForm.get('confirmPassword').touched\">\n          <label class=\"control-label\" for=\"confirmPassword\">\n            Confirm Password\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"confirmPassword\"\n            name=\"confirmPassword\"\n            type=\"password\"\n            [formControl]=\"passwordForm.get('confirmPassword')\"/>\n          <span\n            class=\"help-block\"\n            *ngIf=\"passwordForm.get('confirmPassword')\n              .hasError('minlength')\">\n            Password must contain at least 6 characters\n          </span>\n        </div>\n        <button\n          class=\"btn btn-primary\"\n          type=\"submit\"\n          [disabled]=\"passwordForm.invalid\">\n          Change Password\n        </button>\n      </fieldset>\n    </form>\n    <br />\n    <br />\n    <div class=\"alert alert-success\" *ngIf=\"message\">\n      {{message}}\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"authService.error\">\n      {{authService.error}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./client/src/app/user/profile.component.ts":
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
var ng2_file_upload_1 = __webpack_require__("./node_modules/ng2-file-upload/index.js");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var uploadOptions = {
    url: '/api/photos/upload',
    authToken: localStorage['id_token']
};
var ProfileComponent = (function () {
    function ProfileComponent(authService, _detector, _fb) {
        this.authService = authService;
        this._detector = _detector;
        this._fb = _fb;
        this.message = '';
        this.uploader = new ng2_file_upload_1.FileUploader(uploadOptions);
        this.uploading = false;
        this.user = this.authService.user();
        this.profilePic = this.user.profile.picture;
    }
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        var _a = this.passwordForm.value, password = _a.password, confirmPassword = _a.confirmPassword;
        this.authService.changePassword(password, confirmPassword)
            .subscribe(function (res) { return _this._flashMessage('Password updated'); }, function (err) { return _this._flashError(JSON.parse(err._body)[0].msg); });
        this.passwordForm.patchValue({
            password: '',
            confirmPassword: ''
        });
    };
    /**
     * Detect changes to component. Needed because file-upload plugin isn't
     * detecting changes on its own.
     */
    ProfileComponent.prototype.detectChanges = function () {
        this._detector.detectChanges();
    };
    ProfileComponent.prototype.startUpload = function () {
        this.uploading = true;
        this.uploader.queue[0].upload();
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        var user = this.profileForm.value;
        this.authService.updateUser(user)
            .subscribe(function (res) { return _this._flashMessage('Profile updated'); }, function (err) { return _this._flashError('Could not update profile'); });
    };
    ProfileComponent.prototype._flashError = function (errMessage) {
        var _this = this;
        this.authService.error = errMessage;
        setTimeout(function () { return _this.authService.error = null; }, 3000);
    };
    ProfileComponent.prototype._flashMessage = function (message) {
        var _this = this;
        this.message = message;
        setTimeout(function () { return _this.message = null; }, 3000);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileForm = this._fb.group({
            'email': [this.user.email, [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(this.authService.emailPattern)
                ]],
            'profile': this._fb.group({
                'name': [this.user.profile.name, [
                        forms_1.Validators.required,
                        forms_1.Validators.minLength(3)
                    ]],
                'gender': [this.user.profile.gender],
                'location': [this.user.profile.location],
                'website': [this.user.profile.website],
            })
        });
        this.passwordForm = this._fb.group({
            'password': ['', forms_1.Validators.minLength(6)],
            'confirmPassword': ['', forms_1.Validators.minLength(6)]
        });
        this.uploader.onSuccessItem = function (item, fileUrl) {
            _this.profilePic = fileUrl;
            _this.uploader.queue.splice(0, 1);
            _this.uploading = false;
            _this.detectChanges();
        };
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'app-profile',
        template: __webpack_require__("./client/src/app/user/profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof core_1.ChangeDetectorRef !== "undefined" && core_1.ChangeDetectorRef) === "function" && _b || Object, typeof (_c = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _c || Object])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./client/src/app/user/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron col-sm-6 col-sm-offset-2\">\n  <form novalidate [formGroup]=\"resetForm\" (submit)=\"reset()\">\n    <fieldset>\n      <legend>Reset Password</legend>\n      <div\n        class=\"form-group\"\n        [class.has-error]=\"!resetForm.controls['password'].valid\n          && resetForm.controls['password'].touched\">\n        <label class=\"control-label\" for=\"password\">\n          Password\n        </label>\n        <input\n          class=\"form-control\" \n          id=\"password\"\n          type=\"password\"\n          [formControl]=\"resetForm.controls['password']\"/>\n        <span\n          class=\"help-block\"\n          *ngIf=\"resetForm.controls['password'].hasError('required')\n            && resetForm.controls['password'].touched\">\n          Password is required\n        </span>\n        <span\n          class=\"help-block\"\n          *ngIf=\"resetForm.controls['password'].hasError('minlength')\">\n          Must be at least 6 characters long\n        </span>\n      </div>\n      <div\n        class=\"form-group\"\n        [class.has-error]=\"!resetForm.controls['confirmPassword'].valid\n          && resetForm.controls['confirmPassword'].touched\">\n        <label class=\"control-label\" for=\"confirmPassword\">\n          Confirm Password\n        </label>\n        <input\n          class=\"form-control\" \n          id=\"confirmPassword\"\n          type=\"password\"\n          [formControl]=\"resetForm.controls['confirmPassword']\"/>\n        <span\n          class=\"help-block\"\n          *ngIf=\"resetForm.controls['confirmPassword'].hasError('required')\n            && resetForm.controls['confirmPassword'].touched\">\n          Password is required\n        </span>\n        <span\n          class=\"help-block\"\n          *ngIf=\"resetForm.controls['confirmPassword'].hasError('minlength')\">\n          Must be at least 6 characters long\n        </span>\n      </div>\n      <button\n        type=\"submit\"\n        class=\"btn btn-primary\"\n        [disabled]=\"resetForm.invalid\">\n        Reset Password\n      </button>\n    </fieldset>\n  </form>\n  <br />\n  <br />\n  <div class=\"alert alert-success\" *ngIf=\"message\">\n    {{message}}\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"authService.error\">\n    {{authService.error}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./client/src/app/user/reset-password.component.ts":
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
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authService, _fb, _route) {
        this.authService = authService;
        this._fb = _fb;
        this._route = _route;
        this.message = '';
    }
    ResetPasswordComponent.prototype.reset = function () {
        var _this = this;
        var _a = this.resetForm.value, password = _a.password, confirmPassword = _a.confirmPassword;
        this.authService.resetPassword(password, confirmPassword, this._resetToken)
            .subscribe(function (res) { return _this._flashMessage('Password reset'); }, function (err) { return _this._flashError(JSON.parse(err._body).msg[0].msg); });
    };
    ResetPasswordComponent.prototype._flashError = function (errMessage) {
        var _this = this;
        this.authService.error = errMessage;
        setTimeout(function () { return _this.authService.error = null; }, 3000);
    };
    ResetPasswordComponent.prototype._flashMessage = function (message) {
        var _this = this;
        this.message = message;
        setTimeout(function () { return _this.message = null; }, 3000);
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm = this._fb.group({
            'password': ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6)
                ]],
            'confirmPassword': ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6)
                ]]
        });
        this._route.params
            .subscribe(function (params) { return _this._resetToken = params['token']; });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-reset-password',
        template: __webpack_require__("./client/src/app/user/reset-password.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;
var _a, _b, _c;
//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "./client/src/app/user/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n    <div class=\"jumbotron\">\n      <h2>Fill your data.</h2>\n      <form novalidate [formGroup]=\"signupForm\" (submit)=\"signup()\">\n        <div\n         class=\"form-group\"\n          [class.has-error]=\"!signupForm.get('email').valid\n            && signupForm.get('email').touched\">\n          <label class=\"control-label\" for=\"email\">\n            <strong>Email *</strong>\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"email\"\n            name=\"email\"\n            type=\"email\"\n            [formControl]=\"signupForm.get('email')\"/>\n          <span\n            class=\"help-block\"\n            *ngIf=\"signupForm.get('email').hasError('required')\n              && signupForm.get('email').touched\">\n            Email is required\n          </span>\n          <span\n            class=\"help-block\"\n            *ngIf=\"signupForm.get('email').hasError('pattern')\n              && signupForm.get('email').touched\">\n            Must be a proper email\n          </span>\n        </div>\n        <div\n          class=\"form-group\"\n          [class.has-error]=\"\n            !signupForm.get('profile').get('name').valid\n              && signupForm.get('profile').get('name').touched\">\n          <label class=\"control-label\" for=\"name\">\n            <strong>Name *</strong>\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"name\"\n            name=\"name\"\n            type=\"text\"\n            [formControl]=\"signupForm.get('profile').get('name')\"/>\n          <span\n            class=\"help-block\"\n            *ngIf=\"signupForm.get('profile').get('name').hasError('required')\n              && signupForm.get('profile').get('name').touched\">\n            Name is required\n          </span>\n          <span\n            class=\"help-block\"\n            *ngIf=\"signupForm.get('profile').get('name').hasError('minlength')\n              && signupForm.get('profile').get('name').touched\">\n            Name requires at least three characters\n          </span>\n        </div>\n        <div\n          class=\"form-group\"\n          [class.has-error]=\"!signupForm.get('password').valid\n            && signupForm.get('password').touched\">\n          <label class=\"control-label\" for=\"password\">\n            <strong>Password *</strong>\n          </label>\n          <input \n            class=\"form-control\" \n            id=\"password\"\n            name=\"password\"\n            type=\"password\"\n            [formControl]=\"signupForm.get('password')\"/>\n          <span\n            class=\"help-block\"\n            *ngIf=\"signupForm.get('password').hasError('required')\n              && signupForm.get('password').touched\">\n            Password is required\n          </span>\n          <span\n            class=\"help-block\"\n            *ngIf=\"signupForm.get('password').hasError('minlength')\n              && signupForm.get('password').touched\">\n            Password requires at least six characters\n          </span>\n        </div>\n        <div \n          class=\"form-group\"\n          [class.has-error]=\"!signupForm.get('confirmPassword').valid\n            && signupForm.get('confirmPassword').touched\">\n          <label class=\"control-label\" for=\"confirmPassword\">\n            <strong>Confirm Password *</strong>\n          </label>\n          <input\n            class=\"form-control\" \n            id=\"confirmPassword\"\n            name=\"confirmPassword\"\n            type=\"password\"\n            [formControl]=\"signupForm.get('confirmPassword')\"/>\n          <span\n            class=\"help-block\"\n            *ngIf=\"signupForm.get('confirmPassword').hasError('required')\n              && signupForm.get('confirmPassword').touched\">\n            Password is required\n          </span>\n          <span\n            class=\"help-block\"\n            *ngIf=\"signupForm.get('confirmPassword').hasError('minlength')\n              && signupForm.get('confirmPassword').touched\">\n            Password requires at least six characters\n          </span>\n        </div>\n        <div *ngIf=\"authService.error\" class=\"alert alert-danger\">\n          {{authService.error}}\n        </div>\n        <button\n          class=\"btn btn-primary\"\n          type=\"submit\"\n          [disabled]=\"signupForm.invalid\">\n          Sign Up!\n        </button>\n      </form>\n      <hr>\n      <a class=\"btn btn-default\" href=\"/auth/google\">\n        <i class=\"fa fa-google\"></i> \n        Sign Up with Google\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./client/src/app/user/signup.component.ts":
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
var SignupComponent = (function () {
    function SignupComponent(authService, _fb) {
        this.authService = authService;
        this._fb = _fb;
    }
    SignupComponent.prototype.signup = function () {
        var user = this.signupForm.value;
        this.authService.signup(user);
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this._fb.group({
            'email': ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern(this.authService.emailPattern)
                ]],
            'password': ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6)
                ]],
            'confirmPassword': ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(6)
                ]],
            'profile': this._fb.group({
                'name': ['', [
                        forms_1.Validators.required,
                        forms_1.Validators.minLength(3)
                    ]]
            })
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        this.authService.error = null;
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'app-signup',
        template: __webpack_require__("./client/src/app/user/signup.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object])
], SignupComponent);
exports.SignupComponent = SignupComponent;
var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "./client/src/app/user/unauthenticated.guard.ts":
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
var UnauthenticatedGuard = (function () {
    function UnauthenticatedGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    UnauthenticatedGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this._authService.getAuthenticatedState()
            .then(function (isAuthenticated) {
            if (isAuthenticated) {
                _this._router.navigate(['/']);
            }
            return !isAuthenticated;
        });
    };
    return UnauthenticatedGuard;
}());
UnauthenticatedGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], UnauthenticatedGuard);
exports.UnauthenticatedGuard = UnauthenticatedGuard;
var _a, _b;
//# sourceMappingURL=unauthenticated.guard.js.map

/***/ }),

/***/ "./client/src/app/user/user.module.ts":
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
var login_component_1 = __webpack_require__("./client/src/app/user/login.component.ts");
var signup_component_1 = __webpack_require__("./client/src/app/user/signup.component.ts");
var profile_component_1 = __webpack_require__("./client/src/app/user/profile.component.ts");
var forgot_password_component_1 = __webpack_require__("./client/src/app/user/forgot-password.component.ts");
var reset_password_component_1 = __webpack_require__("./client/src/app/user/reset-password.component.ts");
var oauth_component_1 = __webpack_require__("./client/src/app/user/oauth.component.ts");
var auth_service_1 = __webpack_require__("./client/src/app/user/auth.service.ts");
var authenticated_guard_1 = __webpack_require__("./client/src/app/user/authenticated.guard.ts");
var unauthenticated_guard_1 = __webpack_require__("./client/src/app/user/unauthenticated.guard.ts");
var user_routes_1 = __webpack_require__("./client/src/app/user/user.routes.ts");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        declarations: [
            login_component_1.LoginComponent,
            signup_component_1.SignupComponent,
            profile_component_1.ProfileComponent,
            forgot_password_component_1.ForgotPasswordComponent,
            reset_password_component_1.ResetPasswordComponent,
            oauth_component_1.OauthComponent,
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_file_upload_1.FileUploadModule,
            user_routes_1.UserRoutingModule
        ],
        exports: [],
        providers: [
            auth_service_1.AuthService,
            authenticated_guard_1.AuthenticatedGuard,
            unauthenticated_guard_1.UnauthenticatedGuard
        ]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "./client/src/app/user/user.routes.ts":
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
var login_component_1 = __webpack_require__("./client/src/app/user/login.component.ts");
var signup_component_1 = __webpack_require__("./client/src/app/user/signup.component.ts");
var profile_component_1 = __webpack_require__("./client/src/app/user/profile.component.ts");
var oauth_component_1 = __webpack_require__("./client/src/app/user/oauth.component.ts");
var forgot_password_component_1 = __webpack_require__("./client/src/app/user/forgot-password.component.ts");
var reset_password_component_1 = __webpack_require__("./client/src/app/user/reset-password.component.ts");
var authenticated_guard_1 = __webpack_require__("./client/src/app/user/authenticated.guard.ts");
var unauthenticated_guard_1 = __webpack_require__("./client/src/app/user/unauthenticated.guard.ts");
var USER_ROUTES = [
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [unauthenticated_guard_1.UnauthenticatedGuard],
        data: {
            title: 'Login'
        }
    },
    {
        path: 'signup',
        component: signup_component_1.SignupComponent,
        canActivate: [unauthenticated_guard_1.UnauthenticatedGuard],
        data: {
            title: 'Signup'
        }
    },
    {
        path: 'oauth',
        component: oauth_component_1.OauthComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [authenticated_guard_1.AuthenticatedGuard],
        data: {
            title: 'Profile'
        }
    },
    {
        path: 'forgot-password',
        component: forgot_password_component_1.ForgotPasswordComponent,
        canActivate: [unauthenticated_guard_1.UnauthenticatedGuard],
        data: {
            title: 'Forgot Password'
        }
    },
    {
        path: 'reset/:token',
        component: reset_password_component_1.ResetPasswordComponent,
        canActivate: [unauthenticated_guard_1.UnauthenticatedGuard],
        data: {
            title: 'Password Reset'
        }
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(USER_ROUTES)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], UserRoutingModule);
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user.routes.js.map

/***/ }),

/***/ "./client/src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./client/src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var environment_1 = __webpack_require__("./client/src/environments/environment.ts");
var app_module_1 = __webpack_require__("./client/src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./client/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map