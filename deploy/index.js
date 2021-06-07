/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/MenuScreen.ts":
/*!***************************!*\
  !*** ./src/MenuScreen.ts ***!
  \***************************/
/*! exports provided: MenuScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuScreen", function() { return MenuScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _TestButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestButton */ "./src/TestButton.ts");
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! engine */ "engine");
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(engine__WEBPACK_IMPORTED_MODULE_2__);



var MenuScreen = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MenuScreen, _super);
    function MenuScreen(config) {
        var _this = _super.call(this, config) || this;
        _this._createMenu();
        return _this;
    }
    MenuScreen.prototype._createMenu = function () {
        this._addButton('Tween', -200, 'tween');
        this._addButton('Sound', 20, 'sound');
    };
    MenuScreen.prototype._addButton = function (label, y, screenId) {
        var _this = this;
        var button = new _TestButton__WEBPACK_IMPORTED_MODULE_1__["TestButton"](label);
        button.root.position.set(-200, y);
        this.addChild(button.root);
        button.events.on('click', function () {
            _this.goToScreen(screenId);
        });
    };
    MenuScreen.prototype.goToScreen = function (screenId) {
        this.screenEvents.emit(engine__WEBPACK_IMPORTED_MODULE_2__["EngineEvents"].SHOW_SCREEN, screenId);
    };
    return MenuScreen;
}(engine__WEBPACK_IMPORTED_MODULE_2__["Screen"]));



/***/ }),

/***/ "./src/SoundScreen.ts":
/*!****************************!*\
  !*** ./src/SoundScreen.ts ***!
  \****************************/
/*! exports provided: SoundScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundScreen", function() { return SoundScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine */ "engine");
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(engine__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TestButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestButton */ "./src/TestButton.ts");



var SoundScreen = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SoundScreen, _super);
    function SoundScreen(config) {
        var _this = _super.call(this, config) || this;
        _this._createButtons();
        _this._createBackButton();
        return _this;
    }
    SoundScreen.prototype._createButtons = function () {
        var b1 = this._createButton('pop', -100, -100);
        b1.events.on('click', function () {
            engine__WEBPACK_IMPORTED_MODULE_1__["Sound"].instance.play('pop');
        });
        var b2 = this._createButton('star', -100, 120);
        b2.events.on('click', function () {
            engine__WEBPACK_IMPORTED_MODULE_1__["Sound"].instance.play('star');
        });
    };
    SoundScreen.prototype._createButton = function (label, x, y) {
        var button = new _TestButton__WEBPACK_IMPORTED_MODULE_2__["TestButton"](label);
        button.root.position.set(x, y);
        this.addChild(button.root);
        return button;
    };
    SoundScreen.prototype._createBackButton = function () {
        var _this = this;
        var button = this._createButton('Back', 200, -200);
        button.events.on('click', function () {
            _this.screenEvents.emit(engine__WEBPACK_IMPORTED_MODULE_1__["EngineEvents"].SHOW_SCREEN, 'menu');
        });
    };
    return SoundScreen;
}(engine__WEBPACK_IMPORTED_MODULE_1__["Screen"]));



/***/ }),

/***/ "./src/TestButton.ts":
/*!***************************!*\
  !*** ./src/TestButton.ts ***!
  \***************************/
/*! exports provided: TestButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestButton", function() { return TestButton; });
var TestButton = /** @class */ (function () {
    function TestButton(label) {
        this.root = new PIXI.Container();
        this.shape = this._createShape();
        this.label = this._createLabel(label);
        this.events = new PIXI.utils.EventEmitter();
        this._addListeners();
    }
    TestButton.prototype._addListeners = function () {
        var _this = this;
        this.root.interactive = true;
        this.root.buttonMode = true;
        var pressed = false;
        this.root.on('pointerdown', function () {
            pressed = true;
        });
        this.root.on('pointerup', function () {
            if (pressed) {
                _this.events.emit('click');
            }
            pressed = false;
        });
        this.root.on('pointerupoutside', function () {
            pressed = false;
        });
    };
    TestButton.prototype._createLabel = function (label) {
        var text = new PIXI.Text(label, {
            fontFamily: 'Arial',
            fill: '#ffffff',
            fontSize: 60
        });
        text.anchor.set(0.5);
        this.root.addChild(text);
        return text;
    };
    TestButton.prototype._createShape = function () {
        var shape = new PIXI.Graphics();
        shape.beginFill(0xff0000);
        shape.drawRect(-100, -50, 200, 100);
        shape.endFill();
        this.root.addChild(shape);
        return shape;
    };
    return TestButton;
}());



