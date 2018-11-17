(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lobby/lobby.component */ "./src/app/lobby/lobby.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_2__["LobbyComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Game Lobby';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lobby/lobby.component */ "./src/app/lobby/lobby.component.ts");
/* harmony import */ var _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-dialog/login-dialog.component */ "./src/app/login-dialog/login-dialog.component.ts");
/* harmony import */ var _player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player-dialog/player-dialog.component */ "./src/app/player-dialog/player-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_7__["LobbyComponent"],
                _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LoginDialogComponent"],
                _player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_9__["PlayerDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LoginDialogComponent"],
                _player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_9__["PlayerDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/lobby/lobby.component.css":
/*!*******************************************!*\
  !*** ./src/app/lobby/lobby.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n} \n\n.fill-remaining-space {\n    flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9iYnkvbG9iYnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9sb2JieS9sb2JieS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufSBcblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/lobby/lobby.component.html":
/*!********************************************!*\
  !*** ./src/app/lobby/lobby.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>Game Lobby</span>\n    <span class=\"fill-remaining-space\"></span>\n    <button mat-button (click)=\"onAddPlayerClick()\">Add Player</button>\n    <button (click)=\"onPlayersClick()\" mat-button>Players</button>\n    <button (click)=\"onGamesClick()\" mat-button>Games</button>\n    <button (click)=\"onLoginClick()\" mat-button *ngIf=\"!isAdmin()\">Login</button>\n    <button (click)=\"onLogoutClick()\" mat-button *ngIf=\"isAdmin()\">Logout</button>\n</mat-toolbar>\n\n<table *ngIf=\"getTab() == LobbyTab.PLAYERS\" mat-table [dataSource]=\"playerTableData\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Player </th>\n    <td mat-cell *matCellDef=\"let element;\"> {{ element.name }} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"rank\">\n    <th mat-header-cell *matHeaderCellDef> Rank </th>\n    <td mat-cell *matCellDef=\"let element;\"> {{ element.rank }} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"score\">\n    <th mat-header-cell *matHeaderCellDef> Score </th>\n    <td mat-cell *matCellDef=\"let element;\"> {{ element.score }} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"time\">\n  <th mat-header-cell *matHeaderCellDef> Time </th>\n  <td mat-cell *matCellDef=\"let element;\"> {{ element.time }} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"gamePlayed\">\n    <th mat-header-cell *matHeaderCellDef> Game Played </th>\n    <td mat-cell *matCellDef=\"let element;\"> {{ element.gamePlayed }} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef> Status </th>\n    <td mat-cell *matCellDef=\"let element;\"> {{ element.status }} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"option\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let element; let i = index;\">\n      <button (click)=\"onJoinLobbyClick(i)\" mat-button *ngIf=\"element.option && !isAdmin()\">Join Game</button>\n\n      <button (click)=\"onEditPlayerClick(i)\" mat-button *ngIf=\"isAdmin()\">Update</button>\n      <button (click)=\"onDeletePlayerClick(i)\" mat-button *ngIf=\"isAdmin()\">Delete</button>\n\n    </td>\n\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"playerTableColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: playerTableColumns;\"></tr>\n</table>\n\n<table *ngIf=\"getTab() == LobbyTab.GAMES\" mat-table [dataSource]=\"gameTableData\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Title </th>\n      <td mat-cell *matCellDef=\"let element;\"> {{ element.title }} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"platform\">\n      <th mat-header-cell *matHeaderCellDef> Platform </th>\n      <td mat-cell *matCellDef=\"let element;\"> {{ element.platform }} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"genre\">\n      <th mat-header-cell *matHeaderCellDef> Genre </th>\n      <td mat-cell *matCellDef=\"let element;\"> {{ element.genre }} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"publisher\">\n    <th mat-header-cell *matHeaderCellDef> Publisher </th>\n    <td mat-cell *matCellDef=\"let element;\"> {{ element.publisher }} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"release\">\n      <th mat-header-cell *matHeaderCellDef> Release </th>\n      <td mat-cell *matCellDef=\"let element;\"> {{ element.release }} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef> Status </th>\n      <td mat-cell *matCellDef=\"let element;\"> {{ element.status }} </td>\n    </ng-container>\n  \n    <tr mat-header-row *matHeaderRowDef=\"gameTableColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: gameTableColumns;\"></tr>\n  </table>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/lobby/lobby.component.ts":
/*!******************************************!*\
  !*** ./src/app/lobby/lobby.component.ts ***!
  \******************************************/
/*! exports provided: LobbyTab, LobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyTab", function() { return LobbyTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyComponent", function() { return LobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-dialog/login-dialog.component */ "./src/app/login-dialog/login-dialog.component.ts");
/* harmony import */ var _player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player-dialog/player-dialog.component */ "./src/app/player-dialog/player-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LobbyTab;
(function (LobbyTab) {
    LobbyTab["PLAYERS"] = "PLAYERS";
    LobbyTab["GAMES"] = "GAMES";
})(LobbyTab || (LobbyTab = {}));
var LOBBY_DATA = [
    { name: "faker", rank: 1, score: 100000, time: "5h", gamePlayed: "League", status: "Busy", option: "" },
    { name: "shroud", rank: 2, score: 333, time: "10h", gamePlayed: "CS GO", status: "Available", option: "Join Game" },
    { name: "oddone", rank: 3, score: 7777, time: "3d", gamePlayed: "Overwatch", status: "Available", option: "Join Game" }
];
var GAME_DATA = [
    { title: "Diablo 3", platform: "PC", genre: "RPG", publisher: "Blizzard", release: 2015, status: "Active" },
    { title: "Call Of Duty", platform: "Xbox", genre: "FPS", publisher: "Activision", release: 2013, status: "Active" },
    { title: "League of Legends", platform: "PC", genre: "MOBA", publisher: "Riot", release: 2011, status: "Active" }
];
var LobbyComponent = /** @class */ (function () {
    function LobbyComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.playerTableData = LOBBY_DATA;
        this.playerTableColumns = ["name", "rank", "score", "time", "gamePlayed", "status", "option"];
        this.gameTableData = GAME_DATA;
        this.gameTableColumns = ["title", "platform", "genre", "publisher", "release", "status"];
        this.LobbyTab = LobbyTab;
        this.admin = false;
        this.tab = LobbyTab.PLAYERS;
    }
    LobbyComponent.prototype.getTab = function () {
        return this.tab;
    };
    LobbyComponent.prototype.onGamesClick = function () {
        this.tab = LobbyTab.GAMES;
    };
    LobbyComponent.prototype.onPlayersClick = function () {
        this.tab = LobbyTab.PLAYERS;
    };
    LobbyComponent.prototype.isAdmin = function () {
        return this.admin;
    };
    LobbyComponent.prototype.onLogoutClick = function () {
        this.admin = false;
    };
    LobbyComponent.prototype.onLoginClick = function () {
        this.openLoginDialog();
    };
    LobbyComponent.prototype.openLoginDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_2__["LoginDialogComponent"], {
            width: "60%"
        }).afterClosed().subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.admin = true;
            }
        });
    };
    LobbyComponent.prototype.onJoinLobbyClick = function (index) {
        var dialogRef = this.dialog.open(_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PlayerDialogComponent"], {
            width: "70%",
            data: [_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PlayerDialogState"].SHOW, this.playerTableData[index]],
            autoFocus: false
        });
    };
    LobbyComponent.prototype.onAddPlayerClick = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PlayerDialogComponent"], {
            width: "70%",
            data: [_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PlayerDialogState"].ADD, this.playerTableData[index]],
            autoFocus: false
        }).afterClosed().subscribe(function (player) {
            console.log(player);
            if (player) {
                _this.playerTableData.push(player);
                _this.table.renderRows();
            }
        });
    };
    LobbyComponent.prototype.onDeletePlayerClick = function (index) {
        this.playerTableData.splice(index, 1);
        this.snackBar.open("Succesfully deleted player", "OK");
        this.table.renderRows();
    };
    LobbyComponent.prototype.onEditPlayerClick = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PlayerDialogComponent"], {
            width: "70%",
            data: [_player_dialog_player_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PlayerDialogState"].EDIT, this.playerTableData[index]],
            autoFocus: false
        }).afterClosed().subscribe(function (player) {
            if (player) {
                _this.playerTableData[index] = player;
                _this.table.renderRows();
            }
        });
    };
    LobbyComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"])
    ], LobbyComponent.prototype, "table", void 0);
    LobbyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lobby',
            template: __webpack_require__(/*! ./lobby.component.html */ "./src/app/lobby/lobby.component.html"),
            styles: [__webpack_require__(/*! ./lobby.component.css */ "./src/app/lobby/lobby.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], LobbyComponent);
    return LobbyComponent;
}());



