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

/***/ "(app-pages-browser)/./src/components/SelectProblem.js":
/*!*****************************************!*\
  !*** ./src/components/SelectProblem.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectProblemComponent: () => (/* binding */ SelectProblemComponent)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AI */ \"(app-pages-browser)/./src/AI.js\");\n/* harmony import */ var _CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomButton */ \"(app-pages-browser)/./src/components/CustomButton.js\");\n\n\n\n\n\nfunction SelectProblemComponent(param) {\n    var file = param.file, problems = param.problems, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback, onCloseCallback = param.onCloseCallback;\n    if (problems === undefined) {\n        return null;\n    }\n    console.log(problems);\n    var problemComponents = [];\n    for(var i = 0; i < problems.length; i++){\n        problemComponents.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProblemComponent, {\n            file: file,\n            problemLabel: problems[i],\n            onStartCallback: onStartCallback,\n            resultCallback: resultCallback\n        }, i, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 20,\n            columnNumber: 4\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            color: \"white\",\n            fontFamily: \"sans-serif\",\n            fontSize: 25,\n            maxWidth: \"100%\",\n            height: \"100%\",\n            padding: \"5%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    margin: 0\n                },\n                children: \"Select a Problem\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 44,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"80%\",\n                    marginVertical: \"50px\",\n                    height: \"10px\",\n                    borderRadius: \"10px\",\n                    backgroundColor: \"white\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.container,\n                children: problemComponents\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, this);\n}\n_c = SelectProblemComponent;\nfunction ProblemComponent(param) {\n    var file = param.file, problemLabel = param.problemLabel, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton__WEBPACK_IMPORTED_MODULE_2__.CustomButtonComponent, {\n        onClick: function() {\n            onStartCallback();\n            resultCallback(problemLabel);\n        /*promptWithImage(file, problemLabel).then((result) => {\n\t\t\t\t\tresultCallback(result);\n\t\t\t\t});*/ },\n        style: styles.problemLabelBox,\n        hoverStyle: (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, styles.problemLabelBox), {\n            backgroundColor: \"#777777\"\n        }),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: problemLabel\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 72,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 61,\n        columnNumber: 3\n    }, this);\n}\n_c1 = ProblemComponent;\nvar styles = {\n    container: {\n        width: \"100%\",\n        display: \"grid\",\n        justifyItems: \"center\",\n        gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr\",\n        overflow: \"hidden\"\n    },\n    problemLabelBox: {\n        width: \"70%\",\n        aspectRatio: 1,\n        marginBottom: \"25%\",\n        backgroundColor: \"#939393\",\n        borderRadius: \"10px\",\n        border: \"none\"\n    }\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SelectProblemComponent\");\n$RefreshReg$(_c1, \"ProblemComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbGVjdFByb2JsZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ2U7QUFFOUMsU0FBU0UsdUJBQXVCLEtBTXRDO1FBTEFDLE9BRHNDLE1BQ3RDQSxNQUNBQyxXQUZzQyxNQUV0Q0EsVUFDQUMsaUJBSHNDLE1BR3RDQSxnQkFDQUMsa0JBSnNDLE1BSXRDQSxpQkFDQUMsa0JBTHNDLE1BS3RDQTtJQUVBLElBQUlILGFBQWFJLFdBQVc7UUFDM0IsT0FBTztJQUNSO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ047SUFFWixJQUFJTyxvQkFBb0IsRUFBRTtJQUMxQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSVIsU0FBU1MsTUFBTSxFQUFFRCxJQUFLO1FBQ3pDRCxrQkFBa0JHLElBQUksZUFDckIsOERBQUNDO1lBRUFaLE1BQU1BO1lBQ05hLGNBQWNaLFFBQVEsQ0FBQ1EsRUFBRTtZQUN6Qk4saUJBQWlCQTtZQUNqQkQsZ0JBQWdCQTtXQUpYTzs7Ozs7SUFPUjtJQUVBLHFCQUNDLDhEQUFDSztRQUNBQyxPQUFPO1lBQ05DLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxTQUFTO1FBQ1Y7OzBCQUVBLDhEQUFDQztnQkFBR1YsT0FBTztvQkFBQ1csUUFBUTtnQkFBQzswQkFBRzs7Ozs7OzBCQUN4Qiw4REFBQ1o7Z0JBQ0FDLE9BQU87b0JBQ05ZLE9BQU87b0JBQ1BDLGdCQUFnQjtvQkFDaEJMLFFBQVE7b0JBQ1JNLGNBQWM7b0JBQ2RDLGlCQUFpQjtnQkFDbEI7Ozs7OzswQkFFRCw4REFBQ2hCO2dCQUFJQyxPQUFPZ0IsT0FBT0MsU0FBUzswQkFBR3hCOzs7Ozs7Ozs7Ozs7QUFHbEM7S0FyRGdCVDtBQXVEaEIsU0FBU2EsaUJBQWlCLEtBQXFEO1FBQXBEWixPQUFELE1BQUNBLE1BQU1hLGVBQVAsTUFBT0EsY0FBY1gsaUJBQXJCLE1BQXFCQSxnQkFBZ0JDLGtCQUFyQyxNQUFxQ0E7SUFDOUQscUJBQ0MsOERBQUNMLGdFQUFxQkE7UUFDckJtQyxTQUFTO1lBQ1I5QjtZQUNBRCxlQUFlVztRQUNmOztPQUVHLEdBQ0o7UUFDQUUsT0FBT2dCLE9BQU9HLGVBQWU7UUFDN0JDLFlBQVksc0lBQUlKLE9BQU9HLGVBQWU7WUFBRUosaUJBQWlCOztrQkFFekQsNEVBQUNMO3NCQUFJWjs7Ozs7Ozs7Ozs7QUFHUjtNQWhCU0Q7QUFrQlQsSUFBTW1CLFNBQVM7SUFDZEMsV0FBVztRQUNWTCxPQUFPO1FBQ1BYLFNBQVM7UUFDVG9CLGNBQWM7UUFDZEMscUJBQXFCO1FBQ3JCQyxVQUFVO0lBQ1g7SUFDQUosaUJBQWlCO1FBQ2hCUCxPQUFPO1FBQ1BZLGFBQWE7UUFDYkMsY0FBYztRQUNkVixpQkFBaUI7UUFDakJELGNBQWM7UUFDZFksUUFBUTtJQUNUO0FBQ0QiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5ueS9Eb2N1bWVudHMvd2ViLWRlc2lnbi9tYXRoLXNvbHZlci1haS9zcmMvY29tcG9uZW50cy9TZWxlY3RQcm9ibGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvbXB0V2l0aEltYWdlfSBmcm9tIFwiLi4vQUlcIjtcbmltcG9ydCB7Q3VzdG9tQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9DdXN0b21CdXR0b25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlbGVjdFByb2JsZW1Db21wb25lbnQoe1xuXHRmaWxlLFxuXHRwcm9ibGVtcyxcblx0cmVzdWx0Q2FsbGJhY2ssXG5cdG9uU3RhcnRDYWxsYmFjayxcblx0b25DbG9zZUNhbGxiYWNrLFxufSkge1xuXHRpZiAocHJvYmxlbXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc29sZS5sb2cocHJvYmxlbXMpO1xuXG5cdGxldCBwcm9ibGVtQ29tcG9uZW50cyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2JsZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0cHJvYmxlbUNvbXBvbmVudHMucHVzaChcblx0XHRcdDxQcm9ibGVtQ29tcG9uZW50XG5cdFx0XHRcdGtleT17aX1cblx0XHRcdFx0ZmlsZT17ZmlsZX1cblx0XHRcdFx0cHJvYmxlbUxhYmVsPXtwcm9ibGVtc1tpXX1cblx0XHRcdFx0b25TdGFydENhbGxiYWNrPXtvblN0YXJ0Q2FsbGJhY2t9XG5cdFx0XHRcdHJlc3VsdENhbGxiYWNrPXtyZXN1bHRDYWxsYmFja31cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG5cdFx0XHRcdGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0XHRcdGNvbG9yOiBcIndoaXRlXCIsXG5cdFx0XHRcdGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiLFxuXHRcdFx0XHRmb250U2l6ZTogMjUsXG5cdFx0XHRcdG1heFdpZHRoOiBcIjEwMCVcIixcblx0XHRcdFx0aGVpZ2h0OiBcIjEwMCVcIixcblx0XHRcdFx0cGFkZGluZzogXCI1JVwiLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8aDEgc3R5bGU9e3ttYXJnaW46IDB9fT5TZWxlY3QgYSBQcm9ibGVtPC9oMT5cblx0XHRcdDxkaXZcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHR3aWR0aDogXCI4MCVcIixcblx0XHRcdFx0XHRtYXJnaW5WZXJ0aWNhbDogXCI1MHB4XCIsXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEwcHhcIixcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9Pntwcm9ibGVtQ29tcG9uZW50c308L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gUHJvYmxlbUNvbXBvbmVudCh7ZmlsZSwgcHJvYmxlbUxhYmVsLCByZXN1bHRDYWxsYmFjaywgb25TdGFydENhbGxiYWNrfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxDdXN0b21CdXR0b25Db21wb25lbnRcblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0b25TdGFydENhbGxiYWNrKCk7XG5cdFx0XHRcdHJlc3VsdENhbGxiYWNrKHByb2JsZW1MYWJlbCk7XG5cdFx0XHRcdC8qcHJvbXB0V2l0aEltYWdlKGZpbGUsIHByb2JsZW1MYWJlbCkudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0cmVzdWx0Q2FsbGJhY2socmVzdWx0KTtcblx0XHRcdFx0fSk7Ki9cblx0XHRcdH19XG5cdFx0XHRzdHlsZT17c3R5bGVzLnByb2JsZW1MYWJlbEJveH1cblx0XHRcdGhvdmVyU3R5bGU9e3suLi5zdHlsZXMucHJvYmxlbUxhYmVsQm94LCBiYWNrZ3JvdW5kQ29sb3I6IFwiIzc3Nzc3N1wifX1cblx0XHQ+XG5cdFx0XHQ8aDE+e3Byb2JsZW1MYWJlbH08L2gxPlxuXHRcdDwvQ3VzdG9tQnV0dG9uQ29tcG9uZW50PlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdHdpZHRoOiBcIjEwMCVcIixcblx0XHRkaXNwbGF5OiBcImdyaWRcIixcblx0XHRqdXN0aWZ5SXRlbXM6IFwiY2VudGVyXCIsXG5cdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogXCIxZnIgMWZyIDFmciAxZnIgMWZyXCIsXG5cdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdH0sXG5cdHByb2JsZW1MYWJlbEJveDoge1xuXHRcdHdpZHRoOiBcIjcwJVwiLFxuXHRcdGFzcGVjdFJhdGlvOiAxLFxuXHRcdG1hcmdpbkJvdHRvbTogXCIyNSVcIixcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzkzOTM5M1wiLFxuXHRcdGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG5cdFx0Ym9yZGVyOiBcIm5vbmVcIixcblx0fSxcbn07XG4iXSwibmFtZXMiOlsicHJvbXB0V2l0aEltYWdlIiwiQ3VzdG9tQnV0dG9uQ29tcG9uZW50IiwiU2VsZWN0UHJvYmxlbUNvbXBvbmVudCIsImZpbGUiLCJwcm9ibGVtcyIsInJlc3VsdENhbGxiYWNrIiwib25TdGFydENhbGxiYWNrIiwib25DbG9zZUNhbGxiYWNrIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInByb2JsZW1Db21wb25lbnRzIiwiaSIsImxlbmd0aCIsInB1c2giLCJQcm9ibGVtQ29tcG9uZW50IiwicHJvYmxlbUxhYmVsIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIm1heFdpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImgxIiwibWFyZ2luIiwid2lkdGgiLCJtYXJnaW5WZXJ0aWNhbCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm9uQ2xpY2siLCJwcm9ibGVtTGFiZWxCb3giLCJob3ZlclN0eWxlIiwianVzdGlmeUl0ZW1zIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm92ZXJmbG93IiwiYXNwZWN0UmF0aW8iLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SelectProblem.js\n"));

/***/ })

});