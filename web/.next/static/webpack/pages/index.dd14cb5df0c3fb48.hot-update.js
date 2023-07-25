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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/use-todo */ \"./src/hooks/use-todo.ts\");\n/* harmony import */ var _Notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notify */ \"./src/components/Notify.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Menu() {\n    _s();\n    const deleteAllTasks = (0,_hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo)((s)=>s.deleteAllTasks);\n    const [confirm, setConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOnDelete = ()=>{\n        // get the confirmation form checkbox\n        const confirm = document.getElementById(\"confirm\");\n        if (!confirm.checked) {\n            (0,_Notify__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n                message: \"You must confirm your action\",\n                type: \"error\"\n            });\n            return;\n        }\n        deleteAllTasks();\n        setConfirm(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-8 flex w-full items-start justify-between p-2 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold text-white\",\n                children: \"Marvelous v2.0\"\n            }, void 0, false, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            !confirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setConfirm(true),\n                className: \"cursor-pointer underline outline-none \",\n                children: \"delete all tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            confirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed inset-0 z-10 overflow-y-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex min-h-screen items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 transition-opacity\",\n                                \"aria-hidden\": \"true\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute inset-0 bg-gray-900 opacity-75\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mx-auto max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"border-b bg-gray-100 px-4 py-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-lg font-medium text-gray-900\",\n                                            children: \"Are you sure you want to delete all tasks?\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"flex flex-col text-gray-700\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"All tasks will be deleted and this action cannot be undone. You must confirm your action.\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"flex  items-center gap-2\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            name: \"confirm\",\n                                                            id: \"confirm\",\n                                                            type: \"checkbox\",\n                                                            className: \"\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                            htmlFor: \"confirm\",\n                                                            className: \"cursor-pointer font-bold\",\n                                                            children: \"I understand that tasks will be deleted\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-end border-t bg-gray-100 px-4 py-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: handleOnDelete,\n                                                className: \"rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700\",\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>setConfirm(false),\n                                                className: \"ml-2 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400\",\n                                                children: \"Cancel\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Menu, \"f1ejZ2DerZlfmjWHQucSWeb78qE=\", false, function() {\n    return [\n        _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo\n    ];\n});\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnRlcmZhY2UvTWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBRVU7QUFDWjtBQUNmLFNBQVNHOztJQUN0QixNQUFNQyxpQkFBaUJILHdEQUFPQSxDQUFDLENBQUNJLElBQU1BLEVBQUVELGNBQWM7SUFDdEQsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLGlCQUFpQjtRQUNyQixxQ0FBcUM7UUFDckMsTUFBTUYsVUFBVUcsU0FBU0MsY0FBYyxDQUFDO1FBQ3hDLElBQUksQ0FBQ0osUUFBUUssT0FBTyxFQUFFO1lBQ3BCVCxtREFBTUEsQ0FBQztnQkFBRVUsU0FBUztnQkFBZ0NDLE1BQU07WUFBUTtZQUNoRTtRQUNGO1FBQ0FUO1FBQ0FHLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWdDOzs7Ozs7WUFDN0MsQ0FBQ1QseUJBQ0EsOERBQUNXO2dCQUNDQyxTQUFTLElBQU1YLFdBQVc7Z0JBQzFCUSxXQUFVOzBCQUNYOzs7Ozs7WUFJRlQseUJBQ0M7MEJBRUUsNEVBQUNRO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUNDQyxXQUFVO2dDQUNWSSxlQUFZOzBDQUVaLDRFQUFDTDtvQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7MENBR2pCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDQzs0Q0FBR0QsV0FBVTtzREFBb0M7Ozs7Ozs7Ozs7O2tEQUtwRCw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNLOzRDQUFFTCxXQUFVOzs4REFDWCw4REFBQ007OERBQUs7Ozs7Ozs4REFJTiw4REFBQ0E7b0RBQUtOLFdBQVU7O3NFQUNkLDhEQUFDTzs0REFDQ0MsTUFBSzs0REFDTEMsSUFBRzs0REFDSFgsTUFBSzs0REFDTEUsV0FBVTs7Ozs7O3NFQUVaLDhEQUFDVTs0REFDQ0MsU0FBUTs0REFDUlgsV0FBVTtzRUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBT1AsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0U7Z0RBQ0NDLFNBQVNWO2dEQUNUTyxXQUFVOzBEQUNYOzs7Ozs7MERBR0QsOERBQUNFO2dEQUNDQyxTQUFTLElBQU1YLFdBQVc7Z0RBQzFCUSxXQUFVOzBEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbkI7R0F6RndCWjs7UUFDQ0Ysb0RBQU9BOzs7S0FEUkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW50ZXJmYWNlL01lbnUudHN4P2FlNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlVG9kbyB9IGZyb20gJ0AvaG9va3MvdXNlLXRvZG8nXG5pbXBvcnQgbm90aWZ5IGZyb20gJy4uL05vdGlmeSdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gIGNvbnN0IGRlbGV0ZUFsbFRhc2tzID0gdXNlVG9kbygocykgPT4gcy5kZWxldGVBbGxUYXNrcylcbiAgY29uc3QgW2NvbmZpcm0sIHNldENvbmZpcm1dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlT25EZWxldGUgPSAoKSA9PiB7XG4gICAgLy8gZ2V0IHRoZSBjb25maXJtYXRpb24gZm9ybSBjaGVja2JveFxuICAgIGNvbnN0IGNvbmZpcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICBpZiAoIWNvbmZpcm0uY2hlY2tlZCkge1xuICAgICAgbm90aWZ5KHsgbWVzc2FnZTogJ1lvdSBtdXN0IGNvbmZpcm0geW91ciBhY3Rpb24nLCB0eXBlOiAnZXJyb3InIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZGVsZXRlQWxsVGFza3MoKVxuICAgIHNldENvbmZpcm0oZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBmbGV4IHctZnVsbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC0yIHRleHQtd2hpdGVcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPk1hcnZlbG91cyB2Mi4wPC9oMj5cbiAgICAgIHshY29uZmlybSAmJiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maXJtKHRydWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHVuZGVybGluZSBvdXRsaW5lLW5vbmUgXCJcbiAgICAgICAgPlxuICAgICAgICAgIGRlbGV0ZSBhbGwgdGFza3NcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAge2NvbmZpcm0gJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIHsvKiBjcmVhdGUgYSBtb2RhbCB0byBjb25maXJtIHRoZSBhY3Rpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotMTAgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB0cmFuc2l0aW9uLW9wYWNpdHlcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JheS05MDAgb3BhY2l0eS03NVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctbGcgdHJhbnNmb3JtIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIGJnLXdoaXRlIHNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYmctZ3JheS0xMDAgcHgtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRhc2tzP1xuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgQWxsIHRhc2tzIHdpbGwgYmUgZGVsZXRlZCBhbmQgdGhpcyBhY3Rpb24gY2Fubm90IGJlXG4gICAgICAgICAgICAgICAgICAgICAgdW5kb25lLiBZb3UgbXVzdCBjb25maXJtIHlvdXIgYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEkgdW5kZXJzdGFuZCB0aGF0IHRhc2tzIHdpbGwgYmUgZGVsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBib3JkZXItdCBiZy1ncmF5LTEwMCBweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25EZWxldGV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctcmVkLTUwMCBweC00IHB5LTIgZm9udC1ib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctcmVkLTcwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbmZpcm0oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIHJvdW5kZWQgYmctZ3JheS0zMDAgcHgtNCBweS0yIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VUb2RvIiwibm90aWZ5IiwiTWVudSIsImRlbGV0ZUFsbFRhc2tzIiwicyIsImNvbmZpcm0iLCJzZXRDb25maXJtIiwiaGFuZGxlT25EZWxldGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2hlY2tlZCIsIm1lc3NhZ2UiLCJ0eXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1oaWRkZW4iLCJwIiwic3BhbiIsImlucHV0IiwibmFtZSIsImlkIiwibGFiZWwiLCJodG1sRm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/interface/Menu.tsx\n"));

/***/ })

});