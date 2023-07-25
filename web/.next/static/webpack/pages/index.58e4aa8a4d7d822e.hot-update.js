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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/use-todo */ \"./src/hooks/use-todo.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Menu() {\n    _s();\n    const deleteAllTasks = (0,_hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo)((s)=>s.deleteAllTasks);\n    const [confirm, setConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOnDelete = ()=>{\n        // get the confirmation form checkbox\n        const confirm = document.getElementById(\"confirm\");\n        if (!confirm.checked) {\n            return;\n        }\n        deleteAllTasks();\n        setConfirm(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-8 flex w-full items-start justify-between p-2 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold text-white\",\n                children: \"Marvelous v2.0\"\n            }, void 0, false, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            !confirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setConfirm(true),\n                className: \"cursor-pointer underline outline-none \",\n                children: \"delete all tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            confirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed inset-0 z-10 overflow-y-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex min-h-screen items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 transition-opacity\",\n                                \"aria-hidden\": \"true\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-gray-900 opacity-75\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mx-auto max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"border-b bg-gray-100 px-4 py-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-lg font-medium text-gray-900\",\n                                            children: \"Are you sure you want to delete all tasks?\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"flex flex-col text-gray-700\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"All tasks will be deleted and this action cannot be undone. asdfas\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"flex  items-center gap-2\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            name: \"confirm\",\n                                                            id: \"confirm\",\n                                                            type: \"checkbox\",\n                                                            className: \"\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            htmlFor: \"confirm\",\n                                                            className: \"cursor-pointer font-bold\",\n                                                            children: \"I understand my action\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-end border-t bg-gray-100 px-4 py-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: handleOnDelete,\n                                                className: \"rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700\",\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>setConfirm(false),\n                                                className: \"ml-2 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400\",\n                                                children: \"Cancel\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Menu, \"f1ejZ2DerZlfmjWHQucSWeb78qE=\", false, function() {\n    return [\n        _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo\n    ];\n});\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnRlcmZhY2UvTWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7QUFFVTtBQUMzQixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCRix3REFBT0EsQ0FBQyxDQUFDRyxJQUFNQSxFQUFFRCxjQUFjO0lBQ3RELE1BQU0sQ0FBQ0UsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNTyxpQkFBaUI7UUFDckIscUNBQXFDO1FBQ3JDLE1BQU1GLFVBQVVHLFNBQVNDLGNBQWMsQ0FBQztRQUN4QyxJQUFJLENBQUNKLFFBQVFLLE9BQU8sRUFBRTtZQUNwQjtRQUNGO1FBQ0FQO1FBQ0FHLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWdDOzs7Ozs7WUFDN0MsQ0FBQ1AseUJBQ0EsOERBQUNTO2dCQUNDQyxTQUFTLElBQU1ULFdBQVc7Z0JBQzFCTSxXQUFVOzBCQUNYOzs7Ozs7WUFJRlAseUJBQ0M7MEJBRUUsNEVBQUNNO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUNDQyxXQUFVO2dDQUNWSSxlQUFZOzBDQUVaLDRFQUFDTDtvQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7MENBR2pCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDQzs0Q0FBR0QsV0FBVTtzREFBb0M7Ozs7Ozs7Ozs7O2tEQUtwRCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNLOzRDQUFFTCxXQUFVOzs4REFDWCw4REFBQ007OERBQUs7Ozs7Ozs4REFJTiw4REFBQ0E7b0RBQUtOLFdBQVU7O3NFQUNkLDhEQUFDTzs0REFDQ0MsTUFBSzs0REFDTEMsSUFBRzs0REFDSEMsTUFBSzs0REFDTFYsV0FBVTs7Ozs7O3NFQUVaLDhEQUFDVzs0REFDQ0MsU0FBUTs0REFDUlosV0FBVTtzRUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBT1AsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0U7Z0RBQ0NDLFNBQVNSO2dEQUNUSyxXQUFVOzBEQUNYOzs7Ozs7MERBR0QsOERBQUNFO2dEQUNDQyxTQUFTLElBQU1ULFdBQVc7Z0RBQzFCTSxXQUFVOzBEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkI7R0F4RndCVjs7UUFDQ0Qsb0RBQU9BOzs7S0FEUkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW50ZXJmYWNlL01lbnUudHN4P2FlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlVG9kbyB9IGZyb20gJ0AvaG9va3MvdXNlLXRvZG8nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICBjb25zdCBkZWxldGVBbGxUYXNrcyA9IHVzZVRvZG8oKHMpID0+IHMuZGVsZXRlQWxsVGFza3MpXG4gIGNvbnN0IFtjb25maXJtLCBzZXRDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZU9uRGVsZXRlID0gKCkgPT4ge1xuICAgIC8vIGdldCB0aGUgY29uZmlybWF0aW9uIGZvcm0gY2hlY2tib3hcbiAgICBjb25zdCBjb25maXJtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0nKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgaWYgKCFjb25maXJtLmNoZWNrZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBkZWxldGVBbGxUYXNrcygpXG4gICAgc2V0Q29uZmlybShmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IGZsZXggdy1mdWxsIGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTIgdGV4dC13aGl0ZVwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+TWFydmVsb3VzIHYyLjA8L2gyPlxuICAgICAgeyFjb25maXJtICYmIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbmZpcm0odHJ1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdW5kZXJsaW5lIG91dGxpbmUtbm9uZSBcIlxuICAgICAgICA+XG4gICAgICAgICAgZGVsZXRlIGFsbCB0YXNrc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7Y29uZmlybSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgey8qIGNyZWF0ZSBhIG1vZGFsIHRvIGNvbmZpcm0gdGhlIGFjdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei0xMCBvdmVyZmxvdy15LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHRyYW5zaXRpb24tb3BhY2l0eVwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmF5LTkwMCBvcGFjaXR5LTc1XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1sZyB0cmFuc2Zvcm0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctd2hpdGUgc2hhZG93LXhsIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBiZy1ncmF5LTEwMCBweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgdGFza3M/XG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICBBbGwgdGFza3Mgd2lsbCBiZSBkZWxldGVkIGFuZCB0aGlzIGFjdGlvbiBjYW5ub3QgYmVcbiAgICAgICAgICAgICAgICAgICAgICB1bmRvbmUuIGFzZGZhc1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEkgdW5kZXJzdGFuZCBteSBhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgYm9yZGVyLXQgYmctZ3JheS0xMDAgcHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLXJlZC01MDAgcHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXJlZC03MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maXJtKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiByb3VuZGVkIGJnLWdyYXktMzAwIHB4LTQgcHktMiBmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlVG9kbyIsIk1lbnUiLCJkZWxldGVBbGxUYXNrcyIsInMiLCJjb25maXJtIiwic2V0Q29uZmlybSIsImhhbmRsZU9uRGVsZXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhcmlhLWhpZGRlbiIsInAiLCJzcGFuIiwiaW5wdXQiLCJuYW1lIiwiaWQiLCJ0eXBlIiwibGFiZWwiLCJodG1sRm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/interface/Menu.tsx\n"));

/***/ })

});