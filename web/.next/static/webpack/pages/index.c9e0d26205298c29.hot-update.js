"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/interface/Menu.tsx":
/*!*******************************************!*\
  !*** ./src/components/interface/Menu.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/use-todo */ \"./src/hooks/use-todo.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Menu() {\n    _s();\n    const deleteAllTasks = (0,_hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo)((s)=>s.deleteAllTasks);\n    const [confirm, setConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-8 flex w-full items-start justify-between p-2 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold text-white\",\n                children: \"Marvelous v2.0\"\n            }, void 0, false, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            !confirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setConfirm(true),\n                className: \"cursor-pointer underline outline-none \",\n                children: \"delete all tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            confirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"fixed inset-0 z-10 overflow-y-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex min-h-screen items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"fixed inset-0 transition-opacity\",\n                                \"aria-hidden\": \"true\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"absolute inset-0 bg-gray-500 opacity-75\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"mx-auto max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"border-b bg-gray-100 px-4 py-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            class: \"text-lg font-medium text-gray-900\",\n                                            children: \"Modal Title\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"p-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            class: \"text-gray-700\",\n                                            children: \"Modal content goes here.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"flex justify-end border-t bg-gray-100 px-4 py-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                class: \"rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700\",\n                                                children: \"Save\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                class: \"ml-2 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400\",\n                                                children: \"Cancel\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Menu, \"f1ejZ2DerZlfmjWHQucSWeb78qE=\", false, function() {\n    return [\n        _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo\n    ];\n});\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnRlcmZhY2UvTWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7QUFFVTtBQUMzQixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCRix3REFBT0EsQ0FBQyxDQUFDRyxJQUFNQSxFQUFFRCxjQUFjO0lBQ3RELE1BQU0sQ0FBQ0UsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV2QyxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFnQzs7Ozs7O1lBQzdDLENBQUNILHlCQUNBLDhEQUFDSztnQkFDQ0MsU0FBUyxJQUFNTCxXQUFXO2dCQUMxQkUsV0FBVTswQkFDWDs7Ozs7O1lBSUZILHlCQUNDOzBCQUVFLDRFQUFDRTtvQkFBSUssT0FBTTs4QkFDVCw0RUFBQ0w7d0JBQUlLLE9BQU07OzBDQUNULDhEQUFDTDtnQ0FBSUssT0FBTTtnQ0FBbUNDLGVBQVk7MENBQ3hELDRFQUFDTjtvQ0FBSUssT0FBTTs7Ozs7Ozs7Ozs7MENBR2IsOERBQUNMO2dDQUFJSyxPQUFNOztrREFDVCw4REFBQ0w7d0NBQUlLLE9BQU07a0RBQ1QsNEVBQUNIOzRDQUFHRyxPQUFNO3NEQUFvQzs7Ozs7Ozs7Ozs7a0RBR2hELDhEQUFDTDt3Q0FBSUssT0FBTTtrREFDVCw0RUFBQ0U7NENBQUVGLE9BQU07c0RBQWdCOzs7Ozs7Ozs7OztrREFHM0IsOERBQUNMO3dDQUFJSyxPQUFNOzswREFDVCw4REFBQ0Y7Z0RBQU9FLE9BQU07MERBQXVFOzs7Ozs7MERBR3JGLDhEQUFDRjtnREFBT0UsT0FBTTswREFBK0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCL0c7R0E3RHdCVjs7UUFDQ0Qsb0RBQU9BOzs7S0FEUkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW50ZXJmYWNlL01lbnUudHN4P2FlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlVG9kbyB9IGZyb20gJ0AvaG9va3MvdXNlLXRvZG8nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICBjb25zdCBkZWxldGVBbGxUYXNrcyA9IHVzZVRvZG8oKHMpID0+IHMuZGVsZXRlQWxsVGFza3MpXG4gIGNvbnN0IFtjb25maXJtLCBzZXRDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IGZsZXggdy1mdWxsIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTIgdGV4dC13aGl0ZVwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+TWFydmVsb3VzIHYyLjA8L2gyPlxuICAgICAgeyFjb25maXJtICYmIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbmZpcm0odHJ1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdW5kZXJsaW5lIG91dGxpbmUtbm9uZSBcIlxuICAgICAgICA+XG4gICAgICAgICAgZGVsZXRlIGFsbCB0YXNrc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7Y29uZmlybSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgey8qIGNyZWF0ZSBhIG1vZGFsIHRvIGNvbmZpcm0gdGhlIGFjdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LTEwIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB0cmFuc2l0aW9uLW9wYWNpdHlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmF5LTUwMCBvcGFjaXR5LTc1XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteC1hdXRvIG1heC13LWxnIHRyYW5zZm9ybSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy13aGl0ZSBzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLWIgYmctZ3JheS0xMDAgcHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5Nb2RhbCBUaXRsZTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtZ3JheS03MDBcIj5Nb2RhbCBjb250ZW50IGdvZXMgaGVyZS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCBib3JkZXItdCBiZy1ncmF5LTEwMCBweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyb3VuZGVkIGJnLWJsdWUtNTAwIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtbC0yIHJvdW5kZWQgYmctZ3JheS0zMDAgcHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogPHNwYW4+YXNkZmFzPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVBbGxUYXNrc30gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgeWVzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q29uZmlybShmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgbm9cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VUb2RvIiwiTWVudSIsImRlbGV0ZUFsbFRhc2tzIiwicyIsImNvbmZpcm0iLCJzZXRDb25maXJtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3MiLCJhcmlhLWhpZGRlbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/interface/Menu.tsx\n"));

/***/ })

});