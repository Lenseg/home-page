/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/home-page/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_appHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/appHeader */ \"./src/components/appHeader.vue\");\n/* harmony import */ var _components_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/interfaces */ \"./src/components/interfaces.vue\");\n/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/video */ \"./src/components/video.vue\");\n/* harmony import */ var _components_resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/resources */ \"./src/components/resources.vue\");\n/* harmony import */ var _components_About_About_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/About/About.vue */ \"./src/components/About/About.vue\");\n/* harmony import */ var _components_footer_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer.vue */ \"./src/components/footer.vue\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    rootHeader: _components_appHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    interfaces: _components_interfaces__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    videoBlock: _components_video__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    resources: _components_resources__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    About: _components_About_About_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    rootFooter: _components_footer_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: () => ({\n    //\n  })\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/About.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/About.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _children_Resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./children/Resource */ \"./src/components/About/children/Resource.vue\");\n/* harmony import */ var _children_subscribe_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./children/subscribe.vue */ \"./src/components/About/children/subscribe.vue\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Portfolio',\n  data() {\n    return {\n      panel: 0,\n      resources: [{\n        \"type\": \"offer\",\n        \"links\": [{\n          \"name\": \" Full version\",\n          \"link\": \"https://spark.adobe.com/page/KdCp73pb85itN/\"\n        }, {\n          \"name\": \"Two-pager\",\n          \"link\": \"https://spark.adobe.com/page/9myaX3gvA4gt5/\"\n        }],\n        \"image\": \"https://raw.githubusercontent.com/SIDS-Dashboard/api/main/data/cms/images/undpSidsOffer.jpeg\"\n      }, {\n        \"type\": \"report\",\n        \"links\": [{\n          \"name\": \"Download\",\n          \"link\": \"https://express.adobe.com/page/3hg2U1XZZ6yh9/\"\n        }],\n        \"image\": \"https://raw.githubusercontent.com/SIDS-Dashboard/api/main/data/cms/images/progressReport.jpeg\"\n      }]\n    };\n  },\n  components: {\n    Resource: _children_Resource__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    subscribe: _children_subscribe_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  computed: {}\n});\n\n//# sourceURL=webpack:///./src/components/About/About.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/Resource.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/children/Resource.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AboutResource',\n  props: ['resource'],\n  data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack:///./src/components/About/children/Resource.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/subscribe.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/children/subscribe.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'subscribe'\n});\n\n//# sourceURL=webpack:///./src/components/About/children/subscribe.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/LanguageSelector.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LanguageSelector.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/language */ \"./src/language/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'LanguageSelector',\n  data() {\n    return {\n      activeLanguage: 'en',\n      languages: [{\n        name: 'English',\n        id: 'en'\n      }, {\n        name: 'Português',\n        id: 'pt'\n      }, {\n        name: 'Français',\n        id: 'fr'\n      }, {\n        name: 'Español',\n        id: 'es'\n      }]\n    };\n  },\n  computed: {\n    activeLocale() {\n      return this.$i18n.locale;\n    }\n  },\n  methods: {\n    async changeLocale(locale) {\n      await Object(_language__WEBPACK_IMPORTED_MODULE_0__[\"loadLanguageAsync\"])(locale);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/LanguageSelector.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/appHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/appHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _assets_sidsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/sidsList */ \"./src/assets/sidsList.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'rootHeader',\n  data() {\n    return {\n      searchData: []\n    };\n  },\n  async beforeCreate() {\n    let res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('https://raw.githubusercontent.com/SIDS-Dashboard/api/staging/data/searchDict.json');\n    this.searchData = res.data;\n  },\n  methods: {\n    getColor(type) {\n      if (type === 'indicator') {\n        return 'green';\n      }\n      return 'blue';\n    },\n    selectItem(item) {\n      let link = 'https://data.undp.org/sids/app/';\n      if (item.type === 'indicator') {\n        link += 'development-indicators/' + item.id + '/';\n      }\n      if (item.type === 'profile') {\n        let id = _assets_sidsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(c => c.iso === item.id).id;\n        link += 'country-profiles/' + id + '/';\n      }\n      window.location.href = link;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/appHeader.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/footer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_LanguageSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/LanguageSelector */ \"./src/components/LanguageSelector.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'rootFooter',\n  props: {\n    msg: String\n  },\n  components: {\n    LanguageSelector: _components_LanguageSelector__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/footer.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/interfaces.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/interfaces.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'interfaces',\n  data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack:///./src/components/interfaces.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resources.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'interfaces',\n  data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack:///./src/components/resources.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/video.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/video.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'interfaces',\n  data() {\n    return {};\n  }\n});\n\n//# sourceURL=webpack:///./src/components/video.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VApp */ \"./node_modules/vuetify/lib/components/VApp/index.js\");\n/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VMain */ \"./node_modules/vuetify/lib/components/VMain/index.js\");\n\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_0__[\"VApp\"], [_c(vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_1__[\"VMain\"], [_c(\"root-header\"), _c(\"interfaces\", {\n    attrs: {\n      id: \"content\"\n    }\n  }), _c(\"video-block\"), _c(\"resources\"), _c(\"about\"), _c(\"root-footer\")], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/About.vue?vue&type=template&id=4600e22a&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/About.vue?vue&type=template&id=4600e22a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ \"./node_modules/vuetify/lib/components/VDivider/index.js\");\n/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ \"./node_modules/vuetify/lib/components/VExpansionPanel/index.js\");\n\n\n\n\n\n\n\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VContainer\"], {\n    staticClass: \"about-block\"\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VRow\"], {\n    staticClass: \"d-none d-md-flex mt-0\",\n    attrs: {\n      justify: \"center\"\n    }\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VCol\"], {\n    attrs: {\n      cols: \"12\"\n    }\n  }, [_c(\"h2\", {\n    staticClass: \"about-block_header text-center pt-5 pb-8\"\n  }, [_vm._v(_vm._s(_vm.$t(\"about.header\")))])])], 1), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VRow\"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VCol\"], {\n    attrs: {\n      md: \"9\",\n      xs: \"12\",\n      sm: \"12\"\n    }\n  }, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanels\"], {\n    staticClass: \"mb-4\",\n    attrs: {\n      flat: \"\",\n      accordion: \"\"\n    },\n    model: {\n      value: _vm.panel,\n      callback: function ($$v) {\n        _vm.panel = $$v;\n      },\n      expression: \"panel\"\n    }\n  }, [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanel\"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelHeader\"], [_vm._v(_vm._s(_vm.$t(\"about.whatSids\")))]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelContent\"], [_c(\"p\", [_c(\"a\", {\n    attrs: {\n      href: \"http://unohrlls.org/about-sids/\",\n      target: \"_blank\"\n    }\n  }, [_vm._v(_vm._s(_vm.$t(\"about.whatSidsContent[0]\")))]), _vm._v(\" \" + _vm._s(_vm.$t(\"about.whatSidsContent[1]\")) + \" \")]), _c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatSidsContent[2]\")) + \" \")]), _c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatSidsContent[3]\")) + \" \")]), _c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatSidsContent[4]\")) + \" \")])])], 1), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_1__[\"VDivider\"]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanel\"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelHeader\"], [_vm._v(_vm._s(_vm.$t(\"about.whatOffer\")))]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelContent\"], [_c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatOfferContent[0]\")) + \" \"), _c(\"a\", {\n    attrs: {\n      href: \"https://www.sparkblue.org/dashboard/small-island-developing-states\",\n      target: \"_blank\"\n    }\n  }, [_c(\"b\", [_vm._v(_vm._s(_vm.$t(\"about.whatOfferContent[1]\")))])]), _vm._v(\" \" + _vm._s(_vm.$t(\"about.whatOfferContent[2]\")) + \" \")]), _c(\"p\", [_c(\"b\", [_vm._v(_vm._s(_vm.$t(\"about.whatOfferContent[3]\")))]), _vm._v(\" \" + _vm._s(_vm.$t(\"about.whatOfferContent[4]\")) + \" \")]), _c(\"p\", [_c(\"b\", [_vm._v(_vm._s(_vm.$t(\"about.whatOfferContent[5]\")))]), _vm._v(\" \" + _vm._s(_vm.$t(\"about.whatOfferContent[6]\")) + \" \")]), _c(\"p\", [_c(\"b\", [_vm._v(_vm._s(_vm.$t(\"about.whatOfferContent[7]\")))]), _vm._v(\" \" + _vm._s(_vm.$t(\"about.whatOfferContent[8]\")) + \" \")]), _c(\"p\", [_c(\"b\", [_vm._v(_vm._s(_vm.$t(\"about.whatOfferContent[9]\")))]), _vm._v(\" \" + _vm._s(_vm.$t(\"about.whatOfferContent[10]\")) + \" \")])])], 1), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_1__[\"VDivider\"]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanel\"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelHeader\"], [_vm._v(_vm._s(_vm.$t(\"about.whatPlatform\")))]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelContent\"], [_c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatPlatformContent\")) + \" \")])])], 1), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_1__[\"VDivider\"]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanel\"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelHeader\"], [_vm._v(_vm._s(_vm.$t(\"about.whatSources\")))]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelContent\"], [_c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatSourcesContent\")) + \" \")])])], 1), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_1__[\"VDivider\"]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanel\"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelHeader\"], [_vm._v(_vm._s(_vm.$t(\"about.whatFuture\")))]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelContent\"], [_c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatFutureContent\")) + \" \")])])], 1), _c(vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_1__[\"VDivider\"]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanel\"], [_c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelHeader\"], [_vm._v(_vm._s(_vm.$t(\"about.whatContact\")))]), _c(vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_2__[\"VExpansionPanelContent\"], [_c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatContactContent[0]\")) + \" \"), _c(\"a\", {\n    attrs: {\n      href: \"https://www.sparkblue.org/dashboard/small-island-developing-states\",\n      target: \"_blank\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatContactContent[1]\")))]), _vm._v(\". \")]), _c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatContactContent[2]\"))), _c(\"br\"), _c(\"i\", [_vm._v(_vm._s(_vm.$t(\"about.whatContactContent[3]\")))]), _vm._v(\" – \"), _c(\"i\", [_vm._v(_vm._s(_vm.$t(\"about.whatContactContent[4]\")))]), _c(\"br\")]), _c(\"p\", [_vm._v(\" \" + _vm._s(_vm.$t(\"about.whatContactContent[5]\"))), _c(\"br\"), _c(\"i\", [_vm._v(_vm._s(_vm.$t(\"about.whatContactContent[6]\")))]), _c(\"br\")])])], 1)], 1), _c(\"subscribe\")], 1), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VCol\"], {\n    staticClass: \"d-none d-md-block\",\n    attrs: {\n      md: \"3\"\n    }\n  }, [_vm._l(_vm.resources, function (resource, index) {\n    return [_c(\"resource\", {\n      key: index,\n      attrs: {\n        resource: resource\n      }\n    })];\n  })], 2)], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/About/About.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/Resource.vue?vue&type=template&id=97ebc788&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/children/Resource.vue?vue&type=template&id=97ebc788&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VImg */ \"./node_modules/vuetify/lib/components/VImg/index.js\");\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"mb-4\"\n  }, [_c(\"a\", {\n    staticClass: \"resource-link mb-2\",\n    attrs: {\n      target: \"_blank\",\n      href: _vm.resource.links[0].link\n    }\n  }, [_c(\"h4\", [_vm._v(_vm._s(_vm.$t(\"reports.\" + _vm.resource.type + \".name\")))]), _c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_0__[\"VImg\"], {\n    attrs: {\n      \"aspect-ratio\": \"0.70430107526\",\n      src: _vm.resource.image\n    }\n  })], 1)]);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/About/children/Resource.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/subscribe.vue?vue&type=template&id=78ea3da8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/children/subscribe.vue?vue&type=template&id=78ea3da8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ \"./node_modules/vuetify/lib/components/VBtn/index.js\");\n/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ \"./node_modules/vuetify/lib/components/VCard/index.js\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n\n\n\n\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"bg-white pb-8 pt-8\"\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__[\"VRow\"], {}, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_2__[\"VCol\"], [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCard\"], {\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardText\"], [_c(\"div\", {\n    staticClass: \"d-flex align-center justify-center\"\n  }, [_c(\"h2\", {\n    staticClass: \"subscribe-block_header ml-auto mb-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"about.fBulletin\")) + \" \")]), _c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__[\"VBtn\"], {\n    staticClass: \"mr-auto ml-8\",\n    attrs: {\n      color: \"primary\",\n      rounded: \"\",\n      depressed: \"\",\n      target: \"_blank\",\n      href: \"https://undp.us4.list-manage.com/subscribe?u=cf50bc7216b0c4b063618fbac&id=c2c8d779ea\"\n    }\n  }, [_vm._v(_vm._s(_vm.$t(\"about.subscribe\")))])], 1)])], 1)], 1)], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/About/children/subscribe.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/LanguageSelector.vue?vue&type=template&id=445b9807&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LanguageSelector.vue?vue&type=template&id=445b9807&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ \"./node_modules/vuetify/lib/components/VSelect/index.js\");\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"select\"\n  }, [_c(vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_0__[\"VSelect\"], {\n    attrs: {\n      rounded: \"\",\n      value: _vm.activeLocale,\n      items: _vm.languages,\n      \"item-text\": \"name\",\n      \"item-value\": \"id\",\n      outlined: \"\",\n      \"hide-selected\": \"\",\n      dense: \"\",\n      \"hide-details\": \"\"\n    },\n    on: {\n      change: _vm.changeLocale\n    }\n  })], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/LanguageSelector.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/appHeader.vue?vue&type=template&id=72b87d2e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/appHeader.vue?vue&type=template&id=72b87d2e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ \"./node_modules/vuetify/lib/components/VAutocomplete/index.js\");\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ \"./node_modules/vuetify/lib/components/VBtn/index.js\");\n/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VChip */ \"./node_modules/vuetify/lib/components/VChip/index.js\");\n\n\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"header\", {\n    staticClass: \"header\"\n  }, [_c(\"video\", {\n    staticClass: \"header_video d-block\",\n    attrs: {\n      poster: __webpack_require__(/*! @/assets/media/header-bg.jpg */ \"./src/assets/media/header-bg.jpg\"),\n      autoplay: \"\",\n      muted: \"\",\n      loop: \"\",\n      playsinline: \"\"\n    },\n    domProps: {\n      muted: true\n    }\n  }, [_c(\"source\", {\n    attrs: {\n      src: __webpack_require__(/*! @/assets/media/videos/header-xl.webm */ \"./src/assets/media/videos/header-xl.webm\"),\n      type: \"video/webm\"\n    }\n  }), _c(\"source\", {\n    attrs: {\n      src: __webpack_require__(/*! @/assets/media/videos/header-xl.mp4 */ \"./src/assets/media/videos/header-xl.mp4\"),\n      type: \"video/mp4\"\n    }\n  })]), _vm._m(0), _c(\"main\", {\n    staticClass: \"header-text pt-6\",\n    attrs: {\n      role: \"main\"\n    }\n  }, [_c(\"h1\", {\n    staticClass: \"header-text_header header-text_header-big mt-16\"\n  }, [_vm._v(_vm._s(_vm.$t(\"header.header[0]\")))]), _c(\"h2\", {\n    staticClass: \"header-text_header header-text_header-small\"\n  }, [_vm._v(_vm._s(_vm.$t(\"header.header[1]\")))]), _c(\"h1\", {\n    staticClass: \"header-text_header header-text_header-big\"\n  }, [_vm._v(_vm._s(_vm.$t(\"header.header[2]\")) + \" \")]), _c(\"hr\", {\n    staticClass: \"d-none d-md-block d-lg-block d-xl-block header-text_divider\"\n  }), _c(\"p\", {\n    staticClass: \"d-none d-md-block d-lg-block d-xl-block header-text_description\"\n  }, [_vm._v(_vm._s(_vm.$t(\"header.description\")))]), _c(\"div\", {\n    staticClass: \"top-content_input mt-15 mr-auto ml-auto pr-4 pl-4\",\n    attrs: {\n      id: \"search\"\n    }\n  }, [_c(vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_0__[\"VAutocomplete\"], {\n    attrs: {\n      filled: \"\",\n      \"menu-props\": {\n        \"nudge-right\": 16\n      },\n      attach: \"#search\",\n      \"return-object\": \"\",\n      items: _vm.searchData,\n      rounded: \"\",\n      \"item-text\": \"text\",\n      \"item-value\": \"text\"\n    },\n    on: {\n      change: _vm.selectItem\n    },\n    scopedSlots: _vm._u([{\n      key: \"item\",\n      fn: function (data) {\n        return [_c(\"div\", {\n          staticClass: \"d-flex input_selection justify-space-between text-left\"\n        }, [_vm._v(\" \" + _vm._s(data.item.text) + \" \"), _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_2__[\"VChip\"], {\n          staticClass: \"input_selection-chip\",\n          attrs: {\n            color: _vm.getColor(data.item.type)\n          }\n        }, [_vm._v(\" \" + _vm._s(_vm.$t(\"header.\" + data.item.type)))])], 1)];\n      }\n    }])\n  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_1__[\"VBtn\"], {\n    staticClass: \"search_button\",\n    attrs: {\n      slot: \"append\",\n      rounded: \"\",\n      large: \"\",\n      depressed: \"\",\n      color: \"#0969FA\"\n    },\n    slot: \"append\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"header.search\")) + \" \")])], 1)], 1), _vm._m(1)]), _c(\"img\", {\n    staticClass: \"d-block d-md-none header-bar_logo-mobile\",\n    attrs: {\n      src: __webpack_require__(/*! @/assets/media/logo.png */ \"./src/assets/media/logo.png\"),\n      alt: \"Rising Up For Small Islands Developing States Logo\"\n    }\n  })]);\n};\nvar staticRenderFns = [function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"d-none d-md-block d-lg-block d-xl-block header-bar\"\n  }, [_c(\"a\", {\n    attrs: {\n      href: \"https://data.undp.org/\",\n      target: \"_blank\"\n    }\n  }, [_c(\"img\", {\n    staticClass: \"header-bar_logo\",\n    attrs: {\n      src: __webpack_require__(/*! @/assets/media/logo.png */ \"./src/assets/media/logo.png\"),\n      alt: \"UNDP Data Futures Platform Logo\"\n    }\n  })])]);\n}, function () {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"a\", {\n    staticClass: \"header_button-down d-none d-md-block\",\n    attrs: {\n      href: \"#content\"\n    }\n  }, [_c(\"img\", {\n    attrs: {\n      alt: \"Arrow Down Icon\",\n      src: __webpack_require__(/*! @/assets/media/arrow-down.png */ \"./src/assets/media/arrow-down.png\")\n    }\n  })]);\n}];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/appHeader.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/footer.vue?vue&type=template&id=6c4d8baa&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer.vue?vue&type=template&id=6c4d8baa&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"footer-root\"\n  }, [_c(\"div\", {\n    staticClass: \"d-sm-block d-none footer-spacer mr-auto ml-4\"\n  }), _c(\"p\", {\n    staticClass: \"footer-root_text mr-auto ml-auto\"\n  }, [_vm._v(_vm._s(_vm.$t(\"poweredBy\")))]), _c(\"language-selector\", {\n    staticClass: \"l-selector ml-4 ml-sm-auto mr-4\"\n  })], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/footer.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/interfaces.vue?vue&type=template&id=a7e8692c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/interfaces.vue?vue&type=template&id=a7e8692c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VCard */ \"./node_modules/vuetify/lib/components/VCard/index.js\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VImg */ \"./node_modules/vuetify/lib/components/VImg/index.js\");\n\n\n\n\n\n\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"full-block\"\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__[\"VContainer\"], [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__[\"VRow\"], {\n    attrs: {\n      dense: \"\"\n    }\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_1__[\"VCol\"], [_c(\"h2\", {\n    staticClass: \"interfaces-header text-center pt-5 pb-5\"\n  }, [_vm._v(_vm._s(_vm.$t(\"interfaces.header\")))])])], 1), _c(\"div\", {\n    staticClass: \"d-flex flex-column flex-sm-row\"\n  }, [_c(\"div\", {\n    staticClass: \"phone-block\"\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCard\"], {\n    staticClass: \"phone-block_card\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"d-sm-none mr-auto ml-auto\",\n    attrs: {\n      width: \"42\",\n      src: __webpack_require__(/*! @/assets/media/profiles.png */ \"./src/assets/media/profiles.png\")\n    }\n  }), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardTitle\"], {\n    staticClass: \"phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2\"\n  }, [_c(\"a\", {\n    staticClass: \"title_link\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/profiles/\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.profiles.header\")) + \" \")])]), _c(\"a\", {\n    staticClass: \"d-none d-sm-block\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/profiles/\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"phone-image\",\n    attrs: {\n      width: \"100%\",\n      src: __webpack_require__(/*! @/assets/media/profiles.jpg */ \"./src/assets/media/profiles.jpg\")\n    }\n  })], 1), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardText\"], {\n    staticClass: \"text-center phone-block_text pr-0 pl-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.profiles.description\")) + \" \")])], 1)], 1), _c(\"div\", {\n    staticClass: \"phone-block\"\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCard\"], {\n    staticClass: \"phone-block_card\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"d-sm-none mr-auto ml-auto\",\n    attrs: {\n      width: \"42\",\n      src: __webpack_require__(/*! @/assets/media/indicators.png */ \"./src/assets/media/indicators.png\")\n    }\n  }), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardTitle\"], {\n    staticClass: \"phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2\"\n  }, [_c(\"a\", {\n    staticClass: \"title_link\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/development-indicators/\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.indicators.header\")) + \" \")])]), _c(\"a\", {\n    staticClass: \"d-none d-sm-block\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/development-indicators/\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"phone-image\",\n    attrs: {\n      width: \"100%\",\n      src: __webpack_require__(/*! @/assets/media/indicators.jpg */ \"./src/assets/media/indicators.jpg\")\n    }\n  })], 1), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardText\"], {\n    staticClass: \"text-center phone-block_text pr-0 pl-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.indicators.description\")) + \" \")])], 1)], 1), _c(\"div\", {\n    staticClass: \"phone-block\"\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCard\"], {\n    staticClass: \"phone-block_card\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"d-sm-none mr-auto ml-auto\",\n    attrs: {\n      width: \"42\",\n      src: __webpack_require__(/*! @/assets/media/MVI.png */ \"./src/assets/media/MVI.png\")\n    }\n  }), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardTitle\"], {\n    staticClass: \"phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2\"\n  }, [_c(\"a\", {\n    staticClass: \"title_link\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/vulnerability/\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.mvi.header\")) + \" \")])]), _c(\"a\", {\n    staticClass: \"d-none d-sm-block\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/vulnerability/\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"phone-image\",\n    attrs: {\n      width: \"100%\",\n      src: __webpack_require__(/*! @/assets/media/mvi.jpg */ \"./src/assets/media/mvi.jpg\")\n    }\n  })], 1), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardText\"], {\n    staticClass: \"text-center phone-block_text pr-0 pl-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.mvi.description\")) + \" \")])], 1)], 1), _c(\"div\", {\n    staticClass: \"phone-block\"\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCard\"], {\n    staticClass: \"phone-block_card\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"d-sm-none mr-auto ml-auto\",\n    attrs: {\n      width: \"42\",\n      src: __webpack_require__(/*! @/assets/media/GIS.png */ \"./src/assets/media/GIS.png\")\n    }\n  }), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardTitle\"], {\n    staticClass: \"phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2\"\n  }, [_c(\"a\", {\n    staticClass: \"title_link\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/geospatial-data/\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.gis.header\")) + \" \")])]), _c(\"a\", {\n    staticClass: \"d-none d-sm-block\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/geospatial-data/\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"phone-image\",\n    attrs: {\n      width: \"100%\",\n      src: __webpack_require__(/*! @/assets/media/gis.jpg */ \"./src/assets/media/gis.jpg\")\n    }\n  })], 1), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardText\"], {\n    staticClass: \"text-center phone-block_text pr-0 pl-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.gis.description\")) + \" \")])], 1)], 1), _c(\"div\", {\n    staticClass: \"phone-block\"\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCard\"], {\n    staticClass: \"phone-block_card\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"d-sm-none mr-auto ml-auto\",\n    attrs: {\n      width: \"42\",\n      src: __webpack_require__(/*! @/assets/media/portfolio.png */ \"./src/assets/media/portfolio.png\")\n    }\n  }), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardTitle\"], {\n    staticClass: \"phone-block_title justify-center pr-0 pl-0 pt-0 pb-0 pb-sm-2\"\n  }, [_c(\"a\", {\n    staticClass: \"title_link\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/portfolio/\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.portfolio.header\")) + \" \")])]), _c(\"a\", {\n    staticClass: \"d-none d-sm-block\",\n    attrs: {\n      href: \"https://data.undp.org/sids/app/portfolio/\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_2__[\"VImg\"], {\n    staticClass: \"phone-image\",\n    attrs: {\n      width: \"100%\",\n      src: __webpack_require__(/*! @/assets/media/portfolio.jpg */ \"./src/assets/media/portfolio.jpg\")\n    }\n  })], 1), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_0__[\"VCardText\"], {\n    staticClass: \"text-center phone-block_text pr-0 pl-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"interfaces.portfolio.description\")) + \" \")])], 1)], 1)])], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/interfaces.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=template&id=3fea2876&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resources.vue?vue&type=template&id=3fea2876& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ \"./node_modules/vuetify/lib/components/VBtn/index.js\");\n/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/components/VCard */ \"./node_modules/vuetify/lib/components/VCard/index.js\");\n/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib/components/VChip */ \"./node_modules/vuetify/lib/components/VChip/index.js\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VImg */ \"./node_modules/vuetify/lib/components/VImg/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"full-block resources-bg\"\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__[\"VContainer\"], {\n    staticClass: \"resources-container\"\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__[\"VRow\"], {\n    staticClass: \"mt-auto\"\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__[\"VCol\"], [_c(\"h2\", {\n    staticClass: \"resources-header text-center pt-5 pb-8\"\n  }, [_vm._v(_vm._s(_vm.$t(\"resources.header\")))])])], 1), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__[\"VRow\"], {\n    staticClass: \"mb-auto\"\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__[\"VCol\"], {\n    attrs: {\n      cols: \"12\",\n      sm: \"4\"\n    }\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCard\"], {\n    staticClass: \"resources-block d-flex flex-column\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_4__[\"VImg\"], {\n    attrs: {\n      width: \"100%\",\n      src: __webpack_require__(/*! @/assets/media/handbook.jpg */ \"./src/assets/media/handbook.jpg\")\n    }\n  }), _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_2__[\"VChip\"], {\n    staticClass: \"ml-10 mr-auto resources-block_chip\",\n    attrs: {\n      color: \"#fff\"\n    }\n  }, [_vm._v(_vm._s(_vm.$t(\"resources.handbook.badge\")))]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardTitle\"], {\n    staticClass: \"resources-block_title pl-10 pr-16 pt-0 pb-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.handbook.header\")) + \" \")]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardText\"], {\n    staticClass: \"pr-10 pl-10 resources-block_text\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.handbook.description\")) + \" \")]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardActions\"], {\n    staticClass: \"pl-10 pb-6 mb-0\"\n  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__[\"VBtn\"], {\n    staticClass: \"resources-block_button pr-8 pl-8\",\n    attrs: {\n      rounded: \"\",\n      color: \"#0969FA\",\n      depressed: \"\",\n      large: \"\",\n      target: \"_blank\",\n      href: \"https://github.com/UNDP-Data/SIDS-data-platform-API/raw/staging/resources/SDP%20Indicator%20Catalogue.pdf\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.open\")) + \" \")])], 1)], 1)], 1), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__[\"VCol\"], {\n    attrs: {\n      cols: \"12\",\n      sm: \"4\"\n    }\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCard\"], {\n    staticClass: \"resources-block d-flex flex-column\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_4__[\"VImg\"], {\n    attrs: {\n      width: \"100%\",\n      src: __webpack_require__(/*! @/assets/media/catalog.jpg */ \"./src/assets/media/catalog.jpg\")\n    }\n  }), _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_2__[\"VChip\"], {\n    staticClass: \"ml-10 mr-auto resources-block_chip\",\n    attrs: {\n      color: \"#fff\"\n    }\n  }, [_vm._v(_vm._s(_vm.$t(\"resources.catalog.badge\")))]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardTitle\"], {\n    staticClass: \"resources-block_title pl-10 pr-16 pt-0 pb-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.catalog.header\")) + \" \")]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardText\"], {\n    staticClass: \"pr-10 pl-10 resources-block_text\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.catalog.description\")) + \" \")]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardActions\"], {\n    staticClass: \"pl-10 pb-6 mb-0\"\n  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__[\"VBtn\"], {\n    staticClass: \"resources-block_button pr-8 pl-8\",\n    attrs: {\n      rounded: \"\",\n      color: \"#0969FA\",\n      depressed: \"\",\n      large: \"\",\n      target: \"_blank\",\n      href: \"https://github.com/UNDP-Data/SIDS-data-platform-API/raw/staging/resources/SDP%20GIS%20Data%20Catalogue.pdf\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.open\")) + \" \")])], 1)], 1)], 1), _c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_3__[\"VCol\"], {\n    attrs: {\n      cols: \"12\",\n      sm: \"4\"\n    }\n  }, [_c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCard\"], {\n    staticClass: \"resources-block d-flex flex-column\",\n    attrs: {\n      flat: \"\"\n    }\n  }, [_c(vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_4__[\"VImg\"], {\n    attrs: {\n      width: \"100%\",\n      src: __webpack_require__(/*! @/assets/media/manual.jpg */ \"./src/assets/media/manual.jpg\")\n    }\n  }), _c(vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_2__[\"VChip\"], {\n    staticClass: \"ml-10 mr-auto resources-block_chip\",\n    attrs: {\n      color: \"#fff\"\n    }\n  }, [_vm._v(_vm._s(_vm.$t(\"resources.manual.badge\")))]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardTitle\"], {\n    staticClass: \"resources-block_title pl-10 pr-16 pt-0 pb-0\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.manual.header\")) + \" \")]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardText\"], {\n    staticClass: \"pr-10 pl-10 resources-block_text\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.manual.description\")) + \" \")]), _c(vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_1__[\"VCardActions\"], {\n    staticClass: \"pl-10 pb-6 mb-0\"\n  }, [_c(vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_0__[\"VBtn\"], {\n    staticClass: \"resources-block_button pr-8 pl-8\",\n    attrs: {\n      rounded: \"\",\n      color: \"#0969FA\",\n      depressed: \"\",\n      large: \"\",\n      target: \"_blank\",\n      href: \"https://github.com/UNDP-Data/SIDS-data-platform-API/raw/staging/resources/SDP%20Written%20Manual.pdf\"\n    }\n  }, [_vm._v(\" \" + _vm._s(_vm.$t(\"resources.open\")) + \" \")])], 1)], 1)], 1)], 1)], 1)], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/resources.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/video.vue?vue&type=template&id=7271a9ca&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4f3c5bc0-vue-loader-template"}!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/video.vue?vue&type=template&id=7271a9ca& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n\n\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c(\"div\", {\n    staticClass: \"full-block full-video\"\n  }, [_c(vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_0__[\"VContainer\"], [_c(\"iframe\", {\n    staticClass: \"video-frame\",\n    attrs: {\n      src: \"https://player.vimeo.com/video/780875955?h=b3383f98d1\",\n      frameborder: \"0\",\n      allow: \"autoplay; fullscreen; picture-in-picture\",\n      allowfullscreen: \"\"\n    }\n  })])], 1);\n};\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/video.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%224f3c5bc0-vue-loader-template%22%7D!./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!./assets/font.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/font.css\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!./assets/styles.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/styles.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);\n// Module\nexports.push([module.i, \"\\nbody, .v-application {\\n  font-family: \\\"Proxima Nova\\\", sans-serif !important;\\n  background-color: #f4f4f4 !important;\\n}\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.about-block_header{\\n   font-size: 32px;\\n   font-weight: 700;\\n   color: #0969FA;\\n}\\n.text-field {\\n   width: 100%\\n}\\n.about-block {\\n   min-height: 100vh;\\n}\\n.about-block .v-expansion-panel-header {\\n   font-weight: 600;\\n}\\n.about-block .v-expansion-panel::after {\\n  border-top: 1px solid rgba(0, 0, 0, 0.12) !important;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/About/About.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.resource-link[data-v-97ebc788] {\\n  text-decoration: none;\\n  color: inherit;\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/About/children/Resource.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.bg-white[data-v-78ea3da8] {\\n  background: #fff !important;\\n}\\n.subscribe-block_header[data-v-78ea3da8]{\\n  font-size: 32px;\\n  font-weight: 700;\\n  color: #0969FA !important;\\n}\\n@media (max-width:959px) {\\n.subscribe-block_header[data-v-78ea3da8] {\\n    font-size: 24px;\\n}\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/About/children/subscribe.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.top-content_input {\\n  max-width: 650px;\\n  margin: auto;\\n  position: relative;\\n}\\n.top-content_input .v-input__slot {\\n  transition: background 200ms ;\\n  background: rgba(255,255,255,0.35) !important;\\n}\\n.top-content_input .v-select--is-menu-active .v-input__slot {\\n  background: rgba(255,255,255, 1) !important;\\n}\\n.top-content_input .v-input__append-inner {\\n  margin: auto;\\n  margin-right: -17px;\\n}\\n.search_button {\\n  color: #fff !important;\\n  padding: 0 40px !important;\\n}\\n.input_selection {\\n  width: 100%;\\n}\\n.input_selection-chip {\\n  flex: 0 0 auto;\\n  margin-left: auto;\\n  color: #fff !important;\\n}\\n.header {\\n  min-height: 100vh;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.header-bar {\\n  width: 100%;\\n  padding: 30px 30px;\\n  position: absolute;\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n.header-bar_logo {\\n  width: 190px;\\n}\\n.header_video {\\n  position: absolute;\\n  bottom: 0;\\n  right: 0;\\n  height: 100%;\\n  width: 100%;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n}\\n.header-text {\\n  position: relative;\\n  z-index: 2;\\n  text-align: center;\\n  color: white;\\n  filter: drop-shadow(1px 1px 0px black);\\n  margin-bottom: auto;\\n  margin-top: auto;\\n}\\n.header-text_header {\\n  font-weight: 650;\\n  margin-top: -6px;\\n}\\n.header-text_header-big {\\n  font-size: 58px;\\n  animation: fadein 2s;\\n}\\n.header-text_header-small {\\n  font-size: 36px;\\n  animation: fadein 3s;\\n}\\n.header-text_divider {\\n  width:70%;\\n  margin: auto;\\n  border-style:solid;\\n  border-width:1px;\\n  opacity:1;\\n  margin-bottom:20px;\\n}\\n.header-text_description {\\n  font-size: 20px;\\n  font-weight: 400;\\n  animation: fadein 3s;\\n  max-width: 1000px;\\n  margin: 0 auto;\\n}\\n.header_button-down {\\n  margin: auto;\\n  position: relative;\\n  z-index: 3;\\n  margin-top: 0px;\\n  margin-bottom: 50px;\\n}\\n@media all and (max-width:600px) {\\n.header-text_header-big {\\n    font-size: 36px;\\n    margin-bottom: .6em;\\n}\\n.header-text_header-small {\\n    font-size: 24px;\\n    margin-bottom: .6em;\\n}\\n}\\n@media all and (max-width:959px) {\\n.header {\\n    min-height: calc(100vh - 100px);\\n}\\n}\\n.header-bar_logo-mobile {\\n  position: relative;\\n  z-index: 5;\\n  width: 200px;\\n  max-width: 70%;\\n  margin: 0.5em auto auto;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/appHeader.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.footer-root[data-v-6c4d8baa] {\\n  width: 100%;\\n  background: #e0e1e9;\\n  height: 100px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  box-shadow: inset 0px 90px 28px -50px #5f5c8721;\\n}\\n.footer-root_text[data-v-6c4d8baa] {\\n  margin: 0;\\n  color: #868686;\\n}\\n.footer-spacer[data-v-6c4d8baa] {\\n  min-width: 260px;\\n}\\n@media (max-width:639px) {\\n.footer-root_text[data-v-6c4d8baa] {\\n    padding: 24px;\\n    text-align: center;\\n}\\n.footer-root[data-v-6c4d8baa] {\\n    display: block;\\n}\\n.l-selector[data-v-6c4d8baa] {\\n    float: right;\\n    max-width: 260px;\\n}\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/footer.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.phone-image {\\n  border-radius: 24px;\\n  overflow: hidden;\\n  border: 3px solid #7f7f7f;\\n  transition:all 150ms ease-in;\\n  cursor: pointer;\\n}\\n.phone-image:hover {\\n  transform: scale(1.025);\\n}\\n.phone-block {\\n  width: 20%;\\n  padding: 10px;\\n  box-sizing: border-box;\\n}\\n.phone-block_card {\\n  background: transparent !important;\\n}\\n.phone-block_title {\\n  word-break: keep-all;\\n  font-size: 18px;\\n  font-weight: 700;\\n  line-height: 28px;\\n  letter-spacing: 0em;\\n  text-align: center;\\n  min-height: 64px;\\n  vertical-align: center\\n}\\n.interfaces-header{\\n  font-size: 32px;\\n  font-weight: 700;\\n  color: #0969FA;\\n}\\n.title_link {\\n  text-decoration: none;\\n  color: inherit !important;\\n}\\n@media (max-width:639px) {\\n.interfaces-header {\\n      font-size: 20px;\\n      line-height: 24px;\\n}\\n.top-content-chips {\\n      font-size: 16px;\\n      line-height: 20px;\\n      margin-bottom: 20px;\\n}\\n.phone-image {\\n      max-height: 65vh;\\n      margin: auto;\\n}\\n.phone-block {\\n      width: 100%;\\n      padding: 10px;\\n      box-sizing: border-box;\\n}\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/interfaces.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/media/resources-bg.jpg */ \"./src/assets/media/resources-bg.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"\\n.resources-block_title {\\n  font-size: 20px;\\n  font-weight: 600;\\n  line-height: 26px;\\n  min-height: 105px;\\n  margin-top: -20px;\\n  word-break: keep-all;\\n}\\n.resources-text {\\n  color: #fff;\\n  font-size: 20px;\\n  font-weight: 700;\\n  line-height: 26px;\\n  text-align: center;\\n}\\n.resources-header{\\n  font-size: 32px;\\n  font-weight: 700;\\n  color: #fff;\\n}\\n.resources-block_chip {\\n    border: 2px solid #efefef !important;\\n    position: relative;\\n    transform: translate(0, -50%);\\n}\\n.resources-block_button {\\n  color: #fff !important;\\n}\\n.resources-block {\\n  height: 100%\\n}\\n.resources-bg {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n}\\n.resources-container {\\n  min-height: 100vh;\\n}\\n@media (min-height:800px) {\\n.resources-block {\\n      margin-top: 5vh\\n}\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/resources.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.video-frame {\\n  display: block;\\n  min-width: 100%;\\n  min-height: calc(100vh - 40px);\\n}\\n@media (max-width:960px) {\\n.full-video {\\n    width: 100%;\\n    min-height: auto !important;\\n}\\n.video-frame {\\n    width: 100%;\\n    min-height: 400px;\\n}\\n.player {\\n    width: 100%;\\n}\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/video.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/font.css":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./src/assets/font.css ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/Proxima-Nova/Proxima Nova Bold.otf */ \"./src/assets/Proxima-Nova/Proxima Nova Bold.otf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/Proxima-Nova/proxima_nova_bold-webfont.woff */ \"./src/assets/Proxima-Nova/proxima_nova_bold-webfont.woff\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! @/assets/Proxima-Nova/proxima_nova_bold-webfont.woff2 */ \"./src/assets/Proxima-Nova/proxima_nova_bold-webfont.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! @/assets/Proxima-Nova/Proxima Nova Black.otf */ \"./src/assets/Proxima-Nova/Proxima Nova Black.otf\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! @/assets/Proxima-Nova/proxima_nova_black-webfont.woff */ \"./src/assets/Proxima-Nova/proxima_nova_black-webfont.woff\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! @/assets/Proxima-Nova/proxima_nova_black-webfont.woff2 */ \"./src/assets/Proxima-Nova/proxima_nova_black-webfont.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! @/assets/Proxima-Nova/Proxima Nova Xbold.otf */ \"./src/assets/Proxima-Nova/Proxima Nova Xbold.otf\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! @/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff */ \"./src/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! @/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff2 */ \"./src/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! @/assets/Proxima-Nova/Proxima Nova Reg.otf */ \"./src/assets/Proxima-Nova/Proxima Nova Reg.otf\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! @/assets/Proxima-Nova/proxima_nova_reg-webfont.woff */ \"./src/assets/Proxima-Nova/proxima_nova_reg-webfont.woff\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! @/assets/Proxima-Nova/proxima_nova_reg-webfont.woff2 */ \"./src/assets/Proxima-Nova/proxima_nova_reg-webfont.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! @/assets/Proxima-Nova/ProximaNova-Semibold.otf */ \"./src/assets/Proxima-Nova/ProximaNova-Semibold.otf\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! @/assets/Proxima-Nova/proximanova-semibold-webfont.woff */ \"./src/assets/Proxima-Nova/proximanova-semibold-webfont.woff\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! @/assets/Proxima-Nova/proximanova-semibold-webfont.woff2 */ \"./src/assets/Proxima-Nova/proximanova-semibold-webfont.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! @/assets/Proxima-Nova/ProximaNova-RegularItalic.otf */ \"./src/assets/Proxima-Nova/ProximaNova-RegularItalic.otf\");\nvar ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! @/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff */ \"./src/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff\");\nvar ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(/*! @/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff2 */ \"./src/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff2\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: 'Proxima Nova';\\n  src: local(\\\"Proxima Nova Bold\\\"),\\n       local(\\\"ProximaNova-Bold\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \")  format(\\\"otf\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \")  format(\\\"woff\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \")  format(\\\"woff2\\\");\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: 'Proxima Nova';\\n  src: local(\\\"Proxima Nova Black\\\"),\\n       local(\\\"ProximaNova-Black\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \")  format(\\\"otf\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \")  format(\\\"woff\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \")  format(\\\"woff2\\\");\\n  font-weight: 900;\\n}\\n@font-face {\\n  font-family: 'Proxima Nova';\\n  src: local(\\\"Proxima Nova Xbold\\\"),\\n       local(\\\"ProximaNova-Xbold\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \")  format(\\\"otf\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \")  format(\\\"woff\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \")  format(\\\"woff2\\\");\\n  font-weight: 800;\\n}\\n@font-face {\\n  font-family: 'Proxima Nova';\\n  src: local(\\\"Proxima Nova Reg\\\"),\\n       local(\\\"ProximaNova-Reg\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \")  format(\\\"otf\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \")  format(\\\"woff\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \")  format(\\\"woff2\\\");\\n  font-weight: 400;\\n}\\n@font-face {\\n  font-family: 'Proxima Nova';\\n  src: local(\\\"Proxima Nova Semibold\\\"),\\n       local(\\\"ProximaNova-Semibold\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \")  format(\\\"otf\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \")  format(\\\"woff\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \")  format(\\\"woff2\\\");\\n  font-weight: 600;\\n}\\n@font-face {\\n  font-family: 'Proxima Nova';\\n  src: local(\\\"Proxima Nova RegularItalic\\\"),\\n       local(\\\"ProximaNova-RegularItalic\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \")  format(\\\"otf\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \")  format(\\\"woff\\\"),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \")  format(\\\"woff2\\\");\\n  font-weight: 400;\\n  font-style: italic;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/font.css?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/styles.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./src/assets/styles.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".full-block {\\n  min-width: 100%;\\n  min-height: 100vh;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/styles.css?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0ecd4f5b\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=4600e22a&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3a472269\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/About/About.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"1ed3d7ec\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/About/children/Resource.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"662b6800\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/About/children/subscribe.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"71d06472\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/appHeader.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"14fd2330\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/footer.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"56d3992e\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/interfaces.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=style&index=0&id=3fea2876&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"b7e04d9c\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/resources.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=style&index=0&id=7271a9ca&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"05b55507\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/video.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css& */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css&":
/*!*******************************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--7-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&media=screen&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../node_modules/vuetify-loader/lib/loader.js??ref--4!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/Proxima Nova Black.otf":
/*!********************************************************!*\
  !*** ./src/assets/Proxima-Nova/Proxima Nova Black.otf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Proxima Nova Black.7ddd73ab.otf\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/Proxima_Nova_Black.otf?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/Proxima Nova Bold.otf":
/*!*******************************************************!*\
  !*** ./src/assets/Proxima-Nova/Proxima Nova Bold.otf ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Proxima Nova Bold.89881256.otf\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/Proxima_Nova_Bold.otf?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/Proxima Nova Reg.otf":
/*!******************************************************!*\
  !*** ./src/assets/Proxima-Nova/Proxima Nova Reg.otf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Proxima Nova Reg.640b1e50.otf\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/Proxima_Nova_Reg.otf?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/Proxima Nova Xbold.otf":
/*!********************************************************!*\
  !*** ./src/assets/Proxima-Nova/Proxima Nova Xbold.otf ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Proxima Nova Xbold.9429a399.otf\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/Proxima_Nova_Xbold.otf?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/ProximaNova-RegularItalic.otf":
/*!***************************************************************!*\
  !*** ./src/assets/Proxima-Nova/ProximaNova-RegularItalic.otf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/ProximaNova-RegularItalic.c8708c7a.otf\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/ProximaNova-RegularItalic.otf?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/ProximaNova-Semibold.otf":
/*!**********************************************************!*\
  !*** ./src/assets/Proxima-Nova/ProximaNova-Semibold.otf ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/ProximaNova-Semibold.f14eee64.otf\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/ProximaNova-Semibold.otf?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proxima_nova_black-webfont.woff":
/*!*****************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proxima_nova_black-webfont.woff ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proxima_nova_black-webfont.09a18aca.woff\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proxima_nova_black-webfont.woff?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proxima_nova_black-webfont.woff2":
/*!******************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proxima_nova_black-webfont.woff2 ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proxima_nova_black-webfont.d44aa221.woff2\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proxima_nova_black-webfont.woff2?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proxima_nova_bold-webfont.woff":
/*!****************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proxima_nova_bold-webfont.woff ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proxima_nova_bold-webfont.1ff68157.woff\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proxima_nova_bold-webfont.woff?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proxima_nova_bold-webfont.woff2":
/*!*****************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proxima_nova_bold-webfont.woff2 ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proxima_nova_bold-webfont.b602d8db.woff2\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proxima_nova_bold-webfont.woff2?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proxima_nova_reg-webfont.woff":
/*!***************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proxima_nova_reg-webfont.woff ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proxima_nova_reg-webfont.fd24b208.woff\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proxima_nova_reg-webfont.woff?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proxima_nova_reg-webfont.woff2":
/*!****************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proxima_nova_reg-webfont.woff2 ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proxima_nova_reg-webfont.f4dae71b.woff2\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proxima_nova_reg-webfont.woff2?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff":
/*!*****************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proxima_nova_xbold-webfont.24c65491.woff\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff2":
/*!******************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff2 ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proxima_nova_xbold-webfont.be152aac.woff2\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proxima_nova_xbold-webfont.woff2?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff":
/*!************************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proximanova-regularitalic-webfont.1e1f10e6.woff\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff2":
/*!*************************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff2 ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proximanova-regularitalic-webfont.74b7db68.woff2\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proximanova-regularitalic-webfont.woff2?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proximanova-semibold-webfont.woff":
/*!*******************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proximanova-semibold-webfont.woff ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proximanova-semibold-webfont.9e38f5c8.woff\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proximanova-semibold-webfont.woff?");

/***/ }),

