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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SelectProblemComponent: () => (/* binding */ SelectProblemComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AI */ \"(app-pages-browser)/./src/AI.js\");\n\n\nfunction SelectProblemComponent(param) {\n    var file = param.file, problems = param.problems, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback, onCloseCallback = param.onCloseCallback;\n    if (problems === undefined) {\n        return null;\n    }\n    console.log(problems);\n    var problemComponents = [];\n    for(var i = 0; i < problems.length; i++){\n        problemComponents.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProblemComponent, {\n            file: file,\n            problemLabel: problems[i],\n            onStartCallback: onStartCallback,\n            resultCallback: resultCallback\n        }, i, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            alignItems: \"center\",\n            color: \"white\",\n            fontFamily: \"sans-serif\",\n            fontSize: 25,\n            maxWidth: \"100%\",\n            height: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Select a Problem\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 42,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.container,\n                children: problemComponents\n            }, void 0, false, {\n                fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 30,\n        columnNumber: 3\n    }, this);\n}\n_c = SelectProblemComponent;\nfunction ProblemComponent(param) {\n    var file = param.file, problemLabel = param.problemLabel, resultCallback = param.resultCallback, onStartCallback = param.onStartCallback;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: function() {\n            onStartCallback();\n            resultCallback(problemLabel);\n        /*promptWithImage(file, problemLabel).then((result) => {\n\t\t\t\t\tresultCallback(result);\n\t\t\t\t});*/ },\n        style: styles.problemLabelBox,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: problemLabel\n        }, void 0, false, {\n            fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n            lineNumber: 60,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/danny/Documents/web-design/math-solver-ai/src/components/SelectProblem.js\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, this);\n}\n_c1 = ProblemComponent;\nvar styles = {\n    container: {\n        //flex: 1,\n        width: \"100%\",\n        display: \"grid\",\n        //flexWrap: \"wrap\",\n        //flexDirection: \"row\",\n        gridGap: \"0%\",\n        backgroundColor: \"white\",\n        //alignItems: \"space-evenly\",\n        //justifyContent: \"flex-start\",\n        justifyItems: \"center\",\n        gridTemplateColumns: \"1fr 1fr 1fr 1fr 1fr\",\n        overflow: \"hidden\"\n    },\n    problemLabelBox: {\n        width: \"100%\",\n        aspectRatio: 1,\n        marginBottom: \"5%\",\n        backgroundColor: \"#939393\",\n        border: \"none\"\n    }\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SelectProblemComponent\");\n$RefreshReg$(_c1, \"ProblemComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlbGVjdFByb2JsZW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUUvQixTQUFTQyx1QkFBdUIsS0FNdEM7UUFMQUMsT0FEc0MsTUFDdENBLE1BQ0FDLFdBRnNDLE1BRXRDQSxVQUNBQyxpQkFIc0MsTUFHdENBLGdCQUNBQyxrQkFKc0MsTUFJdENBLGlCQUNBQyxrQkFMc0MsTUFLdENBO0lBRUEsSUFBSUgsYUFBYUksV0FBVztRQUMzQixPQUFPO0lBQ1I7SUFFQUMsUUFBUUMsR0FBRyxDQUFDTjtJQUVaLElBQUlPLG9CQUFvQixFQUFFO0lBQzFCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUixTQUFTUyxNQUFNLEVBQUVELElBQUs7UUFDekNELGtCQUFrQkcsSUFBSSxlQUNyQiw4REFBQ0M7WUFFQVosTUFBTUE7WUFDTmEsY0FBY1osUUFBUSxDQUFDUSxFQUFFO1lBQ3pCTixpQkFBaUJBO1lBQ2pCRCxnQkFBZ0JBO1dBSlhPOzs7OztJQU9SO0lBRUEscUJBQ0MsOERBQUNLO1FBQ0FDLE9BQU87WUFDTkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLFVBQVU7WUFDVkMsVUFBVTtZQUNWQyxRQUFRO1FBQ1Q7OzBCQUVBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDVjtnQkFBSUMsT0FBT1UsT0FBT0MsU0FBUzswQkFBR2xCOzs7Ozs7Ozs7Ozs7QUFHbEM7S0EzQ2dCVDtBQTZDaEIsU0FBU2EsaUJBQWlCLEtBQXFEO1FBQXBEWixPQUFELE1BQUNBLE1BQU1hLGVBQVAsTUFBT0EsY0FBY1gsaUJBQXJCLE1BQXFCQSxnQkFBZ0JDLGtCQUFyQyxNQUFxQ0E7SUFDOUQscUJBQ0MsOERBQUN3QjtRQUNBQyxTQUFTO1lBQ1J6QjtZQUNBRCxlQUFlVztRQUNmOztPQUVHLEdBQ0o7UUFDQUUsT0FBT1UsT0FBT0ksZUFBZTtrQkFFN0IsNEVBQUNMO3NCQUFJWDs7Ozs7Ozs7Ozs7QUFHUjtNQWZTRDtBQWlCVCxJQUFNYSxTQUFTO0lBQ2RDLFdBQVc7UUFDVixVQUFVO1FBQ1ZJLE9BQU87UUFDUGQsU0FBUztRQUNULG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkJlLFNBQVM7UUFDVEMsaUJBQWlCO1FBQ2pCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0JDLGNBQWM7UUFDZEMscUJBQXFCO1FBQ3JCQyxVQUFVO0lBQ1g7SUFDQU4saUJBQWlCO1FBQ2hCQyxPQUFPO1FBQ1BNLGFBQWE7UUFDYkMsY0FBYztRQUNkTCxpQkFBaUI7UUFDakJNLFFBQVE7SUFDVDtBQUNEIiwic291cmNlcyI6WyIvVXNlcnMvZGFubnkvRG9jdW1lbnRzL3dlYi1kZXNpZ24vbWF0aC1zb2x2ZXItYWkvc3JjL2NvbXBvbmVudHMvU2VsZWN0UHJvYmxlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb21wdFdpdGhJbWFnZX0gZnJvbSBcIi4uL0FJXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3RQcm9ibGVtQ29tcG9uZW50KHtcblx0ZmlsZSxcblx0cHJvYmxlbXMsXG5cdHJlc3VsdENhbGxiYWNrLFxuXHRvblN0YXJ0Q2FsbGJhY2ssXG5cdG9uQ2xvc2VDYWxsYmFjayxcbn0pIHtcblx0aWYgKHByb2JsZW1zID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnNvbGUubG9nKHByb2JsZW1zKTtcblxuXHRsZXQgcHJvYmxlbUNvbXBvbmVudHMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9ibGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdHByb2JsZW1Db21wb25lbnRzLnB1c2goXG5cdFx0XHQ8UHJvYmxlbUNvbXBvbmVudFxuXHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdGZpbGU9e2ZpbGV9XG5cdFx0XHRcdHByb2JsZW1MYWJlbD17cHJvYmxlbXNbaV19XG5cdFx0XHRcdG9uU3RhcnRDYWxsYmFjaz17b25TdGFydENhbGxiYWNrfVxuXHRcdFx0XHRyZXN1bHRDYWxsYmFjaz17cmVzdWx0Q2FsbGJhY2t9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRjb2xvcjogXCJ3aGl0ZVwiLFxuXHRcdFx0XHRmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIixcblx0XHRcdFx0Zm9udFNpemU6IDI1LFxuXHRcdFx0XHRtYXhXaWR0aDogXCIxMDAlXCIsXG5cdFx0XHRcdGhlaWdodDogXCIxMDAlXCIsXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdDxoMT5TZWxlY3QgYSBQcm9ibGVtPC9oMT5cblx0XHRcdDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9Pntwcm9ibGVtQ29tcG9uZW50c308L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gUHJvYmxlbUNvbXBvbmVudCh7ZmlsZSwgcHJvYmxlbUxhYmVsLCByZXN1bHRDYWxsYmFjaywgb25TdGFydENhbGxiYWNrfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0b25TdGFydENhbGxiYWNrKCk7XG5cdFx0XHRcdHJlc3VsdENhbGxiYWNrKHByb2JsZW1MYWJlbCk7XG5cdFx0XHRcdC8qcHJvbXB0V2l0aEltYWdlKGZpbGUsIHByb2JsZW1MYWJlbCkudGhlbigocmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0cmVzdWx0Q2FsbGJhY2socmVzdWx0KTtcblx0XHRcdFx0fSk7Ki9cblx0XHRcdH19XG5cdFx0XHRzdHlsZT17c3R5bGVzLnByb2JsZW1MYWJlbEJveH1cblx0XHQ+XG5cdFx0XHQ8aDE+e3Byb2JsZW1MYWJlbH08L2gxPlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG5cdGNvbnRhaW5lcjoge1xuXHRcdC8vZmxleDogMSxcblx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0ZGlzcGxheTogXCJncmlkXCIsXG5cdFx0Ly9mbGV4V3JhcDogXCJ3cmFwXCIsXG5cdFx0Ly9mbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuXHRcdGdyaWRHYXA6IFwiMCVcIixcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcblx0XHQvL2FsaWduSXRlbXM6IFwic3BhY2UtZXZlbmx5XCIsXG5cdFx0Ly9qdXN0aWZ5Q29udGVudDogXCJmbGV4LXN0YXJ0XCIsXG5cdFx0anVzdGlmeUl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyIDFmclwiLFxuXHRcdG92ZXJmbG93OiBcImhpZGRlblwiLFxuXHR9LFxuXHRwcm9ibGVtTGFiZWxCb3g6IHtcblx0XHR3aWR0aDogXCIxMDAlXCIsXG5cdFx0YXNwZWN0UmF0aW86IDEsXG5cdFx0bWFyZ2luQm90dG9tOiBcIjUlXCIsXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiM5MzkzOTNcIixcblx0XHRib3JkZXI6IFwibm9uZVwiLFxuXHR9LFxufTtcbiJdLCJuYW1lcyI6WyJwcm9tcHRXaXRoSW1hZ2UiLCJTZWxlY3RQcm9ibGVtQ29tcG9uZW50IiwiZmlsZSIsInByb2JsZW1zIiwicmVzdWx0Q2FsbGJhY2siLCJvblN0YXJ0Q2FsbGJhY2siLCJvbkNsb3NlQ2FsbGJhY2siLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwicHJvYmxlbUNvbXBvbmVudHMiLCJpIiwibGVuZ3RoIiwicHVzaCIsIlByb2JsZW1Db21wb25lbnQiLCJwcm9ibGVtTGFiZWwiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJoMSIsInN0eWxlcyIsImNvbnRhaW5lciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcm9ibGVtTGFiZWxCb3giLCJ3aWR0aCIsImdyaWRHYXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJqdXN0aWZ5SXRlbXMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwib3ZlcmZsb3ciLCJhc3BlY3RSYXRpbyIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SelectProblem.js\n"));

/***/ })

});