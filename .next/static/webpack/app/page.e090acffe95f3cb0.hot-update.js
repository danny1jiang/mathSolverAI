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

/***/ "(app-pages-browser)/./src/components/ChatResponse.js":
/*!****************************************!*\
  !*** ./src/components/ChatResponse.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatResponseComponent: () => (/* binding */ ChatResponseComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var better_react_mathjax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! better-react-mathjax */ \"(app-pages-browser)/./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js\");\n/* harmony import */ var better_react_mathjax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! better-react-mathjax */ \"(app-pages-browser)/./node_modules/better-react-mathjax/esm/MathJax/MathJax.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-react-parser */ \"(app-pages-browser)/./node_modules/html-react-parser/esm/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ ChatResponseComponent auto */ \n\n\nfunction ChatResponseComponent(param) {\n    var response = param.response;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(better_react_mathjax__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: styles.container,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(better_react_mathjax__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                renderMode: \"post\",\n                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(response)\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/ChatResponse.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/ChatResponse.js\",\n            lineNumber: 8,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/ChatResponse.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, this);\n}\n_c = ChatResponseComponent;\nvar styles = {\n    container: {\n        display: \"flex\",\n        flex: 1,\n        backgroundColor: \"#777777\",\n        maxWidth: \"100%\",\n        minHeight: \"100%\",\n        color: \"white\",\n        fontFamily: \"sans-serif\",\n        fontSize: 25,\n        padding: \"5%\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"ChatResponseComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRSZXNwb25zZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFNkQ7QUFDdkI7QUFDL0IsU0FBU0csc0JBQXNCLEtBQVU7UUFBVixpQkFBQ0M7SUFDdEMscUJBQ0MsOERBQUNILDREQUFjQTtrQkFDZCw0RUFBQ0k7WUFBSUMsT0FBT0MsT0FBT0MsU0FBUztzQkFDM0IsNEVBQUNSLDREQUFPQTtnQkFBQ1MsWUFBVzswQkFBUVAsNkRBQUtBLENBQUNFOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0tBUmdCRDtBQVVoQixJQUFNSSxTQUFTO0lBQ2RDLFdBQVc7UUFDVkUsU0FBUztRQUNUQyxNQUFNO1FBQ05DLGlCQUFpQjtRQUNqQkMsVUFBVTtRQUNWQyxXQUFXO1FBQ1hDLE9BQU87UUFDUEMsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLFNBQVM7SUFDVjtBQUNEIiwic291cmNlcyI6WyIvVXNlcnMvZGFubnkvRG9jdW1lbnRzL3dlYi1kZXNpZ24vbWF0aC1zb2x2ZXItYWkvc3JjL2NvbXBvbmVudHMvQ2hhdFJlc3BvbnNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge01hdGhKYXgsIE1hdGhKYXhDb250ZXh0fSBmcm9tIFwiYmV0dGVyLXJlYWN0LW1hdGhqYXhcIjtcbmltcG9ydCBwYXJzZSBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBDaGF0UmVzcG9uc2VDb21wb25lbnQoe3Jlc3BvbnNlfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxNYXRoSmF4Q29udGV4dD5cblx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuXHRcdFx0XHQ8TWF0aEpheCByZW5kZXJNb2RlPVwicG9zdFwiPntwYXJzZShyZXNwb25zZSl9PC9NYXRoSmF4PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9NYXRoSmF4Q29udGV4dD5cblx0KTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRmbGV4OiAxLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjNzc3Nzc3XCIsXG5cdFx0bWF4V2lkdGg6IFwiMTAwJVwiLFxuXHRcdG1pbkhlaWdodDogXCIxMDAlXCIsXG5cdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIixcblx0XHRmb250U2l6ZTogMjUsXG5cdFx0cGFkZGluZzogXCI1JVwiLFxuXHR9LFxufTtcbiJdLCJuYW1lcyI6WyJNYXRoSmF4IiwiTWF0aEpheENvbnRleHQiLCJwYXJzZSIsIkNoYXRSZXNwb25zZUNvbXBvbmVudCIsInJlc3BvbnNlIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJyZW5kZXJNb2RlIiwiZGlzcGxheSIsImZsZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicGFkZGluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatResponse.js\n"));

/***/ })

});