/***/ "./src/assets/Proxima-Nova/proximanova-semibold-webfont.woff2":
/*!********************************************************************!*\
  !*** ./src/assets/Proxima-Nova/proximanova-semibold-webfont.woff2 ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/proximanova-semibold-webfont.b8b95a2f.woff2\";\n\n//# sourceURL=webpack:///./src/assets/Proxima-Nova/proximanova-semibold-webfont.woff2?");

/***/ }),

/***/ "./src/assets/media/GIS.png":
/*!**********************************!*\
  !*** ./src/assets/media/GIS.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/GIS.5cd7f3e0.png\";\n\n//# sourceURL=webpack:///./src/assets/media/GIS.png?");

/***/ }),

/***/ "./src/assets/media/MVI.png":
/*!**********************************!*\
  !*** ./src/assets/media/MVI.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/MVI.2cf95c71.png\";\n\n//# sourceURL=webpack:///./src/assets/media/MVI.png?");

/***/ }),

/***/ "./src/assets/media/arrow-down.png":
/*!*****************************************!*\
  !*** ./src/assets/media/arrow-down.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAMAAABEQrEuAAABelBMVEVMaXH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9xrg87AAAAfXRSTlMAe/PvIgQj/gL8CkSdBvZ8PNs68gUO1k7mtfd+k7zufbr5zOoHCNBG4KYBtP164Vji1w9DZQOEvsOjxDvNOVfSgD1Cf9Ncl4bPgyAtLFAM5OMf0fUxTy6zryHBCaWqoquk+8J5sMCn3+jwXxSYXrv4mR0cZIWet3ih585Wv+PF74oAAAI/SURBVHjaldbnV9pQGAbwJyFwE1BkibiQPSzaKiqoUPfWuq2r7tW9d9//vTkH8CQkIeF3Tj4+uR/ufQc07L6f2VjIT/5QLHs9aYcJ0fXLT8Qyx52vOo8zjMh/5hJhzL4QJFbkfCeoOPFxRUbBBcODPFP0eskBNceSjaY80JPoYe7pdmi1T7tZTwIa2zGKOKDP8YFi26izvin1iTAi9kmb61BZC7s70EiHO7wGhc9bURcac0W3vuCRMyVtwMyGlHKiZpHaYK6NFlE1y3pHYW60l81Wb3qoS4AVQlewcvsj1A1ruukrZKLXNgxrhm1eEUCaxmDVN0oDGGcCrBLYGRDgJ2DdBB+AhzhYN0CTaCMfrPMRh/OcEwrOF1AR30LJmTtHKgOlH4NHUGh9+VH9i0wK8QKU/kqDgjJALVD5F4d0CJWnikjrE/ouQuVGAp3CKCIHWkSonRL4Q2gizwSjAG54/C5AL2IQQCGEP15oPJcjrZ3U0g8NbwnZy4RuJKIbSFxmq3eujegGUKYBeORPR8d1v8G7avLtFvlAs/Ux3mQNjlG6UuftTdR5s71kpLl+ddQ1VJ1WeWs9UexleVR9sth336HGuSPtw8y+tKOob0c8mjedH3EHFPZsuyYzate2B5WDkMkcDB2gzuoyRQToEyK0vAqNpDzP53Tn+Zw8z5PQMzNP4RXNzrASpvkZGLC/DxK74srJ2rFl7opR8I294e5z4SfK3d/Ku8/tfY7If+ESYSLg4e5KDzzxD6U7zhNAvf+pGFzqRWmSfQAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/assets/media/arrow-down.png?");

/***/ }),