/***/ }),

/***/ "./src/TweenScreen.ts":
/*!****************************!*\
  !*** ./src/TweenScreen.ts ***!
  \****************************/
/*! exports provided: TweenScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenScreen", function() { return TweenScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine */ "engine");
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(engine__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TestButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestButton */ "./src/TestButton.ts");



var TweenScreen = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TweenScreen, _super);
    function TweenScreen(config) {
        var _this = _super.call(this, config) || this;
        _this.next = function () {
            var hx = _this.screenWidth * -0.5;
            var hy = _this.screenHeight * -0.5;
            var x = hx + (Math.random() * _this.screenWidth);
            var y = hy + (Math.random() * _this.screenHeight);
            engine__WEBPACK_IMPORTED_MODULE_1__["TweenManager"].create(_this.woodstock.position)
                .to({ x: x, y: y }, 700)
                .onComplete(_this.next).start();
        };
        _this._createBackground();
        _this.woodstock = _this._createWoodstock();
        //back button
        _this._createBackButton();
        _this.next();
        return _this;
    }
    TweenScreen.prototype._createBackButton = function () {
        var _this = this;
        var button = new _TestButton__WEBPACK_IMPORTED_MODULE_2__["TestButton"]('Back');
        button.root.position.set(200, -200);
        this.addChild(button.root);
        button.events.on('click', function () {
            engine__WEBPACK_IMPORTED_MODULE_1__["TweenManager"].killTweensOf(_this.woodstock.position);
            _this.screenEvents.emit(engine__WEBPACK_IMPORTED_MODULE_1__["EngineEvents"].SHOW_SCREEN, 'menu');
        });
    };
    TweenScreen.prototype._createWoodstock = function () {
        var sprite = new PIXI.Sprite(PIXI.utils.TextureCache['woodstock']);
        sprite.anchor.set(0.5);
        this.addChild(sprite);
        // sprite.buttonMode = true;
        // sprite.interactive = true;
        // sprite.on('click', () => {
        //     console.log('click')
        //     Sound.instance.play('pop')
        // })
        return sprite;
    };
    TweenScreen.prototype._createBackground = function () {
        var sprite = new PIXI.Sprite(PIXI.utils.TextureCache['snoopy']);
        sprite.anchor.set(0.5);
        sprite.width = this.screenWidth;
        sprite.height = this.screenHeight;
        this.addChild(sprite);
        return sprite;
    };
    return TweenScreen;
}(engine__WEBPACK_IMPORTED_MODULE_1__["Screen"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! engine */ "engine");
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(engine__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens */ "./src/screens.ts");
/// <reference path="../types/pixi.js.d.ts" />
/// <reference path="../types/engine.d.ts" />


document.addEventListener('DOMContentLoaded', function (event) {
    var engine = new engine__WEBPACK_IMPORTED_MODULE_0__["Engine"]().start({
        menu: _screens__WEBPACK_IMPORTED_MODULE_1__["MenuScreen"],
        tween: _screens__WEBPACK_IMPORTED_MODULE_1__["TweenScreen"],
        sound: _screens__WEBPACK_IMPORTED_MODULE_1__["SoundScreen"]
    });
    engine.events.on('app-ready', function () {
        engine.screenManager.showScreen('menu');
    });
});


/***/ }),

