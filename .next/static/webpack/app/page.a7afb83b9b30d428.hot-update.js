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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst AqshyDeck = [\n    {\n        Name: \"LET THE BLOOD FLOW\",\n        Text1: \"The underdog can pick one of the effects below. If there is no underdog, the players roll off and the winner picks the effect.\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"WREATHED IN SMOKE\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"AQSHY3\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"AQSHY4\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"AQSHY5\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"AQSHY6\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    }\n];\nconst GhyranDeck = [\n    {\n        Name: \"ALARIELLE'S BLESSING\",\n        Text1: \"The underdog can pick one of the effects below. If there is no underdog, the players roll off and the winner picks the effect.\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"GRASPING VINES\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"THE GRANDFATHER'S BLESSING:\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"RECLAIM GHYRAN\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"TAKE THE LAND\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    },\n    {\n        Name: \"LIFESPRING\",\n        Text1: \"Some Flavour Text\",\n        Text2: \"Some Rule Test\",\n        Text3: \"Text3\"\n    }\n];\nfunction getRandomInt(max) {\n    return Math.floor(Math.random() * (max - 1));\n}\nconst TwistDeck = ()=>{\n    _s();\n    const [deck, setDeck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [deckName, setDeckName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Please Select a Deck\");\n    const [currentCard, setCurrentCard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [cardsInDeck, setCardsInDeck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        0,\n        1,\n        2,\n        3,\n        4,\n        5\n    ]);\n    const drawCard = ()=>{\n        let tempDeck = [\n            ...cardsInDeck\n        ];\n        const drawnCardArrayValue = getRandomInt(cardsInDeck.length);\n        const drawnCardDeckValue = cardsInDeck[drawnCardArrayValue];\n        setCurrentCard(deck[drawnCardDeckValue]);\n        tempDeck.splice(drawnCardArrayValue, 1);\n        setCardsInDeck(tempDeck);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Selected Deck: \",\n                            deckName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setDeck(GhyranDeck);\n                            setDeckName(\"Ghyran\");\n                        },\n                        className: \"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded\",\n                        disabled: deckName != \"Please Select a Deck\",\n                        children: \"Ghyran\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setDeck(AqshyDeck);\n                            setDeckName(\"Aqshy\");\n                        },\n                        className: \"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded\",\n                        disabled: deckName != \"Please Select a Deck\",\n                        children: \"Aqshy\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: drawCard,\n                        disabled: cardsInDeck.length === 0 || !deck,\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        children: \"Draw Twist Card\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Current Card: \",\n                            currentCard && currentCard.Name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Turn: \",\n                            6 - cardsInDeck.length\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stevenmorrell/Development/spearhead/app/components/TwistDeck.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TwistDeck, \"FdxWFte6rbYRpcdaSlLNzT6BCqA=\");\n_c = TwistDeck;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TwistDeck);\nvar _c;\n$RefreshReg$(_c, \"TwistDeck\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1R3aXN0RGVjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFaUM7QUFFakMsTUFBTUMsWUFBWTtJQUNoQjtRQUNFQyxNQUFNO1FBQ05DLE9BQ0U7UUFDRkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFSCxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7Q0FDRDtBQUVELE1BQU1DLGFBQWE7SUFDakI7UUFDRUosTUFBTTtRQUNOQyxPQUNFO1FBQ0ZDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsT0FBTztJQUNUO0NBQ0Q7QUFFRCxTQUFTRSxhQUFhQyxHQUFHO0lBQ3ZCLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFNSCxDQUFBQSxNQUFNO0FBQzNDO0FBRUEsTUFBTUksWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDaUIsYUFBYUMsZUFBZSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7UUFBQztRQUFHO1FBQUc7UUFBRztRQUFHO1FBQUc7S0FBRTtJQUVqRSxNQUFNcUIsV0FBVztRQUNmLElBQUlDLFdBQVc7ZUFBSUg7U0FBWTtRQUMvQixNQUFNSSxzQkFBc0JoQixhQUFhWSxZQUFZSyxNQUFNO1FBQzNELE1BQU1DLHFCQUFxQk4sV0FBVyxDQUFDSSxvQkFBb0I7UUFDM0RMLGVBQWVMLElBQUksQ0FBQ1ksbUJBQW1CO1FBQ3ZDSCxTQUFTSSxNQUFNLENBQUNILHFCQUFxQjtRQUNyQ0gsZUFBZUU7SUFDakI7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7OzRCQUFFOzRCQUFnQmQ7Ozs7Ozs7a0NBQ25CLDhEQUFDZTt3QkFDQ0MsU0FBUzs0QkFDUGpCLFFBQVFSOzRCQUNSVSxZQUFZO3dCQUNkO3dCQUNBWSxXQUFVO3dCQUNWSSxVQUFVakIsWUFBWTtrQ0FDdkI7Ozs7OztrQ0FHRCw4REFBQ2U7d0JBQ0NDLFNBQVM7NEJBQ1BqQixRQUFRYjs0QkFDUmUsWUFBWTt3QkFDZDt3QkFDQVksV0FBVTt3QkFDVkksVUFBVWpCLFlBQVk7a0NBQ3ZCOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUNZO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NDLFNBQVNWO3dCQUNUVyxVQUFVYixZQUFZSyxNQUFNLEtBQUssS0FBSyxDQUFDWDt3QkFDdkNlLFdBQVU7a0NBQ1g7Ozs7OztrQ0FJRCw4REFBQ0M7OzRCQUFFOzRCQUFlWixlQUFlQSxZQUFZZixJQUFJOzs7Ozs7O2tDQUNqRCw4REFBQzJCOzs0QkFBRTs0QkFBTyxJQUFJVixZQUFZSyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDO0dBdERNWjtLQUFBQTtBQXdETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ud2lzdERlY2suanM/MTA3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXFzaHlEZWNrID0gW1xuICB7XG4gICAgTmFtZTogXCJMRVQgVEhFIEJMT09EIEZMT1dcIixcbiAgICBUZXh0MTpcbiAgICAgIFwiVGhlIHVuZGVyZG9nIGNhbiBwaWNrIG9uZSBvZiB0aGUgZWZmZWN0cyBiZWxvdy4gSWYgdGhlcmUgaXMgbm8gdW5kZXJkb2csIHRoZSBwbGF5ZXJzIHJvbGwgb2ZmIGFuZCB0aGUgd2lubmVyIHBpY2tzIHRoZSBlZmZlY3QuXCIsXG4gICAgVGV4dDI6IFwiU29tZSBSdWxlIFRlc3RcIixcbiAgICBUZXh0MzogXCJUZXh0M1wiLFxuICB9LFxuICB7XG4gICAgTmFtZTogXCJXUkVBVEhFRCBJTiBTTU9LRVwiLFxuICAgIFRleHQxOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsXG4gICAgVGV4dDI6IFwiU29tZSBSdWxlIFRlc3RcIixcbiAgICBUZXh0MzogXCJUZXh0M1wiLFxuICB9LFxuICB7XG4gICAgTmFtZTogXCJBUVNIWTNcIixcbiAgICBUZXh0MTogXCJTb21lIEZsYXZvdXIgVGV4dFwiLFxuICAgIFRleHQyOiBcIlNvbWUgUnVsZSBUZXN0XCIsXG4gICAgVGV4dDM6IFwiVGV4dDNcIixcbiAgfSxcbiAge1xuICAgIE5hbWU6IFwiQVFTSFk0XCIsXG4gICAgVGV4dDE6IFwiU29tZSBGbGF2b3VyIFRleHRcIixcbiAgICBUZXh0MjogXCJTb21lIFJ1bGUgVGVzdFwiLFxuICAgIFRleHQzOiBcIlRleHQzXCIsXG4gIH0sXG4gIHtcbiAgICBOYW1lOiBcIkFRU0hZNVwiLFxuICAgIFRleHQxOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsXG4gICAgVGV4dDI6IFwiU29tZSBSdWxlIFRlc3RcIixcbiAgICBUZXh0MzogXCJUZXh0M1wiLFxuICB9LFxuICB7XG4gICAgTmFtZTogXCJBUVNIWTZcIixcbiAgICBUZXh0MTogXCJTb21lIEZsYXZvdXIgVGV4dFwiLFxuICAgIFRleHQyOiBcIlNvbWUgUnVsZSBUZXN0XCIsXG4gICAgVGV4dDM6IFwiVGV4dDNcIixcbiAgfSxcbl07XG5cbmNvbnN0IEdoeXJhbkRlY2sgPSBbXG4gIHtcbiAgICBOYW1lOiBcIkFMQVJJRUxMRSdTIEJMRVNTSU5HXCIsXG4gICAgVGV4dDE6XG4gICAgICBcIlRoZSB1bmRlcmRvZyBjYW4gcGljayBvbmUgb2YgdGhlIGVmZmVjdHMgYmVsb3cuIElmIHRoZXJlIGlzIG5vIHVuZGVyZG9nLCB0aGUgcGxheWVycyByb2xsIG9mZiBhbmQgdGhlIHdpbm5lciBwaWNrcyB0aGUgZWZmZWN0LlwiLFxuICAgIFRleHQyOiBcIlNvbWUgUnVsZSBUZXN0XCIsXG4gICAgVGV4dDM6IFwiVGV4dDNcIixcbiAgfSxcbiAge1xuICAgIE5hbWU6IFwiR1JBU1BJTkcgVklORVNcIixcbiAgICBUZXh0MTogXCJTb21lIEZsYXZvdXIgVGV4dFwiLFxuICAgIFRleHQyOiBcIlNvbWUgUnVsZSBUZXN0XCIsXG4gICAgVGV4dDM6IFwiVGV4dDNcIixcbiAgfSxcbiAge1xuICAgIE5hbWU6IFwiVEhFIEdSQU5ERkFUSEVSJ1MgQkxFU1NJTkc6XCIsXG4gICAgVGV4dDE6IFwiU29tZSBGbGF2b3VyIFRleHRcIixcbiAgICBUZXh0MjogXCJTb21lIFJ1bGUgVGVzdFwiLFxuICAgIFRleHQzOiBcIlRleHQzXCIsXG4gIH0sXG4gIHtcbiAgICBOYW1lOiBcIlJFQ0xBSU0gR0hZUkFOXCIsXG4gICAgVGV4dDE6IFwiU29tZSBGbGF2b3VyIFRleHRcIixcbiAgICBUZXh0MjogXCJTb21lIFJ1bGUgVGVzdFwiLFxuICAgIFRleHQzOiBcIlRleHQzXCIsXG4gIH0sXG4gIHtcbiAgICBOYW1lOiBcIlRBS0UgVEhFIExBTkRcIixcbiAgICBUZXh0MTogXCJTb21lIEZsYXZvdXIgVGV4dFwiLFxuICAgIFRleHQyOiBcIlNvbWUgUnVsZSBUZXN0XCIsXG4gICAgVGV4dDM6IFwiVGV4dDNcIixcbiAgfSxcbiAge1xuICAgIE5hbWU6IFwiTElGRVNQUklOR1wiLFxuICAgIFRleHQxOiBcIlNvbWUgRmxhdm91ciBUZXh0XCIsXG4gICAgVGV4dDI6IFwiU29tZSBSdWxlIFRlc3RcIixcbiAgICBUZXh0MzogXCJUZXh0M1wiLFxuICB9LFxuXTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIDEpKTtcbn1cblxuY29uc3QgVHdpc3REZWNrID0gKCkgPT4ge1xuICBjb25zdCBbZGVjaywgc2V0RGVja10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RlY2tOYW1lLCBzZXREZWNrTmFtZV0gPSB1c2VTdGF0ZShcIlBsZWFzZSBTZWxlY3QgYSBEZWNrXCIpO1xuICBjb25zdCBbY3VycmVudENhcmQsIHNldEN1cnJlbnRDYXJkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2FyZHNJbkRlY2ssIHNldENhcmRzSW5EZWNrXSA9IHVzZVN0YXRlKFswLCAxLCAyLCAzLCA0LCA1XSk7XG5cbiAgY29uc3QgZHJhd0NhcmQgPSAoKSA9PiB7XG4gICAgbGV0IHRlbXBEZWNrID0gWy4uLmNhcmRzSW5EZWNrXTtcbiAgICBjb25zdCBkcmF3bkNhcmRBcnJheVZhbHVlID0gZ2V0UmFuZG9tSW50KGNhcmRzSW5EZWNrLmxlbmd0aCk7XG4gICAgY29uc3QgZHJhd25DYXJkRGVja1ZhbHVlID0gY2FyZHNJbkRlY2tbZHJhd25DYXJkQXJyYXlWYWx1ZV07XG4gICAgc2V0Q3VycmVudENhcmQoZGVja1tkcmF3bkNhcmREZWNrVmFsdWVdKTtcbiAgICB0ZW1wRGVjay5zcGxpY2UoZHJhd25DYXJkQXJyYXlWYWx1ZSwgMSk7XG4gICAgc2V0Q2FyZHNJbkRlY2sodGVtcERlY2spO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTZcIj5cbiAgICAgICAgPHA+U2VsZWN0ZWQgRGVjazoge2RlY2tOYW1lfTwvcD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldERlY2soR2h5cmFuRGVjayk7XG4gICAgICAgICAgICBzZXREZWNrTmFtZShcIkdoeXJhblwiKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgIGRpc2FibGVkPXtkZWNrTmFtZSAhPSBcIlBsZWFzZSBTZWxlY3QgYSBEZWNrXCJ9XG4gICAgICAgID5cbiAgICAgICAgICBHaHlyYW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXREZWNrKEFxc2h5RGVjayk7XG4gICAgICAgICAgICBzZXREZWNrTmFtZShcIkFxc2h5XCIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZGVja05hbWUgIT0gXCJQbGVhc2UgU2VsZWN0IGEgRGVja1wifVxuICAgICAgICA+XG4gICAgICAgICAgQXFzaHlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS02XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtkcmF3Q2FyZH1cbiAgICAgICAgICBkaXNhYmxlZD17Y2FyZHNJbkRlY2subGVuZ3RoID09PSAwIHx8ICFkZWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIERyYXcgVHdpc3QgQ2FyZFxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8cD5DdXJyZW50IENhcmQ6IHtjdXJyZW50Q2FyZCAmJiBjdXJyZW50Q2FyZC5OYW1lfTwvcD5cbiAgICAgICAgPHA+VHVybjogezYgLSBjYXJkc0luRGVjay5sZW5ndGh9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUd2lzdERlY2s7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBcXNoeURlY2siLCJOYW1lIiwiVGV4dDEiLCJUZXh0MiIsIlRleHQzIiwiR2h5cmFuRGVjayIsImdldFJhbmRvbUludCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlR3aXN0RGVjayIsImRlY2siLCJzZXREZWNrIiwiZGVja05hbWUiLCJzZXREZWNrTmFtZSIsImN1cnJlbnRDYXJkIiwic2V0Q3VycmVudENhcmQiLCJjYXJkc0luRGVjayIsInNldENhcmRzSW5EZWNrIiwiZHJhd0NhcmQiLCJ0ZW1wRGVjayIsImRyYXduQ2FyZEFycmF5VmFsdWUiLCJsZW5ndGgiLCJkcmF3bkNhcmREZWNrVmFsdWUiLCJzcGxpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TwistDeck.js\n"));

/***/ })

});