/***/ "./src/assets/media/catalog.jpg":
/*!**************************************!*\
  !*** ./src/assets/media/catalog.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/catalog.5acd8b73.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/catalog.jpg?");

/***/ }),

/***/ "./src/assets/media/gis.jpg":
/*!**********************************!*\
  !*** ./src/assets/media/gis.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/gis.3e4f500f.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/gis.jpg?");

/***/ }),

/***/ "./src/assets/media/handbook.jpg":
/*!***************************************!*\
  !*** ./src/assets/media/handbook.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/handbook.b93cb334.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/handbook.jpg?");

/***/ }),

/***/ "./src/assets/media/header-bg.jpg":
/*!****************************************!*\
  !*** ./src/assets/media/header-bg.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/header-bg.3fdef44e.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/header-bg.jpg?");

/***/ }),

/***/ "./src/assets/media/indicators.jpg":
/*!*****************************************!*\
  !*** ./src/assets/media/indicators.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/indicators.42be1d2b.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/indicators.jpg?");

/***/ }),

/***/ "./src/assets/media/indicators.png":
/*!*****************************************!*\
  !*** ./src/assets/media/indicators.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/indicators.a26b17a9.png\";\n\n//# sourceURL=webpack:///./src/assets/media/indicators.png?");

/***/ }),

