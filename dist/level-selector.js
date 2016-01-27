(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("clappr"));
	else if(typeof define === 'function' && define.amd)
		define(["clappr"], factory);
	else if(typeof exports === 'object')
		exports["LevelSelector"] = factory(require("clappr"));
	else
		root["LevelSelector"] = factory(root["clappr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "<%=baseUrl%>/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports['default'] = __webpack_require__(1);module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";!(function(e,t){ true?module.exports = t(__webpack_require__(2)):"function" == typeof define && define.amd?define(["clappr"],t):"object" == typeof exports?exports.LevelSelector = t(require("clappr")):e.LevelSelector = t(e.clappr);})(undefined,function(e){return (function(e){function t(n){if(l[n])return l[n].exports;var o=l[n] = {exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded = !0,o.exports;}var l={};return t.m = e,t.c = l,t.p = "<%=baseUrl%>/",t(0);})([ /*!******************!*\
	  !*** ./index.js ***!
	  \******************/function(e,t,l){"use strict";t = l(1);}, /*!************************************!*\
	  !*** ./dist/level-selector.min.js ***!
	  \************************************/function(e,t,l){"use strict";!(function(t,n){e.exports = n(l(2));})(void 0,function(e){return (function(e){function t(n){if(l[n])return l[n].exports;var o=l[n] = {exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded = !0,o.exports;}var l={};return t.m = e,t.c = l,t.p = "<%=baseUrl%>/",t(0);})([ /*!******************!*\
		  !*** ./index.js ***!
		  \******************/function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t["default"] = l(1),e.exports = t["default"];}, /*!*********************!*\
		  !*** ./src/main.js ***!
		  \*********************/function(e,t,l){function n(e){return e && e.__esModule?e:{"default":e};}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}function r(e,t){if("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t && (Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__ = t);}Object.defineProperty(t,"__esModule",{value:!0});var i=(function(){function e(e,t){for(var l=0;l < t.length;l++) {var n=t[l];n.enumerable = n.enumerable || !1,n.configurable = !0,"value" in n && (n.writable = !0),Object.defineProperty(e,n.key,n);}}return function(t,l,n){return l && e(t.prototype,l),n && e(t,n),t;};})(),s=function d(e,t,l){for(var n=!0;n;) {var o=e,r=t,i=l;n = !1,null === o && (o = Function.prototype);var d=Object.getOwnPropertyDescriptor(o,r);if(void 0 !== d){if("value" in d)return d.value;var s=d.get;if(void 0 === s)return;return s.call(i);}var a=Object.getPrototypeOf(o);if(null === a)return;e = a,t = r,l = i,n = !0,d = a = void 0;}},a=l(2),c=l(3),u=n(c),v=l(4),f=n(v),h=-1,p=(function(e){function t(){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments);}return r(t,e),i(t,[{key:"bindEvents",value:function value(){this.listenTo(this.core,a.Events.CORE_READY,this.bindPlaybackEvents),this.listenTo(this.core.mediaControl,a.Events.MEDIACONTROL_CONTAINERCHANGED,this.reload),this.listenTo(this.core.mediaControl,a.Events.MEDIACONTROL_RENDERED,this.render);}},{key:"unBindEvents",value:function value(){this.stopListening(this.core,a.Events.CORE_READY),this.stopListening(this.core.mediaControl,a.Events.MEDIACONTROL_CONTAINERCHANGED),this.stopListening(this.core.mediaControl,a.Events.MEDIACONTROL_RENDERED),this.stopListening(this.core.getCurrentPlayback(),a.Events.PLAYBACK_LEVELS_AVAILABLE),this.stopListening(this.core.getCurrentPlayback(),a.Events.PLAYBACK_LEVEL_SWITCH_START),this.stopListening(this.core.getCurrentPlayback(),a.Events.PLAYBACK_LEVEL_SWITCH_END);}},{key:"bindPlaybackEvents",value:function value(){var e=this.core.getCurrentPlayback();this.listenTo(e,a.Events.PLAYBACK_LEVELS_AVAILABLE,this.fillLevels),this.listenTo(e,a.Events.PLAYBACK_LEVEL_SWITCH_START,this.startLevelSwitch),this.listenTo(e,a.Events.PLAYBACK_LEVEL_SWITCH_END,this.stopLevelSwitch);var t=e.levels && e.levels.length > 0;t && this.fillLevels(e.levels);}},{key:"reload",value:function value(){this.unBindEvents(),this.bindEvents();}},{key:"shouldRender",value:function value(){if(!this.core.getCurrentContainer())return !1;var e=this.core.getCurrentPlayback();if(!e)return !1;var t=void 0 !== e.currentLevel,l=!!(this.levels && this.levels.length > 0);return t && l;}},{key:"render",value:function value(){if(this.shouldRender()){var e=a.Styler.getStyleFor(f["default"],{baseUrl:this.core.options.baseUrl});this.$el.html(this.template({levels:this.levels,title:this.getTitle()})),this.$el.append(e),this.core.mediaControl.$(".media-control-right-panel").append(this.el),this.updateText(this.selectedLevelId);}return this;}},{key:"fillLevels",value:function value(e){var t=arguments.length <= 1 || void 0 === arguments[1]?h:arguments[1];this.selectedLevelId = t,this.levels = e,this.configureLevelsLabels(),this.render();}},{key:"configureLevelsLabels",value:function value(){if(void 0 !== this.core.options.levelSelectorConfig)for(var e in this.core.options.levelSelectorConfig.labels || {}) {e = parseInt(e,10);var t=!!this.findLevelBy(e);t && this.changeLevelLabelBy(e,this.core.options.levelSelectorConfig.labels[e]);}}},{key:"findLevelBy",value:function value(e){var t;return this.levels.forEach(function(l){l.id === e && (t = l);}),t;}},{key:"changeLevelLabelBy",value:function value(e,t){var l=this;this.levels.forEach(function(n,o){n.id === e && (l.levels[o].label = t);});}},{key:"onLevelSelect",value:function value(e){return this.selectedLevelId = parseInt(e.target.dataset.levelSelectorSelect,10),this.core.getCurrentPlayback().currentLevel = this.selectedLevelId,this.toggleContextMenu(),this.updateText(this.selectedLevelId),e.stopPropagation(),!1;}},{key:"onShowLevelSelectMenu",value:function value(e){this.toggleContextMenu();}},{key:"toggleContextMenu",value:function value(){this.$(".level_selector ul").toggle();}},{key:"setActiveListItem",value:function value(e){this.$("a").removeClass("active"),this.$('a[data-level-selector-select="' + e + '"').addClass("active");}},{key:"buttonElement",value:function value(){return this.$(".level_selector button");}},{key:"getTitle",value:function value(){return (this.core.options.levelSelectorConfig || {}).title;}},{key:"startLevelSwitch",value:function value(){this.buttonElement().addClass("changing");}},{key:"stopLevelSwitch",value:function value(){this.buttonElement().removeClass("changing"),this.updateText(this.selectedLevelId);}},{key:"updateText",value:function value(e){if(e === h){var t=this.core.getCurrentPlayback().currentLevel,l=(this.findLevelBy(t) || {}).label;l?this.buttonElement().text("AUTO (" + l + ")"):this.buttonElement().text("AUTO");}else {var l=(this.findLevelBy(e) || {}).label;this.buttonElement().text(l);}this.setActiveListItem(e);}},{key:"name",get:function get(){return "level_selector";}},{key:"template",get:function get(){return (0,a.template)(u["default"]);}},{key:"attributes",get:function get(){return {"class":this.name,"data-level-selector":""};}},{key:"events",get:function get(){return {"click [data-level-selector-select]":"onLevelSelect","click [data-level-selector-button]":"onShowLevelSelectMenu"};}}],[{key:"version",get:function get(){return VERSION;}}]),t;})(a.UICorePlugin);t["default"] = p,e.exports = t["default"];}, /*!*************************!*\
		  !*** external "clappr" ***!
		  \*************************/function(t,l){t.exports = e;}, /*!****************************************!*\
		  !*** ./src/public/level-selector.html ***!
		  \****************************************/function(e,t){e.exports = '<button data-level-selector-button>\n  Auto\n</button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href="#" data-level-selector-select="-1">AUTO</a></li>\n  <% for (var i = 0; i < levels.length; i++) { %>\n    <li><a href="#" data-level-selector-select="<%= levels[i].id %>"><%= levels[i].label %></a></li>\n  <% }; %>\n</ul>\n';}, /*!*******************************!*\
		  !*** ./src/public/style.scss ***!
		  \*******************************/function(e,t,l){t = e.exports = l(5)(),t.push([e.id,".level_selector[data-level-selector]{float:right;margin-top:5px;position:relative}.level_selector[data-level-selector] button{background-color:transparent;color:#fff;font-family:Roboto,Open Sans,Arial,sans-serif;-webkit-font-smoothing:antialiased;border:none;font-size:10px;cursor:pointer}.level_selector[data-level-selector] button:hover{color:#c9c9c9}.level_selector[data-level-selector] button.changing{-webkit-animation:pulse .5s infinite alternate}.level_selector[data-level-selector]>ul{display:none;list-style-type:none;position:absolute;bottom:25px;border:1px solid #000;border-radius:4px;background-color:rgba(0,0,0,.7)}.level_selector[data-level-selector] li{position:relative;font-size:10px}.level_selector[data-level-selector] li[data-title]{padding:5px}.level_selector[data-level-selector] li a{color:#aaa;padding:2px 10px 2px 15px;display:block;text-decoration:none}.level_selector[data-level-selector] li a.active{background-color:#000;font-weight:700;color:#fff}.level_selector[data-level-selector] li a.active:before{content:'\\2713';position:absolute;top:2px;left:4px}.level_selector[data-level-selector] li a:hover{color:#fff;text-decoration:none}@-webkit-keyframes pulse{0%{color:#fff}50%{color:#ff0101}to{color:#b80000}}",""]);}, /*!**************************************!*\
		  !*** ./~/css-loader/lib/css-base.js ***!
		  \**************************************/function(e,t){e.exports = function(){var e=[];return e.toString = function(){for(var e=[],t=0;t < this.length;t++) {var l=this[t];l[2]?e.push("@media " + l[2] + "{" + l[1] + "}"):e.push(l[1]);}return e.join("");},e.i = function(t,l){"string" == typeof t && (t = [[null,t,""]]);for(var n={},o=0;o < this.length;o++) {var r=this[o][0];"number" == typeof r && (n[r] = !0);}for(o = 0;o < t.length;o++) {var i=t[o];"number" == typeof i[0] && n[i[0]] || (l && !i[2]?i[2] = l:l && (i[2] = "(" + i[2] + ") and (" + l + ")"),e.push(i));}},e;};}]);});}, /*!*************************!*\
	  !*** external "clappr" ***!
	  \*************************/function(t,l){t.exports = e;}]);}); //# sourceMappingURL=level-selector.min.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;