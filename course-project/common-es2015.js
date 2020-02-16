(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/book/book.service.ts":
/*!**************************************!*\
  !*** ./src/app/book/book.service.ts ***!
  \**************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_kinvey_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/kinvey.tokens */ "./src/app/core/kinvey.tokens.ts");




let BookService = class BookService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://baas.kinvey.com/appdata/${_core_kinvey_tokens__WEBPACK_IMPORTED_MODULE_3__["APP_KEY"]}`;
        this.ALL_BOOKS_URL = `${this.BASE_URL}/books?query={}&sort={"_kmd.ect": -1}`;
        this.CREATE_BOOK_URL = `${this.BASE_URL}/books`;
    }
    createBook(body) {
        return this.http.post(this.CREATE_BOOK_URL, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
    getAllBooks() {
        return this.http.get(this.ALL_BOOKS_URL, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
    getUserBooks() {
        return this.http.get(`${this.BASE_URL}/books?query={"author":"${localStorage.getItem(`username`)}"}&sort={"_kmd.ect":-1}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
    deleteBook(id) {
        return this.http.delete(`${this.CREATE_BOOK_URL}/${id}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
    getBook(id) {
        return this.http.get(`${this.CREATE_BOOK_URL}/${id}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
    editBook(body, id) {
        delete body[`${id}`];
        delete body[`${'_acl'}`];
        return this.http.put(`${this.CREATE_BOOK_URL}/${id}`, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
};
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BookService);



/***/ }),

/***/ "./src/app/comment/comment.service.ts":
/*!********************************************!*\
  !*** ./src/app/comment/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_kinvey_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/kinvey.tokens */ "./src/app/core/kinvey.tokens.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let CommentService = class CommentService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = `https://baas.kinvey.com/appdata/${_core_kinvey_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_KEY"]}`;
        this.CREATE_COMMENT_URL = `${this.BASE_URL}/comments`;
    }
    getAllComments(criteria, bookId) {
        const searchedCriteria = criteria === 'all' ? '' : `?query={"${criteria}":"${bookId}"}&sort={"_kmd.ect": -1}`;
        return this.http.get(`${this.CREATE_COMMENT_URL}${searchedCriteria}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
    postComment(body) {
        return this.http.post(this.CREATE_COMMENT_URL, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
    deleteComment(commentId) {
        return this.http.delete(`${this.CREATE_COMMENT_URL}/${commentId}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                Authorization: `Kinvey ${localStorage.getItem('token')}`
            })
        });
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommentService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map