/***/ "./src/assets/media/logo.png":
/*!***********************************!*\
  !*** ./src/assets/media/logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.241be4d0.png\";\n\n//# sourceURL=webpack:///./src/assets/media/logo.png?");

/***/ }),

/***/ "./src/assets/media/manual.jpg":
/*!*************************************!*\
  !*** ./src/assets/media/manual.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/manual.ebefd6da.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/manual.jpg?");

/***/ }),

/***/ "./src/assets/media/mvi.jpg":
/*!**********************************!*\
  !*** ./src/assets/media/mvi.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/mvi.297ab5a1.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/mvi.jpg?");

/***/ }),

/***/ "./src/assets/media/portfolio.jpg":
/*!****************************************!*\
  !*** ./src/assets/media/portfolio.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/portfolio.235d05ce.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/portfolio.jpg?");

/***/ }),

/***/ "./src/assets/media/portfolio.png":
/*!****************************************!*\
  !*** ./src/assets/media/portfolio.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/portfolio.85642f6b.png\";\n\n//# sourceURL=webpack:///./src/assets/media/portfolio.png?");

/***/ }),

/***/ "./src/assets/media/profiles.jpg":
/*!***************************************!*\
  !*** ./src/assets/media/profiles.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/profiles.f83f85f8.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/profiles.jpg?");

/***/ }),

