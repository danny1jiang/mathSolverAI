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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectProblemComponent: () => (/* binding */ SelectProblemComponent)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AI */ \"(app-pages-browser)/./src/AI.js\");\n/* harmony import */ var _CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomButton */ \"(app-pages-browser)/./src/components/CustomButton.js\");\n\n\n\n\n\nfunction SelectProblemComponent(param) {\n    var file = param.file, problems = param.problems, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback, onCloseCallback = param.onCloseCallback;\n    if (problems === undefined) {\n        return null;\n    }\n    console.log(problems);\n    var problemComponents = [];\n    for(var i = 0; i < problems.length; i++){\n        problemComponents.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProblemComponent, {\n            file: file,\n            problemLabel: problems[i],\n            onStartCallback: onStartCallback,\n            resultCallback: resultCallback\n        }, i, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 20,\n            columnNumber: 4\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            color: \"white\",\n            fontFamily: \"sans-serif\",\n            fontSize: 25,\n            maxWidth: \"100%\",\n            height: \"100%\",\n            padding: \"5%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    margin: 0\n                },\n                children: \"Select a Problem\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 44,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"90%\",\n                    marginTop: \"3%\",\n                    marginBottom: \"4%\",\n                    height: \"1.5px\",\n                    borderRadius: \"10px\",\n                    backgroundColor: \"white\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.container,\n                children: problemComponents\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, this);\n}\n_c = SelectProblemComponent;\nfunction ProblemComponent(param) {\n    var file = param.file, problemLabel = param.problemLabel, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton__WEBPACK_IMPORTED_MODULE_2__.CustomButtonComponent, {\n        onClick: function() {\n            onStartCallback();\n            resultCallback(problemLabel);\n        /*promptWithImage(file, problemLabel).then((result) => {\n\t\t\t\t\tresultCallback(result);\n\t\t\t\t});*/ },\n        style: styles.problemLabelBox,\n        hoverStyle: (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, styles.problemLabelBox), {\n            backgroundColor: \"#777777\"\n        }),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                color: \"white\"\n            },\n            children: problemLabel\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 73,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n_c1 = ProblemComponent;\nvar styles = {\n    container: {\n        width: \"100%\",\n        display: \"grid\",\n        justifyItems: \"center\",\n        gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr\",\n        overflow: \"hidden\"\n    },\n    problemLabelBox: {\n        width: \"70%\",\n        aspectRatio: 1,\n        marginBottom: \"25%\",\n        //backgroundColor: \"#939393\",\n        backgroundColor: \"rgba(0,0,0,0)\",\n        borderColor: \"white\",\n        borderStyle: \"solid\",\n        borderWidth: \"1.5px\",\n        borderRadius: \"10px\"\n    }\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SelectProblemComponent\");\n$RefreshReg$(_c1, \"ProblemComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbGVjdFByb2JsZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ2U7QUFFOUMsU0FBU0UsdUJBQXVCLEtBTXRDO1FBTEFDLE9BRHNDLE1BQ3RDQSxNQUNBQyxXQUZzQyxNQUV0Q0EsVUFDQUMsaUJBSHNDLE1BR3RDQSxnQkFDQUMsa0JBSnNDLE1BSXRDQSxpQkFDQUMsa0JBTHNDLE1BS3RDQTtJQUVBLElBQUlILGFBQWFJLFdBQVc7UUFDM0IsT0FBTztJQUNSO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ047SUFFWixJQUFJTyxvQkFBb0IsRUFBRTtJQUMxQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSVIsU0FBU1MsTUFBTSxFQUFFRCxJQUFLO1FBQ3pDRCxrQkFBa0JHLElBQUksZUFDckIsOERBQUNDO1lBRUFaLE1BQU1BO1lBQ05hLGNBQWNaLFFBQVEsQ0FBQ1EsRUFBRTtZQUN6Qk4saUJBQWlCQTtZQUNqQkQsZ0JBQWdCQTtXQUpYTzs7Ozs7SUFPUjtJQUVBLHFCQUNDLDhEQUFDSztRQUNBQyxPQUFPO1lBQ05DLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxTQUFTO1FBQ1Y7OzBCQUVBLDhEQUFDQztnQkFBR1YsT0FBTztvQkFBQ1csUUFBUTtnQkFBQzswQkFBRzs7Ozs7OzBCQUN4Qiw4REFBQ1o7Z0JBQ0FDLE9BQU87b0JBQ05ZLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLGNBQWM7b0JBQ2ROLFFBQVE7b0JBQ1JPLGNBQWM7b0JBQ2RDLGlCQUFpQjtnQkFDbEI7Ozs7OzswQkFFRCw4REFBQ2pCO2dCQUFJQyxPQUFPaUIsT0FBT0MsU0FBUzswQkFBR3pCOzs7Ozs7Ozs7Ozs7QUFHbEM7S0F0RGdCVDtBQXdEaEIsU0FBU2EsaUJBQWlCLEtBQXFEO1FBQXBEWixPQUFELE1BQUNBLE1BQU1hLGVBQVAsTUFBT0EsY0FBY1gsaUJBQXJCLE1BQXFCQSxnQkFBZ0JDLGtCQUFyQyxNQUFxQ0E7SUFDOUQscUJBQ0MsOERBQUNMLGdFQUFxQkE7UUFDckJvQyxTQUFTO1lBQ1IvQjtZQUNBRCxlQUFlVztRQUNmOztPQUVHLEdBQ0o7UUFDQUUsT0FBT2lCLE9BQU9HLGVBQWU7UUFDN0JDLFlBQVksc0lBQUlKLE9BQU9HLGVBQWU7WUFBRUosaUJBQWlCOztrQkFFekQsNEVBQUNOO1lBQUdWLE9BQU87Z0JBQUNJLE9BQU87WUFBTztzQkFBSU47Ozs7Ozs7Ozs7O0FBR2pDO01BaEJTRDtBQWtCVCxJQUFNb0IsU0FBUztJQUNkQyxXQUFXO1FBQ1ZOLE9BQU87UUFDUFgsU0FBUztRQUNUcUIsY0FBYztRQUNkQyxxQkFBcUI7UUFDckJDLFVBQVU7SUFDWDtJQUNBSixpQkFBaUI7UUFDaEJSLE9BQU87UUFDUGEsYUFBYTtRQUNiWCxjQUFjO1FBQ2QsNkJBQTZCO1FBQzdCRSxpQkFBaUI7UUFDakJVLGFBQWE7UUFDYkMsYUFBYTtRQUNiQyxhQUFhO1FBQ2JiLGNBQWM7SUFDZjtBQUNEIiwic291cmNlcyI6WyIvVXNlcnMvZGFubnkvRG9jdW1lbnRzL3dlYi1kZXNpZ24vbWF0aC1zb2x2ZXItYWkvc3JjL2NvbXBvbmVudHMvU2VsZWN0UHJvYmxlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb21wdFdpdGhJbWFnZX0gZnJvbSBcIi4uL0FJXCI7XG5pbXBvcnQge0N1c3RvbUJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vQ3VzdG9tQnV0dG9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RQcm9ibGVtQ29tcG9uZW50KHtcblx0ZmlsZSxcblx0cHJvYmxlbXMsXG5cdHJlc3VsdENhbGxiYWNrLFxuXHRvblN0YXJ0Q2FsbGJhY2ssXG5cdG9uQ2xvc2VDYWxsYmFjayxcbn0pIHtcblx0aWYgKHByb2JsZW1zID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnNvbGUubG9nKHByb2JsZW1zKTtcblxuXHRsZXQgcHJvYmxlbUNvbXBvbmVudHMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9ibGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdHByb2JsZW1Db21wb25lbnRzLnB1c2goXG5cdFx0XHQ8UHJvYmxlbUNvbXBvbmVudFxuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdGZpbGU9e2ZpbGV9XG5cdFx0XHRcdHByb2JsZW1MYWJlbD17cHJvYmxlbXNbaV19XG5cdFx0XHRcdG9uU3RhcnRDYWxsYmFjaz17b25TdGFydENhbGxiYWNrfVxuXHRcdFx0XHRyZXN1bHRDYWxsYmFjaz17cmVzdWx0Q2FsbGJhY2t9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0XHRmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIixcblx0XHRcdFx0Zm9udFNpemU6IDI1LFxuXHRcdFx0XHRtYXhXaWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHRcdHBhZGRpbmc6IFwiNSVcIixcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGgxIHN0eWxlPXt7bWFyZ2luOiAwfX0+U2VsZWN0IGEgUHJvYmxlbTwvaDE+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0d2lkdGg6IFwiOTAlXCIsXG5cdFx0XHRcdFx0bWFyZ2luVG9wOiBcIjMlXCIsXG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiBcIjQlXCIsXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjEuNXB4XCIsXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjEwcHhcIixcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT57cHJvYmxlbUNvbXBvbmVudHN9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIFByb2JsZW1Db21wb25lbnQoe2ZpbGUsIHByb2JsZW1MYWJlbCwgcmVzdWx0Q2FsbGJhY2ssIG9uU3RhcnRDYWxsYmFja30pIHtcblx0cmV0dXJuIChcblx0XHQ8Q3VzdG9tQnV0dG9uQ29tcG9uZW50XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdG9uU3RhcnRDYWxsYmFjaygpO1xuXHRcdFx0XHRyZXN1bHRDYWxsYmFjayhwcm9ibGVtTGFiZWwpO1xuXHRcdFx0XHQvKnByb21wdFdpdGhJbWFnZShmaWxlLCBwcm9ibGVtTGFiZWwpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdENhbGxiYWNrKHJlc3VsdCk7XG5cdFx0XHRcdH0pOyovXG5cdFx0XHR9fVxuXHRcdFx0c3R5bGU9e3N0eWxlcy5wcm9ibGVtTGFiZWxCb3h9XG5cdFx0XHRob3ZlclN0eWxlPXt7Li4uc3R5bGVzLnByb2JsZW1MYWJlbEJveCwgYmFja2dyb3VuZENvbG9yOiBcIiM3Nzc3NzdcIn19XG5cdFx0PlxuXHRcdFx0PGgxIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIn19Pntwcm9ibGVtTGFiZWx9PC9oMT5cblx0XHQ8L0N1c3RvbUJ1dHRvbkNvbXBvbmVudD5cblx0KTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0ZGlzcGxheTogXCJncmlkXCIsXG5cdFx0anVzdGlmeUl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyIDFmclwiLFxuXHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxuXHR9LFxuXHRwcm9ibGVtTGFiZWxCb3g6IHtcblx0XHR3aWR0aDogXCI3MCVcIixcblx0XHRhc3BlY3RSYXRpbzogMSxcblx0XHRtYXJnaW5Cb3R0b206IFwiMjUlXCIsXG5cdFx0Ly9iYWNrZ3JvdW5kQ29sb3I6IFwiIzkzOTM5M1wiLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIsXG5cdFx0Ym9yZGVyQ29sb3I6IFwid2hpdGVcIixcblx0XHRib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuXHRcdGJvcmRlcldpZHRoOiBcIjEuNXB4XCIsXG5cdFx0Ym9yZGVyUmFkaXVzOiBcIjEwcHhcIixcblx0fSxcbn07XG4iXSwibmFtZXMiOlsicHJvbXB0V2l0aEltYWdlIiwiQ3VzdG9tQnV0dG9uQ29tcG9uZW50IiwiU2VsZWN0UHJvYmxlbUNvbXBvbmVudCIsImZpbGUiLCJwcm9ibGVtcyIsInJlc3VsdENhbGxiYWNrIiwib25TdGFydENhbGxiYWNrIiwib25DbG9zZUNhbGxiYWNrIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInByb2JsZW1Db21wb25lbnRzIiwiaSIsImxlbmd0aCIsInB1c2giLCJQcm9ibGVtQ29tcG9uZW50IiwicHJvYmxlbUxhYmVsIiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsIm1heFdpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImgxIiwibWFyZ2luIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHlsZXMiLCJjb250YWluZXIiLCJvbkNsaWNrIiwicHJvYmxlbUxhYmVsQm94IiwiaG92ZXJTdHlsZSIsImp1c3RpZnlJdGVtcyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJvdmVyZmxvdyIsImFzcGVjdFJhdGlvIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTdHlsZSIsImJvcmRlcldpZHRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SelectProblem.js\n"));

/***/ })

});