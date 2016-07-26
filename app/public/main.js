/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _nw = __webpack_require__(1);

	var _nw2 = _interopRequireDefault(_nw);

	var _menu = __webpack_require__(2);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	const win = _nw2.default.Window.get();

	let menuBar = new _menu2.default();
	menuBar.appendMenu(win);

	win.showDevTools();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("nw.gui");

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	class MenuBar {
		constructor() {
			this.mainMenu;
			this.createMainMenu();
			this.createSubmenu();
		}

		createMainMenu() {
			this.mainMenu = new nw.Menu({ type: 'menubar' });
		}

		createSubmenu() {
			this.subMenu = new nw.Menu();
			this.subMenu.append(new nw.MenuItem({
				label: 'Item A',
				click: function () {
					console.log("I'm clicked");
				}
			}));
			this.subMenu.append(new nw.MenuItem({
				label: 'Item B'
			}));
		}

		appendMenu(win) {
			this.mainMenu.append(new nw.MenuItem({
				label: 'File',
				submenu: this.subMenu
			}));
			win.menu = this.mainMenu;
		}
	}

	exports.default = MenuBar;

/***/ }
/******/ ]);