/***/ "./src/assets/media/profiles.png":
/*!***************************************!*\
  !*** ./src/assets/media/profiles.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/profiles.3308c5dd.png\";\n\n//# sourceURL=webpack:///./src/assets/media/profiles.png?");

/***/ }),

/***/ "./src/assets/media/resources-bg.jpg":
/*!*******************************************!*\
  !*** ./src/assets/media/resources-bg.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/resources-bg.685a2250.jpg\";\n\n//# sourceURL=webpack:///./src/assets/media/resources-bg.jpg?");

/***/ }),

/***/ "./src/assets/media/videos/header-xl.mp4":
/*!***********************************************!*\
  !*** ./src/assets/media/videos/header-xl.mp4 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/header-xl.5f911120.mp4\";\n\n//# sourceURL=webpack:///./src/assets/media/videos/header-xl.mp4?");

/***/ }),

/***/ "./src/assets/media/videos/header-xl.webm":
/*!************************************************!*\
  !*** ./src/assets/media/videos/header-xl.webm ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"media/header-xl.2a517de8.webm\";\n\n//# sourceURL=webpack:///./src/assets/media/videos/header-xl.webm?");

/***/ }),

/***/ "./src/assets/sidsList.js":
/*!********************************!*\
  !*** ./src/assets/sidsList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  id: 'anguilla',\n  name: 'Anguilla',\n  region: 'caribbean',\n  iso: 'AIA',\n  unMeber: false\n}, {\n  id: 'antiguaAndBarbuda',\n  name: 'Antigua and Barbuda',\n  region: 'caribbean',\n  iso: 'ATG',\n  unMeber: true\n}, {\n  id: 'aruba',\n  name: 'Aruba',\n  region: 'caribbean',\n  iso: 'ABW',\n  unMeber: false\n}, {\n  id: 'bahamas',\n  name: 'Bahamas',\n  region: 'caribbean',\n  iso: 'BHS',\n  unMeber: true\n}, {\n  id: 'bahrain',\n  name: 'Bahrain',\n  region: 'ais',\n  iso: 'BHR',\n  unMeber: true\n}, {\n  id: 'barbados',\n  name: 'Barbados',\n  region: 'caribbean',\n  iso: 'BRB',\n  unMeber: true\n}, {\n  id: 'belize',\n  name: 'Belize',\n  region: 'caribbean',\n  iso: 'BLZ',\n  unMeber: true\n}, {\n  id: 'bermuda',\n  name: 'Bermuda',\n  region: 'caribbean',\n  iso: 'BMU',\n  unMeber: false\n}, {\n  id: 'britishVirginIslands',\n  name: 'Virgin Islands, British',\n  region: 'caribbean',\n  iso: 'VGB',\n  unMeber: false\n}, {\n  id: 'caboVerde',\n  name: 'Cabo Verde',\n  region: 'ais',\n  iso: 'CPV',\n  unMeber: true\n}, {\n  id: 'caymanIslands',\n  name: 'Cayman Islands',\n  region: 'caribbean',\n  iso: 'CYM',\n  unMeber: false\n}, {\n  id: 'comoros',\n  name: 'Comoros',\n  region: 'ais',\n  iso: 'COM',\n  unMeber: true\n}, {\n  id: 'cookIslands',\n  name: 'Cook Islands',\n  region: 'pacific',\n  iso: 'COK',\n  unMeber: false\n}, {\n  id: 'cuba',\n  name: 'Cuba',\n  region: 'caribbean',\n  iso: 'CUB',\n  unMeber: true\n}, {\n  id: 'curacao',\n  name: 'Curaçao',\n  region: 'caribbean',\n  iso: 'CUW',\n  unMeber: false\n}, {\n  id: 'dominica',\n  name: 'Dominica',\n  region: 'caribbean',\n  iso: 'DMA',\n  unMeber: true\n}, {\n  id: 'dominicanRepublic',\n  name: 'Dominican Republic',\n  region: 'caribbean',\n  iso: 'DOM',\n  unMeber: true\n}, {\n  id: 'fiji',\n  name: 'Fiji',\n  region: 'pacific',\n  iso: 'FJI',\n  unMeber: true\n}, {\n  id: 'grenada',\n  name: 'Grenada',\n  region: 'caribbean',\n  iso: 'GRD',\n  unMeber: true\n}, {\n  id: 'guineaBissau',\n  name: 'Guinea-Bissau',\n  region: 'ais',\n  iso: 'GNB',\n  unMeber: true\n}, {\n  id: 'guyana',\n  name: 'Guyana',\n  region: 'caribbean',\n  iso: 'GUY',\n  unMeber: true\n}, {\n  id: 'haiti',\n  name: 'Haiti',\n  region: 'caribbean',\n  iso: 'HTI',\n  unMeber: true\n}, {\n  id: 'jamaica',\n  name: 'Jamaica',\n  region: 'caribbean',\n  iso: 'JAM',\n  unMeber: true\n}, {\n  id: 'kiribati',\n  name: 'Kiribati',\n  region: 'pacific',\n  iso: 'KIR',\n  unMeber: true\n}, {\n  id: 'kittsAndNevis',\n  name: 'Saint Kitts and Nevis',\n  region: 'caribbean',\n  iso: 'KNA',\n  unMeber: true\n}, {\n  id: 'maldives',\n  name: 'Maldives',\n  region: 'ais',\n  iso: 'MDV',\n  unMeber: true\n}, {\n  id: 'marshallIslands',\n  name: 'Marshall Islands',\n  region: 'pacific',\n  iso: 'MHL',\n  unMeber: true\n}, {\n  id: 'mauritius',\n  name: 'Mauritius',\n  region: 'ais',\n  iso: 'MUS',\n  unMeber: true\n}, {\n  id: 'micronesia',\n  name: 'Micronesia, Federated States of',\n  region: 'pacific',\n  iso: 'FSM',\n  unMeber: true\n}, {\n  id: 'montserrat',\n  name: 'Montserrat',\n  region: 'caribbean',\n  iso: 'MSR',\n  unMeber: false\n}, {\n  id: 'nauru',\n  name: 'Nauru',\n  region: 'pacific',\n  iso: 'NRU',\n  unMeber: true\n}, {\n  id: 'niue',\n  name: 'Niue',\n  region: 'pacific',\n  iso: 'NIU',\n  unMeber: false\n}, {\n  id: 'palau',\n  name: 'Palau',\n  region: 'pacific',\n  iso: 'PLW',\n  unMeber: true\n}, {\n  id: 'papuaNewGuinea',\n  name: 'Papua New Guinea',\n  region: 'pacific',\n  iso: 'PNG',\n  unMeber: true\n}, {\n  id: 'saintLucia',\n  name: 'Saint Lucia',\n  region: 'caribbean',\n  iso: 'LCA',\n  unMeber: true\n}, {\n  id: 'samoa',\n  name: 'Samoa',\n  region: 'pacific',\n  iso: 'WSM',\n  unMeber: true\n}, {\n  id: 'saoTomeAndPrincipe',\n  name: 'Sao Tome and Principe',\n  region: 'ais',\n  iso: 'STP',\n  unMeber: true\n}, {\n  id: 'seychelles',\n  name: 'Seychelles',\n  region: 'ais',\n  iso: 'SYC',\n  unMeber: true\n}, {\n  id: 'singapore',\n  name: 'Singapore',\n  region: 'ais',\n  iso: 'SGP',\n  unMeber: true\n}, {\n  id: 'sintMaarten',\n  name: 'Sint Maarten',\n  region: 'caribbean',\n  iso: 'SXM',\n  unMeber: false\n}, {\n  id: 'solomonIslands',\n  name: 'Solomon Islands',\n  region: 'pacific',\n  iso: 'SLB',\n  unMeber: true\n}, {\n  id: 'stVincent',\n  name: 'Saint Vincent and the Grenadines',\n  region: 'caribbean',\n  iso: 'VCT',\n  unMeber: true\n}, {\n  id: 'suriname',\n  name: 'Suriname',\n  region: 'caribbean',\n  iso: 'SUR',\n  unMeber: true\n}, {\n  id: 'timorLeste',\n  name: 'Timor-Leste',\n  region: 'pacific',\n  iso: 'TLS',\n  unMeber: true\n}, {\n  id: 'tokelau',\n  name: 'Tokelau',\n  region: 'pacific',\n  iso: 'TKL',\n  unMeber: false\n}, {\n  id: 'tonga',\n  name: 'Tonga',\n  region: 'pacific',\n  iso: 'TON',\n  unMeber: true\n}, {\n  id: 'trinidadAndTobago',\n  name: 'Trinidad and Tobago',\n  region: 'caribbean',\n  iso: 'TTO',\n  unMeber: true\n}, {\n  id: 'turksAndCaicos',\n  name: 'Turks and Caicos Islands',\n  region: 'caribbean',\n  iso: 'TCA',\n  unMeber: false\n}, {\n  id: 'tuvalu',\n  name: 'Tuvalu',\n  region: 'pacific',\n  iso: 'TUV',\n  unMeber: true\n}, {\n  id: 'vanuatu',\n  name: 'Vanuatu',\n  region: 'pacific',\n  iso: 'VUT',\n  unMeber: true\n}, {\n  id: 'aisAverage',\n  name: 'ais average',\n  region: 'ais',\n  average: true,\n  iso: 'ais'\n}, {\n  id: 'caribbeanAverage',\n  name: 'caribbean average',\n  region: 'caribbean',\n  average: true,\n  iso: 'caribbean'\n}, {\n  id: 'pacificAverage',\n  name: 'pacific average',\n  region: 'pacific',\n  average: true,\n  iso: 'pacific'\n}, {\n  id: 'Global',\n  name: 'Global average',\n  region: 'Global',\n  average: true,\n  iso: 'Global'\n}]);\n\n//# sourceURL=webpack:///./src/assets/sidsList.js?");

/***/ }),

