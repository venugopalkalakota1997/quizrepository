function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-sm navbar-dark text-light navbar_top\">\n  <h2>\n    <a class=\"nav-link text-light\" routerLink=\"quiz\" (click)=\"quiz()\">\n    <i class=\"material-icons \" >\n      school\n    </i> QUIZ </a>\n  </h2>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent1\">\n    <ul class=\"navbar-nav  ml-auto bg-dark\">\n      <li class=\"nav-item active\" *ngIf=\"this.authService.loggedIn\">\n        <i class=\"material-icons other_icon\">person </i> {{this.authService.username}}\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"login\" *ngIf=\"this.authService.loggedIn\" (click)=\"logout()\">Logout</a>\n      </li>\n\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"login\" *ngIf=\"!this.authService.loggedIn\">Login</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"signup\" *ngIf=\"!this.authService.loggedIn\">Signup</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/attemptquiz/attemptquiz.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/attemptquiz/attemptquiz.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAttemptquizAttemptquizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n <div class=\"alert-danger sticky-top float-right\">\n    <countdown [config]=\"{leftTime: 1200, demand: false}\" (event)=\"timesUp($event)\">$!m!:$!s!</countdown>\n</div>\n<div class=\"mt-5 container card\" *ngIf=\"!completed\">\n   <h4>Questions</h4>\n    <form questionTest=\"ngForm\" novalidate>\n        <div *ngFor=\"let ques of questionlist; let i=index\">\n            <div>{{i+1}}.{{ques.question}}</div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col-md-9 col-form-label\">\n                        <div class=\"form-check form-check-inline mr-1\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"a\"\n                                [(ngModel)]=\"ques.selected\">\n                            <label class=\"form-check-label\">a. {{ques.a}} </label>\n                        </div>\n                        <div class=\"form-check form-check-inline mr-1 float-right\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"b\"\n                                [(ngModel)]=\"ques.selected\">\n                            <label class=\"form-check-label\">b. {{ques.b}}</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-9 col-form-label\">\n                        <div class=\"form-check form-check-inline mr-1\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"c\"\n                                [(ngModel)]=\"ques.selected\">\n                            <label class=\"form-check-label\">c. {{ques.c}}</label>\n                        </div>\n                        <div class=\"form-check form-check-inline mr-1 float-right\">\n                            <input class=\"form-check-input\" type=\"radio\" name=\"{{ques.id}}\" value=\"d\"\n                                [(ngModel)]=\"ques.selected\">\n                            <label class=\"form-check-label\">d. {{ques.d}}</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </form>\n    <button type=\"button\" class=\"btn btn-primary my-3\" (click)=\"submitTest()\">Submit</button>\n</div>\n<div class=\"mt-5 container card\" *ngIf=\"completed\">\n    <h3>Results\n        <div class=\"modal-body text-center\" >\n        <h4>\n            Total Questions: {{questionlist.length}} </h4>\n        <h4 style=\"color: darkblue\">\n            Total Answered: {{totalAnswered}}\n        </h4>\n        <h4 style=\"color: green;\">\n            Right Answer : {{rightAnswer}}\n        </h4>\n        </div>\n\n    </h3>\n    <div class=\"modal-body text-center\" >\n        <div *ngFor=\"let ques of questionlist; let i=index\"\n            [style.color]=\"!ques.selected? '#ffc107' : ques.selected == ques.answer ? 'green': 'red'\">\n            <div>{{i+1}}.{{ques.question}}.{{ques.selected}}</div>\n            <div>Your Answer: {{ques.selected}}. {{ques[ques.selected]}}</div>\n            <div>Right Answer: {{ques.answer}}. {{ques[ques.answer]}}</div>\n            <hr>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/createquiz/createquiz.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createquiz/createquiz.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreatequizCreatequizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row pb-5 px-0 py-0 mx-0\">\n    <div class=\"col-xs-11 mt-5 ml-5 mr-5 mb-5 mx-auto\">\n\n        <div class=\"mt-5 shadow\">\n            <div class=\"alert-danger col-12 px-auto py-5\" *ngIf=\"createErrorMessage\">\n                QuizName already exists!!\n            </div>\n        </div>\n\n        <div class=\"mt-5 shadow\" *ngIf=\"newQuizAdded\">\n            <div class=\"alert-success col-12 px-auto py-5\">\n                QuizName sucessfully added!!\n            </div>\n        </div>\n\n\n        <div class=\" mt-5 \" *ngIf=\"!newQuizAdded\">\n            <form [formGroup]=\"createQuizForm\" (submit)=\"createQuiz(createQuizForm.value)\">\n                <div class=\"row mt-5 ml-5 mr-5\">\n                    <div class=\"col-12 \">\n                        <label for=\"quizname\" class=\"mr-2\">QuizName </label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your quizname\"\n                            formControlName=\"quizname\" id=\"quizname\"\n                            [class.is-invalid]=\"quizname.invalid && quizname.touched\">\n                        <div *ngIf=\"quizname.errors\">\n                            <small class=\"text text-danger\"\n                                *ngIf=\"quizname.invalid && quizname.errors.required && quizname.touched\">\n                                School name required</small>\n                        </div>\n                    </div>\n                </div>\n                <div formArrayName=\"arr\" *ngFor=\"let a of createQuizForm.get('arr').controls; let i = index\">\n                    <div [formGroupName]=\"i\" style=\"margin-bottom: 10px;\">\n                        <div class=\"row mt-5 ml-5 mr-5\">\n                            <div class=\"col-12 \">\n                                <label for=\"question\" class=\"mr-2\">Question </label>{{i+1}}\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your question\"\n                                    formControlName=\"question\" id=\"question\">\n                                <div *ngIf=\"a.controls.question.errors\">\n                                    <small class=\"text text-danger\"\n                                        *ngIf=\"a.controls.question.errors.required && a.controls.question.touched\">question\n                                        is required</small>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row ml-5 mr-5\">\n                            <div class=\"col-md-6 col-xs-12 mt-1\">\n                                <label for=\"a\">first option</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter First option\"\n                                    formControlName=\"a\" id=\"a\">\n                                <div *ngIf=\"a.controls.a.errors\">\n                                    <small class=\"text text-danger\"\n                                        *ngIf=\"a.controls.a.errors.required && a.controls.a.touched\">option is\n                                        required</small>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 col-xs-12  mt-1\">\n                                <label for=\"b\">Second option</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Second option\"\n                                    formControlName=\"b\" id=\"b\">\n                                <div *ngIf=\"a.controls.b.errors\">\n                                    <small class=\"text text-danger\"\n                                        *ngIf=\"a.controls.b.errors.required && a.controls.b.touched\">Second\n                                        option is required</small>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row ml-5 mr-5\">\n                            <div class=\"col-md-6 col-xs-12 mt-1\">\n                                <label for=\"c\">Third option</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Third option\"\n                                    formControlName=\"c\" id=\"c\">\n                                <div *ngIf=\"a.controls.c.errors\">\n                                    <small class=\"text text-danger\"\n                                        *ngIf=\"a.controls.c.errors.required && a.controls.c.touched\">Third\n                                        option is required</small>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6 col-xs-12  mt-1\">\n                                <label for=\"d\">Fourth option</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Fourth option\"\n                                    formControlName=\"d\" id=\"d\">\n                                <div *ngIf=\"a.controls.d.errors\">\n                                    <small class=\"text text-danger\"\n                                        *ngIf=\"a.controls.d.errors.required && a.controls.d.touched\">Fourth\n                                        option is required</small>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row ml-5 mr-5\">\n                            <div class=\"col-lg-12 mt-1\">\n                                <label class=\"col-md-12 label-font\">Choose Correct Answer Option\n                                    <span style=\"color:red;\" [hidden]=\"!(answer?.invalid)\">*</span>\n                                </label>\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-check form-check-inline mr-2\">\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value=\"a\" formControlName=\"answer\" required>\n                                        <label class=\"form-check-label\">a.</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline mr-2\">\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value=\"b\" formControlName=\"answer\" required>\n                                        <label class=\"form-check-label\">b.</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline mr-2\">\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value=\"c\" formControlName=\"answer\" required>\n                                        <label class=\"form-check-label\">c.</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline mr-2\">\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"answer\" value=\"d\" formControlName=\"answer\" required>\n                                        <label class=\"form-check-label\">d.</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row mt-5 ml-5 mr-5 mb-5\">\n                            <div class=\"col-12\">\n                                <button type=\"button\" (click)=\"addItem()\"\n                                    class=\"btn buttonColor text-light \">Add</button>\n\n                                <button type=\"submit\" class=\"btn buttonColor text-light ml-5\"\n                                    [disabled]=\"!createQuizForm.valid\">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row pb-5\">\n    <div class=\"col-xs-11 mt-5 ml-5 mr-5 mb-5 mx-auto\">\n        <div class=\"card mt-5 shadow\">\n            <h1 class=\"mt-5 ml-5\">Login</h1>\n\n\n            <div class=\"alert alert-danger ml-5 mr-5\" *ngIf=\"this.authService.isLoggedInValid\">Invalid Username /\n                Password</div>\n            <form [formGroup]=\"loginForm\" (submit)=\"this.authService.authenticateUser(loginForm.value)\">\n                <div class=\"row mt-5 ml-5 mr-5\">\n                    <div class=\"col-12\">\n                        <label for=\"username\">Username</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" formControlName=\"username\"\n                            id=\"username\" required>\n                        <div class=\"text-danger\"\n                            *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is\n                            required</div>\n                    </div>\n                </div>\n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-12 mt-5\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n                            formControlName=\"password\" id=\"password\" required>\n                        <div class=\"text-danger\"\n                            *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is\n                            required</div>\n                    </div>\n                </div>\n\n\n\n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-12 mt-5\">\n                        <label for=\"userType\">User Type</label>\n                        <select id=\"userType\" formControlName=\"userType\" class=\"custom-select\"\n                            [class.is-invalid]=\"changeType || (userType.touched && userType.pristine)\"\n                            (change)=\"changeUserType($event)\">\n\n                            <option *ngFor=\"let type of cate\" [ngValue]=\"type\">{{type}}</option>\n                        </select>\n                        <small class=\"text text-danger\"\n                            [class.d-none]=\"!changeType  && (userType.untouched || userType.dirty)\">User type is\n                            required</small>\n                    </div>\n                </div>\n                <div class=\"row mt-5 ml-5 mr-5 mb-5\">\n                    <div class=\"col-6\">\n                        <button type=\"submit\" class=\"btn buttonColor text-light\"\n                            [disabled]=\"!loginForm.valid\">Login</button>\n                    </div>\n                    <div class=\"col\">\n                        <div>\n                            New Here? <a class=\"text-primary \" (click)=\"toSignup()\">Signup</a>\n                        </div>\n                    </div>\n                </div>\n\n\n\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row pb-5 px-0 py-0 mx-0\">\n    <div class=\"col-xs-11 mt-5 ml-5 mr-5 mb-5 mx-auto\">\n\n        <div class=\"card mt-5 shadow\" *ngIf=\"!newUserAdded\">\n\n            <div class=\"alert-success col-12 px-auto py-3\" *ngIf=\"userAdded\">\n                School added Sucessfully!!\n            </div>\n            <div class=\"alert-success col-12 px-auto py-3\" *ngIf=\"mentorAdded\">\n                Student added Sucessfully!!\n            </div>\n\n            <div class=\"alert-danger col-12 px-auto py-5\" *ngIf=\"signupErrorMessage\">\n                UserName already exists!!\n            </div>\n        </div>\n\n\n        <div class=\"card mt-5 shadow\" *ngIf=\"newUserAdded\">\n            <h1 *ngIf=\"!userType\" class=\"mx-auto px-3 py-3 mx-1 mt-1\">Student Signup</h1>\n            <h1 *ngIf=\"userType\" class=\"mx-auto px-3 py-3 mx-1 mt-1\">School Signup</h1>\n\n\n            <div class=\"row mt-1 ml-5 mr-5\">\n                <div>\n                    <p *ngIf=\"!userType\">Are you School... ?<a class=\"text-primary\" (click)=\"userSignUp()\">Click\n                            Here</a></p>\n                    <p *ngIf=\"userType\">Are you a Student... ?<a class=\"text-primary\" (click)=\"userSignUp()\">Click Here</a>\n                    </p>\n\n                </div>\n            </div>\n\n            <form [formGroup]=\"signUpForm\" (submit)=\"addUser(signUpForm.value)\">\n                <div class=\"row mt-1 ml-5 mr-5\">\n\n                    <div class=\"col-12 \">\n                        <label for=\"username\">User Email</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\"\n                            formControlName=\"username\" id=\"username\"\n                            [class.is-invalid]=\"username.invalid && username.touched\">\n                        <div *ngIf=\"username.errors\">\n                            <small class=\"text text-danger\" *ngIf=\"username.errors.required && username.touched\">User\n                                Email Id is required</small>\n                        </div>\n                        <div class=\"validation-error text-danger\"\n                            *ngIf=\"signUpForm.get('username').touched && signUpForm.get('username').hasError('pattern')\">\n                            Email Format should be followed\n                        </div>\n\n                    </div>\n\n                </div>\n                <div *ngIf=\"!userType\" class=\"row ml-5 mr-5\">\n                    <div class=\"col-md-6 col-xs-12 mt-1\">\n                        <label for=\"firstname\">First Name</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\"\n                            formControlName=\"firstname\" id=\"firstname\"\n                            [class.is-invalid]=\"firstname.invalid && firstname.touched\" >\n                        <div *ngIf=\"firstname.errors\">\n                            <small class=\"text text-danger\"\n                                *ngIf=\"firstname.errors.required && firstname.touched\">Firstname is required</small>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-xs-12  mt-1\">\n                        <label for=\"lastname\">Last Name</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\" formControlName=\"lastname\"\n                            id=\"lastname\" [class.is-invalid]=\"lastname.invalid && lastname.touched\" >\n                        <div *ngIf=\"lastname.errors\">\n                            <small class=\"text text-danger\"\n                                *ngIf=\"lastname.errors.required && lastname.touched\">Lastname is required</small>\n                            </div>\n                    </div>\n                </div>\n                <div class=\"row ml-5 mr-5\">\n                    <div class=\"col-md-6 col-xs-12 mt-1\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n                            formControlName=\"password\" id=\"password\"\n                            [class.is-invalid]=\"password.invalid && password.touched\">\n                        <div *ngIf=\"password.errors\">\n                            <small class=\"text text-danger\"\n                                *ngIf=\"password.errors.required && password.touched\">Password is required</small>\n                            <small class=\"text text-danger\" *ngIf=\"password.errors.maxlength\">Password too long</small>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-6 col-xs-12 mt-1\">\n                        <label for=\"confirmPassword\">Confirm Password</label>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password\"\n                            formControlName=\"confirmPassword\" id=\"confirmPassword\"\n                            [class.is-invalid]=\"confirmPassword.invalid && confirmPassword.touched\">\n                        <div class=\"text-danger\"\n                            *ngIf=\"confirmPassword.invalid && confirmPassword.errors.required && confirmPassword.touched\">\n                            Confirm the Password</div>\n                        <div class=\"text-danger\" *ngIf=\"signUpForm.get('confirmPassword').hasError('nomatch')\">Password\n                            and Confirm Password do not match</div>\n                    </div>\n                </div>\n                <div *ngIf=\"userType\" class=\"row ml-5 mr-5\">\n                    <div class=\"col-lg-12 mt-1\">\n                        <label for=\"schoolname\">School Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"schoolname\" formControlName=\"schoolname\" placeholder=\"Enter school name\"\n                        [class.is-invalid]=\"schoolname.invalid && schoolname.touched\">\n                        <div *ngIf=\"firstname.errors\">\n                            <small class=\"text text-danger\" *ngIf=\"schoolname.invalid && schoolname.errors.required && schoolname.touched\">\n                                School name required</small>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row mt-5 ml-5 mr-5 mb-5\">\n                    <div class=\"col-12\">\n                        <button type=\"submit\" class=\"btn buttonColor text-light\"\n                            [disabled]=\"!signUpForm.valid\">Signup</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n  <h5 class=\" my-5\">Quizs\n    <button *ngIf=\"isSchool\" type=\"button\" class=\"btn float-right\" style=\"background-color: #1100ff\" id=\"white\"\n      (click)=\"creatQuiz()\">\n      <i class=\"material-icons other_icon\"> create </i> <span> Create quiz</span>\n    </button> </h5>\n</div>\n<div class=\"alert-danger container\" *ngIf=\"!loggedIn\">Login before Attempting quiz</div>\n<div class=\"container card mt-5\" *ngFor=\"let quiz of quizlist\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card-text mx-auto mr-5\">\n          {{quiz.quizName}}\n          <button *ngIf=\"!isSchool\" type=\"button\" class=\"btn  float-right\" style=\"background-color: #1100ff\" id=\"white\"\n            (click)=\"attemptquizbyid(quiz.id)\">\n            <i class=\"material-icons other_icon\"> launch </i> <span> Attempt quiz</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./createquiz/createquiz.component */
    "./src/app/createquiz/createquiz.component.ts");
    /* harmony import */


    var _attemptquiz_attemptquiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./attemptquiz/attemptquiz.component */
    "./src/app/attemptquiz/attemptquiz.component.ts");

    var routes = [{
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "signup",
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]
    }, {
      path: 'create',
      component: _createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_6__["CreatequizComponent"]
    }, {
      path: 'attempt',
      component: _attemptquiz_attemptquiz_component__WEBPACK_IMPORTED_MODULE_7__["AttemptquizComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".material-icons.md-36 {\r\n\tfont-size: 35px;\r\n\tline-height: 1.5;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.material-icons.other_icon {\r\n\tline-height: 1.75;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.navbar_top {\r\n\t/* background-image:linear-gradient(to right, #6054a5,#362e63,#0b0531 ); */\r\n\tbackground-color: blue;\r\n\theight: 55px;\r\n\t\t\t\r\n\t\r\n}\r\n\r\n.navbar_bottom { \r\n\tbackground-color: blue;\r\n\tposition: absolute;\r\n\tfont-size:20px;\r\n\theight: 55px;\r\n\twidth: 100%;\r\n\tbottom: 0;\r\n}\r\n\r\na:hover { \r\n    text-decoration: none; \r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQywwRUFBMEU7Q0FDMUUsc0JBQXNCO0NBQ3RCLFlBQVk7OztBQUdiOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsWUFBWTtDQUNaLFdBQVc7Q0FDWCxTQUFTO0FBQ1Y7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1pY29ucy5tZC0zNiB7XHJcblx0Zm9udC1zaXplOiAzNXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zLm90aGVyX2ljb24ge1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjc1O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5uYXZiYXJfdG9wIHtcclxuXHQvKiBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzYwNTRhNSwjMzYyZTYzLCMwYjA1MzEgKTsgKi9cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG5cdGhlaWdodDogNTVweDtcclxuXHRcdFx0XHJcblx0XHJcbn1cclxuXHJcbi5uYXZiYXJfYm90dG9tIHsgXHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Zm9udC1zaXplOjIwcHg7XHJcblx0aGVpZ2h0OiA1NXB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvdHRvbTogMDtcclxufVxyXG5cclxuIFxyXG5hOmhvdmVyIHsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG59IFxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _services_anthentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/anthentication.service */
    "./src/app/services/anthentication.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService, router) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.router = router;
        this.title = 'quiz';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.navigate(['user']);
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          if (this.authService.isLoggedIn == true) return true;else return false;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.accessToken = null;
          this.authService.loggedIn = false;
        }
      }, {
        key: "quiz",
        value: function quiz() {
          // alert("kjhgf")
          this.router.navigate(['user']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_anthentication_service__WEBPACK_IMPORTED_MODULE_3__["AnthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./createquiz/createquiz.component */
    "./src/app/createquiz/createquiz.component.ts");
    /* harmony import */


    var _attemptquiz_attemptquiz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./attemptquiz/attemptquiz.component */
    "./src/app/attemptquiz/attemptquiz.component.ts");
    /* harmony import */


    var ngx_countdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-countdown */
    "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], _createquiz_createquiz_component__WEBPACK_IMPORTED_MODULE_10__["CreatequizComponent"], _attemptquiz_attemptquiz_component__WEBPACK_IMPORTED_MODULE_11__["AttemptquizComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_12__["CountdownModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/attemptquiz/attemptquiz.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/attemptquiz/attemptquiz.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAttemptquizAttemptquizComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".material-icons.other_icon {\r\n\tline-height: 1.75;\r\n\tvertical-align: middle;\r\n}\r\n\r\n#white\r\n{\r\n\tcolor: white;\r\n}\r\n\r\n#grey-text\r\n{\r\n\tcolor: #a6a6a6;\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW1wdHF1aXovYXR0ZW1wdHF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBRUE7O0NBRUMsWUFBWTtBQUNiOztBQUNBOztDQUVDLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2F0dGVtcHRxdWl6L2F0dGVtcHRxdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJpYWwtaWNvbnMub3RoZXJfaWNvbiB7XHJcblx0bGluZS1oZWlnaHQ6IDEuNzU7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuI3doaXRlXHJcbntcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuI2dyZXktdGV4dFxyXG57XHJcblx0Y29sb3I6ICNhNmE2YTY7XHRcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/attemptquiz/attemptquiz.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/attemptquiz/attemptquiz.component.ts ***!
    \******************************************************/

  /*! exports provided: AttemptquizComponent */

  /***/
  function srcAppAttemptquizAttemptquizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttemptquizComponent", function () {
      return AttemptquizComponent;
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


    var _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/quiz.service */
    "./src/app/services/quiz.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AttemptquizComponent = /*#__PURE__*/function () {
      function AttemptquizComponent(route, quiz, formBuilder) {
        _classCallCheck(this, AttemptquizComponent);

        this.route = route;
        this.quiz = quiz;
        this.formBuilder = formBuilder;
        this.options = [];
        this.totalAnswered = 0;
        this.completed = false;
        this.timeLeft = 1200;
      }

      _createClass(AttemptquizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
              _this.timeLeft--;
            } else {
              _this.timeLeft = 1200;
            }
          }, 1000);
          this.quizid = this.quiz.getQuizCard();
          this.quiz.getallQuestions(this.quizid).subscribe(function (response) {
            //alert(JSON.stringify(response))
            _this.questionlist = response;
          }, function (error) {
            if (error instanceof Error) {} else {}
          });
        }
      }, {
        key: "submitTest",
        value: function submitTest() {
          this.rightAnswer = 0;
          this.totalAnswered = 0;

          for (var i = 0; i < this.questionlist.length; i++) {
            if ("selected" in this.questionlist[i] && this.questionlist[i]["selected"] != null) {
              this.totalAnswered++;

              if (this.questionlist[i]["selected"] == this.questionlist[i]["answer"]) {
                this.rightAnswer++;
              }
            }
          }

          this.completed = true;
        }
      }, {
        key: "timesUp",
        value: function timesUp(event) {
          if (event.action == "done") {
            this.rightAnswer = 0;
            this.totalAnswered = 0;

            for (var i = 0; i < this.questionlist.length; i++) {
              if ("selected" in this.questionlist[i] && this.questionlist[i]["selected"] != null) {
                this.totalAnswered++;

                if (this.questionlist[i]["selected"] == this.questionlist[i]["answer"]) {
                  this.rightAnswer++;
                }
              }
            }

            this.completed = true;
          }
        }
      }]);

      return AttemptquizComponent;
    }();

    AttemptquizComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    AttemptquizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-attemptquiz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./attemptquiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/attemptquiz/attemptquiz.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./attemptquiz.component.css */
      "./src/app/attemptquiz/attemptquiz.component.css"))["default"]]
    })], AttemptquizComponent);
    /***/
  },

  /***/
  "./src/app/createquiz/createquiz.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/createquiz/createquiz.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreatequizCreatequizComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttonColor{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlcXVpei9jcmVhdGVxdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVxdWl6L2NyZWF0ZXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25Db2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/createquiz/createquiz.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/createquiz/createquiz.component.ts ***!
    \****************************************************/

  /*! exports provided: CreatequizComponent */

  /***/
  function srcAppCreatequizCreatequizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatequizComponent", function () {
      return CreatequizComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/quiz.service */
    "./src/app/services/quiz.service.ts");

    var CreatequizComponent = /*#__PURE__*/function () {
      function CreatequizComponent(formBuilder, _quizservice) {
        _classCallCheck(this, CreatequizComponent);

        this.formBuilder = formBuilder;
        this._quizservice = _quizservice;
        this.newQuizAdded = false;
      }

      _createClass(CreatequizComponent, [{
        key: "createItem",
        value: function createItem() {
          return this.formBuilder.group({
            question: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            a: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            b: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            c: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            d: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            answer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createQuizForm = this.formBuilder.group({
            quizname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            arr: this.formBuilder.array([this.createItem()])
          });
        }
      }, {
        key: "addItem",
        value: function addItem() {
          this.arr = this.createQuizForm.get('arr');
          this.arr.push(this.createItem());
        }
      }, {
        key: "createQuiz",
        value: function createQuiz(createQuizForm) {
          var _this2 = this;

          var Quiz = {
            "id": 0,
            "quizName": createQuizForm.quizname,
            "questionsList": createQuizForm.arr
          };

          this._quizservice.createQuiz(Quiz).subscribe(function (response) {
            //alert(response)
            _this2.newQuizAdded = true;
            _this2.createErrorMessage = null;
          }, function (error) {
            _this2.createErrorMessage = error.message;

            if (error instanceof Error) {} else {}
          });
        }
      }, {
        key: "quizname",
        get: function get() {
          return this.createQuizForm.get('quizname');
        }
      }, {
        key: "question",
        get: function get() {
          return this.createQuizForm.get('question');
        }
      }, {
        key: "option1",
        get: function get() {
          return this.createQuizForm.get('option1');
        }
      }, {
        key: "option2",
        get: function get() {
          return this.createQuizForm.get('option2');
        }
      }, {
        key: "option3",
        get: function get() {
          return this.createQuizForm.get('option3');
        }
      }, {
        key: "option4",
        get: function get() {
          return this.createQuizForm.get('option4');
        }
      }, {
        key: "answer",
        get: function get() {
          return this.createQuizForm.get('answer');
        }
      }]);

      return CreatequizComponent;
    }();

    CreatequizComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]
      }];
    };

    CreatequizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-createquiz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./createquiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/createquiz/createquiz.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./createquiz.component.css */
      "./src/app/createquiz/createquiz.component.css"))["default"]]
    })], CreatequizComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.buttonColor{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idXR0b25Db2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_anthentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/anthentication.service */
    "./src/app/services/anthentication.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuild, authService, router) {
        _classCallCheck(this, LoginComponent);

        this.formBuild = formBuild;
        this.authService = authService;
        this.router = router;
        this.isType = true;
        this.cate = ["Login as..", "School", "Student"];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuild.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userType: [this.cate[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "toSignup",
        value: function toSignup() {
          this.router.navigate(['signup']);
        }
      }, {
        key: "changeUserType",
        value: function changeUserType($event) {
          if ($event.target.selectedIndex != 0) {
            this.changeType = false;
            this.isType = false;
          } else {
            this.changeType = true;
            this.isType = true;
          }
        }
      }, {
        key: "username",
        get: function get() {
          return this.loginForm.get('username');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }, {
        key: "userType",
        get: function get() {
          return this.loginForm.get('userType');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_anthentication_service__WEBPACK_IMPORTED_MODULE_4__["AnthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/services/anthentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/anthentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AnthenticationService */

  /***/
  function srcAppServicesAnthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnthenticationService", function () {
      return AnthenticationService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AnthenticationService = /*#__PURE__*/function () {
      function AnthenticationService(router, httpClient) {
        _classCallCheck(this, AnthenticationService);

        this.router = router;
        this.httpClient = httpClient;
        this.isSchool = false;
        this.loggedInUser = {
          loggedOut: true
        };
        this.validCredentials = false;
        this.redirectUrl = '/';
        this.loggedIn = false;
        this.authUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].authUrl;
        this.isLoggedInValid = false;
      }

      _createClass(AnthenticationService, [{
        key: "authenticateUser",
        value: function authenticateUser(user) {
          var _this3 = this;

          this.isLoggedIn = true;

          if (user.userType == "School") {
            this.suffix = "s";
          } else if (user.userType == "Student") {
            this.suffix = "u";
          }

          this.authenticateSpring(user.username, user.password).subscribe(function (data) {
            _this3.username = user.username;
            _this3.loggedInUser = user;
            _this3.validCredentials = true;
            _this3.loggedIn = true;

            _this3.setToken(data.token);

            _this3.name = user.username;

            if (data.role == "ROLE_s") {
              _this3.isSchool = true;

              _this3.router.navigate(['user']);
            } else if (data.role == "ROLE_u") {
              _this3.isSchool = false;

              _this3.router.navigate(['user']);
            } else {
              _this3.router.navigate(['login']);
            }
          }, function (error) {
            _this3.validCredentials = false;
            _this3.isLoggedInValid = true;
            _this3.error = error.error.message;

            if (error.error.errors != null) {
              _this3.error = error.error.errors[0];
            }
          });
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          this.token = token;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "authenticateSpring",
        value: function authenticateSpring(user, password) {
          var newUser = user + this.suffix;
          var credentials = btoa(newUser + ':' + password);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          headers = headers.set('Authorization', 'Basic ' + credentials);
          return this.httpClient.get(this.authUrl, {
            headers: headers
          });
        }
      }]);

      return AnthenticationService;
    }();

    AnthenticationService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AnthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AnthenticationService);
    /***/
  },

  /***/
  "./src/app/services/quiz.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/quiz.service.ts ***!
    \******************************************/

  /*! exports provided: QuizService */

  /***/
  function srcAppServicesQuizServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizService", function () {
      return QuizService;
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


    var _anthentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./anthentication.service */
    "./src/app/services/anthentication.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var QuizService = /*#__PURE__*/function () {
      function QuizService(_httpClient, _authService) {
        _classCallCheck(this, QuizService);

        this._httpClient = _httpClient;
        this._authService = _authService;
        this.allquiz = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].allquiz;
      }

      _createClass(QuizService, [{
        key: "getallQuizs",
        value: function getallQuizs() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken()); //alert(JSON.stringify(headers));

          return this._httpClient.get(this.allquiz + "/allquiz", {
            headers: headers
          });
        }
      }, {
        key: "createQuiz",
        value: function createQuiz(quiz) {
          //alert(JSON.stringify(quiz))
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken()); // alert(JSON.stringify(headers));

          return this._httpClient.post(this.allquiz + "/create", quiz, {
            headers: headers
          });
        }
      }, {
        key: "getallQuestions",
        value: function getallQuestions(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken()); // alert(JSON.stringify(headers));

          return this._httpClient.get(this.allquiz + "/questions/" + id, {
            headers: headers
          });
        }
      }, {
        key: "setQuizCard",
        value: function setQuizCard(id) {
          //alert(id)
          this.selectedCard = id;
        }
      }, {
        key: "getQuizCard",
        value: function getQuizCard() {
          return this.selectedCard;
        }
      }]);

      return QuizService;
    }();

    QuizService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _anthentication_service__WEBPACK_IMPORTED_MODULE_3__["AnthenticationService"]
      }];
    };

    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuizService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _anthentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./anthentication.service */
    "./src/app/services/anthentication.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(_httpClient, _authService) {
        _classCallCheck(this, UserService);

        this._httpClient = _httpClient;
        this._authService = _authService;
        this.addschoolUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].add;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.adduserUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].add;
      }

      _createClass(UserService, [{
        key: "studentSignUp",
        value: function studentSignUp(userSignUpData) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
          return this._httpClient.post(this.adduserUrl + '/addstudent', userSignUpData, {
            headers: headers
          });
        }
      }, {
        key: "schoolSignUp",
        value: function schoolSignUp(schoolSignUpData) {
          //alert(JSON.stringify(schoolSignUpData));
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
          return this._httpClient.post(this.addschoolUrl + '/addschool', schoolSignUpData, {
            headers: headers
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _anthentication_service__WEBPACK_IMPORTED_MODULE_4__["AnthenticationService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.css":
  /*!*********************************************!*\
    !*** ./src/app/signup/signup.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".buttonColor{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbkNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_anthentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/anthentication.service */
    "./src/app/services/anthentication.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(formBuilder, _authService, _userService) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this._authService = _authService;
        this._userService = _userService;
        this.userType = false;
        this.userAdded = false;
        this.mentorAdded = false;
        this.newUserAdded = true;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")]],
            firstname: ['', []],
            lastname: ['', []],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.matchConfirmPassword.bind(this)]],
            schoolname: ['', []]
          });
        }
      }, {
        key: "matchConfirmPassword",
        value: function matchConfirmPassword(formControl) {
          if (this.signUpForm) {
            if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
              return {
                'nomatch': true
              };
            }
          }

          return null;
        }
      }, {
        key: "userSignUp",
        value: function userSignUp() {
          this.userType = !this.userType;
        }
      }, {
        key: "addUser",
        value: function addUser(signUpForm) {
          var _this4 = this;

          if (this.userType) {
            var school = {
              "id": 0,
              "userName": signUpForm.username,
              "password": signUpForm.password,
              "schoolName": signUpForm.schoolname
            };

            this._userService.schoolSignUp(school).subscribe(function (response) {
              _this4.userAdded = true;
              _this4.signupErrorMessage = null;
              _this4.newUserAdded = false;
            }, function (error) {
              _this4.signupErrorMessage = error.message;

              if (error instanceof Error) {} else {}
            });
          } else {
            var student = {
              "id": 0,
              "userName": signUpForm.username,
              "firstName": signUpForm.firstname,
              "lastName": signUpForm.lastname,
              "password": signUpForm.password
            };

            this._userService.studentSignUp(student).subscribe(function (response) {
              _this4.mentorAdded = true;
              _this4.newUserAdded = false;
              _this4.signupErrorMessage = null;
            }, function (error) {
              _this4.signupErrorMessage = error.message;

              if (error instanceof Error) {} else {}
            });
          }
        }
      }, {
        key: "username",
        get: function get() {
          return this.signUpForm.get('username');
        }
      }, {
        key: "firstname",
        get: function get() {
          return this.signUpForm.get('firstname');
        }
      }, {
        key: "lastname",
        get: function get() {
          return this.signUpForm.get('lastname');
        }
      }, {
        key: "password",
        get: function get() {
          return this.signUpForm.get('password');
        }
      }, {
        key: "confirmPassword",
        get: function get() {
          return this.signUpForm.get('confirmPassword');
        }
      }, {
        key: "schoolname",
        get: function get() {
          return this.signUpForm.get('schoolname');
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_anthentication_service__WEBPACK_IMPORTED_MODULE_3__["AnthenticationService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".material-icons.other_icon {\r\n\tline-height: 1.75;\r\n\tvertical-align: middle;\r\n}\r\n\r\n#white\r\n{\r\n\tcolor: white;\r\n}\r\n\r\n#grey-text\r\n{\r\n\tcolor: #a6a6a6;\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUVBOztDQUVDLFlBQVk7QUFDYjs7QUFDQTs7Q0FFQyxjQUFjO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1pY29ucy5vdGhlcl9pY29uIHtcclxuXHRsaW5lLWhlaWdodDogMS43NTtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4jd2hpdGVcclxue1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jZ3JleS10ZXh0XHJcbntcclxuXHRjb2xvcjogI2E2YTZhNjtcdFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
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


    var _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/quiz.service */
    "./src/app/services/quiz.service.ts");
    /* harmony import */


    var _services_anthentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/anthentication.service */
    "./src/app/services/anthentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(quiz, auth, router) {
        _classCallCheck(this, UserComponent);

        this.quiz = quiz;
        this.auth = auth;
        this.router = router;
        this.loggedIn = true;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.isSchool = this.auth.isSchool;
          this.quiz.getallQuizs().subscribe(function (response) {
            //alert(JSON.stringify(response))
            _this5.quizlist = response;
          }, function (error) {
            if (error instanceof Error) {} else {}
          });
        }
      }, {
        key: "creatQuiz",
        value: function creatQuiz() {
          this.router.navigate(['create']);
        }
      }, {
        key: "attemptquizbyid",
        value: function attemptquizbyid(id) {
          if (this.auth.isLoggedIn) {
            this.quiz.setQuizCard(id);
            this.router.navigate(['attempt']);
          } else {
            this.loggedIn = false;
            this.router.navigate(['user']);
          }
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _services_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]
      }, {
        type: _services_anthentication_service__WEBPACK_IMPORTED_MODULE_3__["AnthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css"))["default"]]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      authUrl: 'http://localhost:9091/authenticate',
      add: 'http://localhost:9091/signup',
      allquiz: 'http://localhost:9091/quiz'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\interviews\quizoverall\quiz\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map