function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/book/book.service.ts":
  /*!**************************************!*\
    !*** ./src/app/book/book.service.ts ***!
    \**************************************/

  /*! exports provided: BookService */

  /***/
  function srcAppBookBookServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookService", function () {
      return BookService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_kinvey_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/kinvey.tokens */
    "./src/app/core/kinvey.tokens.ts");

    var BookService =
    /*#__PURE__*/
    function () {
      function BookService(http) {
        _classCallCheck(this, BookService);

        this.http = http;
        this.BASE_URL = "https://baas.kinvey.com/appdata/".concat(_core_kinvey_tokens__WEBPACK_IMPORTED_MODULE_3__["APP_KEY"]);
        this.ALL_BOOKS_URL = "".concat(this.BASE_URL, "/books?query={}&sort={\"_kmd.ect\": -1}");
        this.CREATE_BOOK_URL = "".concat(this.BASE_URL, "/books");
      }

      _createClass(BookService, [{
        key: "createBook",
        value: function createBook(body) {
          return this.http.post(this.CREATE_BOOK_URL, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }, {
        key: "getAllBooks",
        value: function getAllBooks() {
          return this.http.get(this.ALL_BOOKS_URL, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }, {
        key: "getUserBooks",
        value: function getUserBooks() {
          return this.http.get("".concat(this.BASE_URL, "/books?query={\"author\":\"").concat(localStorage.getItem("username"), "\"}&sort={\"_kmd.ect\":-1}"), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(id) {
          return this.http.delete("".concat(this.CREATE_BOOK_URL, "/").concat(id), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }, {
        key: "getBook",
        value: function getBook(id) {
          return this.http.get("".concat(this.CREATE_BOOK_URL, "/").concat(id), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }, {
        key: "editBook",
        value: function editBook(body, id) {
          delete body["".concat(id)];
          delete body['_acl'];
          return this.http.put("".concat(this.CREATE_BOOK_URL, "/").concat(id), body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }]);

      return BookService;
    }();

    BookService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BookService);
    /***/
  },

  /***/
  "./src/app/comment/comment.service.ts":
  /*!********************************************!*\
    !*** ./src/app/comment/comment.service.ts ***!
    \********************************************/

  /*! exports provided: CommentService */

  /***/
  function srcAppCommentCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentService", function () {
      return CommentService;
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


    var _core_kinvey_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/kinvey.tokens */
    "./src/app/core/kinvey.tokens.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CommentService =
    /*#__PURE__*/
    function () {
      function CommentService(http) {
        _classCallCheck(this, CommentService);

        this.http = http;
        this.BASE_URL = "https://baas.kinvey.com/appdata/".concat(_core_kinvey_tokens__WEBPACK_IMPORTED_MODULE_2__["APP_KEY"]);
        this.CREATE_COMMENT_URL = "".concat(this.BASE_URL, "/comments");
      }

      _createClass(CommentService, [{
        key: "getAllComments",
        value: function getAllComments(criteria, bookId) {
          var searchedCriteria = criteria === 'all' ? '' : "?query={\"".concat(criteria, "\":\"").concat(bookId, "\"}&sort={\"_kmd.ect\": -1}");
          return this.http.get("".concat(this.CREATE_COMMENT_URL).concat(searchedCriteria), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }, {
        key: "postComment",
        value: function postComment(body) {
          return this.http.post(this.CREATE_COMMENT_URL, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(commentId) {
          return this.http.delete("".concat(this.CREATE_COMMENT_URL, "/").concat(commentId), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              Authorization: "Kinvey ".concat(localStorage.getItem('token'))
            })
          });
        }
      }]);

      return CommentService;
    }();

    CommentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommentService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map