/***/ "./src/components/About/About.vue":
/*!****************************************!*\
  !*** ./src/components/About/About.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _About_vue_vue_type_template_id_4600e22a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=4600e22a& */ \"./src/components/About/About.vue?vue&type=template&id=4600e22a&\");\n/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ \"./src/components/About/About.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_id_4600e22a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=4600e22a&lang=css& */ \"./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _About_vue_vue_type_template_id_4600e22a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _About_vue_vue_type_template_id_4600e22a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/About/About.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/About/About.vue?");

/***/ }),

/***/ "./src/components/About/About.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/About/About.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/About.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/About/About.vue?");

/***/ }),

/***/ "./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css&":
/*!*************************************************************************************!*\
  !*** ./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_4600e22a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=4600e22a&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/About.vue?vue&type=style&index=0&id=4600e22a&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_4600e22a_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_4600e22a_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_4600e22a_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_4600e22a_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/About/About.vue?");

/***/ }),

/***/ "./src/components/About/About.vue?vue&type=template&id=4600e22a&":
/*!***********************************************************************!*\
  !*** ./src/components/About/About.vue?vue&type=template&id=4600e22a& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_4600e22a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=4600e22a& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/About.vue?vue&type=template&id=4600e22a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_4600e22a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_4600e22a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/About/About.vue?");

/***/ }),

