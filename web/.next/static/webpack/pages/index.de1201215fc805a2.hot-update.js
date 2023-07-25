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

/***/ "./src/components/features/home/Task.tsx":
/*!***********************************************!*\
  !*** ./src/components/features/home/Task.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n/* harmony import */ var _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/use-todo */ \"./src/hooks/use-todo.ts\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"../node_modules/clsx/dist/clsx.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Task(param) {\n    let { task } = param;\n    _s();\n    const { title, state, id } = task;\n    const { deleteTask, setDragTask, markAsDone } = (0,_hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo)((s)=>({\n            deleteTask: s.deleteTask,\n            setDragTask: s.setDraggedTask,\n            markAsDone: s.markAsDone\n        }));\n    const handleDeleteTask = ()=>{\n        deleteTask(id);\n    };\n    const handleMarkAsDone = ()=>{\n        markAsDone(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            draggable: true,\n            onDragStart: ()=>setDragTask(task.id),\n            className: \"flex cursor-move flex-col items-start gap-2 rounded-lg bg-white p-2 \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            onChange: handleMarkAsDone,\n                            disabled: state === \"DONE\",\n                            checked: state === \"DONE\",\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(\"cursor-pointer rounded-md border-2 border-gray-300\", state === \"DONE\" && \"bg-tertiary\")\n                        }, void 0, false, {\n                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/features/home/Task.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm font-normal\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/features/home/Task.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/features/home/Task.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full flex-1 items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_feather__WEBPACK_IMPORTED_MODULE_4__.Trash, {\n                            size: 16,\n                            onClick: handleDeleteTask,\n                            className: \"cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/features/home/Task.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.clsx)(\"rounded-md bg-tertiary p-1 text-sm\", {\n                                \"bg-green-800\": state === \"DONE\"\n                            }),\n                            children: state\n                        }, void 0, false, {\n                            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/features/home/Task.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/features/home/Task.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/features/home/Task.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Task, \"d6l2JdgpO5EH1OTeZGSxaeCPsNE=\", false, function() {\n    return [\n        _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo\n    ];\n});\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlcy9ob21lL1Rhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUNLO0FBQ2Y7QUFLWixTQUFTSSxLQUFLLEtBQW1CO1FBQW5CLEVBQUVDLElBQUksRUFBYSxHQUFuQjs7SUFDM0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsRUFBRSxFQUFFLEdBQUdIO0lBQzdCLE1BQU0sRUFBRUksVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFVBQVUsRUFBRSxHQUFHVCx3REFBT0EsQ0FBQyxDQUFDVSxJQUFPO1lBQzlESCxZQUFZRyxFQUFFSCxVQUFVO1lBQ3hCQyxhQUFhRSxFQUFFQyxjQUFjO1lBQzdCRixZQUFZQyxFQUFFRCxVQUFVO1FBQzFCO0lBRUEsTUFBTUcsbUJBQW1CO1FBQ3ZCTCxXQUFXRDtJQUNiO0lBRUEsTUFBTU8sbUJBQW1CO1FBQ3ZCSixXQUFXSDtJQUNiO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNRO1lBQ0NDLFNBQVM7WUFDVEMsYUFBYSxJQUFNUixZQUFZTCxLQUFLRyxFQUFFO1lBQ3RDVyxXQUFVOzs4QkFFViw4REFBQ0g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTEMsVUFBVVA7NEJBQ1ZRLFVBQVVoQixVQUFVOzRCQUNwQmlCLFNBQVNqQixVQUFVOzRCQUNuQlksV0FBV2hCLDBDQUFJQSxDQUNiLHNEQUNBSSxVQUFVLFVBQVU7Ozs7OztzQ0FHeEIsOERBQUNrQjs0QkFBS04sV0FBVTtzQ0FBdUJiOzs7Ozs7Ozs7Ozs7OEJBRXpDLDhEQUFDVTtvQkFBSUcsV0FBVTs7c0NBQ2IsOERBQUNsQixnREFBS0E7NEJBQ0p5QixNQUFNOzRCQUNOQyxTQUFTYjs0QkFDVEssV0FBVTs7Ozs7O3NDQUVaLDhEQUFDTTs0QkFDQ04sV0FBV2hCLDBDQUFJQSxDQUFDLHNDQUFzQztnQ0FDcEQsZ0JBQWdCSSxVQUFVOzRCQUM1QjtzQ0FFQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtHQXJEd0JIOztRQUUwQkYsb0RBQU9BOzs7S0FGakNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVzL2hvbWUvVGFzay50c3g/OWZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFzaCB9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5pbXBvcnQgeyB1c2VUb2RvIH0gZnJvbSAnQC9ob29rcy91c2UtdG9kbydcbmltcG9ydCB7IGNsc3ggfSBmcm9tICdjbHN4J1xudHlwZSBUYXNrUHJvcHMgPSB7XG4gIHRhc2s6IFRhc2tcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh7IHRhc2sgfTogVGFza1Byb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIHN0YXRlLCBpZCB9ID0gdGFza1xuICBjb25zdCB7IGRlbGV0ZVRhc2ssIHNldERyYWdUYXNrLCBtYXJrQXNEb25lIH0gPSB1c2VUb2RvKChzKSA9PiAoe1xuICAgIGRlbGV0ZVRhc2s6IHMuZGVsZXRlVGFzayxcbiAgICBzZXREcmFnVGFzazogcy5zZXREcmFnZ2VkVGFzayxcbiAgICBtYXJrQXNEb25lOiBzLm1hcmtBc0RvbmUsXG4gIH0pKVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRhc2sgPSAoKSA9PiB7XG4gICAgZGVsZXRlVGFzayhpZClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU1hcmtBc0RvbmUgPSAoKSA9PiB7XG4gICAgbWFya0FzRG9uZShpZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgIG9uRHJhZ1N0YXJ0PXsoKSA9PiBzZXREcmFnVGFzayh0YXNrLmlkKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItbW92ZSBmbGV4LWNvbCBpdGVtcy1zdGFydCBnYXAtMiByb3VuZGVkLWxnIGJnLXdoaXRlIHAtMiBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNYXJrQXNEb25lfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N0YXRlID09PSAnRE9ORSd9XG4gICAgICAgICAgICBjaGVja2VkPXtzdGF0ZSA9PT0gJ0RPTkUnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAnY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAnLFxuICAgICAgICAgICAgICBzdGF0ZSA9PT0gJ0RPTkUnICYmICdiZy10ZXJ0aWFyeSdcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbm9ybWFsXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8VHJhc2hcbiAgICAgICAgICAgIHNpemU9ezE2fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlVGFza31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3JvdW5kZWQtbWQgYmctdGVydGlhcnkgcC0xIHRleHQtc20nLCB7XG4gICAgICAgICAgICAgICdiZy1ncmVlbi04MDAnOiBzdGF0ZSA9PT0gJ0RPTkUnLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N0YXRlfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVHJhc2giLCJ1c2VUb2RvIiwiY2xzeCIsIlRhc2siLCJ0YXNrIiwidGl0bGUiLCJzdGF0ZSIsImlkIiwiZGVsZXRlVGFzayIsInNldERyYWdUYXNrIiwibWFya0FzRG9uZSIsInMiLCJzZXREcmFnZ2VkVGFzayIsImhhbmRsZURlbGV0ZVRhc2siLCJoYW5kbGVNYXJrQXNEb25lIiwiZGl2IiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwiY2hlY2tlZCIsInNwYW4iLCJzaXplIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/features/home/Task.tsx\n"));

/***/ })

});