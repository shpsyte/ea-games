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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/use-todo */ \"./src/hooks/use-todo.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Menu() {\n    _s();\n    const deleteAllTasks = (0,_hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo)((s)=>s.deleteAllTasks);\n    const [confirm, setConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-8 flex w-full items-start justify-between p-2 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold text-white\",\n                children: \"Marvelous v2.0\"\n            }, void 0, false, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            !confirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setConfirm(true),\n                className: \"cursor-pointer underline outline-none \",\n                children: \"delete all tasks\"\n            }, void 0, false, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            confirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: deleteAllTasks,\n                        className: \"cursor-pointer\",\n                        children: \"yes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setConfirm(false),\n                        className: \"cursor-pointer\",\n                        children: \"no\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joseluiz/Study/ea-games/web/src/components/interface/Menu.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(Menu, \"f1ejZ2DerZlfmjWHQucSWeb78qE=\", false, function() {\n    return [\n        _hooks_use_todo__WEBPACK_IMPORTED_MODULE_2__.useTodo\n    ];\n});\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnRlcmZhY2UvTWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7QUFFVTtBQUMzQixTQUFTRTs7SUFDdEIsTUFBTUMsaUJBQWlCRix3REFBT0EsQ0FBQyxDQUFDRyxJQUFNQSxFQUFFRCxjQUFjO0lBQ3RELE1BQU0sQ0FBQ0UsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV2QyxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFnQzs7Ozs7O1lBQzdDLENBQUNILHlCQUNBLDhEQUFDSztnQkFDQ0MsU0FBUyxJQUFNTCxXQUFXO2dCQUMxQkUsV0FBVTswQkFDWDs7Ozs7O1lBSUZILHlCQUNDLDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFPQyxTQUFTUjt3QkFBZ0JLLFdBQVU7a0NBQWlCOzs7Ozs7a0NBRzVELDhEQUFDRTt3QkFBT0MsU0FBUyxJQUFNTCxXQUFXO3dCQUFRRSxXQUFVO2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9FO0dBM0J3Qk47O1FBQ0NELG9EQUFPQTs7O0tBRFJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ludGVyZmFjZS9NZW51LnRzeD9hZTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZVRvZG8gfSBmcm9tICdAL2hvb2tzL3VzZS10b2RvJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgY29uc3QgZGVsZXRlQWxsVGFza3MgPSB1c2VUb2RvKChzKSA9PiBzLmRlbGV0ZUFsbFRhc2tzKVxuICBjb25zdCBbY29uZmlybSwgc2V0Q29uZmlybV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBmbGV4IHctZnVsbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC0yIHRleHQtd2hpdGVcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPk1hcnZlbG91cyB2Mi4wPC9oMj5cbiAgICAgIHshY29uZmlybSAmJiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb25maXJtKHRydWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHVuZGVybGluZSBvdXRsaW5lLW5vbmUgXCJcbiAgICAgICAgPlxuICAgICAgICAgIGRlbGV0ZSBhbGwgdGFza3NcbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgICAge2NvbmZpcm0gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGdhcC0yXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVBbGxUYXNrc30gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIHllc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q29uZmlybShmYWxzZSl9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICBub1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVRvZG8iLCJNZW51IiwiZGVsZXRlQWxsVGFza3MiLCJzIiwiY29uZmlybSIsInNldENvbmZpcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/interface/Menu.tsx\n"));

/***/ })

});