/***/ "./src/screens.ts":
/*!************************!*\
  !*** ./src/screens.ts ***!
  \************************/
/*! exports provided: MenuScreen, TweenScreen, SoundScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuScreen */ "./src/MenuScreen.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuScreen", function() { return _MenuScreen__WEBPACK_IMPORTED_MODULE_0__["MenuScreen"]; });

/* harmony import */ var _TweenScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TweenScreen */ "./src/TweenScreen.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenScreen", function() { return _TweenScreen__WEBPACK_IMPORTED_MODULE_1__["TweenScreen"]; });

/* harmony import */ var _SoundScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SoundScreen */ "./src/SoundScreen.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundScreen", function() { return _SoundScreen__WEBPACK_IMPORTED_MODULE_2__["SoundScreen"]; });






/***/ }),

/***/ "engine":
/*!*************************!*\
  !*** external "engine" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = engine;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWVudVNjcmVlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU291bmRTY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rlc3RCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1R3ZWVuU2NyZWVuLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbmdpbmVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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LEdBMER0Qzs7Ozs7Ozs7Ozs7Ozs7QUM5REQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQ2I7QUFDK0I7QUFFL0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQUMsS0FBSztJQUNoRCxJQUFNLE1BQU0sR0FBRyxJQUFJLDZDQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxFQUFFLG1EQUFVO1FBQ2hCLEtBQUssRUFBRSxvREFBVztRQUNsQixLQUFLLEVBQUUsb0RBQVc7S0FDckIsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO1FBQzFCLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2RIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ0M7QUFDQTs7Ozs7Ozs7Ozs7O0FDRjlCLHdCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBUZXN0QnV0dG9uIH0gZnJvbSAnLi9UZXN0QnV0dG9uJ1xyXG5pbXBvcnQgeyBFbmdpbmVFdmVudHMsIElTY3JlZW5Db25maWcsIFNjcmVlbiB9IGZyb20gXCJlbmdpbmVcIjtcclxuZXhwb3J0IGNsYXNzIE1lbnVTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSVNjcmVlbkNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZU1lbnUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlTWVudSgpIHtcclxuICAgICAgICB0aGlzLl9hZGRCdXR0b24oJ1R3ZWVuJywgLTIwMCwgJ3R3ZWVuJylcclxuICAgICAgICB0aGlzLl9hZGRCdXR0b24oJ1NvdW5kJywgMjAsICdzb3VuZCcpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkQnV0dG9uKGxhYmVsOiBzdHJpbmcsIHk6IG51bWJlciwgc2NyZWVuSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBUZXN0QnV0dG9uKGxhYmVsKTtcclxuICAgICAgICBidXR0b24ucm9vdC5wb3NpdGlvbi5zZXQoLTIwMCx5KVxyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYnV0dG9uLnJvb3QpO1xyXG4gICAgICAgIGJ1dHRvbi5ldmVudHMub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdvVG9TY3JlZW4oc2NyZWVuSWQpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdvVG9TY3JlZW4oc2NyZWVuSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuRXZlbnRzLmVtaXQoRW5naW5lRXZlbnRzLlNIT1dfU0NSRUVOLCBzY3JlZW5JZClcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFbmdpbmVFdmVudHMsIFNjcmVlbiwgSVNjcmVlbkNvbmZpZywgU291bmQgfSBmcm9tIFwiZW5naW5lXCI7XHJcbmltcG9ydCB7IFRlc3RCdXR0b24gfSBmcm9tIFwiLi9UZXN0QnV0dG9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU291bmRTY3JlZW4gZXh0ZW5kcyBTY3JlZW57XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJU2NyZWVuQ29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3JlYXRlQnV0dG9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVCYWNrQnV0dG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlQnV0dG9ucygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBiMSA9IHRoaXMuX2NyZWF0ZUJ1dHRvbigncG9wJywgLTEwMCwgLTEwMCk7XHJcbiAgICAgICAgYjEuZXZlbnRzLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgU291bmQuaW5zdGFuY2UucGxheSgncG9wJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGIyID0gdGhpcy5fY3JlYXRlQnV0dG9uKCdzdGFyJywgLTEwMCwgMTIwKTtcclxuICAgICAgICBiMi5ldmVudHMub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBTb3VuZC5pbnN0YW5jZS5wbGF5KCdzdGFyJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZUJ1dHRvbihsYWJlbDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IFRlc3RCdXR0b24ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBUZXN0QnV0dG9uKGxhYmVsKTtcclxuICAgICAgICBidXR0b24ucm9vdC5wb3NpdGlvbi5zZXQoeCx5KVxyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoYnV0dG9uLnJvb3QpO1xyXG4gICAgICAgIHJldHVybiBidXR0b25cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUJhY2tCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5fY3JlYXRlQnV0dG9uKCdCYWNrJywgMjAwLC0yMDApO1xyXG4gICAgICAgIGJ1dHRvbi5ldmVudHMub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkV2ZW50cy5lbWl0KEVuZ2luZUV2ZW50cy5TSE9XX1NDUkVFTiwgJ21lbnUnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIFRlc3RCdXR0b24ge1xyXG5cclxuICAgIHB1YmxpYyByb290OiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIHB1YmxpYyBldmVudHM6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyO1xyXG4gICAgcHJpdmF0ZSBzaGFwZTogUElYSS5HcmFwaGljcztcclxuICAgIHByaXZhdGUgbGFiZWw6IFBJWEkuVGV4dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhcGUgPSB0aGlzLl9jcmVhdGVTaGFwZSgpXHJcblxyXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLl9jcmVhdGVMYWJlbChsYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyKClcclxuXHJcbiAgICAgICAgdGhpcy5fYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMucm9vdC5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yb290LmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBwcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb290Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgcHJlc3NlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucm9vdC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuZW1pdCgnY2xpY2snKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucm9vdC5vbigncG9pbnRlcnVwb3V0c2lkZScsICgpID0+IHtcclxuICAgICAgICAgICAgcHJlc3NlZCA9IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVMYWJlbChsYWJlbDogc3RyaW5nKTogUElYSS5UZXh0IHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gbmV3IFBJWEkuVGV4dChsYWJlbCwge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiA2MFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5yb290LmFkZENoaWxkKHRleHQpXHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlU2hhcGUoKTogUElYSS5HcmFwaGljcyB7XHJcbiAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHNoYXBlLmJlZ2luRmlsbCgweGZmMDAwMClcclxuICAgICAgICBzaGFwZS5kcmF3UmVjdCgtMTAwLCAtNTAsIDIwMCwgMTAwKVxyXG4gICAgICAgIHNoYXBlLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQoc2hhcGUpXHJcbiAgICAgICAgcmV0dXJuIHNoYXBlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSVNjcmVlbkNvbmZpZywgU2NyZWVuLCBUd2Vlbk1hbmFnZXIsIFNvdW5kLCBFbmdpbmUsIEVuZ2luZUV2ZW50cyB9IGZyb20gXCJlbmdpbmVcIjtcclxuaW1wb3J0IHsgVGVzdEJ1dHRvbiB9IGZyb20gJy4vVGVzdEJ1dHRvbidcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVHdlZW5TY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xyXG5cclxuICAgIHByaXZhdGUgd29vZHN0b2NrOiBQSVhJLlNwcml0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IElTY3JlZW5Db25maWcpIHtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVCYWNrZ3JvdW5kKCk7XHJcblxyXG4gICAgICAgIHRoaXMud29vZHN0b2NrID0gdGhpcy5fY3JlYXRlV29vZHN0b2NrKCk7XHJcblxyXG4gICAgICAgIC8vYmFjayBidXR0b25cclxuICAgICAgICB0aGlzLl9jcmVhdGVCYWNrQnV0dG9uKCk7XHJcblxyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfY3JlYXRlQmFja0J1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBuZXcgVGVzdEJ1dHRvbignQmFjaycpO1xyXG4gICAgICAgIGJ1dHRvbi5yb290LnBvc2l0aW9uLnNldCgyMDAsLTIwMClcclxuICAgICAgICB0aGlzLmFkZENoaWxkKGJ1dHRvbi5yb290KTtcclxuICAgICAgICBidXR0b24uZXZlbnRzLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgVHdlZW5NYW5hZ2VyLmtpbGxUd2VlbnNPZih0aGlzLndvb2RzdG9jay5wb3NpdGlvbilcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5FdmVudHMuZW1pdChFbmdpbmVFdmVudHMuU0hPV19TQ1JFRU4sICdtZW51JylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG5leHQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgaHggPSB0aGlzLnNjcmVlbldpZHRoICogLTAuNTtcclxuICAgICAgICBjb25zdCBoeSA9IHRoaXMuc2NyZWVuSGVpZ2h0ICogLTAuNTtcclxuICAgICAgICBjb25zdCB4ID0gaHggKyAoTWF0aC5yYW5kb20oKSAqIHRoaXMuc2NyZWVuV2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IHkgPSBoeSArIChNYXRoLnJhbmRvbSgpICogdGhpcy5zY3JlZW5IZWlnaHQpO1xyXG4gICAgICAgIFR3ZWVuTWFuYWdlci5jcmVhdGUodGhpcy53b29kc3RvY2sucG9zaXRpb24pXHJcbiAgICAgICAgICAgIC50byh7IHgsIHkgfSwgNzAwKVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSh0aGlzLm5leHQpLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlV29vZHN0b2NrKCk6IFBJWEkuU3ByaXRlIHtcclxuICAgICAgICBjb25zdCBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUoUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbJ3dvb2RzdG9jayddKVxyXG4gICAgICAgIHNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZChzcHJpdGUpXHJcbiAgICAgICAgLy8gc3ByaXRlLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG4gICAgICAgIC8vIHNwcml0ZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gc3ByaXRlLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2NsaWNrJylcclxuICAgICAgICAvLyAgICAgU291bmQuaW5zdGFuY2UucGxheSgncG9wJylcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlQmFja2dyb3VuZCgpOiBQSVhJLlNwcml0ZSB7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlWydzbm9vcHknXSlcclxuICAgICAgICBzcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHNwcml0ZS53aWR0aCA9IHRoaXMuc2NyZWVuV2lkdGg7XHJcbiAgICAgICAgc3ByaXRlLmhlaWdodCA9IHRoaXMuc2NyZWVuSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ByaXRlKVxyXG4gICAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgICB9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwZXMvcGl4aS5qcy5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGVzL2VuZ2luZS5kLnRzXCIgLz5cclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnZW5naW5lJztcclxuaW1wb3J0IHtNZW51U2NyZWVuLCBUd2VlblNjcmVlbiwgU291bmRTY3JlZW59IGZyb20gJy4vc2NyZWVucyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKCkuc3RhcnQoe1xyXG4gICAgICAgIG1lbnU6IE1lbnVTY3JlZW4sXHJcbiAgICAgICAgdHdlZW46IFR3ZWVuU2NyZWVuLFxyXG4gICAgICAgIHNvdW5kOiBTb3VuZFNjcmVlblxyXG4gICAgfSk7XHJcbiAgICBlbmdpbmUuZXZlbnRzLm9uKCdhcHAtcmVhZHknLCAoKSA9PiB7XHJcbiAgICAgICAgZW5naW5lLnNjcmVlbk1hbmFnZXIuc2hvd1NjcmVlbignbWVudScpXHJcbiAgICB9KVxyXG59KTsiLCJleHBvcnQgKiBmcm9tICcuL01lbnVTY3JlZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL1R3ZWVuU2NyZWVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9Tb3VuZFNjcmVlbic7IiwibW9kdWxlLmV4cG9ydHMgPSBlbmdpbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==