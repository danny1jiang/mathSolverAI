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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectProblemComponent: () => (/* binding */ SelectProblemComponent)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AI */ \"(app-pages-browser)/./src/AI.js\");\n/* harmony import */ var _CustomButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomButton */ \"(app-pages-browser)/./src/components/CustomButton.js\");\n\n\n\n\n\nfunction SelectProblemComponent(param) {\n    var file = param.file, problems = param.problems, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback, onCloseCallback = param.onCloseCallback;\n    if (problems === undefined) {\n        return null;\n    }\n    console.log(problems);\n    var problemComponents = [];\n    for(var i = 0; i < problems.length; i++){\n        problemComponents.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProblemComponent, {\n            file: file,\n            problemLabel: problems[i],\n            onStartCallback: onStartCallback,\n            resultCallback: resultCallback\n        }, i, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 20,\n            columnNumber: 4\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            color: \"white\",\n            fontFamily: \"sans-serif\",\n            fontSize: 25,\n            maxWidth: \"100%\",\n            height: \"100%\",\n            padding: \"5%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    margin: 0\n                },\n                children: \"Select a Problem\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 44,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"90%\",\n                    marginTop: \"3%\",\n                    marginBottom: \"4%\",\n                    height: \"0.1%\",\n                    borderRadius: \"10px\",\n                    backgroundColor: \"white\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.container,\n                children: problemComponents\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 55,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, this);\n}\n_c = SelectProblemComponent;\nfunction ProblemComponent(param) {\n    var file = param.file, problemLabel = param.problemLabel, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton__WEBPACK_IMPORTED_MODULE_2__.CustomButtonComponent, {\n        onClick: function() {\n            onStartCallback();\n            resultCallback(problemLabel);\n        /*promptWithImage(file, problemLabel).then((result) => {\n\t\t\t\t\tresultCallback(result);\n\t\t\t\t});*/ },\n        style: styles.problemLabelBox,\n        hoverStyle: (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_3__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_4__._)({}, styles.problemLabelBox), {\n            backgroundColor: \"#777777\"\n        }),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: problemLabel\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 73,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n_c1 = ProblemComponent;\nvar styles = {\n    container: {\n        width: \"100%\",\n        display: \"grid\",\n        justifyItems: \"center\",\n        gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr\",\n        overflow: \"hidden\"\n    },\n    problemLabelBox: {\n        width: \"70%\",\n        aspectRatio: 1,\n        marginBottom: \"25%\",\n        backgroundColor: \"#939393\",\n        borderColor: \"white\",\n        borderWidth: \"10px\",\n        borderRadius: \"10px\"\n    }\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SelectProblemComponent\");\n$RefreshReg$(_c1, \"ProblemComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbGVjdFByb2JsZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ2U7QUFFOUMsU0FBU0UsdUJBQXVCLEtBTXRDO1FBTEFDLE9BRHNDLE1BQ3RDQSxNQUNBQyxXQUZzQyxNQUV0Q0EsVUFDQUMsaUJBSHNDLE1BR3RDQSxnQkFDQUMsa0JBSnNDLE1BSXRDQSxpQkFDQUMsa0JBTHNDLE1BS3RDQTtJQUVBLElBQUlILGFBQWFJLFdBQVc7UUFDM0IsT0FBTztJQUNSO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ047SUFFWixJQUFJTyxvQkFBb0IsRUFBRTtJQUMxQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSVIsU0FBU1MsTUFBTSxFQUFFRCxJQUFLO1FBQ3pDRCxrQkFBa0JHLElBQUksZUFDckIsOERBQUNDO1lBRUFaLE1BQU1BO1lBQ05hLGNBQWNaLFFBQVEsQ0FBQ1EsRUFBRTtZQUN6Qk4saUJBQWlCQTtZQUNqQkQsZ0JBQWdCQTtXQUpYTzs7Ozs7SUFPUjtJQUVBLHFCQUNDLDhEQUFDSztRQUNBQyxPQUFPO1lBQ05DLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxTQUFTO1FBQ1Y7OzBCQUVBLDhEQUFDQztnQkFBR1YsT0FBTztvQkFBQ1csUUFBUTtnQkFBQzswQkFBRzs7Ozs7OzBCQUN4Qiw4REFBQ1o7Z0JBQ0FDLE9BQU87b0JBQ05ZLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLGNBQWM7b0JBQ2ROLFFBQVE7b0JBQ1JPLGNBQWM7b0JBQ2RDLGlCQUFpQjtnQkFDbEI7Ozs7OzswQkFFRCw4REFBQ2pCO2dCQUFJQyxPQUFPaUIsT0FBT0MsU0FBUzswQkFBR3pCOzs7Ozs7Ozs7Ozs7QUFHbEM7S0F0RGdCVDtBQXdEaEIsU0FBU2EsaUJBQWlCLEtBQXFEO1FBQXBEWixPQUFELE1BQUNBLE1BQU1hLGVBQVAsTUFBT0EsY0FBY1gsaUJBQXJCLE1BQXFCQSxnQkFBZ0JDLGtCQUFyQyxNQUFxQ0E7SUFDOUQscUJBQ0MsOERBQUNMLGdFQUFxQkE7UUFDckJvQyxTQUFTO1lBQ1IvQjtZQUNBRCxlQUFlVztRQUNmOztPQUVHLEdBQ0o7UUFDQUUsT0FBT2lCLE9BQU9HLGVBQWU7UUFDN0JDLFlBQVksc0lBQUlKLE9BQU9HLGVBQWU7WUFBRUosaUJBQWlCOztrQkFFekQsNEVBQUNOO3NCQUFJWjs7Ozs7Ozs7Ozs7QUFHUjtNQWhCU0Q7QUFrQlQsSUFBTW9CLFNBQVM7SUFDZEMsV0FBVztRQUNWTixPQUFPO1FBQ1BYLFNBQVM7UUFDVHFCLGNBQWM7UUFDZEMscUJBQXFCO1FBQ3JCQyxVQUFVO0lBQ1g7SUFDQUosaUJBQWlCO1FBQ2hCUixPQUFPO1FBQ1BhLGFBQWE7UUFDYlgsY0FBYztRQUNkRSxpQkFBaUI7UUFDakJVLGFBQWE7UUFDYkMsYUFBYTtRQUNiWixjQUFjO0lBQ2Y7QUFDRCIsInNvdXJjZXMiOlsiL1VzZXJzL2Rhbm55L0RvY3VtZW50cy93ZWItZGVzaWduL21hdGgtc29sdmVyLWFpL3NyYy9jb21wb25lbnRzL1NlbGVjdFByb2JsZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9tcHRXaXRoSW1hZ2V9IGZyb20gXCIuLi9BSVwiO1xuaW1wb3J0IHtDdXN0b21CdXR0b25Db21wb25lbnR9IGZyb20gXCIuL0N1c3RvbUJ1dHRvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VsZWN0UHJvYmxlbUNvbXBvbmVudCh7XG5cdGZpbGUsXG5cdHByb2JsZW1zLFxuXHRyZXN1bHRDYWxsYmFjayxcblx0b25TdGFydENhbGxiYWNrLFxuXHRvbkNsb3NlQ2FsbGJhY2ssXG59KSB7XG5cdGlmIChwcm9ibGVtcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhwcm9ibGVtcyk7XG5cblx0bGV0IHByb2JsZW1Db21wb25lbnRzID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvYmxlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRwcm9ibGVtQ29tcG9uZW50cy5wdXNoKFxuXHRcdFx0PFByb2JsZW1Db21wb25lbnRcblx0XHRcdFx0a2V5PXtpfVxuXHRcdFx0XHRmaWxlPXtmaWxlfVxuXHRcdFx0XHRwcm9ibGVtTGFiZWw9e3Byb2JsZW1zW2ldfVxuXHRcdFx0XHRvblN0YXJ0Q2FsbGJhY2s9e29uU3RhcnRDYWxsYmFja31cblx0XHRcdFx0cmVzdWx0Q2FsbGJhY2s9e3Jlc3VsdENhbGxiYWNrfVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0Y29sb3I6IFwid2hpdGVcIixcblx0XHRcdFx0Zm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIsXG5cdFx0XHRcdGZvbnRTaXplOiAyNSxcblx0XHRcdFx0bWF4V2lkdGg6IFwiMTAwJVwiLFxuXHRcdFx0XHRoZWlnaHQ6IFwiMTAwJVwiLFxuXHRcdFx0XHRwYWRkaW5nOiBcIjUlXCIsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxoMSBzdHlsZT17e21hcmdpbjogMH19PlNlbGVjdCBhIFByb2JsZW08L2gxPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdHdpZHRoOiBcIjkwJVwiLFxuXHRcdFx0XHRcdG1hcmdpblRvcDogXCIzJVwiLFxuXHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogXCI0JVwiLFxuXHRcdFx0XHRcdGhlaWdodDogXCIwLjElXCIsXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiBcIjEwcHhcIixcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT57cHJvYmxlbUNvbXBvbmVudHN9PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIFByb2JsZW1Db21wb25lbnQoe2ZpbGUsIHByb2JsZW1MYWJlbCwgcmVzdWx0Q2FsbGJhY2ssIG9uU3RhcnRDYWxsYmFja30pIHtcblx0cmV0dXJuIChcblx0XHQ8Q3VzdG9tQnV0dG9uQ29tcG9uZW50XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdG9uU3RhcnRDYWxsYmFjaygpO1xuXHRcdFx0XHRyZXN1bHRDYWxsYmFjayhwcm9ibGVtTGFiZWwpO1xuXHRcdFx0XHQvKnByb21wdFdpdGhJbWFnZShmaWxlLCBwcm9ibGVtTGFiZWwpLnRoZW4oKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdENhbGxiYWNrKHJlc3VsdCk7XG5cdFx0XHRcdH0pOyovXG5cdFx0XHR9fVxuXHRcdFx0c3R5bGU9e3N0eWxlcy5wcm9ibGVtTGFiZWxCb3h9XG5cdFx0XHRob3ZlclN0eWxlPXt7Li4uc3R5bGVzLnByb2JsZW1MYWJlbEJveCwgYmFja2dyb3VuZENvbG9yOiBcIiM3Nzc3NzdcIn19XG5cdFx0PlxuXHRcdFx0PGgxPntwcm9ibGVtTGFiZWx9PC9oMT5cblx0XHQ8L0N1c3RvbUJ1dHRvbkNvbXBvbmVudD5cblx0KTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuXHRjb250YWluZXI6IHtcblx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0ZGlzcGxheTogXCJncmlkXCIsXG5cdFx0anVzdGlmeUl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyIDFmclwiLFxuXHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxuXHR9LFxuXHRwcm9ibGVtTGFiZWxCb3g6IHtcblx0XHR3aWR0aDogXCI3MCVcIixcblx0XHRhc3BlY3RSYXRpbzogMSxcblx0XHRtYXJnaW5Cb3R0b206IFwiMjUlXCIsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiM5MzkzOTNcIixcblx0XHRib3JkZXJDb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdGJvcmRlcldpZHRoOiBcIjEwcHhcIixcblx0XHRib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuXHR9LFxufTtcbiJdLCJuYW1lcyI6WyJwcm9tcHRXaXRoSW1hZ2UiLCJDdXN0b21CdXR0b25Db21wb25lbnQiLCJTZWxlY3RQcm9ibGVtQ29tcG9uZW50IiwiZmlsZSIsInByb2JsZW1zIiwicmVzdWx0Q2FsbGJhY2siLCJvblN0YXJ0Q2FsbGJhY2siLCJvbkNsb3NlQ2FsbGJhY2siLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwicHJvYmxlbUNvbXBvbmVudHMiLCJpIiwibGVuZ3RoIiwicHVzaCIsIlByb2JsZW1Db21wb25lbnQiLCJwcm9ibGVtTGFiZWwiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiaDEiLCJtYXJnaW4iLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsInN0eWxlcyIsImNvbnRhaW5lciIsIm9uQ2xpY2siLCJwcm9ibGVtTGFiZWxCb3giLCJob3ZlclN0eWxlIiwianVzdGlmeUl0ZW1zIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm92ZXJmbG93IiwiYXNwZWN0UmF0aW8iLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SelectProblem.js\n"));

/***/ })

});