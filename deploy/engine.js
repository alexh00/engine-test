var engine =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Engine.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Engine.ts":
/*!***********************!*\
  !*** ./src/Engine.ts ***!
  \***********************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Loader */ "./src/core/Loader.ts");
/* harmony import */ var _core_ScreenManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/ScreenManager */ "./src/core/ScreenManager.ts");
/* harmony import */ var _core_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Settings */ "./src/core/Settings.ts");




/// <reference path="typings/pixi.js.d.ts" />
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        //probably want to use the pixi loader for everything...
        //so create the app straight away
        this.app = this._createPixiApp();
        this.events = this._createEvents();
        //load the config
        this.settings = new _core_Settings__WEBPACK_IMPORTED_MODULE_3__["Settings"](this.app.loader, this.events);
        return this;
    };
    Engine.prototype.getResource = function (id) {
        return this.app.loader.resources[id].data;
    };
    //config has now loaded
    Engine.prototype.build = function () {
        //update the app with the loaded settings
        this.app.renderer.resize(this.settings.size.width, this.settings.size.height);
        //create the loader
        this.loader = new _core_Loader__WEBPACK_IMPORTED_MODULE_1__["Loader"](this.app.loader, this.events, this.settings);
        //create update loop
        //create screen manager
        this.screenManager = this._createScreenManager();
        //create tween manager
        //create sound manager (rewrite it)
    };
    Engine.prototype._createScreenManager = function () {
        var screenManager = new _core_ScreenManager__WEBPACK_IMPORTED_MODULE_2__["ScreenManager"](this.events, this.settings.size);
        this.app.stage.addChild(screenManager.root);
        return screenManager;
    };
    Engine.prototype._createEvents = function () {
        var _this = this;
        var events = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].EventEmitter();
        events.on(_core_Settings__WEBPACK_IMPORTED_MODULE_3__["Settings"].CONFIG_LOADED, function () {
            //config is loaded - now build the engine
            _this.build();
            //load global assets
            _this.loader.loadGlobal();
        });
        events.on(_core_Loader__WEBPACK_IMPORTED_MODULE_1__["Loader"].GLOBAL_ASSETS_LOADED, function () {
            //now show first screen
            events.emit('app-ready');
        });
        return events;
    };
    Engine.prototype._createPixiApp = function () {
        var view = document.body.querySelector('canvas');
        return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"]({
            height: 768, width: 1024,
            transparent: true,
            view: view,
            forceCanvas: false,
            antialias: true,
            resolution: 1
        });
    };
    return Engine;
}());



/***/ }),

/***/ "./src/core/Loader.ts":
/*!****************************!*\
  !*** ./src/core/Loader.ts ***!
  \****************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
//asset loader
var Loader = /** @class */ (function () {
    function Loader(_loader, _events, _settings) {
        this._loader = _loader;
        this._events = _events;
        this._settings = _settings;
    }
    Loader.prototype.loadGlobal = function () {
        var _this = this;
        //load items from the global list
        this.loadAssets(this._settings.assets.global);
        this._loader.onComplete.once(function () {
            console.log('global assets loaded');
            _this._events.emit(Loader.GLOBAL_ASSETS_LOADED);
        });
    };
    Loader.prototype.loadAssets = function (assets, load) {
        var _this = this;
        if (load === void 0) { load = true; }
        assets.forEach(function (asset) {
            _this._loader.add(asset.id, asset.src);
        });
        if (load) {
            this._loader.load();
        }
    };
    Loader.prototype.loadScreen = function (screenId) {
        //TODO
    };
    Loader.GLOBAL_ASSETS_LOADED = 'global-assets-loaded';
    return Loader;
}());



/***/ }),

/***/ "./src/core/ScreenManager.ts":
/*!***********************************!*\
  !*** ./src/core/ScreenManager.ts ***!
  \***********************************/
