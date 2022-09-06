"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_hiit_hiit_module_ts"],{

/***/ 627:
/*!*********************************************!*\
  !*** ./src/app/hiit/hiit-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiitPageRoutingModule": () => (/* binding */ HiitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _hiit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hiit.page */ 4048);




const routes = [
    {
        path: '',
        component: _hiit_page__WEBPACK_IMPORTED_MODULE_0__.HiitPage
    }
];
let HiitPageRoutingModule = class HiitPageRoutingModule {
};
HiitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HiitPageRoutingModule);



/***/ }),

/***/ 7854:
/*!*************************************!*\
  !*** ./src/app/hiit/hiit.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiitPageModule": () => (/* binding */ HiitPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _hiit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hiit-routing.module */ 627);
/* harmony import */ var _hiit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hiit.page */ 4048);
/* harmony import */ var _modal_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/timer/timer.component */ 4190);








let HiitPageModule = class HiitPageModule {
};
HiitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _hiit_routing_module__WEBPACK_IMPORTED_MODULE_0__.HiitPageRoutingModule
        ],
        declarations: [_hiit_page__WEBPACK_IMPORTED_MODULE_1__.HiitPage, _modal_timer_timer_component__WEBPACK_IMPORTED_MODULE_2__.TimerComponent]
    })
], HiitPageModule);



/***/ }),

/***/ 4048:
/*!***********************************!*\
  !*** ./src/app/hiit/hiit.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiitPage": () => (/* binding */ HiitPage)
/* harmony export */ });
/* harmony import */ var _Users_m_delrue_PROJECTS_hiit_timer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _hiit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hiit.page.html?ngResource */ 8550);
/* harmony import */ var _hiit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hiit.page.scss?ngResource */ 2848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _services_hiit_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/hiit-data.service */ 9133);









let HiitPage = class HiitPage {
  constructor(pickerCtrl, decimalPipe, hiit) {
    this.pickerCtrl = pickerCtrl;
    this.decimalPipe = decimalPipe;
    this.hiit = hiit;
    this.exerciseName = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
  }

  ngOnInit() {}

  openTimer(type) {
    var _this = this;

    return (0,_Users_m_delrue_PROJECTS_hiit_timer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const picker = yield _this.pickerCtrl.create({
        columns: [{
          name: 'minutes',
          options: _this.createStepper(3),
          selectedIndex: type === 'exercise' ? _this.hiit.hiitForm.get('workTime').value.minutes : _this.hiit.hiitForm.get('restTime').value.minutes
        }, {
          name: 'seconds',
          options: _this.createStepper(59),
          selectedIndex: type === 'exercise' ? _this.hiit.hiitForm.get('workTime').value.seconds : _this.hiit.hiitForm.get('restTime').value.seconds
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Confirm',
          handler: value => {
            if (type === 'exercise') {
              _this.hiit.hiitForm.get('workTime').setValue({
                minutes: value.minutes.value,
                seconds: value.seconds.value
              });
            } else {
              _this.hiit.hiitForm.get('restTime').setValue({
                minutes: value.minutes.value,
                seconds: value.seconds.value
              });
            }
          }
        }]
      });
      yield picker.present();
    })();
  }

  changeNbrRound(change) {
    const tempNbrRounds = this.hiit.hiitForm.get('nbrRounds').value;

    if (tempNbrRounds + change > 0) {
      this.hiit.hiitForm.get('nbrRounds').setValue(tempNbrRounds + change);
    }
  }

  addToExerciseArray() {
    const exerciseArray = this.hiit.hiitForm.get('exercisesName').value;

    if (!this.exerciseName.value) {
      return;
    }

    this.hiit.hiitForm.get('exercisesName').setValue([this.exerciseName.value, ...exerciseArray]);
    this.exerciseName.setValue('');
  }

  removeExerciseAt(index) {
    const exerciseArray = this.hiit.hiitForm.get('exercisesName').value;
    exerciseArray.splice(index, 1);
    this.hiit.hiitForm.get('exercisesName').setValue(exerciseArray);
  }

  createStepper(max) {
    const res = [];

    for (let i = 0; i <= max; i++) {
      res.push({
        value: i,
        text: this.decimalPipe.transform(i.toString(), '2.')
      });
    }

    return res;
  }

};

HiitPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.PickerController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe
}, {
  type: _services_hiit_data_service__WEBPACK_IMPORTED_MODULE_3__.HiitDataService
}];

HiitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-hiit',
  template: _hiit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
  styles: [_hiit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HiitPage);


/***/ }),

/***/ 4190:
/*!*****************************************************!*\
  !*** ./src/app/hiit/modal/timer/timer.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerComponent": () => (/* binding */ TimerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _timer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.component.html?ngResource */ 8361);
/* harmony import */ var _timer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.component.scss?ngResource */ 1081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TimerComponent = class TimerComponent {
    constructor() { }
    ngOnInit() { }
};
TimerComponent.ctorParameters = () => [];
TimerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timer',
        template: _timer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_timer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TimerComponent);



/***/ }),

/***/ 2848:
/*!************************************************!*\
  !*** ./src/app/hiit/hiit.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".page-margin {\n  margin: 16px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.center {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoiaGlpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1tYXJnaW4ge1xuICBtYXJnaW46IDE2cHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4iXX0= */";

/***/ }),

/***/ 1081:
/*!******************************************************************!*\
  !*** ./src/app/hiit/modal/timer/timer.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 8550:
/*!************************************************!*\
  !*** ./src/app/hiit/hiit.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title size=\"large\">\n      Hiit\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"page-margin\">\n    <ion-item>\n      <ion-label>Exercise name</ion-label>\n      <ion-input [formControl]=\"exerciseName\"></ion-input>\n      <ion-icon (click)=\"addToExerciseArray()\" slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n    </ion-item>\n    <ion-list *ngIf=\"hiit.hiitForm.get('exercisesName').value.length > 0\">\n      <ion-item *ngFor=\"let exercise of hiit.hiitForm.get('exercisesName').value; let i = index\">\n        <ion-label>{{ exercise }}</ion-label>\n        <ion-icon slot=\"end\" name=\"close-outline\" (click)=\"removeExerciseAt(i)\"></ion-icon>\n      </ion-item>\n    </ion-list>\n    <ion-item (click)=\"openTimer('exercise')\">\n      <h1>Exercise duration</h1>\n      <ion-label slot=\"end\">\n        {{ hiit.hiitForm.get('workTime').value.minutes | number: '2.' }}:{{ hiit.hiitForm.get('workTime').value.seconds | number: '2.' }}\n      </ion-label>\n    </ion-item>\n    <ion-item (click)=\"openTimer('rest')\">\n      <h1>Rest duration</h1>\n      <ion-label slot=\"end\">\n        {{ hiit.hiitForm.get('restTime').value.minutes | number: '2.' }}:{{ hiit.hiitForm.get('restTime').value.seconds | number: '2.' }}\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon (click)=\"changeNbrRound(-1)\" slot=\"start\" name=\"remove-circle-outline\"></ion-icon>\n      <ion-label>Round<span *ngIf=\"hiit.hiitForm.get('nbrRounds').value > 1\">s</span>: {{ hiit.hiitForm.get('nbrRounds').value }}</ion-label>\n      <ion-icon (click)=\"changeNbrRound(1)\" slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n    </ion-item>\n    <ion-button (click)=\"hiit.startsImmediately = true\" [routerLink]=\"['/tabs/timer']\" expand=\"block\">Start</ion-button>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 8361:
/*!******************************************************************!*\
  !*** ./src/app/hiit/modal/timer/timer.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ng-template>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button>Cancel</ion-button>\n      </ion-buttons>\n      <ion-title>Welcome</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button [strong]=\"true\">Confirm</ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content class=\"ion-padding\">\n    <ion-item>\n      <ion-label position=\"stacked\">Enter your name</ion-label>\n      <ion-input type=\"text\" placeholder=\"Your name\"></ion-input>\n    </ion-item>\n  </ion-content>\n</ng-template>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_hiit_hiit_module_ts.js.map