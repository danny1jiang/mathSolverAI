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

/***/ "(app-pages-browser)/./src/pages/SelectProblem.js":
/*!************************************!*\
  !*** ./src/pages/SelectProblem.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectProblemComponent: () => (/* binding */ SelectProblemComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction SelectProblemComponent(param) {\n    var problems = param.problems;\n    if (problems === undefined) {\n        return null;\n    }\n    console.log(problems);\n    var problemComponents = [];\n    for(var i = 0; i < problems.length; i++){\n        problemComponents.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProblemComponent, {\n            problemLabel: problems[i]\n        }, i, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/pages/SelectProblem.js\",\n            lineNumber: 10,\n            columnNumber: 26\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: problemComponents\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/pages/SelectProblem.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_c = SelectProblemComponent;\nfunction ProblemComponent(param) {\n    var problemLabel = param.problemLabel;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: problemLabel\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/pages/SelectProblem.js\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/pages/SelectProblem.js\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, this);\n}\n_c1 = ProblemComponent;\nvar styles = {\n    container: {\n        flex: 1,\n        backgroundColor: \"#fff\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    }\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SelectProblemComponent\");\n$RefreshReg$(_c1, \"ProblemComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdlcy9TZWxlY3RQcm9ibGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLHVCQUF1QixLQUFVO1FBQVYsaUJBQUNDO0lBQ3ZDLElBQUlBLGFBQWFDLFdBQVc7UUFDM0IsT0FBTztJQUNSO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixJQUFJSSxvQkFBb0IsRUFBRTtJQUMxQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsU0FBU00sTUFBTSxFQUFFRCxJQUFLO1FBQ3pDRCxrQkFBa0JHLElBQUksZUFBQyw4REFBQ0M7WUFBeUJDLGNBQWNULFFBQVEsQ0FBQ0ssRUFBRTtXQUE1QkE7Ozs7O0lBQy9DO0lBRUEscUJBQU8sOERBQUNLO1FBQUlDLE9BQU9DLE9BQU9DLFNBQVM7a0JBQUdUOzs7Ozs7QUFDdkM7S0FiZ0JMO0FBZWhCLFNBQVNTLGlCQUFpQixLQUFjO1FBQWQscUJBQUNDO0lBQzFCLHFCQUNDLDhEQUFDQztrQkFDQSw0RUFBQ0k7c0JBQUlMOzs7Ozs7Ozs7OztBQUdSO01BTlNEO0FBUVQsSUFBTUksU0FBUztJQUNkQyxXQUFXO1FBQ1ZFLE1BQU07UUFDTkMsaUJBQWlCO1FBQ2pCQyxZQUFZO1FBQ1pDLGdCQUFnQjtJQUNqQjtBQUNEIiwic291cmNlcyI6WyIvVXNlcnMvZGFubnkvRG9jdW1lbnRzL3dlYi1kZXNpZ24vbWF0aC1zb2x2ZXItYWkvc3JjL3BhZ2VzL1NlbGVjdFByb2JsZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFByb2JsZW1Db21wb25lbnQoe3Byb2JsZW1zfSkge1xuXHRpZiAocHJvYmxlbXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc29sZS5sb2cocHJvYmxlbXMpO1xuXG5cdGxldCBwcm9ibGVtQ29tcG9uZW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2JsZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0cHJvYmxlbUNvbXBvbmVudHMucHVzaCg8UHJvYmxlbUNvbXBvbmVudCBrZXk9e2l9IHByb2JsZW1MYWJlbD17cHJvYmxlbXNbaV19IC8+KTtcblx0fVxuXG5cdHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT57cHJvYmxlbUNvbXBvbmVudHN9PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBQcm9ibGVtQ29tcG9uZW50KHtwcm9ibGVtTGFiZWx9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT57cHJvYmxlbUxhYmVsfTwvaDE+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcblx0Y29udGFpbmVyOiB7XG5cdFx0ZmxleDogMSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuXHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0anVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG5cdH0sXG59O1xuIl0sIm5hbWVzIjpbIlNlbGVjdFByb2JsZW1Db21wb25lbnQiLCJwcm9ibGVtcyIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9ibGVtQ29tcG9uZW50cyIsImkiLCJsZW5ndGgiLCJwdXNoIiwiUHJvYmxlbUNvbXBvbmVudCIsInByb2JsZW1MYWJlbCIsImRpdiIsInN0eWxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaDEiLCJmbGV4IiwiYmFja2dyb3VuZENvbG9yIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pages/SelectProblem.js\n"));

/***/ })

});