/***/ }),

/***/ "./src/app/login-dialog/login-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login-dialog/login-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n}\n  \n.container > * {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZGlhbG9nL2xvZ2luLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWRpYWxvZy9sb2dpbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuICBcbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login-dialog/login-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/login-dialog/login-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Admin Login</h2>\n<mat-dialog-content>\n  <div [formGroup]=\"loginForm\" class=\"container\">\n    <mat-form-field>\n      <input formControlName=\"username\" matInput placeholder=\"Username\">\n      <mat-error *ngIf=\"username.invalid && (username.dirty || username.touched)\">Invalid username</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input [type]=\"hide ? 'password' : 'text'\" matInput=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      <mat-error *ngIf=\"password.invalid && (password.dirty || password.touched)\">Invalid password</mat-error>\n    </mat-form-field>\n    \n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n  <button mat-button (click)=\"onLoginClick()\">Login</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/login-dialog/login-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-dialog/login-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginDialogComponent = /** @class */ (function () {
    function LoginDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.dialogRef.disableClose = true;
        this.hidePassword = true;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    Object.defineProperty(LoginDialogComponent.prototype, "username", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginDialogComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginDialogComponent.prototype, "hide", {
        get: function () {
            return this.hidePassword;
        },
        enumerable: true,
        configurable: true
    });
    LoginDialogComponent.prototype.setFormTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.setFormTouched(control);
            }
        });
    };
    LoginDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    LoginDialogComponent.prototype.onLoginClick = function () {
        if (this.loginForm.invalid) {
            this.setFormTouched(this.loginForm);
        }
        else {
            this.dialogRef.close(true);
        }
    };
    LoginDialogComponent.prototype.ngOnInit = function () { };
    LoginDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-dialog',
            template: __webpack_require__(/*! ./login-dialog.component.html */ "./src/app/login-dialog/login-dialog.component.html"),
            styles: [__webpack_require__(/*! ./login-dialog.component.css */ "./src/app/login-dialog/login-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "./src/app/player-dialog/player-dialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/player-dialog/player-dialog.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: flex;\n    flex-direction: column;\n}\n  \n.container > * {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyLWRpYWxvZy9wbGF5ZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvcGxheWVyLWRpYWxvZy9wbGF5ZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4gIFxuLmNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/player-dialog/player-dialog.component.html":
/*!************************************************************!*\
  !*** ./src/app/player-dialog/player-dialog.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Player</h2>\n<mat-dialog-content>\n\n  <!-- Show Player Dialog -->\n  <div *ngIf=\"getMode() == PlayerDialogState.SHOW\" class=\"container\" id=\"show_player_dialog\">\n    <mat-list>\n      <mat-list-item>\n        Player: {{ getPlayer().name }}\n      </mat-list-item>\n    </mat-list>\n\n    <mat-divider></mat-divider>\n\n    <mat-list>\n      <mat-list-item>Rank: {{ getPlayer().rank }}</mat-list-item>\n    </mat-list>\n\n    <mat-divider></mat-divider>\n\n    <mat-list>\n        <mat-list-item>Score: {{ getPlayer().score }}</mat-list-item>\n      </mat-list>\n  \n    <mat-divider></mat-divider>\n\n    <mat-list>\n        <mat-list-item>Time: {{ getPlayer().time }}</mat-list-item>\n    </mat-list>\n  \n    <mat-divider></mat-divider>\n\n    <mat-list>\n      <mat-list-item>Favourite Game: {{ getPlayer().gamePlayed }}</mat-list-item>\n    </mat-list>\n\n    <mat-list>\n      <mat-list-item>\n        <mat-form-field>\n          <mat-select placeholder=\"Select a Game\">\n            <mat-option *ngFor=\"let game of getGames()\" [value]=\"game\">\n              {{ game }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </mat-list-item>\n    </mat-list>\n\n    <mat-divider></mat-divider>\n  </div>\n\n  <!-- Edit Player Dialog -->\n  <div [formGroup]=\"playerForm\" *ngIf=\"getMode() == PlayerDialogState.EDIT\" class=\"container\" id=\"edit_player_dialog\">\n      <mat-form-field>\n        <input formControlName=\"name\" matInput placeholder=\"Player\" value=\"{{ getPlayer().name }}\">\n        <mat-error *ngIf=\"name.invalid && (name.dirty || name.touched)\">Invalid player name</mat-error>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <mat-select formControlName=\"rank\" [(value)]=\"getPlayer().rank\" placeholder=\"Select A Rating\">\n          <mat-option *ngFor=\"let rank of getRanks()\" [value]=\"rank\">\n            {{ rank }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"rank.invalid && (rank.dirty || rank.touched)\">Invalid player name</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input formControlName=\"score\" matInput placeholder=\"Score\" value=\"{{ getPlayer().score }}\">\n        <mat-error *ngIf=\"score.invalid && (score.dirty || score.touched)\">Invalid player name</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <input formControlName=\"time\" matInput placeholder=\"Time\" value=\"{{ getPlayer().time }}\">\n        <mat-error *ngIf=\"time.invalid && (time.dirty || time.touched)\">Invalid player name</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <mat-select formControlName=\"gamePlayed\" [(value)]=\"getPlayer().gamePlayed\" placeholder=\"Select A Game\">\n          <mat-option *ngFor=\"let game of getGames()\" [value]=\"game\">\n            {{ game }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"gamePlayed.invalid && (gamePlayed.dirty || gamePlayed.touched)\">Invalid player name</mat-error>\n      </mat-form-field>\n  \n      <mat-form-field>\n        <mat-select formControlName=\"status\" [(value)]=\"getPlayer().status\" placeholder=\"Select A Status\">\n          <mat-option *ngFor=\"let status of getStatuses()\" [value]=\"status\">\n            {{ status }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"status.invalid && (status.dirty || status.touched)\">Invalid player name</mat-error>\n      </mat-form-field>\n  </div>\n\n    <!-- Add Player Dialog -->\n  <div [formGroup]=\"playerForm\" *ngIf=\"getMode() == PlayerDialogState.ADD\" class=\"container\" id=\"add_player_dialog\">\n    <mat-form-field>\n      <input formControlName=\"name\" matInput placeholder=\"Player\">\n      <mat-error *ngIf=\"name.invalid\">Invalid player name</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select formControlName=\"rank\" placeholder=\"Select A Rating\">\n        <mat-option *ngFor=\"let rank of getRanks()\" [value]=\"rank\">\n          {{ rank }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"rank.invalid\">Invalid rank</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input formControlName=\"score\" matInput placeholder=\"Score\">\n      <mat-error *ngIf=\"score.invalid\">Invalid score</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input formControlName=\"time\" matInput placeholder=\"Time\">\n      <mat-error *ngIf=\"time.invalid\">Invalid time</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select formControlName=\"gamePlayed\" placeholder=\"Select A Game\">\n        <mat-option *ngFor=\"let game of getGames()\" [value]=\"game\">\n          {{ game }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"gamePlayed.invalid\">Invalid game</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-select formControlName=\"status\" placeholder=\"Select A Status\">\n        <mat-option *ngFor=\"let status of getStatuses()\" [value]=\"status\">\n          {{ status }}\n        </mat-option>\n      </mat-select>\n      <mat-error *ngIf=\"status.invalid\">Invalid status</mat-error>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button (click)=\"onCloseClick()\" mat-button>Cancel</button>\n  <button (click)=\"onJoinClick()\" *ngIf=\"getMode() == PlayerDialogState.SHOW\" mat-button=\"true\">Join</button>\n  <button (click)=\"onAddClick()\" *ngIf=\"getMode() == PlayerDialogState.ADD\" mat-button=\"true\">Add</button>\n  <button (click)=\"onUpdateClick()\" *ngIf=\"getMode() == PlayerDialogState.EDIT\" mat-button=\"true\">Update</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/player-dialog/player-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/player-dialog/player-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: PlayerDialogState, PlayerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDialogState", function() { return PlayerDialogState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDialogComponent", function() { return PlayerDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var OPTIONS = ["Option 1", "Option 2", "Option 3"];
var PlayerDialogState;
(function (PlayerDialogState) {
    PlayerDialogState["ADD"] = "ADD";
    PlayerDialogState["EDIT"] = "EDIT";
    PlayerDialogState["SHOW"] = "SHOW";
})(PlayerDialogState || (PlayerDialogState = {}));
var PlayerDialogComponent = /** @class */ (function () {
    function PlayerDialogComponent(dialogRef, data, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.options = OPTIONS;
        this.PlayerDialogState = PlayerDialogState;
        dialogRef.disableClose = true;
        this.mode = data[0];
        this.playerData = data[1];
        // if(this.playerData) {
        this.playerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.playerData ? this.playerData.name : '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            rank: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.playerData ? this.playerData.rank : '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.playerData ? this.playerData.score : '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.playerData ? this.playerData.time : '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            gamePlayed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.playerData ? this.playerData.gamePlayed : '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.playerData ? this.playerData.status : '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    PlayerDialogComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PlayerDialogComponent.prototype, "name", {
        get: function () {
            return this.playerForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerDialogComponent.prototype, "rank", {
        get: function () {
            return this.playerForm.get('rank');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerDialogComponent.prototype, "time", {
        get: function () {
            return this.playerForm.get('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerDialogComponent.prototype, "score", {
        get: function () {
            return this.playerForm.get('score');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerDialogComponent.prototype, "gamePlayed", {
        get: function () {
            return this.playerForm.get('gamePlayed');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerDialogComponent.prototype, "status", {
        get: function () {
            return this.playerForm.get('status');
        },
        enumerable: true,
        configurable: true
    });
    PlayerDialogComponent.prototype.setFormTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.setFormTouched(control);
            }
        });
    };
    PlayerDialogComponent.prototype.onAddClick = function () {
        if (this.playerForm.invalid) {
            this.setFormTouched(this.playerForm);
            this.snackBar.open("Please check for errors.", "CLOSE");
        }
        else {
            this.dialogRef.close(this.playerForm.value);
            this.snackBar.open("Successfully added player!", "OK");
        }
    };
    PlayerDialogComponent.prototype.onUpdateClick = function () {
        if (this.playerForm.invalid) {
            this.setFormTouched(this.playerForm);
            this.snackBar.open("Please check for errors", "CLOSE");
        }
        else {
            this.dialogRef.close(this.playerForm.value);
            this.snackBar.open("Successfully updated player!", "OK");
        }
    };
    PlayerDialogComponent.prototype.onJoinClick = function () {
        console.log(this.playerForm.value);
    };
    PlayerDialogComponent.prototype.getMode = function () {
        return this.mode;
    };
    PlayerDialogComponent.prototype.getRanks = function () {
        return [1, 2, 3, 4, 5];
    };
    PlayerDialogComponent.prototype.getGames = function () {
        return ["League", "CS GO", "Overwatch"];
    };
    PlayerDialogComponent.prototype.getStatuses = function () {
        return ["Available", "Busy"];
    };
    PlayerDialogComponent.prototype.getPlayer = function () {
        return this.playerData;
    };
    PlayerDialogComponent.prototype.onCloseClick = function () {
        this.dialogRef.close();
    };
    PlayerDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-dialog',
            template: __webpack_require__(/*! ./player-dialog.component.html */ "./src/app/player-dialog/player-dialog.component.html"),
            styles: [__webpack_require__(/*! ./player-dialog.component.css */ "./src/app/player-dialog/player-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Array, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], PlayerDialogComponent);
    return PlayerDialogComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abstruct/Desktop/game-lobby/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map