/*! exports provided: ScreenManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenManager", function() { return ScreenManager; });
var ScreenManager = /** @class */ (function () {
    function ScreenManager(_events, _size) {
        var _this = this;
        this._events = _events;
        this._size = _size;
        // public test(): void {
        //     this.showScreen(Screen);
        //     //test by adding a sprite
        //     const sprite = new PIXI.Sprite(PIXI.utils.TextureCache['snoopy'])
        //     sprite.anchor.set(0.5);
        //     sprite.width = this._size.width;
        //     sprite.height = this._size.height;
        //     this.currentScreen.addChild(sprite)
        // }
        this.showScreen = function (ScreenType) {
            _this.disposeScreen();
            _this.currentScreen = _this._createScreen(ScreenType);
        };
        this.root = new PIXI.Container();
        this.root.position.set(this._size.width / 2, this._size.height / 2);
        this._events.on('screen', this.showScreen);
    }
    ScreenManager.prototype._createScreen = function (ScreenType) {
        var screen = new ScreenType();
        this.root.addChild(screen);
        return screen;
    };
    ScreenManager.prototype.resize = function () {
        //TODO - keep root centered? Or maybe not needed...
    };
    ScreenManager.prototype.disposeScreen = function () {
        if (this.currentScreen) {
            this.currentScreen.dispose();
            this.currentScreen = null;
        }
    };
    return ScreenManager;
}());



/***/ }),

/***/ "./src/core/Settings.ts":
/*!******************************!*\
  !*** ./src/core/Settings.ts ***!
  \******************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
//interface for the config
var Settings = /** @class */ (function () {
    function Settings(_loader, _events) {
        var _this = this;
        this._loader = _loader;
        this._events = _events;
        this.configPath = 'json/config.json';
        this.size = { width: 1334, height: 750 };
        this._configLoaded = function () {
            var config = _this._loader.resources.config.data;
            Object.assign(_this, config);
            _this._events.emit(Settings.CONFIG_LOADED);
        };
        this.load();
    }
    Settings.prototype.load = function () {
        this._loader.add('config', this.configPath);
        this._loader.onComplete.once(this._configLoaded);
        this._loader.load();
        return this;
    };
    Settings.CONFIG_LOADED = 'config-loaded';
    return Settings;
}());



/***/ }),