/***/ "./src/components/About/children/Resource.vue":
/*!****************************************************!*\
  !*** ./src/components/About/children/Resource.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Resource_vue_vue_type_template_id_97ebc788_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource.vue?vue&type=template&id=97ebc788&scoped=true& */ \"./src/components/About/children/Resource.vue?vue&type=template&id=97ebc788&scoped=true&\");\n/* harmony import */ var _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resource.vue?vue&type=script&lang=js& */ \"./src/components/About/children/Resource.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Resource_vue_vue_type_style_index_0_id_97ebc788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css& */ \"./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Resource_vue_vue_type_template_id_97ebc788_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Resource_vue_vue_type_template_id_97ebc788_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"97ebc788\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/About/children/Resource.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/About/children/Resource.vue?");

/***/ }),

/***/ "./src/components/About/children/Resource.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/About/children/Resource.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/Resource.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/About/children/Resource.vue?");

/***/ }),

/***/ "./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_97ebc788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/Resource.vue?vue&type=style&index=0&id=97ebc788&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_97ebc788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_97ebc788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_97ebc788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_style_index_0_id_97ebc788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/About/children/Resource.vue?");

/***/ }),

/***/ "./src/components/About/children/Resource.vue?vue&type=template&id=97ebc788&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/components/About/children/Resource.vue?vue&type=template&id=97ebc788&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_97ebc788_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Resource.vue?vue&type=template&id=97ebc788&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/Resource.vue?vue&type=template&id=97ebc788&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_97ebc788_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Resource_vue_vue_type_template_id_97ebc788_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/About/children/Resource.vue?");

/***/ }),

/***/ "./src/components/About/children/subscribe.vue":
/*!*****************************************************!*\
  !*** ./src/components/About/children/subscribe.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _subscribe_vue_vue_type_template_id_78ea3da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe.vue?vue&type=template&id=78ea3da8&scoped=true& */ \"./src/components/About/children/subscribe.vue?vue&type=template&id=78ea3da8&scoped=true&\");\n/* harmony import */ var _subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribe.vue?vue&type=script&lang=js& */ \"./src/components/About/children/subscribe.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _subscribe_vue_vue_type_style_index_0_id_78ea3da8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css& */ \"./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _subscribe_vue_vue_type_template_id_78ea3da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _subscribe_vue_vue_type_template_id_78ea3da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"78ea3da8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/About/children/subscribe.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/About/children/subscribe.vue?");

/***/ }),

/***/ "./src/components/About/children/subscribe.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/components/About/children/subscribe.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./subscribe.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/subscribe.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/About/children/subscribe.vue?");

/***/ }),

/***/ "./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_78ea3da8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/subscribe.vue?vue&type=style&index=0&id=78ea3da8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_78ea3da8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_78ea3da8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_78ea3da8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_style_index_0_id_78ea3da8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/About/children/subscribe.vue?");

/***/ }),

/***/ "./src/components/About/children/subscribe.vue?vue&type=template&id=78ea3da8&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/components/About/children/subscribe.vue?vue&type=template&id=78ea3da8&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_template_id_78ea3da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./subscribe.vue?vue&type=template&id=78ea3da8&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/About/children/subscribe.vue?vue&type=template&id=78ea3da8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_template_id_78ea3da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subscribe_vue_vue_type_template_id_78ea3da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/About/children/subscribe.vue?");

/***/ }),

/***/ "./src/components/LanguageSelector.vue":
/*!*********************************************!*\
  !*** ./src/components/LanguageSelector.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LanguageSelector_vue_vue_type_template_id_445b9807_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguageSelector.vue?vue&type=template&id=445b9807&scoped=true& */ \"./src/components/LanguageSelector.vue?vue&type=template&id=445b9807&scoped=true&\");\n/* harmony import */ var _LanguageSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageSelector.vue?vue&type=script&lang=js& */ \"./src/components/LanguageSelector.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _LanguageSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _LanguageSelector_vue_vue_type_template_id_445b9807_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _LanguageSelector_vue_vue_type_template_id_445b9807_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"445b9807\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/LanguageSelector.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/LanguageSelector.vue?");

/***/ }),

/***/ "./src/components/LanguageSelector.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/components/LanguageSelector.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./LanguageSelector.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/LanguageSelector.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/LanguageSelector.vue?");

/***/ }),

/***/ "./src/components/LanguageSelector.vue?vue&type=template&id=445b9807&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/components/LanguageSelector.vue?vue&type=template&id=445b9807&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_445b9807_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./LanguageSelector.vue?vue&type=template&id=445b9807&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/LanguageSelector.vue?vue&type=template&id=445b9807&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_445b9807_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LanguageSelector_vue_vue_type_template_id_445b9807_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/LanguageSelector.vue?");

/***/ }),

/***/ "./src/components/appHeader.vue":
/*!**************************************!*\
  !*** ./src/components/appHeader.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _appHeader_vue_vue_type_template_id_72b87d2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appHeader.vue?vue&type=template&id=72b87d2e& */ \"./src/components/appHeader.vue?vue&type=template&id=72b87d2e&\");\n/* harmony import */ var _appHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appHeader.vue?vue&type=script&lang=js& */ \"./src/components/appHeader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _appHeader_vue_vue_type_style_index_0_id_72b87d2e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css& */ \"./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _appHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _appHeader_vue_vue_type_template_id_72b87d2e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _appHeader_vue_vue_type_template_id_72b87d2e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/appHeader.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/appHeader.vue?");

