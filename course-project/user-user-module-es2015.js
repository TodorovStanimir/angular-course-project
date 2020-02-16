(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row-lg-4\"></div>\n    <div class=\"row\">\n        <div class=\"col-lg-4\"></div>\n        <div class=\"col-lg-4\">\n            <form #loginForm=\"ngForm\" (ngSubmit)=\"hadleLogin(loginForm.value)\">\n                <div class=\" form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                    </div>\n                    <input name=\"username\" pattern=\"[A-Z][a-z]+\\s[A-Z][a-z]+\" class=\"form-control\"\n                        placeholder=\"Full Name\" required ngModel>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"loginForm?.controls.username?.touched && loginForm?.controls.username?.errors?.required\">\n                    <p>This field is required!</p>\n                </div>\n                <div class=\"info-field\" *ngIf=\"loginForm?.controls.username?.errors?.pattern\">\n                    <p>Name shoud contain space between first and last name!</p>\n                </div>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                    </div>\n                    <input name=\"password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{3,16}$\" class=\"form-control\"\n                        placeholder=\"Type your password\" type=\"password\" required ngModel>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"loginForm?.controls.password?.touched && loginForm?.controls.password?.errors?.required\">\n                    This field is required!\n                </div>\n                <div class=\"info-field\"\n                    *ngIf=\"loginForm?.controls.password?.errors?.pattern\">\n                    Password shoud consists between 3 and 16 symbols: letters and digits!\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-success btn-block\" [disabled]=\"loginForm.invalid\"> Login in\n                        Your\n                        account\n                    </button>\n                </div>\n                <p class=\"text-center\"><b>Have not an account? </b><a routerLink='/profile/register'>Register here</a> </p>\n            </form>\n        </div>\n        <div class=\"col-lg-4\"></div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"editedUser\" class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-2\"> </div>\n        <div class=\"col-lg-4\">\n            <form #editUserForm=\"ngForm\" (ngSubmit)=\"hadleEditUser(editUserForm.value)\">\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n                    </div>\n                    <input name=\"email\" [(ngModel)]=\"editedUser.email\"\n                        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"form-control\"\n                        placeholder=\"Email Address\" type=\"email\" required>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"editUserForm?.controls.email?.touched && editUserForm?.controls.email?.errors?.required\">\n                    Email field is required!\n                </div>\n                <div class=\"info-field\" *ngIf=\"editUserForm?.controls.email?.errors?.pattern\">\n                    Email shoud be a valid email address, like example@example.extension!\n                </div>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-phone\"></i> </span>\n                    </div>\n                    <input name=\"phoneNumber\" [(ngModel)]=\"editedUser.phoneNumber\" pattern=\"^[+]{1}\\d{11,}$\"\n                        class=\"form-control\" placeholder=\"Phone number\" type=\"text\" required>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"editUserForm?.controls.phoneNumber?.touched && editUserForm?.controls.phoneNumber?.errors?.required\">\n                    Phone field is required!\n                </div>\n                <div class=\"info-field\" *ngIf=\"editUserForm?.controls.phoneNumber?.errors?.pattern\">\n                    Phone number should consists country code and at least 10 digits!\n                </div>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-building\"></i> </span>\n                    </div>\n                    <input name=\"occupation\" [(ngModel)]=\"editedUser.occupation\" pattern=\"[A-Za-z]+\"\n                        class=\"form-control\" placeholder=\"Occupation\" type=\"text\" required>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"editUserForm?.controls.occupation?.touched && editUserForm?.controls.occupation?.errors?.required\">\n                    Occupation is reqired!\n                </div>\n                <div class=\"info-field\" *ngIf=\"editUserForm?.controls.occupation?.errors?.pattern\">\n                    Occupation field should consists only letters!\n                </div>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-image\"></i> </span>\n                    </div>\n                    <input name=\"imageUrl\" [(ngModel)]=\"editedUser.imageUrl\" pattern=\"^http[s]?:\\/\\/.+\"\n                        class=\"form-control\" placeholder=\"image url\" type=\"url\" required>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"editUserForm?.controls.imageUrl?.touched && editUserForm?.controls.imageUrl?.errors?.required\">\n                    This field is required!\n                </div>\n                <div class=\"info-field\" *ngIf=\"editUserForm?.controls.imageUrl?.errors?.pattern\">\n                    Image URL must start with http or https!\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"editUserForm.invalid\">\n                        Change your profile\n                    </button>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-lg-4\">\n            <div class=\"form-group\">\n                <div class=\"input-group-prepend-block\">\n                    <span class=\"input-group-text\">\n                        <div>You have {{userBooks.length}} books and {{userComments.length}} comments</div>\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"book-button\" *ngFor=\"let book of userBooks\"\n                    [routerLink]=\"['/books/details', book['_id'] ]\" class=\"btn btn-success btn-block\">\n                    {{book.title | uppercase}}&nbsp;&nbsp;{{book.likes}}&nbsp;\n                    <i class=\"fa fa-thumbs-up\"></i>&nbsp;&nbsp;\n                    {{book.dislikes}}&nbsp;\n                    <i class=\"fa fa-thumbs-down\"></i>&nbsp;\n                    {{ booksComments | findInArray: book.title}}&nbsp;\n                    <i class=\"fa fa-comments\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-4\"></div>\n        <div class=\"col-lg-4\">\n            <form #registerForm=\"ngForm\" (ngSubmit)=\"hadleLogin(registerForm.value)\">\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                    </div>\n                    <input name=\"username\" pattern=\"[A-Z][a-z]+\\s[A-Z][a-z]+\" class=\"form-control\"\n                        placeholder=\"Full Name\" required ngModel>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"registerForm?.controls.username?.touched && registerForm?.controls.username?.errors?.required\">\n                    This field is required!\n                </div>\n                <div class=\"info-field\" *ngIf=\"registerForm?.controls.username?.errors?.pattern\">\n                    Name shoud contain space between first and last name!\n                </div>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-envelope\"></i> </span>\n                    </div>\n                    <input name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"form-control\"\n                        placeholder=\"Email Address\" type=\"email\" required ngModel>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"registerForm?.controls.email?.touched && registerForm?.controls.email?.errors?.required\">\n                    This field is required!\n                </div>\n                <div class=\"info-field\" *ngIf=\"registerForm?.controls.email?.errors?.pattern\">\n                    Email shoud be a valid email address, like example@example.extension!\n                </div>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-phone\"></i> </span>\n                    </div>\n                    <input name=\"phoneNumber\" pattern=\"^[+]{1}\\d{11,}$\" class=\"form-control\" placeholder=\"Phone number\"\n                        type=\"text\" required ngModel>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"registerForm?.controls.phoneNumber?.touched && registerForm?.controls.phoneNumber?.errors?.required\">\n                    This field is required!\n                </div>\n                <div class=\"info-field\" *ngIf=\"registerForm?.controls.phoneNumber?.errors?.pattern\">\n                    Phone number should consists country code and at least 10 digits!\n                </div>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-building\"></i> </span>\n                    </div>\n                    <input name=\"occupation\" pattern=\"[A-Za-z]+\" class=\"form-control\" placeholder=\"Occupation\"\n                        type=\"text\" required ngModel>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"registerForm?.controls.occupation?.touched && registerForm?.controls.occupation?.errors?.required\">\n                    This field is required!\n                </div>\n                <div class=\"info-field\" *ngIf=\"registerForm?.controls.occupation?.errors?.pattern\">\n                    Occupation field should consists only letters!\n                </div>\n                <div ngModelGroup=\"passwords\">\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                        </div>\n                        <input name=\"password\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{3,16}$\" class=\"form-control\"\n                            placeholder=\"Create password\" type=\"password\" required ngModel>\n                    </div>\n                    <div class=\"req-field\"\n                        *ngIf=\"registerForm?.controls.passwords?.controls.password?.touched && registerForm?.controls.passwords?.controls.password?.errors?.required\">\n                        This field is required!\n                    </div>\n                    <div class=\"info-field\"\n                        *ngIf=\"registerForm?.controls.passwords?.controls.password?.errors?.pattern\">\n                        Password shoud consists between 3 and 16 symbols: letters and digits!\n                    </div>\n                    <div class=\"form-group input-group\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                        </div>\n                        <input name=\"confirmPassword\"\n                            pattern=\"{{registerForm?.controls.passwords?.controls.password?.value}}\"\n                            class=\"form-control\" placeholder=\"Repeat password\" type=\"password\" required ngModel>\n                    </div>\n                    <div class=\"req-field\"\n                        *ngIf=\"registerForm?.controls.passwords?.controls.confirmPassword?.touched && registerForm?.controls.passwords?.controls.confirmPassword?.errors?.required\">\n                        This field is required!\n                    </div>\n                    <div class=\"info-field\"\n                        *ngIf=\"registerForm?.controls.passwords?.controls.confirmPassword?.touched && registerForm?.controls.passwords?.controls.password?.value!==registerForm?.controls.passwords?.controls.confirmPassword?.value\">\n                        Passwords do not match!\n                    </div>\n                </div>\n                <div class=\"form-group input-group\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"> <i class=\"fa fa-image\"></i> </span>\n                    </div>\n                    <input name=\"imageUrl\" pattern=\"^http[s]?:\\/\\/.+\" class=\"form-control\" placeholder=\"image url\" type=\"url\"\n                        required ngModel>\n                </div>\n                <div class=\"req-field\"\n                    *ngIf=\"registerForm?.controls.imageUrl?.touched && registerForm?.controls.imageUrl?.errors?.required\">\n                    This field is required!\n                </div>\n                <div class=\"info-field\"  *ngIf=\"registerForm?.controls.imageUrl?.errors?.pattern\">\n                    Image URL must start with http or https!\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-block\" [disabled]=\"registerForm.invalid\">\n                        Create Account\n                    </button>\n                </div>\n                <p class=\"text-center\"><b>Have an account? </b><a routerLink='/profile/login'><b>Log In</b></a> </p>\n            </form>\n        </div>\n        <div class=\"col-lg-4\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/shared/pipes/find-in-array.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/find-in-array.pipe.ts ***!
  \****************************************************/
/*! exports provided: FindInArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindInArrayPipe", function() { return FindInArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FindInArrayPipe = class FindInArrayPipe {
    transform(value, arg) {
        let index = -1;
        value.filter((el, ind) => {
            if (el[0] === arg) {
                index = ind;
            }
        });
        return index !== -1 ? value[index][1] : null;
    }
};
FindInArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'findInArray'
    })
], FindInArrayPipe);



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input.ng-valid {\r\n    border-left: 2px solid #42A948; /* green */\r\n}\r\n  \r\ninput.ng-invalid.ng-touched {\r\n    border-left: 2px solid #A94442; /* red */\r\n}\r\n  \r\n.req-field{\r\n    background-color: #A94442;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: 180px;\r\n}\r\n  \r\n.info-field{\r\n    background-color: #A94442;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: auto;\r\n}\r\n  \r\ni {\r\n    color: #42A948;\r\n}\r\n  \r\nspan{\r\n    border-left: 2px solid grey;\r\n    border-top: 2px solid grey;\r\n    border-bottom: 2px solid grey;\r\n}\r\n  \r\ninput{\r\n    border-right: 2px solid grey;\r\n    border-top: 2px solid grey;\r\n    border-bottom: 2px solid grey;\r\n}\r\n  \r\n.container {\r\n    margin-top: 150px;\r\n}\r\n  \r\n.text-center {\r\n    font-style: italic;\r\n}\r\n  \r\nbutton{\r\n    border: 2px solid grey;\r\n    background-color: #42A948;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QixFQUFFLFVBQVU7QUFDOUM7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSxRQUFRO0FBQzVDOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiLi4vLi4vdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctdmFsaWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59XHJcbiAgXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNBOTQ0NDI7IC8qIHJlZCAqL1xyXG59XHJcbi5yZXEtZmllbGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTk0NDQyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG4uaW5mby1maWVsZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBOTQ0NDI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuaSB7XHJcbiAgICBjb2xvcjogIzQyQTk0ODtcclxufVxyXG5zcGFue1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxufVxyXG5pbnB1dHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuLnRleHQtY2VudGVyIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyQTk0ODtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(userService, router, toastr) {
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    hadleLogin(user) {
        this.userService.login(user).subscribe((data) => {
            this.toastr.success('Logged in succesfully');
            this.userService.saveUserInfo(data);
            this.router.navigate(['/books/all']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/profile/profile.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".opacity {\r\n    opacity: 0.7;\r\n    border-radius: 0.5rem;\r\n    background: white;\r\n    color: black;\r\n}\r\n\r\ninput.ng-valid {\r\n  border-left: 2px solid #42A948; /* green */\r\n}\r\n\r\ninput.ng-invalid.ng-touched {\r\n  border-left: 2px solid #A94442; /* red */\r\n}\r\n\r\n.req-field{\r\n  background-color: #A94442;\r\n  height: auto;\r\n  margin-bottom: 10px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  width: 180px;\r\n}\r\n\r\n.info-field{\r\n  background-color: #A94442;\r\n  height: auto;\r\n  margin-bottom: 10px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  width: auto;\r\n}\r\n\r\ni {\r\n  width: 12px;\r\n  color: #42A948;\r\n}\r\n\r\nspan{\r\n  border-left: 2px solid grey;\r\n  border-top: 2px solid grey;\r\n  border-bottom: 2px solid grey;\r\n}\r\n\r\ninput{\r\n  border-right: 2px solid grey;\r\n  border-top: 2px solid grey;\r\n  border-bottom: 2px solid grey;\r\n}\r\n\r\n.container {\r\n  margin-top: 50px;\r\n}\r\n\r\nli {\r\n  margin: 4px;\r\n  border-radius: 2px;\r\n  list-style-type: none;\r\n}\r\n\r\n.btn{\r\n  text-align: left;\r\n}\r\n\r\nbutton{\r\n  border: 2px solid grey;\r\n  background-color: #42A948;\r\n}\r\n\r\n.fa-thumbs-up {\r\n  color: white; \r\n}\r\n\r\n.fa-thumbs-down {  \r\n  color: white;\r\n}\r\n\r\n.fa-comments {\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsOEJBQThCLEVBQUUsVUFBVTtBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QixFQUFFLFFBQVE7QUFDMUM7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6Ii4uLy4uL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BhY2l0eSB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW5wdXQubmctdmFsaWQge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNBOTQ0NDI7IC8qIHJlZCAqL1xyXG59XHJcbi5yZXEtZmllbGR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E5NDQ0MjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG4uaW5mby1maWVsZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTk0NDQyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuaSB7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgY29sb3I6ICM0MkE5NDg7XHJcbn1cclxuc3BhbntcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuaW5wdXR7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbmxpIHtcclxuICBtYXJnaW46IDRweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MkE5NDg7XHJcbn1cclxuLmZhLXRodW1icy11cCB7XHJcbiAgY29sb3I6IHdoaXRlOyBcclxufVxyXG5cclxuLmZhLXRodW1icy1kb3duIHsgIFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZmEtY29tbWVudHMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/comment/comment.service */ "./src/app/comment/comment.service.ts");
/* harmony import */ var src_app_book_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/book/book.service */ "./src/app/book/book.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let ProfileComponent = class ProfileComponent {
    constructor(userService, bookService, commentService, router) {
        this.userService = userService;
        this.bookService = bookService;
        this.commentService = commentService;
        this.router = router;
    }
    ngOnInit() {
        const username = localStorage.getItem(`username`);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(this.userService.getUser(username), this.commentService.getAllComments('author', username), this.bookService.getUserBooks(), this.commentService.getAllComments('all', 'all')).subscribe((res) => {
            this.editedUser = Object.assign(res[0][0]);
            this.userBooks = res[2].sort((a, b) => b.likes - a.likes);
            this.userComments = res[1];
            this.userBooks.map((book, ind) => {
                let counter = 0;
                res[3].map(comm => {
                    if (comm[`bookId`] === book._id) {
                        counter++;
                    }
                });
                this.booksComments.push([book.title, counter]);
            });
        });
    }
    hadleEditUser(editUserForm) {
        this.userService.changeUser(editUserForm, localStorage.getItem(`userId`))
            .subscribe((data) => {
            this.userService.saveUserInfo(data);
            this.router.navigate([`/books/user`]);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_book_book_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] },
    { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/user/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    margin-top: 50px;\r\n}\r\ninput.ng-valid {\r\n    border-left: 2px solid #42A948; /* green */\r\n}\r\ninput.ng-invalid.ng-touched {\r\n    border-left: 2px solid #A94442; /* red */\r\n}\r\n.req-field{\r\n    background-color: #A94442;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: 180px;\r\n}\r\n.info-field{\r\n    background-color: #A94442;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: auto;\r\n}\r\ni {\r\n    color: #42A948;\r\n}\r\nspan{\r\n    border-left: 2px solid grey;\r\n    border-top: 2px solid grey;\r\n    border-bottom: 2px solid grey;\r\n}\r\ninput{\r\n    border-right: 2px solid grey;\r\n    border-top: 2px solid grey;\r\n    border-bottom: 2px solid grey;\r\n}\r\n.text-center {\r\n    font-style: italic;\r\n}\r\nbutton{\r\n    border: 2px solid grey;\r\n    background-color: #42A948;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtBQUM5QztBQUNBO0lBQ0ksOEJBQThCLEVBQUUsUUFBUTtBQUM1QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiLi4vLi4vdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbmlucHV0Lm5nLXZhbGlkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxufVxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjQTk0NDQyOyAvKiByZWQgKi9cclxufVxyXG4ucmVxLWZpZWxke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E5NDQ0MjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbn1cclxuLmluZm8tZmllbGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTk0NDQyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbmkge1xyXG4gICAgY29sb3I6ICM0MkE5NDg7XHJcbn1cclxuc3BhbntcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxufVxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJBOTQ4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let RegisterComponent = class RegisterComponent {
    constructor(router, userService, toastr) {
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
    }
    ngOnInit() {
    }
    hadleLogin(userInfo) {
        userInfo[`password`] = userInfo[`passwords`][`password`];
        delete userInfo[`passwords`];
        this.userService.register(userInfo).subscribe(res => {
            this.toastr.success('You have registered successfully', 'Success!');
            this.router.navigate(['/profile/login']);
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerForm', { static: true })
], RegisterComponent.prototype, "htmlForm", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");





const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class FurnitureRoutingModule { }
const UserRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _shared_pipes_find_in_array_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pipes/find-in-array.pipe */ "./src/app/shared/pipes/find-in-array.pipe.ts");









let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _shared_pipes_find_in_array_pipe__WEBPACK_IMPORTED_MODULE_8__["FindInArrayPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserRoutingModule"]
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map