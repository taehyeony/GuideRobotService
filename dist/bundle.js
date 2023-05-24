/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wordnet'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n// Build a keyword list and get synonyms\nvar list_words = [\"Hello\", \"timings\"]; // keywords\nvar list_syn = {}; // dictionary to store synonyms (synonyms) - words the user is likely to type\nfor (var _i = 0, _list_words = list_words; _i < _list_words.length; _i++) {\n  var word = _list_words[_i];\n  var synonyms = []; // temporary storage of synonyms\n  var syn = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wordnet'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(word);\n  var _iterator = _createForOfIteratorHelper(syn),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var sy = _step.value;\n      var _iterator2 = _createForOfIteratorHelper(sy.lemmas()),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var lem = _step2.value;\n          var lem_name = lem.name().replace(/[^a-zA-Z0-9 \\n\\\\.]/g, \" \"); // remove special characters from synonym string\n          synonyms.push(lem_name);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  list_syn[word] = new Set(synonyms); // remove duplicate values\n}\n\n// Create a list of Intents\n// For example, if a word similar to hello is entered, it has an intent of hello.\nvar keywords = {}; // list of intents\nvar keywords_dict = {}; // Separate intents with |\n// Define a new key in the keyword dictionary\nkeywords[\"Hello\"] = [];\n// Populate keyword dictionary values with keyword synonyms\n// formatting according to regular expression\nvar _iterator3 = _createForOfIteratorHelper(list_syn[\"Hello\"]),\n  _step3;\ntry {\n  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n    var synonym = _step3.value;\n    // Save synonyms matching intent to keyword dictionary\n    keywords[\"Hello\"].push(synonym);\n  }\n} catch (err) {\n  _iterator3.e(err);\n} finally {\n  _iterator3.f();\n}\nkeywords[\"timings\"] = [];\nvar _iterator4 = _createForOfIteratorHelper(list_syn[\"timings\"]),\n  _step4;\ntry {\n  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n    var _synonym = _step4.value;\n    keywords[\"timings\"].push(_synonym);\n  }\n} catch (err) {\n  _iterator4.e(err);\n} finally {\n  _iterator4.f();\n}\nfor (var _i2 = 0, _Object$entries = Object.entries(keywords); _i2 < _Object$entries.length; _i2++) {\n  var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),\n    intent = _Object$entries$_i[0],\n    keys = _Object$entries$_i[1];\n  // Combine keywords with | with the Join operation\n  // Save to keywords_dict dictionary\n  keywords_dict[intent] = keys.join(\"|\");\n}\n\n// Intent: responses - Intent: responses\nvar responses = {\n  \"Hello\": \"Hi! Hello\",\n  \"timings\": \"We are open from 9AM to 5PM, Monday to Friday. We are closed on weekends and public holidays\",\n  \"fallback\": \"Could you say that again?\"\n};\n\n// Generate a response that matches the intent\n// Run chatbot\nwhile (true) {\n  console.log(\"How may I help you?\");\n  // Take user input and convert all characters to lower case\n  // 1. User Input\n  var readline = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'readline-sync'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  var user_input = readline.question().toLowerCase();\n  // Define chatbot termination conditions\n  if (user_input === \"quit\") {\n    console.log(\"Thank you for visiting.\");\n    break;\n  }\n  var matched_intent = null;\n  for (var _i3 = 0, _Object$entries2 = Object.entries(keywords_dict); _i3 < _Object$entries2.length; _i3++) {\n    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),\n      _intent = _Object$entries2$_i[0],\n      pattern = _Object$entries2$_i[1];\n    // Find keywords in user input using regular expression search function\n    if (new RegExp(pattern).test(user_input)) {\n      // If keyword matches, select corresponding intent from keywords_dict\n      matched_intent = _intent;\n    }\n  }\n  // Defaults to fallback if there is no matching intent\n  var key = \"fallback\";\n  if (matched_intent in responses) {\n    key = matched_intent;\n  }\n  // Output a response that matches the intent selected by the chatbot\n  console.log(responses[key]);\n}\nfunction chat(str) {\n  console.log(\"How may I help you?\");\n  var user_input = str;\n  if (user_input === \"quit\") {\n    console.log(\"Thank you for visiting.\");\n    stop();\n  }\n}\n\n//# sourceURL=webpack://service/./src/main.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;