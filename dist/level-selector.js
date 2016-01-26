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

	'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x2,_x3,_x4){var _again=true;_function: while(_again) {var object=_x2,property=_x3,receiver=_x4;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x2 = parent;_x3 = property;_x4 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _interopRequireDefault(obj){return obj && obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}var _clappr=__webpack_require__(2);var _publicLevelSelectorHtml=__webpack_require__(3);var _publicLevelSelectorHtml2=_interopRequireDefault(_publicLevelSelectorHtml);var _publicStyleScss=__webpack_require__(4);var _publicStyleScss2=_interopRequireDefault(_publicStyleScss);var AUTO=-1;var LevelSelector=(function(_UICorePlugin){_inherits(LevelSelector,_UICorePlugin);function LevelSelector(){_classCallCheck(this,LevelSelector);_get(Object.getPrototypeOf(LevelSelector.prototype),'constructor',this).apply(this,arguments);}_createClass(LevelSelector,[{key:'bindEvents',value:function bindEvents(){this.listenTo(this.core,_clappr.Events.CORE_READY,this.bindPlaybackEvents);this.listenTo(this.core.mediaControl,_clappr.Events.MEDIACONTROL_CONTAINERCHANGED,this.reload);this.listenTo(this.core.mediaControl,_clappr.Events.MEDIACONTROL_RENDERED,this.render);}},{key:'unBindEvents',value:function unBindEvents(){this.stopListening(this.core,_clappr.Events.CORE_READY);this.stopListening(this.core.mediaControl,_clappr.Events.MEDIACONTROL_CONTAINERCHANGED);this.stopListening(this.core.mediaControl,_clappr.Events.MEDIACONTROL_RENDERED);this.stopListening(this.core.getCurrentPlayback(),_clappr.Events.PLAYBACK_LEVELS_AVAILABLE);this.stopListening(this.core.getCurrentPlayback(),_clappr.Events.PLAYBACK_LEVEL_SWITCH_START);this.stopListening(this.core.getCurrentPlayback(),_clappr.Events.PLAYBACK_LEVEL_SWITCH_END);}},{key:'bindPlaybackEvents',value:function bindPlaybackEvents(){var currentPlayback=this.core.getCurrentPlayback();this.listenTo(currentPlayback,_clappr.Events.PLAYBACK_LEVELS_AVAILABLE,this.fillLevels);this.listenTo(currentPlayback,_clappr.Events.PLAYBACK_LEVEL_SWITCH_START,this.startLevelSwitch);this.listenTo(currentPlayback,_clappr.Events.PLAYBACK_LEVEL_SWITCH_END,this.stopLevelSwitch);var playbackLevelsAvaialbeWasTriggered=currentPlayback.levels && currentPlayback.levels.length > 0;playbackLevelsAvaialbeWasTriggered && this.fillLevels(currentPlayback.levels);}},{key:'reload',value:function reload(){this.unBindEvents();this.bindEvents();}},{key:'shouldRender',value:function shouldRender(){if(!this.core.getCurrentContainer())return false;var currentPlayback=this.core.getCurrentPlayback();if(!currentPlayback)return false;var respondsToCurrentLevel=currentPlayback.currentLevel !== undefined;var hasLevels=!!(this.levels && this.levels.length > 0);return respondsToCurrentLevel && hasLevels;}},{key:'render',value:function render(){if(this.shouldRender()){var style=_clappr.Styler.getStyleFor(_publicStyleScss2['default'],{baseUrl:this.core.options.baseUrl});this.$el.html(this.template({'levels':this.levels,'title':this.getTitle()}));this.$el.append(style);this.core.mediaControl.$('.media-control-right-panel').append(this.el);this.updateText(this.selectedLevelId);}return this;}},{key:'fillLevels',value:function fillLevels(levels){var initialLevel=arguments.length <= 1 || arguments[1] === undefined?AUTO:arguments[1];this.selectedLevelId = initialLevel;this.levels = levels;this.configureLevelsLabels();this.render();}},{key:'configureLevelsLabels',value:function configureLevelsLabels(){if(this.core.options.levelSelectorConfig === undefined)return;for(var levelId in this.core.options.levelSelectorConfig.labels || {}) {levelId = parseInt(levelId,10);var thereIsLevel=!!this.findLevelBy(levelId);thereIsLevel && this.changeLevelLabelBy(levelId,this.core.options.levelSelectorConfig.labels[levelId]);}}},{key:'findLevelBy',value:function findLevelBy(id){var foundLevel;this.levels.forEach(function(level){if(level.id === id){foundLevel = level;}});return foundLevel;}},{key:'changeLevelLabelBy',value:function changeLevelLabelBy(id,newLabel){var _this=this;this.levels.forEach(function(level,index){if(level.id === id){_this.levels[index].label = newLabel;}});}},{key:'onLevelSelect',value:function onLevelSelect(event){this.selectedLevelId = parseInt(event.target.dataset.levelSelectorSelect,10);this.core.getCurrentPlayback().currentLevel = this.selectedLevelId;this.toggleContextMenu();this.updateText(this.selectedLevelId);event.stopPropagation();return false;}},{key:'onShowLevelSelectMenu',value:function onShowLevelSelectMenu(event){this.toggleContextMenu();}},{key:'toggleContextMenu',value:function toggleContextMenu(){this.$('.level_selector ul').toggle();}},{key:'setActiveListItem',value:function setActiveListItem(level){this.$('a').removeClass('active');this.$('a[data-level-selector-select="' + level + '"').addClass('active');}},{key:'buttonElement',value:function buttonElement(){return this.$('.level_selector button');}},{key:'getTitle',value:function getTitle(){return (this.core.options.levelSelectorConfig || {}).title;}},{key:'startLevelSwitch',value:function startLevelSwitch(){this.buttonElement().addClass('changing');}},{key:'stopLevelSwitch',value:function stopLevelSwitch(){this.buttonElement().removeClass('changing');this.updateText(this.selectedLevelId);}},{key:'updateText',value:function updateText(level){if(level === AUTO){var playbackLevel=this.core.getCurrentPlayback().currentLevel;var label=(this.findLevelBy(playbackLevel) || {}).label;if(label){this.buttonElement().text('AUTO (' + label + ')');}else {this.buttonElement().text('AUTO');}}else {var label=(this.findLevelBy(level) || {}).label;this.buttonElement().text(label);}this.setActiveListItem(level);}},{key:'name',get:function get(){return 'level_selector';}},{key:'template',get:function get(){return (0,_clappr.template)(_publicLevelSelectorHtml2['default']);}},{key:'attributes',get:function get(){return {'class':this.name,'data-level-selector':''};}},{key:'events',get:function get(){return {'click [data-level-selector-select]':'onLevelSelect','click [data-level-selector-button]':'onShowLevelSelectMenu'};}}],[{key:'version',get:function get(){return VERSION;}}]);return LevelSelector;})(_clappr.UICorePlugin);exports['default'] = LevelSelector;module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<button data-level-selector-button>\n  Auto\n</button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href=\"#\" data-level-selector-select=\"-1\">AUTO</a></li>\n  <% for (var i = 0; i < levels.length; i++) { %>\n    <li><a href=\"#\" data-level-selector-select=\"<%= levels[i].id %>\"><%= levels[i].label %></a></li>\n  <% }; %>\n</ul>\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".level_selector[data-level-selector] {\n  float: right;\n  margin-top: 5px;\n  position: relative; }\n  .level_selector[data-level-selector] button {\n    background-color: transparent;\n    color: #fff;\n    font-family: Roboto,\"Open Sans\",Arial,sans-serif;\n    -webkit-font-smoothing: antialiased;\n    border: none;\n    font-size: 10px;\n    cursor: pointer; }\n    .level_selector[data-level-selector] button:hover {\n      color: #c9c9c9; }\n    .level_selector[data-level-selector] button.changing {\n      -webkit-animation: pulse 0.5s infinite alternate; }\n  .level_selector[data-level-selector] > ul {\n    display: none;\n    list-style-type: none;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid black;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.7); }\n  .level_selector[data-level-selector] li {\n    position: relative;\n    font-size: 10px; }\n    .level_selector[data-level-selector] li[data-title] {\n      padding: 5px; }\n    .level_selector[data-level-selector] li a {\n      color: #aaa;\n      padding: 2px 10px 2px 15px;\n      display: block;\n      text-decoration: none; }\n      .level_selector[data-level-selector] li a.active {\n        background-color: black;\n        font-weight: bold;\n        color: #fff; }\n        .level_selector[data-level-selector] li a.active:before {\n          content: '\\2713';\n          position: absolute;\n          top: 2px;\n          left: 4px; }\n      .level_selector[data-level-selector] li a:hover {\n        color: #fff;\n        text-decoration: none; }\n\n@-webkit-keyframes pulse {\n  0% {\n    color: #fff; }\n  50% {\n    color: #ff0101; }\n  100% {\n    color: #B80000; } }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/ // css base code, injected by the css-loader
	"use strict";module.exports = function(){var list=[]; // return the list of modules as css string
	list.toString = function toString(){var result=[];for(var i=0;i < this.length;i++) {var item=this[i];if(item[2]){result.push("@media " + item[2] + "{" + item[1] + "}");}else {result.push(item[1]);}}return result.join("");}; // import a list of modules into the list
	list.i = function(modules,mediaQuery){if(typeof modules === "string")modules = [[null,modules,""]];var alreadyImportedModules={};for(var i=0;i < this.length;i++) {var id=this[i][0];if(typeof id === "number")alreadyImportedModules[id] = true;}for(i = 0;i < modules.length;i++) {var item=modules[i]; // skip already imported module
	// this implementation is not 100% perfect for weird media query combinations
	//  when a module is imported multiple times with different media queries.
	//  I hope this will never occur (Hey this way we have smaller bundles)
	if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]){if(mediaQuery && !item[2]){item[2] = mediaQuery;}else if(mediaQuery){item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";}list.push(item);}}};return list;};

/***/ }
/******/ ])
});
;