/***/ "pixi.js":
/*!***********************!*\
  !*** external "PIXI" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PIXI;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmdpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL0VuZ2luZS50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vZW5naW5lLy4vc3JjL2NvcmUvU2NyZWVuTWFuYWdlci50cyIsIndlYnBhY2s6Ly9lbmdpbmUvLi9zcmMvY29yZS9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9lbmdpbmUvZXh0ZXJuYWwgXCJQSVhJXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDUTtBQUNjO0FBQ1g7QUFDMUMsNkNBQTZDO0FBQzdDO0lBWUk7SUFFQSxDQUFDO0lBRU0sc0JBQUssR0FBWjtRQUNJLHdEQUF3RDtRQUN4RCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksdURBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDRCQUFXLEdBQWxCLFVBQW1CLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFFRCx1QkFBdUI7SUFDZixzQkFBSyxHQUFiO1FBQ0kseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTdFLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbURBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFckUsb0JBQW9CO1FBRXBCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRWpELHNCQUFzQjtRQUV0QixtQ0FBbUM7SUFDdkMsQ0FBQztJQUVPLHFDQUFvQixHQUE1QjtRQUNJLElBQU0sYUFBYSxHQUFHLElBQUksaUVBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQzNDLE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFFTyw4QkFBYSxHQUFyQjtRQUFBLGlCQWVDO1FBZEcsSUFBTSxNQUFNLEdBQUcsSUFBSSw2Q0FBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxFQUFFLENBQUMsdURBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDOUIseUNBQXlDO1lBQ3pDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLG9CQUFvQjtZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxFQUFFLENBQUMsbURBQU0sQ0FBQyxvQkFBb0IsRUFBRTtZQUNuQyx1QkFBdUI7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVPLCtCQUFjLEdBQXRCO1FBQ0ksSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLG1EQUFnQixDQUFDO1lBQ3hCLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUk7WUFDeEIsV0FBVyxFQUFFLElBQUk7WUFDakIsSUFBSTtZQUNKLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLENBQUM7U0FDaEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3RGRDtBQUFBO0FBQUEsY0FBYztBQUNkO0lBS0ksZ0JBQ1ksT0FBb0IsRUFDcEIsT0FBZ0MsRUFDaEMsU0FBbUI7UUFGbkIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFVO0lBRy9CLENBQUM7SUFFTSwyQkFBVSxHQUFqQjtRQUFBLGlCQU9DO1FBTkcsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUNsRCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRU0sMkJBQVUsR0FBakIsVUFBa0IsTUFBZ0IsRUFBRSxJQUFXO1FBQS9DLGlCQU9DO1FBUG1DLGtDQUFXO1FBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBSztZQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDekMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVNLDJCQUFVLEdBQWpCLFVBQWtCLFFBQWdCO1FBQzlCLE1BQU07SUFDVixDQUFDO0lBL0JhLDJCQUFvQixHQUFXLHNCQUFzQixDQUFDO0lBZ0N4RSxhQUFDO0NBQUE7QUFsQ2tCOzs7Ozs7Ozs7Ozs7O0FDRG5CO0FBQUE7QUFBQTtJQU1JLHVCQUFvQixPQUFnQyxFQUFVLEtBQVk7UUFBMUUsaUJBU0M7UUFUbUIsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBVzFFLHdCQUF3QjtRQUN4QiwrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLHdFQUF3RTtRQUN4RSw4QkFBOEI7UUFDOUIsdUNBQXVDO1FBQ3ZDLHlDQUF5QztRQUN6QywwQ0FBMEM7UUFDMUMsSUFBSTtRQUVHLGVBQVUsR0FBRyxVQUFDLFVBQVU7WUFDM0IsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXJCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDdkQsQ0FBQztRQXhCRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQ3hCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQztJQWtCTyxxQ0FBYSxHQUFyQixVQUFzQixVQUFVO1FBQzVCLElBQU0sTUFBTSxHQUFXLElBQUksVUFBVSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxtREFBbUQ7SUFDdkQsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3BERDtBQUFBO0FBQUEsMEJBQTBCO0FBd0IxQjtJQVNJLGtCQUFvQixPQUFvQixFQUFVLE9BQWdDO1FBQWxGLGlCQUVDO1FBRm1CLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUwzRSxlQUFVLEdBQVcsa0JBQWtCO1FBR3ZDLFNBQUksR0FBVSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO1FBYXhDLGtCQUFhLEdBQUc7WUFDcEIsSUFBTSxNQUFNLEdBQXFCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLEVBQUUsTUFBTSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFDN0MsQ0FBQztRQWRHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sdUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBaEJhLHNCQUFhLEdBQVcsZUFBZSxDQUFDO0lBdUIxRCxlQUFDO0NBQUE7QUF6Qm9COzs7Ozs7Ozs7Ozs7QUN4QnJCLHNCIiwiZmlsZSI6ImVuZ2luZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0VuZ2luZS50c1wiKTtcbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSAncGl4aS5qcydcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi9jb3JlL0xvYWRlcic7XHJcbmltcG9ydCB7IFNjcmVlbk1hbmFnZXIgfSBmcm9tICcuL2NvcmUvU2NyZWVuTWFuYWdlcic7XHJcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9jb3JlL1NldHRpbmdzJ1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9waXhpLmpzLmQudHNcIiAvPlxyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBwdWJsaWMgYXBwOiBQSVhJLkFwcGxpY2F0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3M7XHJcblxyXG4gICAgcHVibGljIGV2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgcHVibGljIGxvYWRlcjogTG9hZGVyO1xyXG5cclxuICAgIHB1YmxpYyBzY3JlZW5NYW5hZ2VyOiBTY3JlZW5NYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoKTogRW5naW5lIHtcclxuICAgICAgICAvL3Byb2JhYmx5IHdhbnQgdG8gdXNlIHRoZSBwaXhpIGxvYWRlciBmb3IgZXZlcnl0aGluZy4uLlxyXG4gICAgICAgIC8vc28gY3JlYXRlIHRoZSBhcHAgc3RyYWlnaHQgYXdheVxyXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy5fY3JlYXRlUGl4aUFwcCgpXHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gdGhpcy5fY3JlYXRlRXZlbnRzKCk7XHJcbiAgICAgICAgLy9sb2FkIHRoZSBjb25maWdcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKHRoaXMuYXBwLmxvYWRlciwgdGhpcy5ldmVudHMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXNvdXJjZShpZDogc3RyaW5nKTogdW5rbm93biB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLmxvYWRlci5yZXNvdXJjZXNbaWRdLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25maWcgaGFzIG5vdyBsb2FkZWRcclxuICAgIHByaXZhdGUgYnVpbGQoKTogdm9pZCB7XHJcbiAgICAgICAgLy91cGRhdGUgdGhlIGFwcCB3aXRoIHRoZSBsb2FkZWQgc2V0dGluZ3NcclxuICAgICAgICB0aGlzLmFwcC5yZW5kZXJlci5yZXNpemUodGhpcy5zZXR0aW5ncy5zaXplLndpZHRoLCB0aGlzLnNldHRpbmdzLnNpemUuaGVpZ2h0KVxyXG5cclxuICAgICAgICAvL2NyZWF0ZSB0aGUgbG9hZGVyXHJcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGVyKHRoaXMuYXBwLmxvYWRlciwgdGhpcy5ldmVudHMsIHRoaXMuc2V0dGluZ3MpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHVwZGF0ZSBsb29wXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHNjcmVlbiBtYW5hZ2VyXHJcbiAgICAgICAgdGhpcy5zY3JlZW5NYW5hZ2VyID0gdGhpcy5fY3JlYXRlU2NyZWVuTWFuYWdlcigpO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSB0d2VlbiBtYW5hZ2VyXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHNvdW5kIG1hbmFnZXIgKHJld3JpdGUgaXQpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlU2NyZWVuTWFuYWdlcigpOiBTY3JlZW5NYW5hZ2VyIHtcclxuICAgICAgICBjb25zdCBzY3JlZW5NYW5hZ2VyID0gbmV3IFNjcmVlbk1hbmFnZXIodGhpcy5ldmVudHMsIHRoaXMuc2V0dGluZ3Muc2l6ZSlcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZChzY3JlZW5NYW5hZ2VyLnJvb3QpXHJcbiAgICAgICAgcmV0dXJuIHNjcmVlbk1hbmFnZXI7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlRXZlbnRzKCk6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBuZXcgUElYSS51dGlscy5FdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICAgICAgZXZlbnRzLm9uKFNldHRpbmdzLkNPTkZJR19MT0FERUQsICgpID0+IHtcclxuICAgICAgICAgICAgLy9jb25maWcgaXMgbG9hZGVkIC0gbm93IGJ1aWxkIHRoZSBlbmdpbmVcclxuICAgICAgICAgICAgdGhpcy5idWlsZCgpO1xyXG4gICAgICAgICAgICAvL2xvYWQgZ2xvYmFsIGFzc2V0c1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlci5sb2FkR2xvYmFsKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZXZlbnRzLm9uKExvYWRlci5HTE9CQUxfQVNTRVRTX0xPQURFRCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL25vdyBzaG93IGZpcnN0IHNjcmVlblxyXG4gICAgICAgICAgICBldmVudHMuZW1pdCgnYXBwLXJlYWR5JylcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlUGl4aUFwcCgpOiBQSVhJLkFwcGxpY2F0aW9uIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuICAgICAgICByZXR1cm4gbmV3IFBJWEkuQXBwbGljYXRpb24oe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDc2OCwgd2lkdGg6IDEwMjQsXHJcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICB2aWV3LFxyXG4gICAgICAgICAgICBmb3JjZUNhbnZhczogZmFsc2UsXHJcbiAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzb2x1dGlvbjogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJcclxuXHJcbmltcG9ydCB7IElBc3NldCwgSUFzc2V0cywgU2V0dGluZ3MgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG4vL2Fzc2V0IGxvYWRlclxyXG5leHBvcnQgY2xhc3MgTG9hZGVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdMT0JBTF9BU1NFVFNfTE9BREVEOiBzdHJpbmcgPSAnZ2xvYmFsLWFzc2V0cy1sb2FkZWQnO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9sb2FkZXI6IFBJWEkuTG9hZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2V0dGluZ3M6IFNldHRpbmdzXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRHbG9iYWwoKTogdm9pZCB7XHJcbiAgICAgICAgLy9sb2FkIGl0ZW1zIGZyb20gdGhlIGdsb2JhbCBsaXN0XHJcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKHRoaXMuX3NldHRpbmdzLmFzc2V0cy5nbG9iYWwpXHJcbiAgICAgICAgdGhpcy5fbG9hZGVyLm9uQ29tcGxldGUub25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWwgYXNzZXRzIGxvYWRlZCcpXHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5lbWl0KExvYWRlci5HTE9CQUxfQVNTRVRTX0xPQURFRClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRzKGFzc2V0czogSUFzc2V0W10sIGxvYWQgPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKGFzc2V0LmlkLCBhc3NldC5zcmMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAobG9hZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFNjcmVlbihzY3JlZW5JZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi9TY3JlZW5cIjtcclxuaW1wb3J0IHsgSVNpemUgfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbk1hbmFnZXIge1xyXG5cclxuICAgIHB1YmxpYyByb290OiBQSVhJLkNvbnRhaW5lcjtcclxuXHJcbiAgICBwdWJsaWMgY3VycmVudFNjcmVlbjogU2NyZWVuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V2ZW50czogUElYSS51dGlscy5FdmVudEVtaXR0ZXIsIHByaXZhdGUgX3NpemU6IElTaXplKSB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucm9vdC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0aGlzLl9zaXplLmhlaWdodCAvIDJcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5vbignc2NyZWVuJywgdGhpcy5zaG93U2NyZWVuKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyB0ZXN0KCk6IHZvaWQge1xyXG4gICAgLy8gICAgIHRoaXMuc2hvd1NjcmVlbihTY3JlZW4pO1xyXG4gICAgLy8gICAgIC8vdGVzdCBieSBhZGRpbmcgYSBzcHJpdGVcclxuICAgIC8vICAgICBjb25zdCBzcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUoUElYSS51dGlscy5UZXh0dXJlQ2FjaGVbJ3Nub29weSddKVxyXG4gICAgLy8gICAgIHNwcml0ZS5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAvLyAgICAgc3ByaXRlLndpZHRoID0gdGhpcy5fc2l6ZS53aWR0aDtcclxuICAgIC8vICAgICBzcHJpdGUuaGVpZ2h0ID0gdGhpcy5fc2l6ZS5oZWlnaHQ7XHJcbiAgICAvLyAgICAgdGhpcy5jdXJyZW50U2NyZWVuLmFkZENoaWxkKHNwcml0ZSlcclxuICAgIC8vIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1NjcmVlbiA9IChTY3JlZW5UeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXNwb3NlU2NyZWVuKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NyZWVuID0gdGhpcy5fY3JlYXRlU2NyZWVuKFNjcmVlblR5cGUpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlU2NyZWVuKFNjcmVlblR5cGUpOiBTY3JlZW4ge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbiA9IDxTY3JlZW4+bmV3IFNjcmVlblR5cGUoKTtcclxuICAgICAgICB0aGlzLnJvb3QuYWRkQ2hpbGQoc2NyZWVuKTtcclxuICAgICAgICByZXR1cm4gc2NyZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy9UT0RPIC0ga2VlcCByb290IGNlbnRlcmVkPyBPciBtYXliZSBub3QgbmVlZGVkLi4uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2VTY3JlZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vaW50ZXJmYWNlIGZvciB0aGUgY29uZmlnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBc3NldCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc3JjOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNpemUge1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBc3NldHMge1xyXG4gICAgZ2xvYmFsOiBJQXNzZXRbXTtcclxuICAgIHNjZW5lOiB7XHJcbiAgICAgICAgW3NjZW5lSWQ6IHN0cmluZ106IElBc3NldFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb25maWcge1xyXG4gICAgYXNzZXRzOiBJQXNzZXRzO1xyXG4gICAgc2l6ZTogSVNpemU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIElDb25maWcge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ09ORklHX0xPQURFRDogc3RyaW5nID0gJ2NvbmZpZy1sb2FkZWQnO1xyXG5cclxuICAgIHB1YmxpYyBjb25maWdQYXRoOiBzdHJpbmcgPSAnanNvbi9jb25maWcuanNvbidcclxuXHJcbiAgICBwdWJsaWMgYXNzZXRzOiBJQXNzZXRzO1xyXG4gICAgcHVibGljIHNpemU6IElTaXplID0ge3dpZHRoOiAxMzM0LCBoZWlnaHQ6IDc1MH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGVyOiBQSVhJLkxvYWRlciwgcHJpdmF0ZSBfZXZlbnRzOiBQSVhJLnV0aWxzLkV2ZW50RW1pdHRlcikge1xyXG4gICAgICAgIHRoaXMubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKCk6IFNldHRpbmdzIHtcclxuICAgICAgICB0aGlzLl9sb2FkZXIuYWRkKCdjb25maWcnLCB0aGlzLmNvbmZpZ1BhdGgpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5vbkNvbXBsZXRlLm9uY2UodGhpcy5fY29uZmlnTG9hZGVkKVxyXG4gICAgICAgIHRoaXMuX2xvYWRlci5sb2FkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnTG9hZGVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZzogSUNvbmZpZyA9IDxJQ29uZmlnPnRoaXMuX2xvYWRlci5yZXNvdXJjZXMuY29uZmlnLmRhdGE7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpXHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLmVtaXQoU2V0dGluZ3MuQ09ORklHX0xPQURFRClcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gUElYSTsiXSwic291cmNlUm9vdCI6IiJ9