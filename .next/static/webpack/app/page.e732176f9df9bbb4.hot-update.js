"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/TwistDeck.js":
/*!*************************************!*\
  !*** ./app/components/TwistDeck.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst GhyranDeck = [\n    {\n        Name: \"Card 1\",\n        Flavour: \"Some Flavour Text\",\n        Rules: \"Some Rule Test\"\n    },\n    {\n        Name: \"Card 2\",\n        Flavour: \"Some Flavour Text\",\n        Rules: \"Some Rule Test\"\n    },\n    {\n        Name: \"Card 3\",\n        Flavour: \"Some Flavour Text\",\n        Rules: \"Some Rule Test\"\n    },\n    {\n        Name: \"Card 4\",\n        Flavour: \"Some Flavour Text\",\n        Rules: \"Some Rule Test\"\n    },\n    {\n        Name: \"Card 5\",\n        Flavour: \"Some Flavour Text\",\n        Rules: \"Some Rule Test\"\n    },\n    {\n        Name: \"Card 6\",\n        Flavour: \"Some Flavour Text\",\n        Rules: \"Some Rule Test\"\n    }\n];\nconst TwistDeck = ()=>{\n    _s();\n    // generates an int from 0 to max (one too many for our use case)\n    function getRandomInt(max) {\n        return Math.floor(Math.random() * (max - 1));\n    }\n    const [deck, setDeck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"No Deck Selected\");\n    const [currentCard, setCurrentCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [cardsInDeck, setCardsInDeck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        1,\n        2,\n        3,\n        4,\n        5\n    ]);\n    const drawCard = ()=>{\n        let tempDeck = [\n            ...cardsInDeck\n        ];\n        //check how many card remaining\n        const cardsRemaining = cardsInDeck.length;\n        console.log(\"Selecting from\", cardsRemaining, \"cards left in deck\");\n        // Pick a random card from those remaining\n        const drawnCardArrayValue = getRandomInt(cardsRemaining);\n        const drawnCardDeckValue = cardsInDeck[drawnCardArrayValue];\n        setCurrentCard(deck[drawnCardDeckValue - 1]);\n        console.log(\"Selected card with array index\", drawnCardArrayValue, \"named:\", deck[drawnCardArrayValue].Name);\n        //delete the drawn from card deck by array\n        tempDeck.splice(drawnCardArrayValue, 1);\n        console.log(\"Temp Deck:\", tempDeck);\n        setCardsInDeck(tempDeck);\n        console.log(\"state deck:\", cardsInDeck);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setDeck(GhyranDeck),\n                className: \"btn btn-blue\",\n                children: \"Ghyran\"\n            }, void 0, false, {\n                fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setDeck(\"Acqshy\"),\n                className: \"btn btn-blue\",\n                children: \"Aqshy\"\n            }, void 0, false, {\n                fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: drawCard,\n                disabled: cardsInDeck.length === 0,\n                children: \"Draw Twist Card\"\n            }, void 0, false, {\n                fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Current Card: \",\n                    currentCard.Name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Cards in Deck: \",\n                    cardsInDeck\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Number of Cards Remaining: \",\n                    cardsInDeck.length\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TwistDeck, \"TITIqQ7HRNJ4uCWhJ3FzPL+7jnw=\");\n_c = TwistDeck;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TwistDeck);\nvar _c;\n$RefreshReg$(_c, \"TwistDeck\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R3aXN0RGVjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFaUM7QUFFakMsTUFBTUMsYUFBYTtJQUNqQjtRQUFFQyxNQUFNO1FBQVVDLFNBQVM7UUFBcUJDLE9BQU87SUFBaUI7SUFDeEU7UUFBRUYsTUFBTTtRQUFVQyxTQUFTO1FBQXFCQyxPQUFPO0lBQWlCO0lBQ3hFO1FBQUVGLE1BQU07UUFBVUMsU0FBUztRQUFxQkMsT0FBTztJQUFpQjtJQUN4RTtRQUFFRixNQUFNO1FBQVVDLFNBQVM7UUFBcUJDLE9BQU87SUFBaUI7SUFDeEU7UUFBRUYsTUFBTTtRQUFVQyxTQUFTO1FBQXFCQyxPQUFPO0lBQWlCO0lBQ3hFO1FBQUVGLE1BQU07UUFBVUMsU0FBUztRQUFxQkMsT0FBTztJQUFpQjtDQUN6RTtBQUVELE1BQU1DLFlBQVk7O0lBQ2hCLGlFQUFpRTtJQUNqRSxTQUFTQyxhQUFhQyxHQUFHO1FBQ3ZCLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFNSCxDQUFBQSxNQUFNO0lBQzNDO0lBRUEsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2EsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQUM7UUFBRztRQUFHO1FBQUc7UUFBRztRQUFHO0tBQUU7SUFFakUsTUFBTWlCLFdBQVc7UUFDZixJQUFJQyxXQUFXO2VBQUlIO1NBQVk7UUFDL0IsK0JBQStCO1FBQy9CLE1BQU1JLGlCQUFpQkosWUFBWUssTUFBTTtRQUN6Q0MsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkgsZ0JBQWdCO1FBQzlDLDBDQUEwQztRQUMxQyxNQUFNSSxzQkFBc0JqQixhQUFhYTtRQUN6QyxNQUFNSyxxQkFBcUJULFdBQVcsQ0FBQ1Esb0JBQW9CO1FBQzNEVCxlQUFlSCxJQUFJLENBQUNhLHFCQUFxQixFQUFFO1FBQzNDSCxRQUFRQyxHQUFHLENBQ1Qsa0NBQ0FDLHFCQUNBLFVBQ0FaLElBQUksQ0FBQ1ksb0JBQW9CLENBQUNyQixJQUFJO1FBRWhDLDBDQUEwQztRQUMxQ2dCLFNBQVNPLE1BQU0sQ0FBQ0YscUJBQXFCO1FBQ3JDRixRQUFRQyxHQUFHLENBQUMsY0FBY0o7UUFFMUJGLGVBQWVFO1FBQ2ZHLFFBQVFDLEdBQUcsQ0FBQyxlQUFlUDtJQUM3QjtJQUVBLHFCQUNFLDhEQUFDVzs7MEJBQ0MsOERBQUNDO2dCQUFPQyxTQUFTLElBQU1oQixRQUFRWDtnQkFBYTRCLFdBQVU7MEJBQWU7Ozs7OzswQkFHckUsOERBQUNGO2dCQUFPQyxTQUFTLElBQU1oQixRQUFRO2dCQUFXaUIsV0FBVTswQkFBZTs7Ozs7OzBCQUduRSw4REFBQ0Y7Z0JBQU9DLFNBQVNYO2dCQUFVYSxVQUFVZixZQUFZSyxNQUFNLEtBQUs7MEJBQUc7Ozs7OzswQkFLL0QsOERBQUNXOztvQkFBRTtvQkFBZWxCLFlBQVlYLElBQUk7Ozs7Ozs7MEJBQ2xDLDhEQUFDNkI7O29CQUFFO29CQUFnQmhCOzs7Ozs7OzBCQUNuQiw4REFBQ2dCOztvQkFBRTtvQkFBNEJoQixZQUFZSyxNQUFNOzs7Ozs7Ozs7Ozs7O0FBR3ZEO0dBbkRNZjtLQUFBQTtBQXFETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ud2lzdERlY2suanM/MTA3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgR2h5cmFuRGVjayA9IFtcbiAgeyBOYW1lOiBcIkNhcmQgMVwiLCBGbGF2b3VyOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsIFJ1bGVzOiBcIlNvbWUgUnVsZSBUZXN0XCIgfSxcbiAgeyBOYW1lOiBcIkNhcmQgMlwiLCBGbGF2b3VyOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsIFJ1bGVzOiBcIlNvbWUgUnVsZSBUZXN0XCIgfSxcbiAgeyBOYW1lOiBcIkNhcmQgM1wiLCBGbGF2b3VyOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsIFJ1bGVzOiBcIlNvbWUgUnVsZSBUZXN0XCIgfSxcbiAgeyBOYW1lOiBcIkNhcmQgNFwiLCBGbGF2b3VyOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsIFJ1bGVzOiBcIlNvbWUgUnVsZSBUZXN0XCIgfSxcbiAgeyBOYW1lOiBcIkNhcmQgNVwiLCBGbGF2b3VyOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsIFJ1bGVzOiBcIlNvbWUgUnVsZSBUZXN0XCIgfSxcbiAgeyBOYW1lOiBcIkNhcmQgNlwiLCBGbGF2b3VyOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsIFJ1bGVzOiBcIlNvbWUgUnVsZSBUZXN0XCIgfSxcbl07XG5cbmNvbnN0IFR3aXN0RGVjayA9ICgpID0+IHtcbiAgLy8gZ2VuZXJhdGVzIGFuIGludCBmcm9tIDAgdG8gbWF4IChvbmUgdG9vIG1hbnkgZm9yIG91ciB1c2UgY2FzZSlcbiAgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gMSkpO1xuICB9XG5cbiAgY29uc3QgW2RlY2ssIHNldERlY2tdID0gdXNlU3RhdGUoXCJObyBEZWNrIFNlbGVjdGVkXCIpO1xuICBjb25zdCBbY3VycmVudENhcmQsIHNldEN1cnJlbnRDYXJkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2FyZHNJbkRlY2ssIHNldENhcmRzSW5EZWNrXSA9IHVzZVN0YXRlKFswLCAxLCAyLCAzLCA0LCA1XSk7XG5cbiAgY29uc3QgZHJhd0NhcmQgPSAoKSA9PiB7XG4gICAgbGV0IHRlbXBEZWNrID0gWy4uLmNhcmRzSW5EZWNrXTtcbiAgICAvL2NoZWNrIGhvdyBtYW55IGNhcmQgcmVtYWluaW5nXG4gICAgY29uc3QgY2FyZHNSZW1haW5pbmcgPSBjYXJkc0luRGVjay5sZW5ndGg7XG4gICAgY29uc29sZS5sb2coXCJTZWxlY3RpbmcgZnJvbVwiLCBjYXJkc1JlbWFpbmluZywgXCJjYXJkcyBsZWZ0IGluIGRlY2tcIik7XG4gICAgLy8gUGljayBhIHJhbmRvbSBjYXJkIGZyb20gdGhvc2UgcmVtYWluaW5nXG4gICAgY29uc3QgZHJhd25DYXJkQXJyYXlWYWx1ZSA9IGdldFJhbmRvbUludChjYXJkc1JlbWFpbmluZyk7XG4gICAgY29uc3QgZHJhd25DYXJkRGVja1ZhbHVlID0gY2FyZHNJbkRlY2tbZHJhd25DYXJkQXJyYXlWYWx1ZV07XG4gICAgc2V0Q3VycmVudENhcmQoZGVja1tkcmF3bkNhcmREZWNrVmFsdWUgLSAxXSk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBcIlNlbGVjdGVkIGNhcmQgd2l0aCBhcnJheSBpbmRleFwiLFxuICAgICAgZHJhd25DYXJkQXJyYXlWYWx1ZSxcbiAgICAgIFwibmFtZWQ6XCIsXG4gICAgICBkZWNrW2RyYXduQ2FyZEFycmF5VmFsdWVdLk5hbWVcbiAgICApO1xuICAgIC8vZGVsZXRlIHRoZSBkcmF3biBmcm9tIGNhcmQgZGVjayBieSBhcnJheVxuICAgIHRlbXBEZWNrLnNwbGljZShkcmF3bkNhcmRBcnJheVZhbHVlLCAxKTtcbiAgICBjb25zb2xlLmxvZyhcIlRlbXAgRGVjazpcIiwgdGVtcERlY2spO1xuXG4gICAgc2V0Q2FyZHNJbkRlY2sodGVtcERlY2spO1xuICAgIGNvbnNvbGUubG9nKFwic3RhdGUgZGVjazpcIiwgY2FyZHNJbkRlY2spO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0RGVjayhHaHlyYW5EZWNrKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibHVlXCI+XG4gICAgICAgIEdoeXJhblxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldERlY2soXCJBY3FzaHlcIil9IGNsYXNzTmFtZT1cImJ0biBidG4tYmx1ZVwiPlxuICAgICAgICBBcXNoeVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RyYXdDYXJkfSBkaXNhYmxlZD17Y2FyZHNJbkRlY2subGVuZ3RoID09PSAwfT5cbiAgICAgICAgRHJhdyBUd2lzdCBDYXJkXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgey8qIDxwPkRlY2s6IHtkZWNrfTwvcD4gKi99XG4gICAgICA8cD5DdXJyZW50IENhcmQ6IHtjdXJyZW50Q2FyZC5OYW1lfTwvcD5cbiAgICAgIDxwPkNhcmRzIGluIERlY2s6IHtjYXJkc0luRGVja308L3A+XG4gICAgICA8cD5OdW1iZXIgb2YgQ2FyZHMgUmVtYWluaW5nOiB7Y2FyZHNJbkRlY2subGVuZ3RofTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFR3aXN0RGVjaztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkdoeXJhbkRlY2siLCJOYW1lIiwiRmxhdm91ciIsIlJ1bGVzIiwiVHdpc3REZWNrIiwiZ2V0UmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGVjayIsInNldERlY2siLCJjdXJyZW50Q2FyZCIsInNldEN1cnJlbnRDYXJkIiwiY2FyZHNJbkRlY2siLCJzZXRDYXJkc0luRGVjayIsImRyYXdDYXJkIiwidGVtcERlY2siLCJjYXJkc1JlbWFpbmluZyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkcmF3bkNhcmRBcnJheVZhbHVlIiwiZHJhd25DYXJkRGVja1ZhbHVlIiwic3BsaWNlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TwistDeck.js\n"));

/***/ })

});