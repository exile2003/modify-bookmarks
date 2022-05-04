/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){\"use strict\";function b(a,b){return\"undefined\"==typeof b?b={autoBom:!1}:\"object\"!=typeof b&&(console.warn(\"Deprecated: Expected third argument to be a object\"),b={autoBom:!b}),b.autoBom&&/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(a.type)?new Blob([\"\\uFEFF\",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open(\"GET\",a),d.responseType=\"blob\",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error(\"could not download file\")},d.send()}function d(a){var b=new XMLHttpRequest;b.open(\"HEAD\",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent(\"click\"))}catch(c){var b=document.createEvent(\"MouseEvents\");b.initMouseEvent(\"click\",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f=\"object\"==typeof window&&window.window===window?window:\"object\"==typeof self&&self.self===self?self:\"object\"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||(\"object\"!=typeof window||window!==f?function(){}:\"download\"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement(\"a\");g=g||b.name||\"download\",j.download=g,j.rel=\"noopener\",\"string\"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target=\"_blank\")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:\"msSaveOrOpenBlob\"in navigator?function(f,g,h){if(g=g||f.name||\"download\",\"string\"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement(\"a\");i.href=f,i.target=\"_blank\",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open(\"\",\"_blank\"),g&&(g.document.title=g.document.body.innerText=\"downloading...\"),\"string\"==typeof b)return c(b,d,e);var h=\"application/octet-stream\"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\\/[\\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&\"undefined\"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,\"data:attachment/file;\"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});\n\n//# sourceMappingURL=FileSaver.min.js.map\n\n//# sourceURL=webpack://modify-bookmarks/./node_modules/file-saver/dist/FileSaver.min.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);\n    \r\n\r\n    //import './index-3.js'\r\n\r\n    //import './index-2.js'\r\n\r\n    // import '../node_modules/bootstrap/dist/css/bootstrap.min.css'\r\n    // import '../node_modules/jquery/dist/jquery.min.js'\r\n    // import '../js/bootstrap-filestyle.min.js'\r\n\r\n    // When a bookmark file is chosen, the function 'getFile' is started.\r\n    document.getElementById(\"files\").onchange = getFile;\r\n\r\n    // Function 'addDate' adds a div element with the bookmark creation date after the inputElement.\r\n    // Attribute 'ADD_DATE' has a Unix timestamp in seconds.\r\n    // Tag \"H3\" has the name of the folder.\r\n    function addDate(inputElement) {\r\n        let element = inputElement;\r\n        let attributeValue, div, date;\r\n\r\n        if (element.hasAttribute('ADD_DATE') && element.tagName !== \"H3\" && element.textContent !== \"\") {\r\n\r\n            attributeValue = element.getAttribute('ADD_DATE');\r\n            date = convertUnixTime(attributeValue);\r\n\r\n            div = window.document.createElement('div');\r\n            div.textContent = \"   \" + date;\r\n            div.style.display = \"inline\";\r\n\r\n            element.insertAdjacentElement('afterEnd', div);\r\n        }\r\n    }\r\n\r\n    // Function 'elementIteration' iterates through the elements and checks if there are nested elements and apply to each\r\n    // element function 'addDate'\r\n    function elementIteration(inputElement) {\r\n        let element = inputElement;\r\n        addDate(element);\r\n\r\n        if (element.hasChildNodes()) {\r\n            let childNodes = element.children;\r\n            for (let i = 0; i < childNodes.length; i++) {\r\n                elementIteration(childNodes[i]);\r\n            }\r\n        }\r\n    }\r\n\r\n    // Function 'convertUnixTime' takes a Unix timestamp in seconds as parameter value and returns a date in format DAY MMM DD YYYY\r\n    // HH:MM:SS\r\n    function convertUnixTime(date) {\r\n        let dateInstance = new Date();\r\n        dateInstance.setTime(date*1000);\r\n        let calendarDate = (dateInstance.toString()).slice(0,25);\r\n        return calendarDate;\r\n    }\r\n\r\n    // Function 'getFile' parses the input bookmark file, processes it with the function 'elementIteration' and writes with\r\n    // method 'saveAs' of 'FileSaver' package\r\n    function getFile(e) {\r\n        let domTree;\r\n        let inputFile = e.target.files[0];\r\n        let reader = new FileReader();\r\n        let fileContent;\r\n        let outputFile;\r\n        reader.onload = function(e) {\r\n            fileContent = e.target.result;\r\n            domTree = new DOMParser().parseFromString(fileContent, \"text/html\")\r\n            elementIteration(domTree.getElementsByTagName('body')[0]);\r\n            outputFile = (domTree.getElementsByTagName('body')[0]).outerHTML\r\n\r\n            let fileForSave = new File([outputFile], \"bookmark-result.html\", {type: \"text/plain;charset=utf-8\"});\r\n            file_saver__WEBPACK_IMPORTED_MODULE_0___default().saveAs(fileForSave)\r\n\r\n        }\r\n        reader.readAsText(inputFile);\r\n    }\n\n//# sourceURL=webpack://modify-bookmarks/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;