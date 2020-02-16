function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-book-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book/books/books.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/books/books.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookBooksBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-container\">\n    <div class=\"grid\">\n        <div class=\"grid-item\" *ngFor=\"let book of allBooks\">\n            <div class=\"opacity\">\n                <p><img src=\"{{book.imageUrl}}\"></p>\n                <h4>{{book.title}}</h4>\n                <h5>{{book.bookAuthor}}</h5>\n                <h6>{{book.description}}</h6>\n                <p>Genres: <span *ngFor=\"let genre of book.genres\">{{genre}} </span></p>\n                <div class=\"buttons-container\">\n                    <div class=\"buttons\">\n                        <li> <button [routerLink]=\"['/books/details', book['_id'] ]\" class=\"card-link\">details</button></li>\n                        <ng-template [ngIf]=\"isAuthor(book)\">\n                            <li> <button (click)=\"deleteBook( book['_id'])\" class=\"card-link\">delete</button></li>\n                            <li> <button [routerLink]=\"['/books/edit', book['_id'] ]\" class=\"card-link\">edit</button></li>\n                        </ng-template>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book/create/create.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/create/create.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-10\">\n            <form #createBookForm=\"ngForm\" (ngSubmit)=\"hadleCreateBook(createBookForm.value)\">\n                <div class=\"row\">\n                    <div class=\"col-lg-5\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-book\"></i> </span>\n                            </div>\n                            <input name=\"title\" pattern=\"[A-Z][A-Za-z\\s]+\" class=\"form-control\" placeholder=\"Book title\"\n                                required ngModel>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"createBookForm?.controls.title?.touched && createBookForm?.controls.title?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"createBookForm?.controls.title?.errors?.pattern\">\n                            Title shoud contain only laters and start with capital letter!\n                        </div>\n                    </div>\n                    <div class=\"col-lg-5\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-user-tie\"></i> </span>\n                            </div>\n                            <input name=\"bookAuthor\" pattern=\"[A-Z][a-z]+\\s[A-Z][a-z]+\" class=\"form-control\"\n                                placeholder=\"Names of book's author\" required ngModel>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"createBookForm?.controls.bookAuthor?.touched && createBookForm?.controls.bookAuthor?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"createBookForm?.controls.bookAuthor?.errors?.pattern\">\n                            Name should contain two names and space between first and last name!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-10\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-edit\"></i> </span>\n                            </div>\n                            <input name=\"description\" pattern=\".{20,}\" class=\"form-control\" placeholder=\"Description\"\n                                required ngModel>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"createBookForm?.controls.description?.touched && createBookForm?.controls.description?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"createBookForm?.controls.description?.errors?.pattern\">\n                            Description should contain at least 20 leters!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-7\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-folder\"></i> </span>\n                            </div>\n                            <input name=\"genres\" pattern=\"^[A-Za-z ]+$\" class=\"form-control\" placeholder=\"Genres\"\n                                required ngModel>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"createBookForm?.controls.genres?.touched && createBookForm?.controls.genres?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"createBookForm?.controls.genres?.errors?.pattern\">\n                            Genres should contain genres of book separeted by space!\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-calendar-alt\"></i> </span>\n                            </div>\n                            <input name=\"year\" pattern=\"\\d{4}\" class=\"form-control\" placeholder=\"Year issue\" required\n                                ngModel>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"createBookForm?.controls.year?.touched && createBookForm?.controls.year?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"createBookForm?.controls.year?.errors?.pattern\">\n                            Year should contain exactly 4 digits!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-7\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-user-tie\"></i> </span>\n                            </div>\n                            <input name=\"publisher\" pattern=\"[A-Z][a-z\\d\\s]+\" class=\"form-control\"\n                                placeholder=\"Publisher\" required ngModel>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"createBookForm?.controls.publisher?.touched && createBookForm?.controls.publisher?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"createBookForm?.controls.publisher?.errors?.pattern\">\n                            Publishers should start wth capital letter and contain letters and digits!\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-dollar-sign\"></i> </span>\n                            </div>\n                            <input name=\"price\" pattern=\"^\\d+[.]?\\d{1,2}$\" class=\"form-control\" placeholder=\"Price\"\n                                required ngModel>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"createBookForm?.controls.price?.touched && createBookForm?.controls.price?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"createBookForm?.controls.price?.errors?.pattern\">\n                            Price should contain only digits and one point!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-7\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-image\"></i> </span>\n                            </div>\n                            <input name=\"imageUrl\" pattern=\"^(https:\\/\\/)|(http:\\/\\/)[\\w\\W]+$\" class=\"form-control\"\n                                placeholder=\"Image Url\" required ngModel>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"createBookForm?.controls.imageUrl?.touched && createBookForm?.controls.imageUrl?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"createBookForm?.controls.imageUrl?.errors?.pattern\">\n                            Image Url should start wth http:// or https://\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"createBookForm.invalid\">\n                                Create your book!\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-lg-4\"></div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book/details/details.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/details/details.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDetailsDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-container\">\n    <div *ngIf=\"book && comments\">\n        <div class=\"grid\">\n            <div class=\"grid-item\">\n                <div class=\"opacity\">\n                    <div class=\"main-info\">\n                        <p><img src=\"{{book.imageUrl}}\"></p>\n                        <h4>{{book.title}}</h4>\n                        <h5>{{book.bookAuthor}}</h5>\n                    </div>\n                    <h6>{{book.description}}</h6>\n                    <p class=\"genres\">Genres: <span *ngFor=\"let genre of book.genres\">{{genre}} </span></p>\n                    <div class=\"buttons-container\">\n                        <div *ngIf=\"isAuthor(book)\" class=\"buttons\">\n                            <li> <button (click)=\"deleteBook( book['_id'])\" class=\"card-link\">delete</button></li>\n                            <li> <button [routerLink]=\"['/books/edit', book['_id'] ]\" class=\"card-link\">edit</button>\n                            </li>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Provide additional information about book -->\n            <div class=\"grid-item\">\n                <div class=\"opacity\">\n                    <h5>Additional information</h5>\n                    <div class=\"additional-info\">\n                        <button [disabled]=\"isAuthor(book)\" (click)=\"showContact(book.author)\"><b>Posted by:\n                                {{book.author}}</b></button>\n                    </div>\n                    <div class=\"additional-info\">\n                        <p>Year Issue: {{book.year}}</p>\n                    </div>\n                    <div class=\"additional-info\">\n                        <p>Publisher: {{book.publisher}}</p>\n                    </div>\n                    <div class=\"additional-info\">\n                        <p>Selling price: {{book.price.toFixed(2)}} BGN</p>\n                    </div>\n                    <div class=\"additional-info-footer\">\n                        <div>\n                            <button [disabled]=\"isAuthor(book)\" (click)=\"rateBook( book['_id'], 'like')\"\n                                class=\"additional-info-footer-b-l\"><b>{{book.likes}}</b>&nbsp;&nbsp;<i\n                                    class=\"fa fa-thumbs-up\"></i></button>\n                        </div>\n                        <div>\n                            <button [disabled]=\"isAuthor(book)\" (click)=\"rateBook(book['_id'], 'dislike')\"\n                                class=\"additional-info-footer-b-d\"><b>{{book.dislikes}}</b>&nbsp;&nbsp;<i\n                                    class=\"fa fa-thumbs-down\"></i></button>\n                        </div>\n                    </div>\n                    <div *ngIf=\"emailOwnerBook && !showInfoOwnerBook\" class=\"additional-info-footer\">\n                        <p>You can emailed author of the book \"{{book.title}}\" to email: {{emailOwnerBook}} or call him\n                            to phone: {{phoneOwnerBook}}.</p>\n                    </div>\n                    <div class=\"additional-info-footer\"> </div>\n                </div>\n            </div>\n            <!-- Provide information about comments -->\n            <div class=\"grid-item\">\n                <div class=\"opacity\">\n                    <h5>Comments</h5>\n                    <ng-template [ngIf]=\"!comments.length\">\n                        <div class=\"comment-header\">\n                            <p>There is not comments for this book. You can write the first one.</p>\n                        </div>\n                    </ng-template>\n                    <div class=\"comment-body\">\n                        <h6>Add Comment</h6>\n                        <form #createComment=\"ngForm\" (ngSubmit)=\"postComment()\">\n                            <div class=\"comment-body-items\">\n                                <textarea name=\"subject\" type=\"text\" placeholder=\"Your comment...\" ngModel\n                                    required></textarea>\n                            </div>\n                            <button [disabled]=\"createComment.invalid\">add comment</button>\n                        </form>\n                    </div>\n                    <ng-template [ngIf]=\"comments.length\">\n                        <div class=\"comment-body\">\n                            <article *ngFor=\"let comment of comments\" class=\"comments\">\n                                <div class=\"comment\">\n                                    <div>\n                                        <p>{{comment.subject}}</p>\n                                    </div>\n                                    <div>\n                                        <p>Author of comment: {{comment['author']}}</p>\n                                    </div>\n                                    <div>\n                                        <button *ngIf=\"isAuthor(comment)\" class=\"del-but\"\n                                            (click)=\"delComment(comment['_id'])\">delete</button>\n                                    </div>\n                                </div>\n                            </article>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book/edit/edit.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book/edit/edit.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-10\">\n            <form *ngIf=\"editedBook\" #editBookForm=\"ngForm\" (ngSubmit)=\"hadleEditBook(editBookForm.value)\">\n                <div class=\"row\">\n                    <div class=\"col-lg-5\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-book\"></i> </span>\n                            </div>\n                            <input name=\"title\" [(ngModel)]=\"editedBook.title\" type=\"text\" pattern=\"[A-Z][A-Za-z\\s]+\"\n                                class=\"form-control\" placeholder=\"Book title\" required>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"editBookForm?.controls.title?.touched && editBookForm?.controls.title?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"editBookForm?.controls.title?.errors?.pattern\">\n                            Title shoud contain only laters and start with capital letter!\n                        </div>\n                    </div>\n                    <div class=\"col-lg-5\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-user-tie\"></i> </span>\n                            </div>\n                            <input name=\"bookAuthor\" [(ngModel)]=\"editedBook.bookAuthor\"\n                                pattern=\"[A-Z][a-z]+\\s[A-Z][a-z]+\" class=\"form-control\"\n                                placeholder=\"Names of book's author\" required>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"editBookForm?.controls.bookAuthor?.touched && editBookForm?.controls.bookAuthor?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"editBookForm?.controls.bookAuthor?.errors?.pattern\">\n                            Name should contain two names and space between first and last name!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-10\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-edit\"></i> </span>\n                            </div>\n                            <input name=\"description\" [(ngModel)]=\"editedBook.description\" pattern=\".{20,}\"\n                                class=\"form-control\" placeholder=\"Description\" required>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"editBookForm?.controls.description?.touched && editBookForm?.controls.description?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"editBookForm?.controls.description?.errors?.pattern\">\n                            Description should contain at least 20 leters!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-7\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-folder\"></i> </span>\n                            </div>\n                            <input name=\"genres\" [(ngModel)]=\"editedBook.genres\" pattern=\"^[A-Za-z ,]+$\"\n                                class=\"form-control\" placeholder=\"Genres\" required>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"editBookForm?.controls.genres?.touched && editBookForm?.controls.genres?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"editBookForm?.controls.genres?.errors?.pattern\">\n                            Genres should contain genres of book separeted by space!\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-calendar-alt\"></i> </span>\n                            </div>\n                            <input name=\"year\" [(ngModel)]=\"editedBook.year\" pattern=\"\\d{4}\" class=\"form-control\"\n                                placeholder=\"Year issue\" required>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"editBookForm?.controls.year?.touched && editBookForm?.controls.year?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"editBookForm?.controls.year?.errors?.pattern\">\n                            Year should contain exactly 4 digits!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-7\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-user-tie\"></i> </span>\n                            </div>\n                            <input name=\"publisher\" [(ngModel)]=\"editedBook.publisher\" pattern=\"[A-Z][a-z\\d\\s]+\"\n                                class=\"form-control\" placeholder=\"Publisher\" required>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"editBookForm?.controls.publisher?.touched && editBookForm?.controls.publisher?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"editBookForm?.controls.publisher?.errors?.pattern\">\n                            Publishers should start wth capital letter and contain letters and digits!\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-dollar-sign\"></i> </span>\n                            </div>\n                            <input name=\"price\" [(ngModel)]=\"editedBook.price\" pattern=\"^\\d+[.]?\\d{1,2}$\"\n                                class=\"form-control\" placeholder=\"Price\" required>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"editBookForm?.controls.price?.touched && editBookForm?.controls.price?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"editBookForm?.controls.price?.errors?.pattern\">\n                            Price should contain only digits and one point!\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-7\">\n                        <div class=\"form-group input-group\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"> <i class=\"fa fa-image\"></i> </span>\n                            </div>\n                            <input name=\"imageUrl\" [(ngModel)]=\"editedBook.imageUrl\"\n                                pattern=\"^(https:\\/\\/)|(http:\\/\\/)[\\w\\W]+$\" class=\"form-control\" placeholder=\"Image Url\"\n                                required>\n                        </div>\n                        <div class=\"req-field\"\n                            *ngIf=\"editBookForm?.controls.imageUrl?.touched && editBookForm?.controls.imageUrl?.errors?.required\">\n                            This field is required!\n                        </div>\n                        <div class=\"info-field\" *ngIf=\"editBookForm?.controls.imageUrl?.errors?.pattern\">\n                            Image Url should start wth http:// or https://\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"editBookForm.invalid\">\n                                Edit your book!\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-lg-4\"></div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/book/book-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/book/book-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: BookRoutingModule */

  /***/
  function srcAppBookBookRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookRoutingModule", function () {
      return BookRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create/create.component */
    "./src/app/book/create/create.component.ts");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/book/details/details.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/book/edit/edit.component.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/book/books/books.component.ts"); // import {NgModule} from '@angular/core';


    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'all'
    }, {
      path: 'all',
      component: _books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"]
    }, {
      path: 'user',
      component: _books_books_component__WEBPACK_IMPORTED_MODULE_5__["BooksComponent"]
    }, {
      path: 'create',
      component: _create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"]
    }, {
      path: 'details/:id',
      component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"]
    }, {
      path: 'edit/:id',
      component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: 'home'
    }]; // @NgModule({
    //     imports: [RouterModule.forChild(routes)],
    //     exports: [RouterModule]
    // })
    // export class BookRoutingModule { }

    var BookRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);
    /***/

  },

  /***/
  "./src/app/book/book.module.ts":
  /*!*************************************!*\
    !*** ./src/app/book/book.module.ts ***!
    \*************************************/

  /*! exports provided: BookModule */

  /***/
  function srcAppBookBookModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookModule", function () {
      return BookModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create/create.component */
    "./src/app/book/create/create.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/book/edit/edit.component.ts");
    /* harmony import */


    var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./details/details.component */
    "./src/app/book/details/details.component.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/book/books/books.component.ts");
    /* harmony import */


    var _book_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./book-routing.module */
    "./src/app/book/book-routing.module.ts");

    var BookModule = function BookModule() {
      _classCallCheck(this, BookModule);
    };

    BookModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _book_routing_module__WEBPACK_IMPORTED_MODULE_8__["BookRoutingModule"]],
      exports: []
    })], BookModule);
    /***/
  },

  /***/
  "./src/app/book/books/books.component.css":
  /*!************************************************!*\
    !*** ./src/app/book/books/books.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookBooksBooksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n.opacity {\r\n    opacity: 0.7;\r\n    border-radius: 0.5rem;\r\n    background: white;\r\n    color: black;\r\n}\r\n  \r\n.grid-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n.grid {\r\n    width: auto;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start; \r\n  }\r\n  \r\n.grid-item {\r\n    margin: 3em;\r\n    justify-content: space-around;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start;\r\n    width: 25%;\r\n  }\r\n  \r\n.buttons-container {\r\n    padding: 10px 0;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n.buttons {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n  \r\nimg {\r\n    border-radius: 0.5rem;\r\n    height: 220px;\r\n    width: 180px;\r\n    margin: 10px;\r\n}\r\n  \r\np, h4, h5 {\r\n    margin: 7px;\r\n    text-align: center;\r\n}\r\n  \r\nh6 {\r\n    margin: 15px;\r\n    text-align: justify;\r\n}\r\n  \r\nli {\r\n    margin: 4px;\r\n    border-radius: 0.5rem;\r\n    list-style-type: none;\r\n}\r\n  \r\nspan {\r\n    font-style: italic;\r\n}\r\n  \r\nbutton{\r\n    /* background: transparent; */\r\n    border-radius: 0.5rem;\r\n    width: 60px;\r\n    background-color: black;\r\n    color: whitesmoke;\r\n    width: 2.5cm;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsVUFBVTtFQUNaOztBQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDZCQUE2QjtFQUMvQjs7QUFFRjtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYm9vay9ib29rcy9ib29rcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbi5vcGFjaXR5IHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncmlkIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtaXRlbSB7XHJcbiAgICBtYXJnaW46IDNlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG5wLCBoNCwgaDUge1xyXG4gICAgbWFyZ2luOiA3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg2IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbnNwYW4ge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAyLjVjbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/book/books/books.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/book/books/books.component.ts ***!
    \***********************************************/

  /*! exports provided: BooksComponent */

  /***/
  function srcAppBookBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/book/book.service.ts");

    var BooksComponent =
    /*#__PURE__*/
    function () {
      function BooksComponent(bookService, router, route) {
        _classCallCheck(this, BooksComponent);

        this.bookService = bookService;
        this.router = router;
        this.route = route;
      }

      _createClass(BooksComponent, [{
        key: "fetchData",
        value: function fetchData() {
          var _this = this;

          this.route.url.subscribe(function (s) {
            if (s['0'].path === 'all') {
              _this.bookService.getAllBooks().subscribe(function (data) {
                _this.allBooks = data;
              });
            } else {
              _this.bookService.getUserBooks().subscribe(function (data) {
                _this.allBooks = data;
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchData();
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(id) {
          var _this2 = this;

          this.bookService.deleteBook(id).subscribe(function () {
            _this2.fetchData();

            ;
          });
        }
      }, {
        key: "isAuthor",
        value: function isAuthor(book) {
          return book["_acl"]["creator"] === localStorage.getItem("userId");
        }
      }]);

      return BooksComponent;
    }();

    BooksComponent.ctorParameters = function () {
      return [{
        type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-books',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book/books/books.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books.component.css */
      "./src/app/book/books/books.component.css")).default]
    })], BooksComponent);
    /***/
  },

  /***/
  "./src/app/book/create/create.component.css":
  /*!**************************************************!*\
    !*** ./src/app/book/create/create.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookCreateCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .opacity {\r\n    opacity: 0.7;\r\n    border-radius: 0.5rem;\r\n    background: grey;\r\n    color: white;\r\n} */\r\n.container {\r\n    margin-top: 80px;\r\n}\r\ninput.ng-valid {\r\n    border-left: 2px solid #42A948; /* green */\r\n}\r\ninput.ng-invalid.ng-touched {\r\n    border-left: 2px solid #A94442; /* red */\r\n}\r\n.req-field{\r\n    background-color: #A94442;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: 180px;\r\n}\r\n.info-field{\r\n    background-color: #A94442;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: auto;\r\n}\r\ni {\r\n    width: 12px;\r\n    color: #42A948\r\n}\r\nspan{\r\n    border-left: 2px solid grey;\r\n    border-top: 2px solid grey;\r\n    border-bottom: 2px solid grey;\r\n}\r\ninput{\r\n    border-right: 2px solid grey;\r\n    border-top: 2px solid grey;\r\n    border-bottom: 2px solid grey;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFDSDtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtBQUM5QztBQUNBO0lBQ0ksOEJBQThCLEVBQUUsUUFBUTtBQUM1QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2Jvb2svY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm9wYWNpdHkge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuaW5wdXQubmctdmFsaWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xyXG59IFxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjQTk0NDQyOyAvKiByZWQgKi9cclxufVxyXG4ucmVxLWZpZWxke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E5NDQ0MjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbn1cclxuLmluZm8tZmllbGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTk0NDQyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbmkge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBjb2xvcjogIzQyQTk0OFxyXG59XHJcbnNwYW57XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xyXG59XHJcbmlucHV0e1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/book/create/create.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/book/create/create.component.ts ***!
    \*************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppBookCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/book/book.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var CreateComponent =
    /*#__PURE__*/
    function () {
      // @ViewChild('createBookForm', { static: true }) htmlForm: NgForm;
      function CreateComponent(router, bookService, toastr) {
        _classCallCheck(this, CreateComponent);

        this.router = router;
        this.bookService = bookService;
        this.toastr = toastr;
      }

      _createClass(CreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "hadleCreateBook",
        value: function hadleCreateBook(book) {
          var _this3 = this;

          var newBook = Object.assign(book, {
            likes: 0,
            dislikes: 0,
            author: localStorage.getItem('username')
          });
          newBook.genres = newBook.genres.split(' ');
          newBook.price = Number(newBook.price);
          this.bookService.createBook(newBook).subscribe(function (data) {
            _this3.router.navigate(['/books/all']);
          });
        }
      }]);

      return CreateComponent;
    }();

    CreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book/create/create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create.component.css */
      "./src/app/book/create/create.component.css")).default]
    })], CreateComponent);
    /***/
  },

  /***/
  "./src/app/book/details/details.component.css":
  /*!****************************************************!*\
    !*** ./src/app/book/details/details.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookDetailsDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n.opacity {\r\n    opacity: 0.7;\r\n    border-radius: 0.5rem;\r\n    background: white;\r\n    color: black;\r\n}\r\n  \r\n.grid-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n.grid {\r\n    width: auto;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start; \r\n  }\r\n  \r\n.grid-item {\r\n    margin: 3em;\r\n    justify-content: space-around;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start;\r\n    width: 25%;\r\n  }\r\n  \r\n.buttons-container {\r\n    padding: 10px 0;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n.buttons {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n  \r\nimg {\r\n    border-radius: 0.5rem;\r\n    height: 220px;\r\n    width: 180px;\r\n    margin: 10px;\r\n}\r\n  \r\n.genres{\r\n  margin-left: 15px;\r\n}\r\n  \r\n.main-info p, h4, h5 {\r\n  margin: 7px;\r\n  text-align: center;\r\n}\r\n  \r\n.additional-info p, h4, h5 {\r\n    margin: 7px;\r\n    text-align: center;\r\n}\r\n  \r\nh6 {\r\n    margin: 15px;\r\n    text-align: justify;\r\n}\r\n  \r\nli {\r\n    margin: 4px;\r\n    border-radius: 0.5rem;\r\n    list-style-type: none;\r\n}\r\n  \r\nspan {\r\n    font-style: italic;\r\n}\r\n  \r\nbutton{\r\n    /* background: transparent; */\r\n    border-radius: 0.5rem;\r\n}\r\n  \r\n.comment-header {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: left;\r\n          justify-content: left;\r\n}\r\n  \r\n.comment-header p {\r\n  margin: 0.3cm;\r\n  margin-bottom: 0.4cm;\r\n  text-align: left;\r\n}\r\n  \r\n.comment-body p {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin-left: 0.4cm;\r\n  text-align: left;\r\n}\r\n  \r\n.comment-body-items{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  margin-left: 0.2cm;\r\n  resize: none;\r\n  border-radius: 0.5rem;\r\n}\r\n  \r\n.comment-body textarea{\r\n  margin-left: 0.2cm;\r\n  margin-right: 0.4cm;\r\n  margin-bottom: 6px;\r\n  height: 5em;\r\n  resize: none;\r\n  border-radius: 0.5rem;\r\n  background-color: whitesmoke;\r\n  color: black;\r\n}\r\n  \r\n.comment-body button{\r\n  margin-left: 0.4cm;\r\n  margin-bottom: 0.4cm;\r\n  resize: none;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  width: 4cm;\r\n  color: whitesmoke;\r\n  background-color: black;\r\n}\r\n  \r\n.comments span{\r\n  margin-left: 0.4cm;\r\n}\r\n  \r\n.comment p{\r\n  margin-bottom: -2px;\r\n  margin-top: -8px;\r\n  font-style: italic;\r\n}\r\n  \r\nli button{\r\n  /* background: transparent; */\r\n  border-radius: 0.5rem;\r\n  width: 2.5cm;\r\n  color: whitesmoke;\r\n  background-color: black;\r\n}\r\n  \r\n/* CSS for Additional info */\r\n  \r\n.additional-info{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin-left: 0.2cm;\r\n  align-content: flex-start;\r\n}\r\n  \r\n.additional-info button{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 30px;\r\n  width: 8cm;\r\n  margin-left: 0.2cm;\r\n  margin-right: 0.2cm;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n\r\n}\r\n  \r\n.additional-info-footer {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin: 0.5cm;\r\n  align-content: flex-start;\r\n  justify-content: space-around;\r\n}\r\n  \r\n.additional-info-footer-b-l {\r\n  width: 60px;\r\n  height: 30px;\r\n  text-align: center;\r\n  width: 2.5cm;\r\n  color: blue;\r\n}\r\n  \r\n.additional-info-footer-b-d {\r\n  width: 60px;\r\n  height: 30px;\r\n  text-align: center;\r\n  width: 2.5cm;\r\n  color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztBQUVGO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxlQUFlO0lBQ2Ysc0JBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQTZCO0VBQy9COztBQUVGO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHNCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBLDRCQUE0Qjs7QUFFNUI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Jvb2svZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuLm9wYWNpdHkge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IFxyXG4gIH1cclxuICBcclxuICAuZ3JpZC1pdGVtIHtcclxuICAgIG1hcmdpbjogM2VtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5nZW5yZXN7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYWluLWluZm8gcCwgaDQsIGg1IHtcclxuICBtYXJnaW46IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRpdGlvbmFsLWluZm8gcCwgaDQsIGg1IHtcclxuICAgIG1hcmdpbjogN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5zcGFuIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb21tZW50LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jb21tZW50LWhlYWRlciBwIHtcclxuICBtYXJnaW46IDAuM2NtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNGNtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jb21tZW50LWJvZHkgcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMC40Y207XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNvbW1lbnQtYm9keS1pdGVtc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMmNtO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb21tZW50LWJvZHkgdGV4dGFyZWF7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMmNtO1xyXG4gIG1hcmdpbi1yaWdodDogMC40Y207XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGhlaWdodDogNWVtO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb21tZW50LWJvZHkgYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjRjbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjRjbTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNGNtO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29tbWVudHMgc3BhbntcclxuICBtYXJnaW4tbGVmdDogMC40Y207XHJcbn1cclxuXHJcbi5jb21tZW50IHB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5saSBidXR0b257XHJcbiAgLyogYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIHdpZHRoOiAyLjVjbTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLyogQ1NTIGZvciBBZGRpdGlvbmFsIGluZm8gKi9cclxuXHJcbi5hZGRpdGlvbmFsLWluZm97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMC4yY207XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwtaW5mbyBidXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDhjbTtcclxuICBtYXJnaW4tbGVmdDogMC4yY207XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjJjbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5hZGRpdGlvbmFsLWluZm8tZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMC41Y207XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwtaW5mby1mb290ZXItYi1sIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyLjVjbTtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwtaW5mby1mb290ZXItYi1kIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAyLjVjbTtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/book/details/details.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/book/details/details.component.ts ***!
    \***************************************************/

  /*! exports provided: DetailsComponent */

  /***/
  function srcAppBookDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
      return DetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/book/book.service.ts");
    /* harmony import */


    var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/comment/comment.service */
    "./src/app/comment/comment.service.ts");
    /* harmony import */


    var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/user/user.service */
    "./src/app/user/user.service.ts");

    var DetailsComponent =
    /*#__PURE__*/
    function () {
      function DetailsComponent(route, router, bookService, commentService, userService) {
        _classCallCheck(this, DetailsComponent);

        this.route = route;
        this.router = router;
        this.bookService = bookService;
        this.commentService = commentService;
        this.userService = userService;
        this.showInfoOwnerBook = true;
      }

      _createClass(DetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var id = this.route.snapshot.params["id"];
          this.bookService.getBook(id).subscribe(function (book) {
            _this4.book = book;

            _this4.commentService.getAllComments('bookId', id).subscribe(function (comments) {
              _this4.comments = comments.reverse();
            });
          });
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(id) {
          var _this5 = this;

          this.bookService.deleteBook(id).subscribe(function () {
            _this5.router.navigate(['/books/all']);
          });
        }
      }, {
        key: "postComment",
        value: function postComment() {
          var _this6 = this;

          var body = this.createCommentF.value;
          body["bookId"] = this.book["_id"];
          body["author"] = localStorage.getItem("username");
          this.commentService.postComment(body).subscribe(function () {
            _this6.createCommentF.reset();

            _this6.reLoadComments();
          });
        }
      }, {
        key: "reLoadComments",
        value: function reLoadComments() {
          var _this7 = this;

          this.commentService.getAllComments('bookId', this.book["_id"]).subscribe(function (comments) {
            _this7.comments = comments.reverse();
          });
        }
      }, {
        key: "delComment",
        value: function delComment(id) {
          var _this8 = this;

          this.commentService.deleteComment(id).subscribe(function () {
            _this8.reLoadComments();
          });
        }
      }, {
        key: "isAuthor",
        value: function isAuthor(book) {
          return book["_acl"]["creator"] === localStorage.getItem("userId");
        }
      }, {
        key: "rateBook",
        value: function rateBook(id, rate) {
          var _this9 = this;

          var newBook;
          this.bookService.getBook(id).subscribe(function (book) {
            newBook = book;
            rate === 'like' ? newBook["likes"] += 1 : newBook["dislikes"] += 1;

            _this9.bookService.editBook(newBook, id).subscribe(function () {
              _this9.ngOnInit();
            });
          });
        }
      }, {
        key: "showContact",
        value: function showContact(bookAuthor) {
          var _this10 = this;

          this.showInfoOwnerBook = !this.showInfoOwnerBook;
          this.userService.getUser(bookAuthor).subscribe(function (user) {
            _this10.emailOwnerBook = user[0].email;
            _this10.phoneOwnerBook = user[0].phoneNumber;
          });
        }
      }]);

      return DetailsComponent;
    }();

    DetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
      }, {
        type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"]
      }, {
        type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createComment', {
      static: false
    })], DetailsComponent.prototype, "createCommentF", void 0);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book/details/details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.component.css */
      "./src/app/book/details/details.component.css")).default]
    })], DetailsComponent);
    /***/
  },

  /***/
  "./src/app/book/edit/edit.component.css":
  /*!**********************************************!*\
    !*** ./src/app/book/edit/edit.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookEditEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .opacity {\r\n    opacity: 0.7;\r\n    border-radius: 0.5rem;\r\n    background: grey;\r\n    color: white;\r\n} */\r\n.container {\r\n    margin-top: 100px;\r\n}\r\ninput.ng-valid {\r\n    border-left: 2px solid #42A948; /* green */\r\n}\r\ninput.ng-invalid.ng-touched {\r\n    border-left: 2px solid #A94442; /* red */\r\n}\r\n.req-field{\r\n    background-color: #A94442;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: 180px;\r\n}\r\n.info-field{\r\n    background-color: #A94442;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    width: auto;\r\n}\r\ni {\r\n    width: 12px;\r\n    color: #42A948;\r\n}\r\nspan{\r\n    border-left: 2px solid grey;\r\n    border-top: 2px solid grey;\r\n    border-bottom: 2px solid grey;\r\n}\r\ninput{\r\n    border-right: 2px solid grey;\r\n    border-top: 2px solid grey;\r\n    border-bottom: 2px solid grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUNIO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw4QkFBOEIsRUFBRSxVQUFVO0FBQzlDO0FBQ0E7SUFDSSw4QkFBOEIsRUFBRSxRQUFRO0FBQzVDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvYm9vay9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5vcGFjaXR5IHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5pbnB1dC5uZy12YWxpZCB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXHJcbn1cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI0E5NDQ0MjsgLyogcmVkICovXHJcbn1cclxuLnJlcS1maWVsZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBOTQ0NDI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbi5pbmZvLWZpZWxke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E5NDQ0MjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5pIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgY29sb3I6ICM0MkE5NDg7XHJcbn1cclxuc3BhbntcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JleTtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/book/edit/edit.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/book/edit/edit.component.ts ***!
    \*********************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppBookEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/book/book.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var EditComponent =
    /*#__PURE__*/
    function () {
      function EditComponent(activatedRoute, router, bookService, toastr) {
        _classCallCheck(this, EditComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.bookService = bookService;
        this.toastr = toastr;
        this.id = this.activatedRoute.snapshot.params["id"];
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.bookService.getBook(this.id).subscribe(function (book) {
            return _this11.editedBook = Object.assign(book, {
              genres: book.genres.join(' ')
            });
          });
        }
      }, {
        key: "hadleEditBook",
        value: function hadleEditBook(newValueEditedBook) {
          var _this12 = this;

          var newBook = Object.assign(this.editedBook, newValueEditedBook);
          newBook.genres = newValueEditedBook.genres.split(' ');
          newBook.price = Number(newBook.price);
          this.bookService.editBook(newBook, this.id).subscribe(function (data) {
            _this12.router.navigate(['/books/user']);
          });
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book/edit/edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.component.css */
      "./src/app/book/edit/edit.component.css")).default]
    })], EditComponent);
    /***/
  }
}]);
//# sourceMappingURL=book-book-module-es5.js.map