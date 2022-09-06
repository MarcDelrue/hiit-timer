"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_timer_timer_module_ts"],{

/***/ 5683:
/*!***********************************************!*\
  !*** ./src/app/timer/timer-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPageRoutingModule": () => (/* binding */ TimerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.page */ 5484);




const routes = [
    {
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_0__.TimerPage
    }
];
let TimerPageRoutingModule = class TimerPageRoutingModule {
};
TimerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TimerPageRoutingModule);



/***/ }),

/***/ 9178:
/*!***************************************!*\
  !*** ./src/app/timer/timer.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPageModule": () => (/* binding */ TimerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer-routing.module */ 5683);
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.page */ 5484);







let TimerPageModule = class TimerPageModule {
};
TimerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimerPageRoutingModule
        ],
        declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_1__.TimerPage]
    })
], TimerPageModule);



/***/ }),

/***/ 5484:
/*!*************************************!*\
  !*** ./src/app/timer/timer.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPage": () => (/* binding */ TimerPage)
/* harmony export */ });
/* harmony import */ var _Users_m_delrue_PROJECTS_hiit_timer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _timer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.page.html?ngResource */ 7591);
/* harmony import */ var _timer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.page.scss?ngResource */ 241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_hiit_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/hiit-data.service */ 9133);






let TimerPage = class TimerPage {
  constructor(hiit) {
    this.hiit = hiit;
    this.firstCountDown = {
      minutes: 0,
      seconds: 5
    };
    this.currentRound = 1;
    this.timeToShow = { ...this.firstCountDown
    };
    this.killAll = false;
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,_Users_m_delrue_PROJECTS_hiit_timer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.killAll = false;
      _this.currentRound = 1;
      _this.firstCountDown = {
        minutes: 0,
        seconds: 5
      };
      _this.timeToShow = { ..._this.firstCountDown
      };
      _this.status = 'waiting';
      _this.currentExercise = 'Starting in: ';
      yield _this.intervalSetter();
      yield _this.startWorkout();
    })();
  }

  ionViewWillLeave() {
    this.killAll = true;
  }

  startWorkout() {
    var _this2 = this;

    return (0,_Users_m_delrue_PROJECTS_hiit_timer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (let i = 0; i < _this2.hiit.hiitForm.get('nbrRounds').value && !_this2.killAll; i++) {
        _this2.currentRound = i + 1;

        if (i > 0) {
          _this2.status = 'waiting';
          _this2.currentExercise = 'New Round ! Get prepared !';
          _this2.timeToShow = { ..._this2.firstCountDown
          };
          yield _this2.intervalSetter();
        }

        for (let j = 0; j < _this2.hiit.hiitForm.get('exercisesName').value.length && !_this2.killAll; j++) {
          _this2.status = 'working';
          _this2.currentExercise = _this2.hiit.hiitForm.get('exercisesName').value[j];
          _this2.timeToShow = { ..._this2.hiit.hiitForm.get('workTime').value
          };
          yield _this2.intervalSetter();

          if (j + 1 < _this2.hiit.hiitForm.get('exercisesName').value.length) {
            _this2.status = 'rest';
            _this2.currentExercise = 'REST';
            _this2.timeToShow = { ..._this2.hiit.hiitForm.get('restTime').value
            };
            yield _this2.intervalSetter();
          }
        }
      }

      _this2.currentExercise = 'Well done ! you finished your exercise';
      _this2.status = 'finished';
    })();
  }

  intervalSetter() {
    return new Promise((resolve, reject) => {
      this.timer = setInterval(() => {
        this.timeToShow = this.countdown(this.timeToShow);

        if (this.countdownIsDone(this.timeToShow) || this.killAll) {
          clearInterval(this.timer);
          resolve();
        }
      }, 1000);
    });
  }

  countdownIsDone(current) {
    return current.minutes === 0 && current.seconds === 0;
  }

  countdown(current) {
    if (current.seconds > 0) {
      current.seconds--;
    } else {
      if (current.minutes > 0) {
        current.seconds = 60;
        current.minutes--;
      }
    }

    return current;
  }

};

TimerPage.ctorParameters = () => [{
  type: _services_hiit_data_service__WEBPACK_IMPORTED_MODULE_3__.HiitDataService
}];

TimerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-timer',
  template: _timer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_timer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TimerPage);


/***/ }),

/***/ 241:
/*!**************************************************!*\
  !*** ./src/app/timer/timer.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".working {\n  --ion-background-color:red;\n}\n\n.done {\n  --ion-background-color:green;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n\n.large-label {\n  font-size: 48px;\n}\n\n.top-spacer {\n  margin-top: 250px;\n}\n\n.bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBR0E7RUFDRSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGIiwiZmlsZSI6InRpbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3JraW5ne1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJlZDtcblxufVxuXG4uZG9uZXtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxhcmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4udG9wLXNwYWNlciB7XG4gIG1hcmdpbi10b3A6IDI1MHB4O1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */";

/***/ }),

/***/ 7591:
/*!**************************************************!*\
  !*** ./src/app/timer/timer.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Timer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'working': status === 'working', 'done': status === 'finished'}\">\n  <div class=\"top-spacer\">\n    <div class=\"flex-center large-label\">\n      Round: {{ currentRound | number:'2.' }}\n    </div>\n    <div class=\"flex-center large-label\">\n      {{ currentExercise }}\n    </div>\n    <div class=\"flex-center large-label bold\">\n      {{ timeToShow.minutes | number:'2.'}}:{{timeToShow.seconds | number:'2.'}}\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_timer_timer_module_ts.js.map