/***/ }),

/***/ "./src/components/appHeader.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/appHeader.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./appHeader.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/appHeader.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/appHeader.vue?");

/***/ }),

/***/ "./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css&":
/*!***********************************************************************************!*\
  !*** ./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_style_index_0_id_72b87d2e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/appHeader.vue?vue&type=style&index=0&id=72b87d2e&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_style_index_0_id_72b87d2e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_style_index_0_id_72b87d2e_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_style_index_0_id_72b87d2e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_style_index_0_id_72b87d2e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/appHeader.vue?");

/***/ }),

/***/ "./src/components/appHeader.vue?vue&type=template&id=72b87d2e&":
/*!*********************************************************************!*\
  !*** ./src/components/appHeader.vue?vue&type=template&id=72b87d2e& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_template_id_72b87d2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./appHeader.vue?vue&type=template&id=72b87d2e& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/appHeader.vue?vue&type=template&id=72b87d2e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_template_id_72b87d2e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appHeader_vue_vue_type_template_id_72b87d2e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/appHeader.vue?");

/***/ }),

/***/ "./src/components/footer.vue":
/*!***********************************!*\
  !*** ./src/components/footer.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_vue_vue_type_template_id_6c4d8baa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=6c4d8baa&scoped=true& */ \"./src/components/footer.vue?vue&type=template&id=6c4d8baa&scoped=true&\");\n/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ \"./src/components/footer.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _footer_vue_vue_type_style_index_0_id_6c4d8baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css& */ \"./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _footer_vue_vue_type_template_id_6c4d8baa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _footer_vue_vue_type_template_id_6c4d8baa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6c4d8baa\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/footer.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/footer.vue?");

/***/ }),

/***/ "./src/components/footer.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/components/footer.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/footer.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/footer.vue?");

/***/ }),

/***/ "./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_6c4d8baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/footer.vue?vue&type=style&index=0&id=6c4d8baa&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_6c4d8baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_6c4d8baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_6c4d8baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_6c4d8baa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/footer.vue?");

/***/ }),

/***/ "./src/components/footer.vue?vue&type=template&id=6c4d8baa&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/components/footer.vue?vue&type=template&id=6c4d8baa&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_6c4d8baa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=6c4d8baa&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/footer.vue?vue&type=template&id=6c4d8baa&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_6c4d8baa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_6c4d8baa_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/footer.vue?");

/***/ }),

/***/ "./src/components/interfaces.vue":
/*!***************************************!*\
  !*** ./src/components/interfaces.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interfaces_vue_vue_type_template_id_a7e8692c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces.vue?vue&type=template&id=a7e8692c& */ \"./src/components/interfaces.vue?vue&type=template&id=a7e8692c&\");\n/* harmony import */ var _interfaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces.vue?vue&type=script&lang=js& */ \"./src/components/interfaces.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _interfaces_vue_vue_type_style_index_0_id_a7e8692c_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css& */ \"./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _interfaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _interfaces_vue_vue_type_template_id_a7e8692c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _interfaces_vue_vue_type_template_id_a7e8692c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/interfaces.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/interfaces.vue?");

/***/ }),

/***/ "./src/components/interfaces.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/interfaces.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./interfaces.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/interfaces.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/interfaces.vue?");

/***/ }),

/***/ "./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css&":
/*!************************************************************************************!*\
  !*** ./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_style_index_0_id_a7e8692c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/interfaces.vue?vue&type=style&index=0&id=a7e8692c&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_style_index_0_id_a7e8692c_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_style_index_0_id_a7e8692c_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_style_index_0_id_a7e8692c_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_style_index_0_id_a7e8692c_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/interfaces.vue?");

/***/ }),

/***/ "./src/components/interfaces.vue?vue&type=template&id=a7e8692c&":
/*!**********************************************************************!*\
  !*** ./src/components/interfaces.vue?vue&type=template&id=a7e8692c& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_template_id_a7e8692c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./interfaces.vue?vue&type=template&id=a7e8692c& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/interfaces.vue?vue&type=template&id=a7e8692c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_template_id_a7e8692c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_interfaces_vue_vue_type_template_id_a7e8692c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/interfaces.vue?");

/***/ }),

/***/ "./src/components/resources.vue":
/*!**************************************!*\
  !*** ./src/components/resources.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.vue?vue&type=template&id=3fea2876& */ \"./src/components/resources.vue?vue&type=template&id=3fea2876&\");\n/* harmony import */ var _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.vue?vue&type=script&lang=js& */ \"./src/components/resources.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _resources_vue_vue_type_style_index_0_id_3fea2876_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.vue?vue&type=style&index=0&id=3fea2876&lang=css& */ \"./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/resources.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/resources.vue?");

/***/ }),

/***/ "./src/components/resources.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/resources.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/resources.vue?");

/***/ }),

/***/ "./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css&":
/*!***********************************************************************************!*\
  !*** ./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_3fea2876_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=style&index=0&id=3fea2876&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=style&index=0&id=3fea2876&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_3fea2876_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_3fea2876_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_3fea2876_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_style_index_0_id_3fea2876_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/resources.vue?");

/***/ }),

/***/ "./src/components/resources.vue?vue&type=template&id=3fea2876&":
/*!*********************************************************************!*\
  !*** ./src/components/resources.vue?vue&type=template&id=3fea2876& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=template&id=3fea2876& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=template&id=3fea2876&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/resources.vue?");

/***/ }),

/***/ "./src/components/video.vue":
/*!**********************************!*\
  !*** ./src/components/video.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_vue_vue_type_template_id_7271a9ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.vue?vue&type=template&id=7271a9ca& */ \"./src/components/video.vue?vue&type=template&id=7271a9ca&\");\n/* harmony import */ var _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.vue?vue&type=script&lang=js& */ \"./src/components/video.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _video_vue_vue_type_style_index_0_id_7271a9ca_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.vue?vue&type=style&index=0&id=7271a9ca&lang=css& */ \"./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_vue_vue_type_template_id_7271a9ca___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_vue_vue_type_template_id_7271a9ca___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/video.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/video.vue?");

/***/ }),

/***/ "./src/components/video.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/video.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/video.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/video.vue?");

/***/ }),

/***/ "./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css&":
/*!*******************************************************************************!*\
  !*** ./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_7271a9ca_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=style&index=0&id=7271a9ca&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/video.vue?vue&type=style&index=0&id=7271a9ca&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_7271a9ca_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_7271a9ca_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_7271a9ca_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_7271a9ca_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/video.vue?");

/***/ }),

/***/ "./src/components/video.vue?vue&type=template&id=7271a9ca&":
/*!*****************************************************************!*\
  !*** ./src/components/video.vue?vue&type=template&id=7271a9ca& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_7271a9ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4f3c5bc0-vue-loader-template\"}!../../node_modules/vuetify-loader/lib/loader.js??ref--4!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=template&id=7271a9ca& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"4f3c5bc0-vue-loader-template\\\"}!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/video.vue?vue&type=template&id=7271a9ca&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_7271a9ca___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4f3c5bc0_vue_loader_template_node_modules_vuetify_loader_lib_loader_js_ref_4_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_7_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_7271a9ca___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/video.vue?");

/***/ }),

/***/ "./src/language/index.js":
/*!*******************************!*\
  !*** ./src/language/index.js ***!
  \*******************************/
/*! exports provided: initI18n, loadLanguageAsync, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initI18n\", function() { return initI18n; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadLanguageAsync\", function() { return loadLanguageAsync; });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-i18n */ \"./node_modules/vue-i18n/dist/vue-i18n.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vue_i18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nasync function loadLang(locale) {\n  let res = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(`https://raw.githubusercontent.com/UNDP-Data/SIDS-data-platform-API/staging/data/cms/home/${locale}.json`);\n  return res.data;\n}\nlet i18n;\nconst loadedLanguages = [];\nfunction initI18n() {\n  let lang = localStorage.getItem('lang');\n  if (!lang) {\n    lang = ['en', 'pt', 'fr', 'es'].some(l => l === navigator.language.split('-')[0]) ? navigator.language.split('-')[0] : 'en';\n  }\n  let promise;\n  if (lang !== \"en\") {\n    promise = Promise.all([loadLang('en'), loadLang(lang)]);\n  } else {\n    promise = Promise.all([loadLang(lang)]);\n  }\n  return promise.then(function ([enData, data]) {\n    let messages = {};\n    messages[\"en\"] = enData;\n    if (lang !== \"en\") {\n      messages[lang] = data;\n    }\n    i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      locale: lang,\n      fallbackLocale: 'en',\n      messages\n    });\n    loadedLanguages.push(lang);\n    localStorage.setItem('lang', lang);\n    return i18n;\n  });\n}\n// our default language that is preloaded\n\nfunction setI18nLanguage(lang) {\n  i18n.locale = lang;\n  localStorage.setItem('lang', lang);\n  axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].defaults.headers.common['Accept-Language'] = lang;\n  document.querySelector('html').setAttribute('lang', lang);\n  return lang;\n}\nasync function loadLanguageAsync(lang = 'en') {\n  // If the language was already loaded\n  if (loadedLanguages.includes(lang)) {\n    return Promise.resolve(setI18nLanguage(lang));\n  }\n  let messages = await loadLang(lang);\n  i18n.setLocaleMessage(lang, messages);\n  loadedLanguages.push(lang);\n  return setI18nLanguage(lang);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (initI18n);\n\n//# sourceURL=webpack:///./src/language/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language */ \"./src/language/index.js\");\n/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/vuetify */ \"./src/plugins/vuetify.js\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nObject(_language__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().then(i18n => {\n  new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    i18n,\n    vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  }).$mount('#app');\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/plugins/vuetify.js":
/*!********************************!*\
  !*** ./src/plugins/vuetify.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuetify_lib_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib/framework */ \"./node_modules/vuetify/lib/framework.js\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuetify_lib_framework__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuetify_lib_framework__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({}));\n\n//# sourceURL=webpack:///./src/plugins/vuetify.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/runner/work/home-page/home-page/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });